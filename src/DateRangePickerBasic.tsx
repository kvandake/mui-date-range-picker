import React from "react";
import { DateRangePicker, DateRangeProps } from ".";

type BasicPickerPropsWithFooter = DateRangeProps;

export const BasicDateRangePicker = (props: BasicPickerPropsWithFooter) => {
  return <DateRangePicker {...props} />;
};
