import { FontSize } from "@/types/shape";

export function SizeToPx(size: FontSize): number {
  switch (size) {
    case 'sm':
      return 30;
    case 'base':
      return 45;
    case 'md':
      return 66;
    case 'lg':
      return 75;
    default:
      return 45;
  }
}
