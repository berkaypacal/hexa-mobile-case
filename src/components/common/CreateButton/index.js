import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import GradientWrapper from "../GradientWrapper";
import { icons } from "../../../utility/icons";

/**
 * CreateButton Component
 *
 * A gradient call-to-action button using expo-linear-gradient.
 * Includes an icon and label centered horizontally.
 *
 * @component
 * @param {Object} props - Props passed to the component.
 * @param {() => void} props.onPress - Callback function to invoke when the button is pressed.
 *
 * @example
 * <CreateButton onPress={handleSubmit} />
 */
const CreateButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
      <GradientWrapper style={styles.button}>
        <View style={styles.content}>
          <Text style={styles.text}>Create</Text>
          <Image source={icons.star} style={styles.icon} />
        </View>
      </GradientWrapper>
    </TouchableOpacity>
  );
};

export default CreateButton;
