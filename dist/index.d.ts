import * as react_jsx_runtime from 'react/jsx-runtime';
import { PopoverProps } from '@mui/material/Popover';
import { SvgIconProps } from '@mui/material';
import { Locale } from 'date-fns';
import { ElementType } from 'react';

type Marker = symbol;
type DefinedRange = {
    startDate: Date;
    endDate: Date;
    label: string;
};
type DateRange = {
    startDate?: Date;
    endDate?: Date;
};
type RangeSeparatorIconsProps = {
    xs?: ElementType<SvgIconProps>;
    md?: ElementType<SvgIconProps>;
};
type DateRangeProps = {
    initialDateRange?: DateRange;
    definedRanges?: DefinedRange[];
    minDate?: Date | string;
    maxDate?: Date | string;
    locale?: Locale;
    onChange?: (dateRange: DateRange) => void;
    hideDefaultRanges?: boolean;
    hideOutsideMonthDays?: boolean;
};
type ModalCustomProps = {
    onSubmit?: (dateRange: DateRange) => void;
    onCloseCallback?: () => void;
    buttonSize?: "medium" | "large";
    RangeSeparatorIcons?: RangeSeparatorIconsProps;
    hideActionButtons?: boolean;
};

type PickerProps = DateRangeProps & {
    modalProps?: PopoverProps;
    customProps?: ModalCustomProps;
};
type ModalPickerProps = DateRangeProps & {
    modalProps: PopoverProps;
    customProps: ModalCustomProps;
};
type BasicPickerProps = DateRangeProps;

type BasicPickerPropsWithFooter = PickerProps & {
    footerRequired?: boolean;
};
declare const DateRangePicker: (props: BasicPickerPropsWithFooter) => react_jsx_runtime.JSX.Element;

declare const DateRangePickerModal: ({ modalProps, customProps, ...dateRangePickerProps }: ModalPickerProps) => react_jsx_runtime.JSX.Element;

export { type BasicPickerProps, type DateRange, DateRangePicker, DateRangePickerModal, type DateRangeProps, type DefinedRange, type Marker, type ModalCustomProps, type ModalPickerProps, type RangeSeparatorIconsProps };
