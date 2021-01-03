export default function travel(
  steps: string[],
  current: string,
  direction: number
): string {
  if (direction == 0) {
    return current;
  }
  const currentIndex = steps.findIndex((s) => s == current);
  let nextIndex;
  // Forward always goes forward, even if not found
  if (direction > 0 && currentIndex < 0) {
    nextIndex = steps.length - 1;
  } else {
    nextIndex = currentIndex + direction;
    if (nextIndex < 0) {
      nextIndex = 0;
    } else if (nextIndex > steps.length - 1) {
      nextIndex = steps.length - 1;
    }
  }
  return steps[nextIndex];
}
