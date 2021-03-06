import { Easing, floor, runOnJS } from "react-native-reanimated";

export const ITEM_HEIGHT = 100;

export const animationConfig = {
  easing: Easing.inOut,
  duration: 350
}

export const getPosition = (order: number, itemHeight: number) => {
  'worklet';
  return order * itemHeight;
}

export const getOrder = (y: number, itemHeight: number) => {
  'worklet';
  return Math.round(y / itemHeight);
}
