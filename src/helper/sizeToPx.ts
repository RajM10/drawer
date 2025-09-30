import { FontSize } from "@/types/shape";

export function SizeToPx(size: FontSize): number {
  // Use 'md' as the baseline and scale others relatively
  const MD_BASE = 66;
  switch (size) {
    case 'sm':
      return Math.round(MD_BASE * 0.8);
    case 'base':
      return Math.round(MD_BASE * 0.9);
    case 'md':
      return MD_BASE;
    case 'lg':
      return Math.round(MD_BASE * 1.2);
    case 'xl':
      return Math.round(MD_BASE * 1.4);
    case '2xl':
      return Math.round(MD_BASE * 1.6);
    default:
      return MD_BASE;
  }
}
