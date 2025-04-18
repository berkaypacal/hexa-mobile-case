import React, {
  useState,
  useCallback,
  useMemo,
  useContext,
  useRef,
  useEffect,
} from "react";
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Animated,
} from "react-native";
import styles from "./styles";
import StylePicker from "../../components/common/StylePicker";
import PromptInput from "../../components/common/PromptInput";
import GradientBackground from "../../components/common/GradientBackground";
import CreateButton from "../../components/common/CreateButton";
import { images } from "../../constants/images";
import { useGenerateMockImage } from "../../hooks/useGenerateMockImage";
import { useStyleList } from "../../hooks/useStyleList";
import { colors } from "../../theme/colors";
import { dummyData } from "../../constants/dummyData";
import StatusChip from "../../components/common/StatusChip";
import { STATUS } from "../../constants/status.enum";
import { AppContext } from "../../context/AppContext";
import { getStatus } from "../../utility/statusHelper";

const InputScreen = ({ navigation }) => {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("none");

  const { setImageData } = useContext(AppContext);

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
    Keyboard.dismiss();
    mutate({ prompt });
  };

  const handleOutputPress = () => {
    if (data) {
      setImageData({
        imageUrl: data.imageUrl,
        prompt,
        style: selectedStyle,
      });
      navigation.navigate("Output");
    }
  };

  const status = getStatus({ isPending, isError, isSuccess, data });

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (status !== STATUS.IDLE) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      fadeAnim.setValue(0);
    }
  }, [status]);

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
            {status !== STATUS.IDLE && (
              <Animated.View style={{ opacity: fadeAnim }}>
                <StatusChip
                  status={status}
                  onPress={isError ? handleCreate : handleOutputPress}
                  imageUrl={data?.imageUrl}
                />
              </Animated.View>
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
