// src/components/Sections.tsx
import {
  Divider as Divider3,
  FormControl as FormControl2,
  MenuItem as MenuItem2,
  Select as Select2,
  Typography as Typography5,
  alpha as alpha4,
  useTheme as useTheme6
} from "@mui/material";
import { differenceInCalendarMonths } from "date-fns";

// src/components/Sections.DefinedRanges.tsx
import { isSameDay } from "date-fns";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  alpha,
  useTheme
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var isSameRange = (first, second) => {
  const { startDate: fStart, endDate: fEnd } = first;
  const { startDate: sStart, endDate: sEnd } = second;
  if (fStart && sStart && fEnd && sEnd) {
    return isSameDay(fStart, sStart) && isSameDay(fEnd, sEnd);
  }
  return false;
};
var DefinedRanges = ({
  ranges,
  setRange,
  selectedRange
}) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Grid2, { xs: "auto", children: /* @__PURE__ */ jsx(
      Box,
      {
        height: "54px",
        sx: {
          backgroundColor: alpha(theme.palette.grey[400], 0.1)
        }
      }
    ) }),
    /* @__PURE__ */ jsx(Grid2, { xs: true, children: /* @__PURE__ */ jsx(
      List,
      {
        sx: {
          pt: "10px"
        },
        children: ranges.map((range, idx) => /* @__PURE__ */ jsx(
          ListItem,
          {
            disablePadding: true,
            onClick: () => setRange(range),
            sx: [
              isSameRange(range, selectedRange) ? {
                backgroundColor: alpha(theme.palette.grey[600], 0.1)
              } : {}
            ],
            children: /* @__PURE__ */ jsx(
              ListItemButton,
              {
                disableRipple: true,
                dense: true,
                sx: {
                  p: {
                    xs: "8px",
                    md: "12px"
                  },
                  height: "32px",
                  ".mui-tlelie-MuiListItemText-root": {
                    my: 0
                  }
                },
                children: /* @__PURE__ */ jsx(
                  ListItemText,
                  {
                    primaryTypographyProps: {
                      variant: "subtitle2",
                      sx: [
                        isSameRange(range, selectedRange) ? {
                          color: alpha(theme.palette.grey[800], 1)
                        } : {
                          color: alpha(theme.palette.grey[600], 1)
                        },
                        {
                          fontSize: 13,
                          fontWeight: 400
                        }
                      ]
                    },
                    children: range.label
                  }
                )
              }
            )
          },
          idx
        ))
      }
    ) })
  ] });
};
var Sections_DefinedRanges_default = DefinedRanges;

// src/components/Sections.tsx
import Grid28 from "@mui/material/Unstable_Grid2/Grid2";

// src/components/Sections.DuelCalender.tsx
import { isSameMonth as isSameMonth3 } from "date-fns";
import Divider from "@mui/material/Divider";
import Grid24 from "@mui/material/Unstable_Grid2";

// src/components/Month.tsx
import {
  getDate,
  isSameMonth as isSameMonth2,
  isToday,
  format,
  isWithinInterval as isWithinInterval2
} from "date-fns";
import { Typography as Typography3, useTheme as useTheme4, alpha as alpha3 } from "@mui/material";
import Grid23 from "@mui/material/Unstable_Grid2/Grid2";

// src/utils/index.ts
import {
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  isBefore,
  addDays,
  isSameDay as isSameDay2,
  isWithinInterval,
  isSameMonth,
  addMonths,
  parseISO,
  isValid,
  min,
  max
} from "date-fns";
var chunks = (array, size) => Array.from(
  { length: Math.ceil(array.length / size) },
  (_v, i) => array.slice(i * size, i * size + size)
);
var getDaysInMonth = (date, locale) => {
  const startWeek = startOfWeek(startOfMonth(date), { locale });
  const endWeek = endOfWeek(endOfMonth(date), { locale });
  const days = [];
  for (let curr = startWeek; isBefore(curr, endWeek); ) {
    days.push(curr);
    curr = addDays(curr, 1);
  }
  return days;
};
var isStartOfRange = ({ startDate }, day) => startDate && isSameDay2(day, startDate);
var isEndOfRange = ({ endDate }, day) => endDate && isSameDay2(day, endDate);
var inDateRange = ({ startDate, endDate }, day) => startDate && endDate && (isWithinInterval(day, { start: startDate, end: endDate }) || isSameDay2(day, startDate) || isSameDay2(day, endDate));
var isRangeSameDay = ({ startDate, endDate }) => {
  if (startDate && endDate) {
    return isSameDay2(startDate, endDate);
  }
  return false;
};
var parseOptionalDate = (date, defaultValue) => {
  if (date) {
    const parsed = date instanceof Date ? date : parseISO(date);
    if (isValid(parsed))
      return parsed;
  }
  return defaultValue;
};
var getValidatedMonths = (range, minDate, maxDate) => {
  const { startDate, endDate } = range;
  if (startDate && endDate) {
    const newStart = max([startDate, minDate]);
    const newEnd = min([endDate, maxDate]);
    return [
      newStart,
      isSameMonth(newStart, newEnd) ? addMonths(newStart, 1) : newEnd
    ];
  }
  return [startDate, endDate];
};

// src/components/Month.Header.tsx
import { getMonth, getYear, setMonth, setYear } from "date-fns";
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  useTheme as useTheme2,
  Typography
} from "@mui/material";
import Grid22 from "@mui/material/Unstable_Grid2";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

// src/Constants/index.ts
import { addYears, endOfYear, startOfYear } from "date-fns";
var AVAILABLE_MIN_DATE = startOfYear(addYears(/* @__PURE__ */ new Date(), -10));
var AVAILABLE_MAX_DATE = endOfYear(addYears(/* @__PURE__ */ new Date(), 10));

// src/components/Month.Header.tsx
import { Fragment as Fragment2, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var generateYears = ({ start, end }) => {
  const count = end - start + 1;
  return Array(count).fill(0).map((_y, i) => start + i);
};
var MonthHeader = ({
  minDate,
  maxDate,
  currentDate,
  setDate,
  nextDisabled,
  prevDisabled,
  onClickNext,
  onClickPrevious,
  locale
}) => {
  const theme = useTheme2();
  const availableYearRange = {
    start: (minDate || AVAILABLE_MIN_DATE).getFullYear(),
    end: (maxDate || AVAILABLE_MAX_DATE).getFullYear()
  };
  const MONTHS = Array.from(
    { length: 12 },
    (_, index) => typeof locale !== "undefined" ? locale.localize?.month(index, {
      width: "abbreviated",
      context: "standalone"
    }) : [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ][index]
  );
  const handleMonthChange = (event) => {
    setDate(setMonth(currentDate, parseInt(event.target.value, 10)));
  };
  const handleYearChange = (event) => {
    setDate(setYear(currentDate, parseInt(event.target.value, 10)));
  };
  const currentMonth = getMonth(currentDate);
  const currentYear = getYear(currentDate);
  const minYear = getYear(minDate);
  const maxYear = getYear(maxDate);
  const minMonthID = getMonth(minDate);
  const maxMonthID = getMonth(maxDate);
  const isDisabled = (month) => {
    if (currentYear === minYear || currentYear === maxYear) {
      if (currentYear === minYear && month < minMonthID) {
        return true;
      }
      if (currentYear === maxYear && month > maxMonthID) {
        return true;
      }
    }
    return false;
  };
  return /* @__PURE__ */ jsxs2(Fragment2, { children: [
    /* @__PURE__ */ jsx2(Grid22, { xs: "auto", children: /* @__PURE__ */ jsx2(
      IconButton,
      {
        disableRipple: true,
        size: "small",
        color: "secondary",
        className: "Mui-upon-secondary-bg",
        disabled: prevDisabled,
        onClick: onClickPrevious,
        sx: {
          borderRadius: "8px",
          color: theme.palette.grey[600],
          ".MuiSvgIcon-root": {
            color: theme.palette.grey[600]
          },
          "&:hover": {
            backgroundColor: theme.palette.grey[100]
          },
          "&.Mui-disabled": {
            backgroundColor: "transparent"
          },
          "&.Mui-upon-secondary-bg": {
            // backgroundColor: grey[200],
            "&:hover": {
              backgroundColor: theme.palette.grey[200]
            }
          }
        },
        children: /* @__PURE__ */ jsx2(
          KeyboardArrowLeftIcon,
          {
            fontSize: "small",
            sx: {
              fill: prevDisabled ? `${theme.palette.grey[400]}` : "secondary"
            }
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx2(Grid22, { xsOffset: "auto", xs: 4, md: 5, children: /* @__PURE__ */ jsx2(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsx2(
      Select,
      {
        SelectDisplayProps: {
          style: {
            minHeight: "unset"
          }
        },
        variant: "outlined",
        size: "small",
        defaultValue: currentYear,
        IconComponent: (props) => /* @__PURE__ */ jsx2(
          KeyboardArrowDownIcon,
          {
            fontSize: "small",
            sx: {
              fill: theme.palette.grey[400]
            },
            ...props
          }
        ),
        slotProps: {
          root: {
            sx: {
              height: "30px",
              backgroundColor: "#fff"
            }
          }
        },
        MenuProps: {
          disablePortal: true,
          PaperProps: {
            sx: {
              width: "auto",
              maxHeight: "224px",
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            }
          }
        },
        value: currentMonth,
        onChange: handleMonthChange,
        children: MONTHS.map((month, idx) => {
          return /* @__PURE__ */ jsx2(MenuItem, { value: idx, disabled: isDisabled(idx), children: /* @__PURE__ */ jsx2(Typography, { variant: "body2", noWrap: true, children: month }) }, month);
        })
      }
    ) }) }),
    /* @__PURE__ */ jsx2(Grid22, { xsOffset: 0.5, xs: "auto", children: /* @__PURE__ */ jsx2(FormControl, { children: /* @__PURE__ */ jsx2(
      Select,
      {
        variant: "outlined",
        size: "small",
        defaultValue: currentYear,
        SelectDisplayProps: {
          style: {
            minHeight: "unset"
          }
        },
        IconComponent: (props) => /* @__PURE__ */ jsx2(
          KeyboardArrowDownIcon,
          {
            fontSize: "small",
            sx: {
              fill: theme.palette.grey[400]
            },
            ...props
          }
        ),
        slotProps: {
          root: {
            sx: {
              height: "30px",
              backgroundColor: "#fff"
            }
          }
        },
        MenuProps: {
          disablePortal: true,
          PaperProps: {
            sx: {
              width: "auto",
              maxHeight: "224px",
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            }
          }
        },
        value: getYear(currentDate),
        onChange: handleYearChange,
        children: generateYears(availableYearRange).map((year) => {
          return /* @__PURE__ */ jsx2(MenuItem, { value: year, children: /* @__PURE__ */ jsx2(Typography, { variant: "body2", children: year }) }, year);
        })
      }
    ) }) }),
    /* @__PURE__ */ jsx2(Grid22, { xsOffset: "auto", xs: "auto", children: /* @__PURE__ */ jsx2(
      IconButton,
      {
        disableRipple: true,
        size: "small",
        color: "secondary",
        className: "Mui-upon-secondary-bg",
        disabled: nextDisabled,
        onClick: onClickNext,
        sx: {
          borderRadius: "8px",
          color: theme.palette.grey[600],
          ".MuiSvgIcon-root": {
            color: theme.palette.grey[600]
          },
          "&:hover": {
            backgroundColor: theme.palette.grey[100]
          },
          "&.Mui-disabled": {
            backgroundColor: "transparent"
          },
          "&.Mui-upon-secondary-bg": {
            "&:hover": {
              backgroundColor: theme.palette.grey[200]
            }
          }
        },
        children: /* @__PURE__ */ jsx2(
          KeyboardArrowRightIcon,
          {
            fontSize: "small",
            sx: {
              fill: nextDisabled ? `${theme.palette.grey[400]}` : "secondary"
            }
          }
        )
      }
    ) })
  ] });
};
var Month_Header_default = MonthHeader;

// src/components/Day.tsx
import { IconButton as IconButton2, Typography as Typography2, Box as Box2, useTheme as useTheme3, alpha as alpha2 } from "@mui/material";
import { jsx as jsx3 } from "react/jsx-runtime";
var Day = ({
  startOfRange,
  endOfRange,
  disabled,
  hidden,
  highlighted,
  outlined,
  filled,
  onClick,
  onHover,
  value,
  hideOutsideMonthDays = true
}) => {
  const theme = useTheme3();
  return /* @__PURE__ */ jsx3(
    Box2,
    {
      sx: {
        display: "flex",
        borderRadius: startOfRange ? "50% 0 0 50%" : endOfRange ? "0 50% 50% 0" : void 0,
        backgroundColor: !disabled && highlighted ? alpha2(theme.palette.primary.main, 0.1) : void 0
      },
      children: /* @__PURE__ */ jsx3(
        IconButton2,
        {
          disableRipple: true,
          color: "primary",
          sx: {
            ":hover": {
              backgroundColor: alpha2(theme.palette.primary.light, 0.2)
            },
            borderRadius: "8px",
            height: "36px",
            width: "36px",
            padding: 0,
            border: !disabled && outlined ? `1px solid ${theme.palette.primary.main}` : void 0,
            ...!disabled && filled ? {
              "&:hover": {
                backgroundColor: theme.palette.primary.main
              },
              backgroundColor: theme.palette.primary.main
            } : {}
          },
          disabled,
          onClick,
          onMouseOver: onHover,
          children: /* @__PURE__ */ jsx3(
            Typography2,
            {
              sx: {
                lineHeight: 1.6,
                visibility: hidden && hideOutsideMonthDays ? "hidden" : "visible",
                color: !disabled ? filled ? theme.palette.primary.contrastText : theme.palette.text.primary : theme.palette.text.secondary
              },
              variant: "body2",
              children: value
            }
          )
        }
      )
    }
  );
};
var Day_default = Day;

// src/components/Month.tsx
import { Fragment as Fragment3, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Month2 = (props) => {
  const theme = useTheme4();
  const {
    helpers,
    handlers,
    currentDate,
    otherDate,
    dateRange,
    marker,
    setMonth: setMonth2,
    minDate,
    maxDate,
    locale,
    hideOutsideMonthDays
  } = props;
  const weekStartsOn = locale?.options?.weekStartsOn || 0;
  const WEEK_DAYS = Array.from(
    { length: 7 },
    (_, index) => typeof locale !== "undefined" ? locale.localize?.day((index + weekStartsOn) % 7, {
      width: "short",
      context: "standalone"
    }) : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][index]
  );
  const [back, forward] = props.navState;
  return /* @__PURE__ */ jsxs3(Fragment3, { children: [
    /* @__PURE__ */ jsx4(
      Grid23,
      {
        container: true,
        justifyContent: "space-between",
        alignItems: "center",
        px: "10px",
        sx: {
          height: "55px",
          backgroundColor: alpha3(theme.palette.grey[400], 0.1)
        },
        children: /* @__PURE__ */ jsx4(
          Month_Header_default,
          {
            minDate,
            maxDate,
            marker,
            currentDate,
            otherDate,
            setDate: setMonth2,
            nextDisabled: !forward,
            prevDisabled: !back,
            onClickPrevious: () => handlers.handleClickNavIcon(marker, -1 /* Previous */),
            onClickNext: () => handlers.handleClickNavIcon(marker, 1 /* Next */),
            locale
          }
        )
      }
    ),
    /* @__PURE__ */ jsx4(
      Grid23,
      {
        container: true,
        justifyContent: "center",
        sx: {
          margin: "16px 16px 0 16px"
        },
        children: WEEK_DAYS.map((day, index) => /* @__PURE__ */ jsx4(Grid23, { container: true, width: "36px", justifyContent: "center", children: /* @__PURE__ */ jsx4(Typography3, { color: "textSecondary", variant: "caption", children: day }, index) }, index))
      }
    ),
    /* @__PURE__ */ jsx4(
      Grid23,
      {
        container: true,
        direction: "column",
        sx: {
          margin: "16px"
        },
        children: chunks(getDaysInMonth(currentDate, locale), 7).map((week, idx) => /* @__PURE__ */ jsx4(Grid23, { container: true, direction: "row", justifyContent: "center", children: week.map((day) => {
          const isStart = isStartOfRange(dateRange, day);
          const isEnd = isEndOfRange(dateRange, day);
          const isRangeOneDay = isRangeSameDay(dateRange);
          const highlighted = inDateRange(dateRange, day) || helpers.isInHoverRange(day);
          return /* @__PURE__ */ jsx4(
            Day_default,
            {
              filled: isStart || isEnd,
              outlined: isToday(day),
              highlighted: highlighted && !isRangeOneDay,
              disabled: !isSameMonth2(currentDate, day) || !(isWithinInterval2(day, { start: minDate, end: maxDate }) || isStartOfRange(
                {
                  startDate: minDate,
                  endDate: maxDate
                },
                day
              )),
              hidden: !isSameMonth2(currentDate, day),
              hideOutsideMonthDays,
              startOfRange: isStart && !isRangeOneDay,
              endOfRange: isEnd && !isRangeOneDay,
              onClick: () => handlers.handleClickDateNumber(day),
              onHover: () => handlers.handleHoverDateNumber(day),
              value: getDate(day)
            },
            format(day, "dd-MM-yyyy")
          );
        }) }, idx))
      }
    )
  ] });
};
var Month_default = Month2;

// src/Constants/markers.ts
var MARKERS = {
  FIRST_MONTH: Symbol("firstMonth"),
  SECOND_MONTH: Symbol("secondMonth"),
  SINGLE_MONTH: Symbol("singleMonth")
};

// src/components/Sections.DuelCalender.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var DuelCalender = ({
  firstMonth,
  secondMonth,
  handleSetFirstMonth,
  handleSetSecondMonth,
  canNavigateCloser,
  commonProps,
  locale,
  hideOutsideMonthDays
}) => {
  const canNavigateBack = !isSameMonth3(firstMonth, commonProps.minDate);
  const canNavigateForward = !isSameMonth3(secondMonth, commonProps.maxDate);
  return /* @__PURE__ */ jsxs4(
    Grid24,
    {
      xs: 12,
      container: true,
      direction: {
        xs: "column",
        md: "row"
      },
      justifyContent: "center",
      children: [
        /* @__PURE__ */ jsx5(Grid24, { xs: "auto", container: true, direction: "column", children: /* @__PURE__ */ jsx5(
          Month_default,
          {
            ...commonProps,
            currentDate: firstMonth,
            otherDate: secondMonth,
            setMonth: handleSetFirstMonth,
            navState: [canNavigateBack, canNavigateCloser],
            marker: MARKERS.FIRST_MONTH,
            locale,
            hideOutsideMonthDays
          }
        ) }),
        /* @__PURE__ */ jsx5(Grid24, { xs: "auto", children: /* @__PURE__ */ jsx5(Divider, { orientation: "vertical" }) }),
        /* @__PURE__ */ jsx5(Grid24, { xs: "auto", container: true, direction: "column", children: /* @__PURE__ */ jsx5(
          Month_default,
          {
            ...commonProps,
            currentDate: secondMonth,
            otherDate: firstMonth,
            setMonth: handleSetSecondMonth,
            navState: [canNavigateCloser, canNavigateForward],
            marker: MARKERS.SECOND_MONTH,
            locale,
            hideOutsideMonthDays
          }
        ) })
      ]
    }
  );
};

// src/components/Sections.tsx
import { useMemo, useState } from "react";

// src/components/Sections.Footer.tsx
import { format as format2 } from "date-fns";
import { Divider as Divider2, styled as styled2, useTheme as useTheme5 } from "@mui/material";
import Typography4 from "@mui/material/Typography";
import Grid26 from "@mui/material/Unstable_Grid2";

// src/components/Actions.tsx
import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import Grid25 from "@mui/material/Unstable_Grid2";
import { Fragment as Fragment4, jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var CancelButtonStyled = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: 13,
  fontWeight: 400,
  borderRadius: "8px",
  marginRight: "8px",
  color: theme.palette.grey[600],
  "&:hover": {
    backgroundColor: theme.palette.grey[100]
  }
}));
var ApplyButtonStyled = styled(Button)({
  fontSize: 13,
  fontWeight: 400,
  borderRadius: "8px",
  textTransform: "none"
});
var Actions = ({
  buttonSize = "medium",
  onCloseCallback,
  onSubmit
}) => {
  return /* @__PURE__ */ jsxs5(Fragment4, { children: [
    /* @__PURE__ */ jsx6(Grid25, { children: /* @__PURE__ */ jsx6(
      CancelButtonStyled,
      {
        disableRipple: true,
        disableElevation: true,
        variant: "text",
        size: buttonSize,
        onClick: onCloseCallback,
        children: "Cancel"
      }
    ) }),
    /* @__PURE__ */ jsx6(Grid25, { children: /* @__PURE__ */ jsx6(
      ApplyButtonStyled,
      {
        disableRipple: true,
        disableElevation: true,
        type: "submit",
        variant: "contained",
        color: "primary",
        size: buttonSize,
        onClick: onSubmit,
        children: "Apply Range"
      }
    ) })
  ] });
};

// src/components/Sections.Footer.tsx
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Fragment as Fragment5, jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var PreviewDateTypoStyled = styled2(Typography4)(({ theme }) => ({
  position: "relative",
  top: "1px",
  minWidth: "130px",
  fontSize: 14,
  lineHeight: "14px",
  color: theme.palette.grey[800]
}));
var MessageTypoStyled = styled2(Typography4)(({ theme }) => ({
  position: "relative",
  top: "1px",
  fontSize: 14,
  lineHeight: "14px",
  color: theme.palette.grey[500]
}));
var PreviewDateMessageTypoStyled = styled2(Typography4)(({ theme }) => ({
  position: "relative",
  top: "1px",
  minWidth: "130px",
  fontSize: 14,
  lineHeight: "14px",
  color: theme.palette.grey[500]
}));
var Footer = ({
  startDate,
  endDate,
  locale,
  onCloseCallback,
  onSubmit,
  RangeSeparatorIcons
}) => {
  const theme = useTheme5();
  const previewDate = (date) => {
    return format2(date, "dd MMMM yyyy", { locale });
  };
  const IconXs = RangeSeparatorIcons?.xs || KeyboardDoubleArrowDownIcon;
  const IconMd = RangeSeparatorIcons?.md || KeyboardDoubleArrowRightIcon;
  return /* @__PURE__ */ jsxs6(Fragment5, { children: [
    /* @__PURE__ */ jsx7(
      Grid26,
      {
        xs: true,
        container: true,
        gap: "10px",
        direction: {
          xs: "column",
          md: "row"
        },
        justifyContent: {
          xs: "space-between",
          md: "flex-start"
        },
        alignItems: "center",
        minHeight: {
          xs: "auto",
          md: "40px"
        },
        children: startDate || endDate ? /* @__PURE__ */ jsxs6(Fragment5, { children: [
          /* @__PURE__ */ jsx7(
            PreviewDateTypoStyled,
            {
              variant: "body1",
              textAlign: {
                xs: "center",
                md: "left"
              },
              children: startDate ? previewDate(startDate) : "Start Date"
            }
          ),
          /* @__PURE__ */ jsx7(
            IconXs,
            {
              fontSize: "small",
              sx: {
                fill: theme.palette.grey[400],
                display: {
                  xs: "block",
                  md: "none"
                }
              }
            }
          ),
          /* @__PURE__ */ jsx7(
            IconMd,
            {
              fontSize: "small",
              sx: {
                fill: theme.palette.grey[400],
                display: {
                  xs: "none",
                  md: "block"
                }
              }
            }
          ),
          endDate ? /* @__PURE__ */ jsx7(
            PreviewDateTypoStyled,
            {
              variant: "body1",
              textAlign: {
                xs: "center",
                md: "left"
              },
              children: previewDate(endDate)
            }
          ) : /* @__PURE__ */ jsx7(
            PreviewDateMessageTypoStyled,
            {
              variant: "body1",
              textAlign: {
                xs: "center",
                md: "left"
              },
              children: "End Date"
            }
          )
        ] }) : /* @__PURE__ */ jsx7(
          Grid26,
          {
            xs: 12,
            container: true,
            justifyContent: {
              xs: "center",
              md: "flex-start"
            },
            children: /* @__PURE__ */ jsx7(MessageTypoStyled, { variant: "body1", children: "Range not selected" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsx7(
      Grid26,
      {
        display: {
          xs: "block",
          md: "none"
        },
        children: /* @__PURE__ */ jsx7(Divider2, { orientation: "horizontal" })
      }
    ),
    /* @__PURE__ */ jsx7(Grid26, { xs: "auto", container: true, justifyContent: "flex-end", children: /* @__PURE__ */ jsx7(Actions, { onCloseCallback, onSubmit }) })
  ] });
};

// src/components/Sections.tsx
import KeyboardArrowDownIcon2 from "@mui/icons-material/KeyboardArrowDown";

// src/components/Sections.SingleCalender.tsx
import { isSameMonth as isSameMonth4 } from "date-fns";
import Grid27 from "@mui/material/Unstable_Grid2";
import { jsx as jsx8 } from "react/jsx-runtime";
var SingleCalender = ({
  firstMonth,
  secondMonth,
  handleSetSingleMonth,
  commonProps,
  locale,
  hideOutsideMonthDays
}) => {
  const canNavigateBack = !isSameMonth4(firstMonth, commonProps.minDate);
  const canNavigateForward = !isSameMonth4(firstMonth, commonProps.maxDate);
  return /* @__PURE__ */ jsx8(
    Grid27,
    {
      xs: 12,
      container: true,
      direction: {
        xs: "column",
        md: "row"
      },
      justifyContent: "center",
      children: /* @__PURE__ */ jsx8(Grid27, { xs: "auto", container: true, direction: "column", children: /* @__PURE__ */ jsx8(
        Month_default,
        {
          ...commonProps,
          currentDate: firstMonth,
          otherDate: secondMonth,
          setMonth: handleSetSingleMonth,
          navState: [canNavigateBack, canNavigateForward],
          marker: MARKERS.SINGLE_MONTH,
          locale,
          hideOutsideMonthDays
        }
      ) })
    }
  );
};

// src/components/Sections.tsx
import { Fragment as Fragment6, jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var Sections = (props) => {
  const theme = useTheme6();
  const {
    dateRange,
    ranges,
    minDate,
    maxDate,
    firstMonth,
    secondMonth,
    handleSetFirstMonth,
    handleSetSecondMonth,
    handleSetSingleMonth,
    handleClickDefinedRange,
    helpers,
    handlers,
    locale,
    hideActionButtons = false,
    hideDefaultRanges = false,
    hideOutsideMonthDays,
    RangeSeparatorIcons,
    onCloseCallback,
    footerRequired
  } = props;
  const { startDate, endDate } = dateRange;
  const canNavigateCloser = differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
  const commonProps = {
    dateRange,
    minDate,
    maxDate,
    helpers,
    handlers
  };
  const [selectedRange, setSelectedRange] = useState("");
  const [selectedRangeObj, setSelectedRangeObj] = useState(void 0);
  const onChangeSelectedRange = (e) => {
    const selectedRange2 = ranges.find(
      (range) => range.label === e.target.value
    );
    if (selectedRange2) {
      setSelectedRange(selectedRange2.label);
      setSelectedRangeObj(selectedRange2);
      handleClickDefinedRange(selectedRange2);
    }
  };
  const isRangeSameDay2 = (sd1, ed1, sd2, ed2) => {
    return sd1.getDate() === sd2.getDate() && sd1.getMonth() === sd2.getMonth() && sd1.getFullYear() === sd2.getFullYear() && ed1.getDate() === ed2.getDate() && ed1.getMonth() === ed2.getMonth() && ed1.getFullYear() === ed2.getFullYear();
  };
  useMemo(() => {
    if (selectedRangeObj && dateRange.startDate && dateRange.endDate) {
      const { startDate: sd1, endDate: ed1 } = dateRange;
      const { startDate: sd2, endDate: ed2 } = selectedRangeObj;
      if (sd1 && ed1 && sd2 && ed2) {
        if (isRangeSameDay2(sd1, ed1, sd2, ed2)) {
          return;
        }
        setSelectedRange("");
      }
    }
  }, [selectedRangeObj, dateRange]);
  return /* @__PURE__ */ jsxs7(
    Grid28,
    {
      container: true,
      sx: {
        borderRadius: "16px"
      },
      children: [
        /* @__PURE__ */ jsx9(
          Grid28,
          {
            xs: "auto",
            container: true,
            direction: "column",
            className: "DRP-Defined-Ranges",
            display: { xs: "none", md: hideDefaultRanges ? "none" : "flex" },
            children: /* @__PURE__ */ jsx9(
              Sections_DefinedRanges_default,
              {
                selectedRange: dateRange,
                ranges,
                setRange: handleClickDefinedRange
              }
            )
          }
        ),
        /* @__PURE__ */ jsx9(
          Grid28,
          {
            xs: "auto",
            display: { xs: "none", md: hideDefaultRanges ? "none" : "block" },
            children: /* @__PURE__ */ jsx9(Divider3, { orientation: "vertical" })
          }
        ),
        /* @__PURE__ */ jsxs7(Grid28, { xs: true, container: true, direction: "column", children: [
          /* @__PURE__ */ jsx9(
            Grid28,
            {
              display: { xs: hideDefaultRanges ? "none" : "flex", md: "none" },
              container: true,
              height: "54px",
              alignItems: "center",
              px: "10px",
              sx: { backgroundColor: alpha4(theme.palette.grey[400], 0.1) },
              children: /* @__PURE__ */ jsxs7(
                Grid28,
                {
                  xs: 12,
                  container: true,
                  justifyContent: "space-between",
                  alignItems: "center",
                  children: [
                    /* @__PURE__ */ jsx9(Typography5, { variant: "body2", children: "Quick Select" }),
                    /* @__PURE__ */ jsx9(FormControl2, { children: /* @__PURE__ */ jsx9(
                      Select2,
                      {
                        displayEmpty: true,
                        SelectDisplayProps: {
                          style: {
                            minHeight: "unset"
                          }
                        },
                        variant: "outlined",
                        size: "small",
                        IconComponent: (props2) => /* @__PURE__ */ jsx9(
                          KeyboardArrowDownIcon2,
                          {
                            fontSize: "small",
                            sx: {
                              fill: theme.palette.grey[400]
                            },
                            ...props2
                          }
                        ),
                        slotProps: {
                          root: {
                            sx: {
                              height: "30px",
                              backgroundColor: "#fff"
                            }
                          }
                        },
                        MenuProps: {
                          disablePortal: true,
                          PaperProps: {
                            sx: {
                              width: "auto",
                              maxHeight: "224px",
                              boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                            }
                          }
                        },
                        value: selectedRange,
                        onChange: onChangeSelectedRange,
                        children: ranges.map((range) => {
                          return /* @__PURE__ */ jsx9(MenuItem2, { value: range.label, children: /* @__PURE__ */ jsx9(Typography5, { variant: "body2", children: range.label }) }, range.label);
                        })
                      }
                    ) })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsx9(Grid28, { display: { xs: "block", md: "none" }, children: /* @__PURE__ */ jsx9(Divider3, {}) }),
          /* @__PURE__ */ jsx9(Grid28, { container: true, display: { xs: "flex", md: "none" }, children: /* @__PURE__ */ jsx9(
            SingleCalender,
            {
              firstMonth,
              secondMonth,
              handleSetSingleMonth,
              canNavigateCloser,
              commonProps,
              hideOutsideMonthDays
            }
          ) }),
          /* @__PURE__ */ jsx9(Grid28, { flex: 1, display: { xs: "none", md: "flex" }, container: true, children: /* @__PURE__ */ jsx9(
            DuelCalender,
            {
              firstMonth,
              secondMonth,
              handleSetFirstMonth,
              handleSetSecondMonth,
              canNavigateCloser,
              commonProps,
              hideOutsideMonthDays
            }
          ) }),
          footerRequired ? /* @__PURE__ */ jsxs7(Fragment6, { children: [
            /* @__PURE__ */ jsx9(Grid28, { display: hideActionButtons ? "none" : "block", children: /* @__PURE__ */ jsx9(Divider3, {}) }),
            /* @__PURE__ */ jsx9(
              Grid28,
              {
                display: hideActionButtons ? "none" : "flex",
                xs: "auto",
                container: true,
                alignItems: {
                  xs: "normal",
                  md: "center"
                },
                justifyContent: {
                  xs: "center",
                  md: "flex-end"
                },
                direction: {
                  xs: "column",
                  md: "row"
                },
                p: "16px",
                gap: 2,
                children: /* @__PURE__ */ jsx9(
                  Footer,
                  {
                    startDate,
                    endDate,
                    locale,
                    onCloseCallback,
                    onSubmit: handlers.handleClickSubmit,
                    RangeSeparatorIcons
                  }
                )
              }
            )
          ] }) : null
        ] })
      ]
    }
  );
};
var Sections_default = Sections;

// src/hooks/useDateRangePicker.ts
import {
  addMonths as addMonths3,
  isAfter,
  isBefore as isBefore2,
  isSameDay as isSameDay3,
  isSameMonth as isSameMonth5,
  isWithinInterval as isWithinInterval3,
  lastDayOfMonth,
  max as max2,
  min as min2
} from "date-fns";

// src/defaults.ts
import {
  addDays as addDays2,
  startOfWeek as startOfWeek2,
  endOfWeek as endOfWeek2,
  addWeeks,
  startOfMonth as startOfMonth2,
  endOfMonth as endOfMonth2,
  addMonths as addMonths2,
  startOfYear as startOfYear2,
  endOfYear as endOfYear2,
  addYears as addYears2
} from "date-fns";
var getDefaultRanges = (date, locale) => [
  {
    label: "Today",
    startDate: date,
    endDate: date
  },
  {
    label: "Yesterday",
    startDate: addDays2(date, -1),
    endDate: addDays2(date, -1)
  },
  {
    label: "This Week",
    startDate: startOfWeek2(date, { locale }),
    endDate: endOfWeek2(date, { locale })
  },
  {
    label: "Last Week",
    startDate: startOfWeek2(addWeeks(date, -1), { locale }),
    endDate: endOfWeek2(addWeeks(date, -1), { locale })
  },
  {
    label: "Last 7 Days",
    startDate: addWeeks(date, -1),
    endDate: date
  },
  {
    label: "This Month",
    startDate: startOfMonth2(date),
    endDate: endOfMonth2(date)
  },
  {
    label: "Last Month",
    startDate: startOfMonth2(addMonths2(date, -1)),
    endDate: endOfMonth2(addMonths2(date, -1))
  },
  {
    label: "This Year",
    startDate: startOfYear2(date),
    endDate: endOfYear2(date)
  },
  {
    label: "Last Year",
    startDate: startOfYear2(addYears2(date, -1)),
    endDate: endOfYear2(addYears2(date, -1))
  }
];

// src/hooks/useDateRangePicker.ts
import { useState as useState2 } from "react";
var useDateRangePicker = (props) => {
  const today = /* @__PURE__ */ new Date();
  const {
    onChange: onChangeCallback,
    onSubmit: onSubmitCallback,
    initialDateRange,
    minDate,
    maxDate,
    definedRanges = getDefaultRanges(/* @__PURE__ */ new Date(), props.locale),
    locale
  } = props;
  const minValidDate = parseOptionalDate(minDate, AVAILABLE_MIN_DATE);
  const maxValidDate = parseOptionalDate(maxDate, AVAILABLE_MAX_DATE);
  const [initialFirstMonth, initialSecondMonth] = getValidatedMonths(
    initialDateRange || {},
    minValidDate,
    maxValidDate
  );
  const [dateRange, setDateRange] = useState2({
    ...initialDateRange
  });
  const [hoverDay, setHoverDay] = useState2();
  const [firstMonth, setFirstMonth] = useState2(
    initialFirstMonth || today
  );
  const [secondMonth, setSecondMonth] = useState2(
    initialSecondMonth || addMonths3(firstMonth, 1)
  );
  const { startDate, endDate } = dateRange;
  const handleSetFirstMonth = (date) => {
    if (isBefore2(date, secondMonth)) {
      if (isAfter(date, minValidDate)) {
        setFirstMonth(date);
        return;
      } else {
        setFirstMonth(lastDayOfMonth(minValidDate));
        return;
      }
    } else {
      if (isBefore2(addMonths3(date, 1), maxValidDate)) {
        setFirstMonth(date);
        setSecondMonth(addMonths3(date, 1));
        return;
      } else {
        setSecondMonth(maxValidDate);
        setFirstMonth(addMonths3(maxValidDate, -1));
      }
    }
  };
  const handleSetSecondMonth = (date) => {
    if (isAfter(date, firstMonth)) {
      if (isBefore2(date, maxValidDate)) {
        setSecondMonth(date);
        return;
      } else {
        setSecondMonth(lastDayOfMonth(maxValidDate));
        return;
      }
    } else {
      if (isAfter(addMonths3(date, -1), minValidDate)) {
        setSecondMonth(date);
        setFirstMonth(addMonths3(date, -1));
        return;
      } else {
        setFirstMonth(minValidDate);
        setSecondMonth(addMonths3(minValidDate, 1));
      }
    }
  };
  const handleSetSingleMonth = (date) => {
    if (isAfter(date, minValidDate) && isBefore2(date, maxValidDate)) {
      setFirstMonth(date);
      return;
    } else if (isBefore2(date, minValidDate) || isSameDay3(date, minValidDate)) {
      setFirstMonth(minValidDate);
      return;
    } else if (isAfter(date, maxValidDate) || isSameDay3(date, maxValidDate)) {
      setFirstMonth(maxValidDate);
      return;
    }
  };
  const handleClickDefinedRange = (range) => {
    let { startDate: newStart, endDate: newEnd } = range;
    if (newStart && newEnd) {
      range.startDate = newStart = max2([newStart, minValidDate]);
      range.endDate = newEnd = min2([newEnd, maxValidDate]);
      setDateRange(range);
      onChangeCallback && onChangeCallback(range);
      setFirstMonth(newStart);
      setSecondMonth(
        isSameMonth5(newStart, newEnd) ? addMonths3(newStart, 1) : newEnd
      );
    } else {
      setDateRange({});
      onChangeCallback && onChangeCallback({});
      setFirstMonth(today);
      setSecondMonth(addMonths3(firstMonth, 1));
    }
  };
  const handleClickDateNumber = (day) => {
    if (startDate && !endDate && !isBefore2(day, startDate)) {
      const newRange = { startDate, endDate: day };
      onChangeCallback && onChangeCallback(newRange);
      setDateRange(newRange);
    } else {
      setDateRange({ startDate: day, endDate: void 0 });
    }
    setHoverDay(day);
  };
  const handleClickSubmit = () => {
    const { startDate: startDate2, endDate: endDate2 } = dateRange;
    if (onSubmitCallback && startDate2 && endDate2) {
      onSubmitCallback(dateRange);
    }
  };
  const handleClickNavIcon = (marker, action) => {
    if (marker === MARKERS.SINGLE_MONTH) {
      setFirstMonth(addMonths3(firstMonth, action));
      setSecondMonth(addMonths3(secondMonth, action));
      return;
    }
    if (marker === MARKERS.FIRST_MONTH) {
      const firstNew = addMonths3(firstMonth, action);
      if (isBefore2(firstNew, secondMonth))
        setFirstMonth(firstNew);
    } else {
      const secondNew = addMonths3(secondMonth, action);
      if (isBefore2(firstMonth, secondNew))
        setSecondMonth(secondNew);
    }
  };
  const handleHoverDateNumber = (date) => {
    if (startDate && !endDate) {
      if (!hoverDay || !isSameDay3(date, hoverDay)) {
        setHoverDay(date);
      }
    }
  };
  const isInHoverRange = (day) => startDate && !endDate && hoverDay && isAfter(hoverDay, startDate) && isWithinInterval3(day, { start: startDate, end: hoverDay });
  const helpers = {
    isInHoverRange
  };
  const handlers = {
    handleClickDateNumber,
    handleClickSubmit,
    handleClickNavIcon,
    handleHoverDateNumber
  };
  return {
    dateRange,
    ranges: definedRanges,
    minDate: minValidDate,
    maxDate: maxValidDate,
    firstMonth,
    secondMonth,
    handleSetFirstMonth,
    handleSetSecondMonth,
    handleSetSingleMonth,
    handleClickDefinedRange,
    helpers,
    handlers,
    locale
  };
};

// src/DateRangePicker.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var DateRangePicker = (props) => {
  const { customProps, ...dateRangePickerProps } = props;
  const onSubmit = customProps?.onSubmit;
  const { ...computedProps } = useDateRangePicker({
    ...dateRangePickerProps,
    onSubmit
  });
  return /* @__PURE__ */ jsx10(Sections_default, { ...dateRangePickerProps, ...computedProps, ...customProps });
};

// src/DateRangePickerModal.tsx
import Popover from "@mui/material/Popover";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Dialog, useTheme as useTheme7 } from "@mui/material";
import { jsx as jsx11 } from "react/jsx-runtime";
var DateRangePickerModal = ({
  modalProps,
  customProps,
  ...dateRangePickerProps
}) => {
  const theme = useTheme7();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  if (isMobileView) {
    const { open, onClose } = modalProps;
    return /* @__PURE__ */ jsx11(Dialog, { open, onClose, children: /* @__PURE__ */ jsx11(
      DateRangePicker,
      {
        ...dateRangePickerProps,
        customProps,
        footerRequired: true
      }
    ) });
  }
  return /* @__PURE__ */ jsx11(Popover, { ...modalProps, children: /* @__PURE__ */ jsx11(
    DateRangePicker,
    {
      ...dateRangePickerProps,
      customProps,
      footerRequired: true
    }
  ) });
};
export {
  DateRangePicker,
  DateRangePickerModal
};
