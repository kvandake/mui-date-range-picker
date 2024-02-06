import { SvgIconProps } from "@mui/material";
import { Locale } from "date-fns";
import { Dispatch, ElementType, SetStateAction } from "react";

export type Marker = symbol;

export type DefinedRange = {
  startDate: Date;
  endDate: Date;
  label: string;
};

export type DateRange = {
  startDate?: Date;
  endDate?: Date;
};

export type Setter<T> = Dispatch<SetStateAction<T>> | ((value: T) => void);

export enum NavigationAction {
  Previous = -1,
  Next = 1,
}

export type RangeSeparatorIconsProps = {
  xs?: ElementType<SvgIconProps>;
  md?: ElementType<SvgIconProps>;
};

export type DateRangeProps = {
  initialDateRange?: DateRange;
  definedRanges?: DefinedRange[];
  minDate?: Date | string;
  maxDate?: Date | string;
  locale?: Locale;
  onChange?: (dateRange: DateRange) => void;

  hideDefaultRanges?: boolean;
  hideOutsideMonthDays?: boolean;
};

export type ModalCustomProps = {
  onSubmit?: (dateRange: DateRange) => void;
  onCloseCallback?: () => void;
  buttonSize?: "medium" | "large";
  RangeSeparatorIcons?: RangeSeparatorIconsProps;
  hideActionButtons?: boolean;
};
