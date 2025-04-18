import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export default StyleSheet.create({
  safeArea: {
    backgroundColor: colors.dark1000,
  },
  headerContainer: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  centeredContainer: {
    justifyContent: "center",
  },
  title: {
    color: colors.dark50,
    fontWeight: "800",
    fontFamily: "Manrope-ExtraBold",
    flex: 1,
    textAlign: "left",
  },
  centeredTitle: {
    flex: 0,
    textAlign: "center",
  },
  close: {
    color: colors.dark50,
    fontSize: 24,
  },
});
