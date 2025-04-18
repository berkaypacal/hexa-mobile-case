import React, { useContext } from "react";
import { View, Image } from "react-native";
import { AppContext } from "../../context/AppContext";
import styles from "./styles";
import PromptCard from "../../components/common/PromptCard";
import GradientBackground from "../../components/common/GradientBackground";

const OutputScreen = () => {
  const { imageData } = useContext(AppContext);
  const { imageUrl, prompt, style } = imageData;

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.spacing} />
        <PromptCard prompt={prompt} selectedStyle={style} />
      </View>
    </GradientBackground>
  );
};

export default OutputScreen;
