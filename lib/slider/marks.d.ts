import type { FC, ReactNode } from 'react';
import { SliderStyle } from './style';
export type SliderMarks = {
    [key: number]: ReactNode;
};
type MarksProps = {
    marks: SliderMarks;
    max: number;
    min: number;
    upperBound: number;
    lowerBound: number;
    styles: Partial<SliderStyle>;
};
declare const Marks: FC<MarksProps>;
export default Marks;
