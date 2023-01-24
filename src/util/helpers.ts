export interface convertToPercentProps {
  num: number;
  percentMultiplier?: number;
}

export function convertToPercent({
  num,
  percentMultiplier = 1e2,
}: convertToPercentProps) {
  return 100 * (Math.round(num * percentMultiplier) / percentMultiplier);
}
