import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
import { images } from "../../../utility/images";

/**
 * GradientBackground Component
 *
 * A layout wrapper that renders a fixed gradient background image behind all its children.
 * Typically used to provide consistent background visuals across screens.
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Elements to render on top of the background.
 *
 * @example
 * <GradientBackground>
 *   <Text>Hello</Text>
 * </GradientBackground>
 *
 * @returns {JSX.Element} A container with a full-width gradient background and overlaid content.
 */

export default function GradientBackground({ children }) {
  return (
    <View style={styles.wrapper}>
      <Image
        source={images.gradientBackground}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
      {children}
    </View>
  );
}
