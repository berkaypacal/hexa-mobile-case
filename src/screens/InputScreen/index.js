import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import StylePicker from "../../components/common/StylePicker";
import PromptInput from "../../components/common/PromptInput";
import GradientBackground from "../../components/common/GradientBackground";
import CreateButton from "../../components/common/CreateButton";
import { images } from "../../utility/images";
import { useGenerateMockImage } from "../../hooks/useGenerateMockImage";
import { useStyleList } from "../../hooks/useStyleList";
import { colors } from "../../theme/colors";
import { dummyData } from "../../constants/dummyData";
import StatusChip from "../../components/common/StatusChip";
import { getStatus } from "../../utility/statusHelper";

const InputScreen = ({ navigation }) => {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("none");

  const { data: stylesListFromServer, isLoading: stylesLoading } =
    useStyleList();

  const { mutate, isPending, isError, isSuccess, error, data } =
    useGenerateMockImage();

  const stylesList = useMemo(() => {
    return (stylesListFromServer || []).map((style) => ({
      ...style,
      icon: images[style.id] || images.noStyle,
    }));
  }, [stylesListFromServer]);

  const handleSurprise = useCallback(() => {
    const random =
      dummyData.surprisePrompts[
        Math.floor(Math.random() * dummyData.surprisePrompts.length)
      ];
    setPrompt(random);
  }, []);

  const handleCreate = () => {
    mutate({ prompt });
  };

  const handleOutputPress = () => {
    if (data) {
      navigation.navigate("Output", {
        prompt,
        style: selectedStyle,
        imageUrl: data.imageUrl,
      });
    }
  };

  const status = getStatus({ isPending, isError, isSuccess, data });

  if (stylesLoading) {
    return (
      <GradientBackground>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.dark50} />
        </View>
      </GradientBackground>
    );
  }

  return (
    <GradientBackground>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View>
            {status !== "idle" && (
              <StatusChip
                status={status}
                onPress={isError ? handleCreate : handleOutputPress}
                imageUrl={data?.imageUrl}
              />
            )}

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
