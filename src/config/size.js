import { Dimensions } from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;
const uiPageWidth = 750;

export const px = uiPx => uiPx * deviceWidthDp / uiPageWidth;
