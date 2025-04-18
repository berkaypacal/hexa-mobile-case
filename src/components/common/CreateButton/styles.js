import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export default StyleSheet.create({
  buttonWrapper: {
    width: "100%",
    borderRadius: 100,
    overflow: "hidden",
  },
  button: {
    height: 56,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: colors.dark50,
    fontSize: 17,
    fontWeight: "800",
    fontFamily: "Manrope-ExtraBold",
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
});
