/* istanbul ignore file */
/* eslint-disable prettier/prettier */
/** Common Functions used in entire application */
import { Dimensions, PixelRatio } from 'react-native';



// Retrieve initial screen's width
const { height, width } = Dimensions.get('window');
export const wp = (widthPercent:number) => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

export const hp = (heightPercent:number) => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  // if (height > 400 && height < 700) {
  //     return PixelRatio.roundToNearestPixel(height * elemHeight / 100);
  // } else if (height > 700 && height < 800) {
  //     return PixelRatio.roundToNearestPixel(height * (elemHeight) / 100);
  // } else
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
  // if (height > 800 && height < 900) {
  //   return PixelRatio.roundToNearestPixel((height * (elemHeight - 1.1)) / 100);
  // } else {
  //   return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
  // }
};

