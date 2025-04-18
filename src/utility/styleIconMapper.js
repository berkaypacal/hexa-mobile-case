import { images } from "./images";

export const styleIconMapper = {
  none: images.noStyle,
  monogram: images.monogram,
  abstract: images.abstract,
  mascot: images.mascot,
};

export const getIconByStyleId = (id) => styleIconMapper[id] || images.noStyle;
