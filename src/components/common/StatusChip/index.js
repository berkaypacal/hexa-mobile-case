import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons } from "../../../utility/icons";
import styles from "./styles";
import GradientWrapper from "../GradientWrapper";
import { STATUS } from "../../../constants/status";
import { strings } from "../../../constants/strings";
import CircularLoader from "../CustomLoader";

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
      leftContent: <CircularLoader />,
      leftStyle: styles.loadingLeftBlock,
      rightStyle: styles.loadingRightBlock,
      rightContent: (
        <>
          <GradientWrapper style={styles.gradientOverlay} />
          <Text style={styles.title}>{strings.creatingDesign}</Text>
          <Text style={styles.subtitle}>{strings.readyInTwoMinutes}</Text>
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
          <Text style={styles.title}>{strings.errorTitle}</Text>
          <Text style={styles.errorSubtitle}>{strings.errorSubtitle}</Text>
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
          <Text style={styles.title}>{strings.successTitle}</Text>
          <Text style={styles.successSubtitle}>{strings.successSubtitle}</Text>
        </>
      ),
    });
  }

  return null;
};

export default StatusChip;
