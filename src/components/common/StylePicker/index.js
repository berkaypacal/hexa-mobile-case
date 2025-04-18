import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { strings } from "../../../constants/strings";

/**
 * StylePicker Component
 *
 * A horizontal list of selectable logo style options.
 * Each style is represented with an icon and a label. The currently selected style
 * is visually highlighted with a border and bold label.
 * Built with FlatList to support future API-driven dynamic lists.
 *
 * @component
 *
 * @param {Object} props - Props passed to the component.
 * @param {string} props.selectedStyle - ID of the currently selected style.
 * @param {(id: string) => void} props.setSelectedStyle - Callback to update selected style.
 * @param {Array<{ id: string, label: string, icon: any }>} props.stylesList - Array of style options, each with:
 *   - `id`: Unique identifier of the style.
 *   - `label`: Display name for the style.
 *   - `icon`: Image source (require or URI) for the style.
 *
 * @example
 * const stylesList = [
 *   { id: 'monogram', label: 'Monogram', icon: require('...') },
 *   { id: 'abstract', label: 'Abstract', icon: require('...') },
 * ];
 *
 * <StylePicker
 *   selectedStyle={selectedStyle}
 *   setSelectedStyle={setSelectedStyle}
 *   stylesList={stylesList}
 * />
 *
 * @returns {JSX.Element} A styled horizontal scroll list of selectable style cards.
 */

const StylePicker = ({ selectedStyle, setSelectedStyle, stylesList }) => {
  const renderItem = ({ item, index }) => {
    const isSelected = selectedStyle === item.id;
    const isLastItem = index === stylesList.length - 1;

    return (
      <TouchableOpacity
        onPress={() => setSelectedStyle(item.id)}
        style={[styles.cardWrapper, { marginRight: isLastItem ? 0 : 12 }]}
      >
        <Image
          source={item.icon}
          style={[styles.icon, isSelected && styles.selectedBorder]}
        />
        <Text style={[styles.label, isSelected && styles.labelSelected]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={styles.title}>{strings.logoStylesTitle}</Text>

      <View style={styles.list}>
        <FlatList
          data={stylesList}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
};

export default StylePicker;
