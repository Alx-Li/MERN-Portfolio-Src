import { Lato } from "next/font/google";
import localFont from "next/font/local";

// .lato-thin {
//   font-family: "Lato", sans-serif;
//   font-weight: 100;
//   font-style: normal;
// }

// .lato-light {
//   font-family: "Lato", sans-serif;
//   font-weight: 300;
//   font-style: normal;
// }

// .lato-regular {
//   font-family: "Lato", sans-serif;
//   font-weight: 400;
//   font-style: normal;
// }

// .lato-bold {
//   font-family: "Lato", sans-serif;
//   font-weight: 700;
//   font-style: normal;
// }

// .lato-black {
//   font-family: "Lato", sans-serif;
//   font-weight: 900;
//   font-style: normal;
// }

// .lato-thin-italic {
//   font-family: "Lato", sans-serif;
//   font-weight: 100;
//   font-style: italic;
// }

// .lato-light-italic {
//   font-family: "Lato", sans-serif;
//   font-weight: 300;
//   font-style: italic;
// }

// .lato-regular-italic {
//   font-family: "Lato", sans-serif;
//   font-weight: 400;
//   font-style: italic;
// }

// .lato-bold-italic {
//   font-family: "Lato", sans-serif;
//   font-weight: 700;
//   font-style: italic;
// }

// .lato-black-italic {
//   font-family: "Lato", sans-serif;
//   font-weight: 900;
//   font-style: italic;
// }
export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export const aexir = localFont({
  src: "./Aexir.otf",
  display: "swap",
});

export const akira = localFont({
  src: "./Akira Expanded.otf",
  display: "swap",
});

export const kimchi = localFont({
  src: "./Kimchi.otf",
  display: "swap",
});

export const whtpny = localFont({
  src: "./WHTPNY.otf",
  display: "swap",
});

export const whtpnyPX = localFont({
  src: "./WHTPNYPX.otf",
  display: "swap",
});

export const whtpnyLCD = localFont({
  src: "./WHTPNY LCD.otf",
  display: "swap",
});
