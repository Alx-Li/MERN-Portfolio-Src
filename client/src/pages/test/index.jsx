import { Plane } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
const vertexShader = `
attribute vec2 coords;

void main(void) {
  gl_Position = vec4(coords.xy, 0.0, 1.0);
}
`;

const fragmentShader = `
precision mediump float;

uniform vec2 resolution;
uniform int time;
uniform float scale;

// Functions for Perlin Noise
float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

float permute(const in float x) { return mod289(((x * 34.0) + 1.0) * x); }
vec2 permute(const in vec2 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec3 permute(const in vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 permute(const in vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }

float taylorInvSqrt(in float r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 taylorInvSqrt(in vec2 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 taylorInvSqrt(in vec3 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec4 taylorInvSqrt(in vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float quintic(const in float v) { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec2  quintic(const in vec2 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec3  quintic(const in vec3 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec4  quintic(const in vec4 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }

float snoise(in vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                        -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    // First corner
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);

    // Other corners
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;

    i = mod289(i); 
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;

    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float component(vec2 p, float v) {
  float factor = float(time) / 12000.0;
  return 0.5 * v * snoise(vec2(p.x - v * factor, p.y) / v) + 0.25;
}

float stepFn(float value, float step) {
  return floor(value * step) / step;
}

float height(vec2 p) {
  return stepFn(
    (component(p, 1.0) +
    component(p, 0.5) +
    component(p, 0.25) +
    component(p, 0.125)) /
    (1.0 + 0.5 + 0.25 + 0.125),
    10.0
  );
}

float detectEdge(vec2 p, float threshold) {
  float h = height(p);
  float h1 = height(p + vec2(threshold, 0.0));
  float h2 = height(p + vec2(0.0, threshold));

  float dh1 = abs(h - h1);
  float dh2 = abs(h - h2);

  if (dh1 > threshold || dh2 > threshold) {
    return 1.0;
  }

  return 0.0;
}

void main(void) {
  vec2 xy = gl_FragCoord.xy / 100.0 / scale;

  float height = 1.0 - detectEdge(xy, 0.015);

  gl_FragColor = vec4(vec3(height), 1.0);
}
`;

const AltitudeBackground = () => {
  const mesh = useRef();
  const startTime = useRef(Date.now());

  useFrame(({ gl }) => {
    const elapsedTime = Date.now() - startTime.current;
    mesh.current.material.uniforms.time.value = elapsedTime;
    gl.setSize(window.innerWidth, window.innerHeight);
  });

  useEffect(() => {
    const handleResize = () => {
      mesh.current.material.uniforms.resolution.value = new THREE.Vector2(
        window.innerWidth,
        window.innerHeight
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <mesh ref={mesh}>
      <Plane args={[2, 2]} />
      <shaderMaterial
        uniforms={{
          resolution: {
            value: new THREE.Vector2(window.innerWidth, window.innerHeight),
          },
          time: { value: 0 },
          scale: { value: window.devicePixelRatio },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

const App = () => {
  return <></>;
};

export default App;
