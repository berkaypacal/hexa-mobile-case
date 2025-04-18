import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../theme/colors";

/**
 * GradientWrapper Component
 *
 * A reusable linear gradient wrapper with optional child content and customizable colors.
 * Can be used standalone or with children.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} [props.children] - Optional content to render inside the gradient.
 * @param {Object} [props.style] - Optional custom styles for the gradient.
 * @param {string[]} [props.colors] - Gradient colors (default: blue → purple).
 * @param {Object} [props.start] - Start point of gradient (default: horizontal left).
 * @param {Object} [props.end] - End point of gradient (default: horizontal right).
 *
 * @example
 * <GradientWrapper style={{ height: 100 }} />
 *
 * @example
 * <GradientWrapper style={{ borderRadius: 12 }}>
 *   <Text>Hello</Text>
 * </GradientWrapper>
 */
const GradientWrapper = ({
  children = null,
  style = {},
  colors: customColors,
  start = { x: 0, y: 0.5 },
  end = { x: 1, y: 0.5 },
}) => {
  const defaultColors = [colors.blue, colors.purple];

  return (
    <LinearGradient
      colors={customColors || defaultColors}
      start={start}
      end={end}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientWrapper;
