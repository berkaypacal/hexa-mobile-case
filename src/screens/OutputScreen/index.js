import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import GradientBackground from "../../components/common/GradientBackground";

export default function OutputScreen() {
  return (
    <GradientBackground>
      <View>
        <Text>OutputScreen</Text>
      </View>
    </GradientBackground>
  );
}
