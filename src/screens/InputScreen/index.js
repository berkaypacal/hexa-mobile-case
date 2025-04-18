import React, { useState, useCallback } from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import StylePicker from "../../components/common/StylePicker";
import PromptInput from "../../components/common/PromptInput";
import GradientBackground from "../../components/common/GradientBackground";
import CreateButton from "../../components/common/CreateButton";
import { images } from "../../utility/images";

const surprisePrompts = [
  "A blue lion logo reading 'HEXA' in bold letters",
  "A minimal sun logo with soft gradients",
  "A pixel art alien wearing sunglasses",
];

const stylesList = [
  {
    id: "none",
    label: "No Style",
    icon: images.noStyle,
  },
  {
    id: "monogram",
    label: "Monogram",
    icon: images.monogram,
  },
  {
    id: "abstract",
    label: "Abstract",
    icon: images.abstract,
  },
  {
    id: "mascot",
    label: "Mascot",
    icon: images.mascot,
  },
];

const InputScreen = ({ navigation }) => {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("none");

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
            <StylePicker
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
              stylesList={stylesList}
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
