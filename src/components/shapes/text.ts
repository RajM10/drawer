import { SizeToPx } from '@/helper/sizeToPx';
import { drawSelectedHelper } from './transform/selectionHelper';
import { Text } from '@/types/shape';

export function drawText(
  ctx: CanvasRenderingContext2D,
  text: Text,
  x: number,
  y: number,
  isSelected: boolean = false,
  width: number,
  height: number
) {
  ctx.font = `${SizeToPx(text.fontSize)}px ${text.fontFamily}`;
  // ctx.font = `24px ${text.fontFamily}'`;
  ctx.fillStyle = ctx.strokeStyle; // Use the same color as other shapes
  ctx.textBaseline = 'middle';
  // Set alignment
  const align = text.align || 'left';
  ctx.textAlign = align as CanvasTextAlign;
  if (isSelected) {
    drawSelectedHelper(ctx, x, y, width, height);
  }
  ctx.beginPath();
  text.value.split('\n').forEach((line, index) => {
    const lineHeight = SizeToPx(text.fontSize) * 1.2; // Adjust line height as needed
    let drawX = x;
    if (align === 'center') {
      drawX = x + width / 2;
    } else if (align === 'right') {
      drawX = x + width;
    }
    ctx.fillText(line, drawX, y + index * lineHeight);
  });
  ctx.closePath();
}
