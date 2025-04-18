import React, { useState, useCallback } from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import PromptInput from "../../components/common/PromptInput";
import GradientBackground from "../../components/common/GradientBackground";
import CreateButton from "../../components/common/CreateButton";
import { images } from "../../utility/images";

const surprisePrompts = [
  "A blue lion logo reading 'HEXA' in bold letters",
  "A minimal sun logo with soft gradients",
  "A pixel art alien wearing sunglasses",
];

const InputScreen = ({ navigation }) => {
  const [prompt, setPrompt] = useState("");

  const handleSurprise = useCallback(() => {
    const random =
      surprisePrompts[Math.floor(Math.random() * surprisePrompts.length)];
    setPrompt(random);
  }, []);

  const handleCreate = () => {
    navigation.navigate("Output", {
      prompt,
      style: selectedStyle,
      imageUrl: "https://picsum.photos/300/300",
    });
  };

  return (
    <GradientBackground>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={[styles.container]}>
          <View>
            <PromptInput
              prompt={prompt}
              setPrompt={setPrompt}
              onSurprisePress={handleSurprise}
            />
          </View>
          <View style={styles.createButton}>
            <CreateButton onPress={handleCreate} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </GradientBackground>
  );
};

export default InputScreen;
