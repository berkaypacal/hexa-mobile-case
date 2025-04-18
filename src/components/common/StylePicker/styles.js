import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export default StyleSheet.create({
  title: {
    color: colors.dark50,
    fontWeight: "800",
    fontSize: 20,
    fontFamily: "Manrope-ExtraBold",
    marginBottom: 12,
  },
  cardWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 90,
    height: 90,
    borderRadius: 16,
    marginBottom: 8,
  },
  selectedBorder: {
    borderWidth: 2,
    borderColor: colors.dark50,
  },
  label: {
    fontSize: 13,
    fontWeight: "400",
    fontFamily: "Manrope",
    color: colors.dark500,
    textAlign: "center",
  },
  labelSelected: {
    fontWeight: "700",
    fontFamily: "Manrope-Bold",
    color: colors.dark50,
  },
  list: {
    marginHorizontal: -24,
  },
  listContent: {
    paddingLeft: 24,
    paddingRight: 24,
  },
});
