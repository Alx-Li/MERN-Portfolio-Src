import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import classes from "./TextScrollv2.module.scss";
import { wrap } from "@motionone/utils";

// https://www.framer.com/motion/scroll-animations/#scroll-velocity
function TextScrollv2({
  baseVelocity = 100,
  autoScroll = false,
  scrollSpeedFactor = 0.05, // Add a prop to control scroll speed
  direction = 1,
  interactive = false,
  children,
  className,
  wrapStart = -20,
  wrapEnd = -45,
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(wrapStart, wrapEnd, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = 0;

    // Add movement based on scroll velocity, scaled down by scrollSpeedFactor
    if (interactive) {
      moveBy += direction * velocityFactor.get() * scrollSpeedFactor;
    }

    // Add auto-scrolling movement if enabled
    if (autoScroll) {
      moveBy += direction * baseVelocity * (delta / 1000);
    }

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className={classes.parallax}>
      <motion.div className={className} style={{ x }}>
        {children}
      </motion.div>
    </div>
  );
}

export default TextScrollv2;
