import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export default StyleSheet.create({
  wrapper: {
    marginBottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    color: colors.dark50,
    fontWeight: "800",
    fontSize: 20,
    fontFamily: "Manrope-ExtraBold",
  },
  surpriseText: {
    color: colors.dark50,
    fontSize: 13,
    fontWeight: "400",
    fontFamily: "Manrope",
  },
  surpriseWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  diceIcon: {
    width: 13,
    height: 13,
    resizeMode: "contain",
  },
  inputWrapper: {
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: colors.dark600,
    height: 175,
    padding: 12,
    paddingBottom: 28,
    position: "relative",
    overflow: "hidden",
  },
  inputWrapperFocused: {
    borderColor: colors.dark50,
  },
  inputWrapperBlurred: {
    borderColor: "transparent",
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.05,
    borderRadius: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Manrope",
    textAlignVertical: "top",
  },
  counterWrapper: {
    position: "absolute",
    bottom: 12,
    left: 12,
  },
  counterText: {
    fontSize: 11,
    fontWeight: "400",
    fontFamily: "Manrope",
    color: colors.dark500,
  },
});
