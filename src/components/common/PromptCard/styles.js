import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export default StyleSheet.create({
  card: {
    backgroundColor: colors.dark600,
    borderRadius: 12,
    padding: 12,
    overflow: "hidden",
    position: "relative",
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.05,
    borderRadius: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    alignItems: "center",
  },
  label: {
    fontWeight: "700",
    fontSize: 15,
    fontFamily: "Manrope-Bold",
    color: colors.dark50,
  },
  copyWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  copyIcon: {
    width: 16,
    height: 16,
    tintColor: colors.dark400,
  },
  copyText: {
    color: colors.dark400,
    fontSize: 11,
    fontWeight: "400",
    fontFamily: "Manrope",
  },
  promptText: {
    color: colors.dark50,
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Manrope",
    marginBottom: 12,
  },
  styleChip: {
    backgroundColor: "rgba(250, 250, 250, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
    alignSelf: "flex-start",
  },
  styleChipText: {
    color: colors.dark50,
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Manrope",
  },
});
