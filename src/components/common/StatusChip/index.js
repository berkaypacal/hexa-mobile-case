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
 * Visually represents the status of the image generation process.
 * Displays one of three states: loading (spinner), error (alert icon with retry),
 * or success (generated image with navigation).
 *
 * Each state consists of a left icon/image and a right description section.
 * The right section may optionally include a gradient overlay.
 *
 * - LOADING: Shows a custom spinning loader and text "Creating Your Design...".
 * - ERROR: Shows an alert icon and error message with retry capability.
 * - SUCCESS: Displays the generated image and a success message with navigation.
 *
 * @component
 *
 * @param {Object} props - Props for the component.
 * @param {('loading'|'error'|'success')} props.status - The current status of generation (from STATUS enum).
 * @param {Function} props.onPress - Called when the component is pressed (retry or view result).
 * @param {string} [props.imageUrl] - URL of the generated image (only required for success state).
 *
 * @example
 * <StatusChip status={STATUS.LOADING} />
 * <StatusChip status={STATUS.ERROR} onPress={handleRetry} />
 * <StatusChip status={STATUS.SUCCESS} imageUrl={url} onPress={handleNavigate} />
 *
 * @returns {JSX.Element | null} A UI card based on the status.
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
