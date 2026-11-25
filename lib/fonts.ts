import { JetBrains_Mono } from "next/font/google";

// JetBrains Mono is used in two independent places:
//   - the heading font, via the --font-jetbrains-mono variable (app/layout.tsx)
//   - the homepage glyph animation (sections/home/HomeHeroGlyphPulse.tsx)
// Both import it from here, so changing the heading font in the layout leaves
// the animation on JetBrains Mono.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
