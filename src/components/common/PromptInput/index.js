import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { colors } from "../../../theme/colors";
import GradientWrapper from "../GradientWrapper";
import { icons } from "../../../utility/icons";
import { strings } from "../../../constants/strings";

/**
 * PromptInput Component
 *
 * A reusable input field component designed for collecting user prompts
 * with optional surprise generation support. Includes a live character counter
 * and handles UI states such as focus, max length, and dynamic coloring.
 *
 * @component
 *
 * @param {Object} props - Props passed to the component.
 * @param {string} props.prompt - The current prompt value.
 * @param {function} props.setPrompt - Function to update the prompt state.
 * @param {function} props.onSurprisePress - Function to be called when the "Surprise me" button is pressed.
 *
 * @returns {JSX.Element} A styled text input with title, surprise button, and character counter.
 */

const PromptInput = ({ prompt, setPrompt, onSurprisePress }) => {
  const [focused, setFocused] = useState(false);
  const isEmpty = prompt.trim().length === 0;

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>{strings.enterPromptTitle}</Text>
        <TouchableOpacity
          onPress={onSurprisePress}
          style={styles.surpriseWrapper}
        >
          <Image source={icons.dice} style={styles.diceIcon} />
          <Text style={styles.surpriseText}>{strings.surpriseMe}</Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.inputWrapper,
          focused ? styles.inputWrapperFocused : styles.inputWrapperBlurred,
        ]}
      >
        <GradientWrapper style={styles.gradientOverlay} />

        <TextInput
          placeholder={strings.placeholderText}
          placeholderTextColor={colors.dark500}
          multiline
          scrollEnabled
          maxLength={500}
          value={prompt}
          onChangeText={setPrompt}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          cursorColor={colors.dark50}
          style={[
            styles.input,
            { color: isEmpty ? colors.dark500 : colors.dark50 },
          ]}
        />
        <View style={styles.counterWrapper}>
          <Text style={styles.counterText}>{prompt.length}/500</Text>
        </View>
      </View>
    </View>
  );
};

export default PromptInput;
