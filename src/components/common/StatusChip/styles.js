import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export default StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    height: 70,
    borderRadius: 16,
    marginBottom: 24,
    overflow: "hidden",
  },
  leftBlock: {
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  rightBlock: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 12,
    position: "relative",
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  loadingLeftBlock: {
    backgroundColor: colors.dark,
  },
  loadingRightBlock: {
    backgroundColor: colors.dark600,
  },
  errorLeftBlock: {
    backgroundColor: colors.red + "B2",
  },
  errorRightBlock: {
    backgroundColor: colors.red,
  },
  successLeftBlock: {
    backgroundColor: colors.white,
  },
  successRightBlock: {
    backgroundColor: "transparent",
  },
  successImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    resizeMode: "contain",
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.05,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  successGradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 1,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  icon: {
    width: 32,
    height: 32,
  },
  title: {
    color: colors.dark50,
    fontSize: 16,
    fontWeight: "800",
    fontFamily: "Manrope-ExtraBold",
  },
  subtitle: {
    color: colors.dark500,
    fontSize: 13,
    marginTop: 4,
    fontWeight: "500",
    fontFamily: "Manrope",
  },
  errorSubtitle: {
    color: colors.dark300,
    fontSize: 13,
    marginTop: 4,
    fontWeight: "500",
    fontFamily: "Manrope",
  },
  successSubtitle: {
    color: colors.dark300,
    fontSize: 13,
    marginTop: 4,
    fontWeight: "500",
    fontFamily: "Manrope",
  },
});
