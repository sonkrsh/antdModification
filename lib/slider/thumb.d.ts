import type { FC, ReactNode } from 'react';
import { LayoutRectangle, StyleProp, ViewStyle } from 'react-native';
import { SliderStyle } from './style';
type ThumbProps = {
    value: number;
    min: number;
    max: number;
    disabled: boolean;
    trackLayout?: LayoutRectangle;
    onDrag: (value: number, last?: boolean) => void;
    icon?: ReactNode;
    popover: boolean | ((value: number) => ReactNode);
    residentPopover: boolean;
    style?: StyleProp<ViewStyle>;
    styles: Partial<SliderStyle>;
};
declare const Thumb: FC<ThumbProps>;
export default Thumb;
