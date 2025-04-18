import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { colors } from "../../../theme/colors";
import GradientWrapper from "../GradientWrapper";
import { icons } from "../../../constants/icons";
import { strings } from "../../../constants/strings";

/**
 * PromptInput Component
 *
 * A reusable styled input field for collecting text-based prompts from users.
 * Displays a title, a "Surprise me" button to autofill sample prompts, and a
 * multiline input field with a live character counter.
 *
 * The component handles focus state for visual styling and applies a gradient
 * overlay behind the text input for enhanced aesthetics.
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {string} props.prompt - The current prompt input value.
 * @param {function(string): void} props.setPrompt - Callback to update the prompt state.
 * @param {function(): void} props.onSurprisePress - Called when "Surprise me" is pressed.
 *
 * @example
 * <PromptInput
 *   prompt={prompt}
 *   setPrompt={setPrompt}
 *   onSurprisePress={handleSurprise}
 * />
 *
 * @returns {JSX.Element} Rendered prompt input component.
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
