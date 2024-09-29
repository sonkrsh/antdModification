import type { FC } from 'react';
import { SliderStyle } from './style';
type TicksProps = {
    points: number[];
    max: number;
    min: number;
    upperBound: number;
    lowerBound: number;
    styles: Partial<SliderStyle>;
};
declare const Ticks: FC<TicksProps>;
export default Ticks;
