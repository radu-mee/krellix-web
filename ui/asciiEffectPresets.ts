import type { AsciiEffectType } from "@/ui/AsciiEffectDemo";

export interface AsciiEffectPreset {
  label: string;
  effect: AsciiEffectType;
}

export const ASCII_EFFECT_PRESETS: AsciiEffectPreset[] = [
  { label: "Wave Field", effect: "waveField" },
  { label: "Noise Cloud", effect: "noiseCloud" },
  { label: "Pulse Grid", effect: "pulseGrid" },
  { label: "Topographic", effect: "topographic" },
  { label: "Particle Swarm", effect: "particleSwarm" },
];

export const ADDITIONAL_ASCII_EFFECT_PRESETS: AsciiEffectPreset[] =
  ASCII_EFFECT_PRESETS.filter((preset) => preset.effect !== "waveField");