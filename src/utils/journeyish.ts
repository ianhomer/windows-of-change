export function travel(
  steps: string[],
  current: string,
  direction: number
): string {
  if (direction == 0) {
    return current;
  } else if (!current) {
    return steps[0];
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

export const transition = (
  positions: number,
  setPosition: (setter: (position: number) => number) => void
) => (direction: number): boolean => {
  let changed = false;
  setPosition((position: number) => {
    const nextPosition = position + direction;
    changed = nextPosition > -1 && nextPosition < positions;
    return changed ? nextPosition : position;
  });
  return changed;
};
