import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { SwitchPropsType } from './PropsType';
import { SwitchStyle } from './style/index';
export interface SwitchProps extends SwitchPropsType, WithThemeStyles<SwitchStyle> {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}
declare const AntmSwitch: {
    (props: SwitchProps): JSX.Element;
    displayName: string;
};
export default AntmSwitch;