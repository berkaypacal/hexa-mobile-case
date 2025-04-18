import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import Svg, { Circle } from "react-native-svg";

const size = 24;
const strokeWidth = 3;
const radius = (size - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

/**
 * CircularLoader Component
 *
 * A minimal and animated circular loading spinner built with `react-native-svg`.
 * The spinner consists of a semi-circle that rotates continuously to indicate loading.
 *
 * This component is lightweight and compatible with Expo.
 *
 * @component
 * @example
 * <CircularLoader />
 *
 * @returns {JSX.Element} A spinning circular loader.
 */
const CircularLoader = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }}>
      <Svg width={size} height={size}>
        <Circle
          stroke="white"
          fill="transparent"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference / 2}, ${circumference}`}
        />
      </Svg>
    </Animated.View>
  );
};

export default CircularLoader;
