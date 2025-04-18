import React from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { icons } from "../../../utility/icons";
import styles from "./styles";
import GradientWrapper from "../GradientWrapper";
import { STATUS } from "../../../constants/status";

/**
 * StatusChip Component
 *
 * Displays dynamic visual feedback for image generation status.
 *
 * @param {Object} props
 * @param {string} props.status - One of GENERATION_STATUS.LOADING | ERROR | SUCCESS
 * @param {Function} props.onPress - Action when chip is tapped (retry or navigate)
 * @param {string} [props.imageUrl] - URL for the generated image (only for success)
 */
const StatusChip = ({ status, onPress, imageUrl }) => {
  const renderContent = ({
    leftContent,
    leftStyle,
    rightContent,
    rightStyle,
    Wrapper = View,
  }) => (
    <Wrapper style={styles.card} onPress={onPress}>
      <View style={[styles.leftBlock, leftStyle]}>{leftContent}</View>
      <View style={[styles.rightBlock, rightStyle]}>{rightContent}</View>
    </Wrapper>
  );

  if (status === STATUS.LOADING) {
    return renderContent({
      leftContent: <ActivityIndicator size="small" color="white" />,
      leftStyle: styles.loadingLeftBlock,
      rightStyle: styles.loadingRightBlock,
      rightContent: (
        <>
          <GradientWrapper style={styles.gradientOverlay} />
          <Text style={styles.title}>Creating Your Design...</Text>
          <Text style={styles.subtitle}>Ready in 2 minutes</Text>
        </>
      ),
    });
  }

  if (status === STATUS.ERROR) {
    return renderContent({
      Wrapper: TouchableOpacity,
      leftContent: <Image source={icons.alert} style={styles.icon} />,
      leftStyle: styles.errorLeftBlock,
      rightStyle: styles.errorRightBlock,
      rightContent: (
        <>
          <Text style={styles.title}>Oops, something went wrong!</Text>
          <Text style={styles.errorSubtitle}>Click to try again.</Text>
        </>
      ),
    });
  }

  if (status === STATUS.SUCCESS) {
    return renderContent({
      Wrapper: TouchableOpacity,
      leftContent: (
        <Image source={{ uri: imageUrl }} style={styles.successImage} />
      ),
      leftStyle: styles.successLeftBlock,
      rightStyle: styles.successRightBlock,
      rightContent: (
        <>
          <GradientWrapper style={styles.successGradientOverlay} />
          <Text style={styles.title}>Your Design is Ready!</Text>
          <Text style={styles.successSubtitle}>Tap to see it.</Text>
        </>
      ),
    });
  }

  return null;
};

export default StatusChip;
