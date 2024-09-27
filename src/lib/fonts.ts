import { Instrument_Sans, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const neueHaasDisplay = localFont({
  src: [
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayBlack.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayBlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayMediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayRomanItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayLightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayThin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayThinItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayXThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayXThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayXXThin.ttf",
      weight: "50",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayXXThinItalic.ttf",
      weight: "50",
      style: "italic",
    },
  ],
  variable: "--font-neue-haas-display",
});

export { instrumentSans, neueHaasDisplay, plusJakartaSans };
