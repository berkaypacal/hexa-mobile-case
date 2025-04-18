import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as Clipboard from "expo-clipboard";
import styles from "./styles";
import GradientWrapper from "../GradientWrapper";
import { icons } from "../../../utility/icons";
import { strings } from "../../../constants/strings";

/**
 * PromptCard Component
 *
 * A UI component that displays the user's prompt inside a styled card with a gradient overlay.
 * Includes a label, copy-to-clipboard button, truncated prompt preview, and a static style chip.
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {string} props.prompt - The prompt text entered by the user to be displayed and copied.
 *
 * @example
 * <PromptCard prompt="A bold logo for HEXA with a futuristic touch" />
 *
 * @returns {JSX.Element} A styled card showing the prompt with a copy button and style tag.
 */

const PromptCard = ({ prompt }) => {
  const handleCopy = () => {
    Clipboard.setStringAsync(prompt);
  };

  return (
    <View style={styles.card}>
      <GradientWrapper style={styles.gradientOverlay} />
      <View style={styles.row}>
        <Text style={styles.label}>{strings.promptLabel}</Text>

        <TouchableOpacity style={styles.copyWrapper} onPress={handleCopy}>
          <Image source={icons.copy} style={styles.copyIcon} />
          <Text style={styles.copyText}>{strings.copy}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.promptText} numberOfLines={4} ellipsizeMode="tail">
        {prompt}
      </Text>

      <View style={styles.styleChip}>
        <Text style={styles.styleChipText}>{strings.monogramStyle}</Text>
      </View>
    </View>
  );
};

export default PromptCard;
