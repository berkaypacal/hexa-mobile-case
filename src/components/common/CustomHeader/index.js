import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

/**
 * CustomHeader Component
 *
 * A flexible header component designed for screen topbars.
 * Supports centered titles and an optional close (✕) button.
 * Intended to be used inside navigation screens for consistent layout and styling.
 *
 * @component
 *
 * @param {Object} props - Props passed to the component.
 * @param {string} props.title - Title text displayed in the header.
 * @param {() => void} [props.onClose] - Optional callback function invoked when the close button is pressed.
 * @param {boolean} [props.center=false] - If true, centers the title text horizontally.
 * @param {number} [props.fontSize=17] - Optional font size for the title text.
 *
 * @example
 * <CustomHeader title="Generated Logo" onClose={() => navigation.goBack()} />
 *
 * @example
 * <CustomHeader title="AI Logo" center fontSize={20} />
 *
 * @returns {JSX.Element} A styled header with optional close button and title alignment control.
 */

export default function CustomHeader({
  title,
  onClose,
  center = false,
  fontSize = 17,
}) {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View
        style={[styles.headerContainer, center && styles.centeredContainer]}
      >
        <Text
          style={[styles.title, { fontSize }, center && styles.centeredTitle]}
        >
          {title}
        </Text>
        {onClose && (
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.close}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
