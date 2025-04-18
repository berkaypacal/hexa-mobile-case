import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import PromptCard from "../../components/common/PromptCard";
import GradientBackground from "../../components/common/GradientBackground";

const OutputScreen = ({ route }) => {
  const { imageUrl, prompt } = route.params;

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.spacing} />
        <PromptCard prompt={prompt} />
      </View>
    </GradientBackground>
  );
};

export default OutputScreen;
