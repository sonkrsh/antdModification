import type { ReactNode } from 'react';
import { PickerColumn } from '../picker-view/PropsType';
import type { DatePickerFilter } from './date-picker-utils';
export type WeekPrecision = 'year' | 'week' | 'week-day';
export declare function generateDatePickerColumns(selected: string[], min: Date, max: Date, precision: WeekPrecision, renderLabel: (type: WeekPrecision, data: number) => ReactNode, filter: DatePickerFilter | undefined): PickerColumn[];
export declare function convertDateToStringArray(date: Date | undefined | null): string[];
export declare function convertStringArrayToDate<T extends string | number | null | undefined>(value: T[]): Date;
