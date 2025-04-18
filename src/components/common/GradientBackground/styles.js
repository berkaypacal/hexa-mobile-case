import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "relative",
    backgroundColor: colors.dark1000,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width,
    height,
    zIndex: 0,
    opacity: 1,
  },
});
