import type { SkPath } from "@shopify/react-native-skia";

export const inputRange = [0, 0.5, 1];

export const interpolatePaths = (
  value: number,
  input: number[],
  outputRange: SkPath[]
) => {
  let i = 0;
  for (; i <= input.length - 1; i++) {
    if (value >= input[i] && value <= input[i + 1]) {
      break;
    }
    if (i === input.length - 1) {
      return outputRange[i];
    }
  }
  const t = (value - input[i]) / (input[i + 1] - input[i]);
  return outputRange[i + 1].interpolate(outputRange[i], t);
};
