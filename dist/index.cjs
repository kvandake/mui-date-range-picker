var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DateRangePicker: () => DateRangePicker,
  DateRangePickerModal: () => DateRangePickerModal
});
module.exports = __toCommonJS(src_exports);

// src/DateRangePicker.tsx
var import_react6 = __toESM(require("react"), 1);

// src/components/Sections.tsx
var import_material7 = require("@mui/material");
var import_date_fns9 = require("date-fns");

// src/components/Sections.DefinedRanges.tsx
var import_react = __toESM(require("react"), 1);
var import_date_fns = require("date-fns");
var import_material = require("@mui/material");
var import_Unstable_Grid2 = __toESM(require("@mui/material/Unstable_Grid2"), 1);
var isSameRange = (first, second) => {
  const { startDate: fStart, endDate: fEnd } = first;
  const { startDate: sStart, endDate: sEnd } = second;
  if (fStart && sStart && fEnd && sEnd) {
    return (0, import_date_fns.isSameDay)(fStart, sStart) && (0, import_date_fns.isSameDay)(fEnd, sEnd);
  }
  return false;
};
var DefinedRanges = ({
  ranges,
  setRange,
  selectedRange
}) => {
  const theme = (0, import_material.useTheme)();
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_Unstable_Grid2.default, { xs: "auto" }, /* @__PURE__ */ import_react.default.createElement(
    import_material.Box,
    {
      height: "54px",
      sx: {
        backgroundColor: (0, import_material.alpha)(theme.palette.grey[400], 0.1)
      }
    }
  )), /* @__PURE__ */ import_react.default.createElement(import_Unstable_Grid2.default, { xs: true }, /* @__PURE__ */ import_react.default.createElement(
    import_material.List,
    {
      sx: {
        pt: "10px"
      }
    },
    ranges.map((range, idx) => /* @__PURE__ */ import_react.default.createElement(
      import_material.ListItem,
      {
        disablePadding: true,
        key: idx,
        onClick: () => setRange(range),
        sx: [
          isSameRange(range, selectedRange) ? {
            backgroundColor: (0, import_material.alpha)(theme.palette.grey[600], 0.1)
          } : {}
        ]
      },
      /* @__PURE__ */ import_react.default.createElement(
        import_material.ListItemButton,
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
          }
        },
        /* @__PURE__ */ import_react.default.createElement(
          import_material.ListItemText,
          {
            primaryTypographyProps: {
              variant: "subtitle2",
              sx: [
                isSameRange(range, selectedRange) ? {
                  color: (0, import_material.alpha)(theme.palette.grey[800], 1)
                } : {
                  color: (0, import_material.alpha)(theme.palette.grey[600], 1)
                },
                {
                  fontSize: 13,
                  fontWeight: 400
                }
              ]
            }
          },
          range.label
        )
      )
    ))
  )));
};
var Sections_DefinedRanges_default = DefinedRanges;

// src/components/Sections.tsx
var import_Grid22 = __toESM(require("@mui/material/Unstable_Grid2/Grid2"), 1);

// src/components/Sections.DuelCalender.tsx
var import_date_fns6 = require("date-fns");
var import_Divider = __toESM(require("@mui/material/Divider"), 1);
var import_Unstable_Grid23 = __toESM(require("@mui/material/Unstable_Grid2"), 1);

// src/components/Month.tsx
var import_react3 = __toESM(require("react"), 1);
var import_date_fns5 = require("date-fns");
var import_material4 = require("@mui/material");
var import_Grid2 = __toESM(require("@mui/material/Unstable_Grid2/Grid2"), 1);

// src/utils/index.ts
var import_date_fns2 = require("date-fns");
var chunks = (array, size) => Array.from(
  { length: Math.ceil(array.length / size) },
  (_v, i) => array.slice(i * size, i * size + size)
);
var getDaysInMonth = (date, locale) => {
  const startWeek = (0, import_date_fns2.startOfWeek)((0, import_date_fns2.startOfMonth)(date), { locale });
  const endWeek = (0, import_date_fns2.endOfWeek)((0, import_date_fns2.endOfMonth)(date), { locale });
  const days = [];
  for (let curr = startWeek; (0, import_date_fns2.isBefore)(curr, endWeek); ) {
    days.push(curr);
    curr = (0, import_date_fns2.addDays)(curr, 1);
  }
  return days;
};
var isStartOfRange = ({ startDate }, day) => startDate && (0, import_date_fns2.isSameDay)(day, startDate);
var isEndOfRange = ({ endDate }, day) => endDate && (0, import_date_fns2.isSameDay)(day, endDate);
var inDateRange = ({ startDate, endDate }, day) => startDate && endDate && ((0, import_date_fns2.isWithinInterval)(day, { start: startDate, end: endDate }) || (0, import_date_fns2.isSameDay)(day, startDate) || (0, import_date_fns2.isSameDay)(day, endDate));
var isRangeSameDay = ({ startDate, endDate }) => {
  if (startDate && endDate) {
    return (0, import_date_fns2.isSameDay)(startDate, endDate);
  }
  return false;
};
var parseOptionalDate = (date, defaultValue) => {
  if (date) {
    const parsed = date instanceof Date ? date : (0, import_date_fns2.parseISO)(date);
    if ((0, import_date_fns2.isValid)(parsed))
      return parsed;
  }
  return defaultValue;
};
var getValidatedMonths = (range, minDate, maxDate) => {
  const { startDate, endDate } = range;
  if (startDate && endDate) {
    const newStart = (0, import_date_fns2.max)([startDate, minDate]);
    const newEnd = (0, import_date_fns2.min)([endDate, maxDate]);
    return [
      newStart,
      (0, import_date_fns2.isSameMonth)(newStart, newEnd) ? (0, import_date_fns2.addMonths)(newStart, 1) : newEnd
    ];
  }
  return [startDate, endDate];
};

// src/components/Month.Header.tsx
var import_date_fns4 = require("date-fns");
var import_material2 = require("@mui/material");
var import_Unstable_Grid22 = __toESM(require("@mui/material/Unstable_Grid2"), 1);
var import_KeyboardArrowDown = __toESM(require("@mui/icons-material/KeyboardArrowDown"), 1);
var import_KeyboardArrowRight = __toESM(require("@mui/icons-material/KeyboardArrowRight"), 1);
var import_KeyboardArrowLeft = __toESM(require("@mui/icons-material/KeyboardArrowLeft"), 1);

// src/Constants/index.ts
var import_date_fns3 = require("date-fns");
var AVAILABLE_MIN_DATE = (0, import_date_fns3.startOfYear)((0, import_date_fns3.addYears)(/* @__PURE__ */ new Date(), -10));
var AVAILABLE_MAX_DATE = (0, import_date_fns3.endOfYear)((0, import_date_fns3.addYears)(/* @__PURE__ */ new Date(), 10));

// src/components/Month.Header.tsx
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
  const theme = (0, import_material2.useTheme)();
  const availableYearRange = {
    start: (minDate || AVAILABLE_MIN_DATE).getFullYear(),
    end: (maxDate || AVAILABLE_MAX_DATE).getFullYear()
  };
  const MONTHS = Array.from(
    { length: 12 },
    (_, index) => {
      var _a;
      return typeof locale !== "undefined" ? (_a = locale.localize) == null ? void 0 : _a.month(index, {
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
      ][index];
    }
  );
  const handleMonthChange = (event) => {
    setDate((0, import_date_fns4.setMonth)(currentDate, parseInt(event.target.value, 10)));
  };
  const handleYearChange = (event) => {
    setDate((0, import_date_fns4.setYear)(currentDate, parseInt(event.target.value, 10)));
  };
  const currentMonth = (0, import_date_fns4.getMonth)(currentDate);
  const currentYear = (0, import_date_fns4.getYear)(currentDate);
  const minYear = (0, import_date_fns4.getYear)(minDate);
  const maxYear = (0, import_date_fns4.getYear)(maxDate);
  const minMonthID = (0, import_date_fns4.getMonth)(minDate);
  const maxMonthID = (0, import_date_fns4.getMonth)(maxDate);
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_Unstable_Grid22.default, { xs: "auto" }, /* @__PURE__ */ React.createElement(
    import_material2.IconButton,
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
      }
    },
    /* @__PURE__ */ React.createElement(
      import_KeyboardArrowLeft.default,
      {
        fontSize: "small",
        sx: {
          fill: prevDisabled ? `${theme.palette.grey[400]}` : "secondary"
        }
      }
    )
  )), /* @__PURE__ */ React.createElement(import_Unstable_Grid22.default, { xsOffset: "auto", xs: 4, md: 5 }, /* @__PURE__ */ React.createElement(import_material2.FormControl, { fullWidth: true }, /* @__PURE__ */ React.createElement(
    import_material2.Select,
    {
      SelectDisplayProps: {
        style: {
          minHeight: "unset"
        }
      },
      variant: "outlined",
      size: "small",
      defaultValue: currentYear,
      IconComponent: (props) => /* @__PURE__ */ React.createElement(
        import_KeyboardArrowDown.default,
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
      onChange: handleMonthChange
    },
    MONTHS.map((month, idx) => {
      return /* @__PURE__ */ React.createElement(import_material2.MenuItem, { key: month, value: idx, disabled: isDisabled(idx) }, /* @__PURE__ */ React.createElement(import_material2.Typography, { variant: "body2", noWrap: true }, month));
    })
  ))), /* @__PURE__ */ React.createElement(import_Unstable_Grid22.default, { xsOffset: 0.5, xs: "auto" }, /* @__PURE__ */ React.createElement(import_material2.FormControl, null, /* @__PURE__ */ React.createElement(
    import_material2.Select,
    {
      variant: "outlined",
      size: "small",
      defaultValue: currentYear,
      SelectDisplayProps: {
        style: {
          minHeight: "unset"
        }
      },
      IconComponent: (props) => /* @__PURE__ */ React.createElement(
        import_KeyboardArrowDown.default,
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
      value: (0, import_date_fns4.getYear)(currentDate),
      onChange: handleYearChange
    },
    generateYears(availableYearRange).map((year) => {
      return /* @__PURE__ */ React.createElement(import_material2.MenuItem, { key: year, value: year }, /* @__PURE__ */ React.createElement(import_material2.Typography, { variant: "body2" }, year));
    })
  ))), /* @__PURE__ */ React.createElement(import_Unstable_Grid22.default, { xsOffset: "auto", xs: "auto" }, /* @__PURE__ */ React.createElement(
    import_material2.IconButton,
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
      }
    },
    /* @__PURE__ */ React.createElement(
      import_KeyboardArrowRight.default,
      {
        fontSize: "small",
        sx: {
          fill: nextDisabled ? `${theme.palette.grey[400]}` : "secondary"
        }
      }
    )
  )));
};
var Month_Header_default = MonthHeader;

// src/components/Day.tsx
var import_react2 = __toESM(require("react"), 1);
var import_material3 = require("@mui/material");
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
  const theme = (0, import_material3.useTheme)();
  return /* @__PURE__ */ import_react2.default.createElement(
    import_material3.Box,
    {
      sx: {
        display: "flex",
        borderRadius: startOfRange ? "50% 0 0 50%" : endOfRange ? "0 50% 50% 0" : void 0,
        backgroundColor: !disabled && highlighted ? (0, import_material3.alpha)(theme.palette.primary.main, 0.1) : void 0
      }
    },
    /* @__PURE__ */ import_react2.default.createElement(
      import_material3.IconButton,
      {
        disableRipple: true,
        color: "primary",
        sx: {
          ":hover": {
            backgroundColor: (0, import_material3.alpha)(theme.palette.primary.light, 0.2)
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
        onMouseOver: onHover
      },
      /* @__PURE__ */ import_react2.default.createElement(
        import_material3.Typography,
        {
          sx: {
            lineHeight: 1.6,
            visibility: hidden && hideOutsideMonthDays ? "hidden" : "visible",
            color: !disabled ? filled ? theme.palette.primary.contrastText : theme.palette.text.primary : theme.palette.text.secondary
          },
          variant: "body2"
        },
        value
      )
    )
  );
};
var Day_default = Day;

// src/components/Month.tsx
var Month2 = (props) => {
  var _a;
  const theme = (0, import_material4.useTheme)();
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
  const weekStartsOn = ((_a = locale == null ? void 0 : locale.options) == null ? void 0 : _a.weekStartsOn) || 0;
  const WEEK_DAYS = Array.from(
    { length: 7 },
    (_, index) => {
      var _a2;
      return typeof locale !== "undefined" ? (_a2 = locale.localize) == null ? void 0 : _a2.day((index + weekStartsOn) % 7, {
        width: "short",
        context: "standalone"
      }) : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][index];
    }
  );
  const [back, forward] = props.navState;
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(
    import_Grid2.default,
    {
      container: true,
      justifyContent: "space-between",
      alignItems: "center",
      px: "10px",
      sx: {
        height: "55px",
        backgroundColor: (0, import_material4.alpha)(theme.palette.grey[400], 0.1)
      }
    },
    /* @__PURE__ */ import_react3.default.createElement(
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
  ), /* @__PURE__ */ import_react3.default.createElement(
    import_Grid2.default,
    {
      container: true,
      justifyContent: "center",
      sx: {
        margin: "16px 16px 0 16px"
      }
    },
    WEEK_DAYS.map((day, index) => /* @__PURE__ */ import_react3.default.createElement(import_Grid2.default, { key: index, container: true, width: "36px", justifyContent: "center" }, /* @__PURE__ */ import_react3.default.createElement(import_material4.Typography, { color: "textSecondary", key: index, variant: "caption" }, day)))
  ), /* @__PURE__ */ import_react3.default.createElement(
    import_Grid2.default,
    {
      container: true,
      direction: "column",
      sx: {
        margin: "16px"
      }
    },
    chunks(getDaysInMonth(currentDate, locale), 7).map((week, idx) => /* @__PURE__ */ import_react3.default.createElement(import_Grid2.default, { key: idx, container: true, direction: "row", justifyContent: "center" }, week.map((day) => {
      const isStart = isStartOfRange(dateRange, day);
      const isEnd = isEndOfRange(dateRange, day);
      const isRangeOneDay = isRangeSameDay(dateRange);
      const highlighted = inDateRange(dateRange, day) || helpers.isInHoverRange(day);
      return /* @__PURE__ */ import_react3.default.createElement(
        Day_default,
        {
          key: (0, import_date_fns5.format)(day, "dd-MM-yyyy"),
          filled: isStart || isEnd,
          outlined: (0, import_date_fns5.isToday)(day),
          highlighted: highlighted && !isRangeOneDay,
          disabled: !(0, import_date_fns5.isSameMonth)(currentDate, day) || !((0, import_date_fns5.isWithinInterval)(day, { start: minDate, end: maxDate }) || isStartOfRange(
            {
              startDate: minDate,
              endDate: maxDate
            },
            day
          )),
          hidden: !(0, import_date_fns5.isSameMonth)(currentDate, day),
          hideOutsideMonthDays,
          startOfRange: isStart && !isRangeOneDay,
          endOfRange: isEnd && !isRangeOneDay,
          onClick: () => handlers.handleClickDateNumber(day),
          onHover: () => handlers.handleHoverDateNumber(day),
          value: (0, import_date_fns5.getDate)(day)
        }
      );
    })))
  ));
};
var Month_default = Month2;

// src/Constants/markers.ts
var MARKERS = {
  FIRST_MONTH: Symbol("firstMonth"),
  SECOND_MONTH: Symbol("secondMonth"),
  SINGLE_MONTH: Symbol("singleMonth")
};

// src/components/Sections.DuelCalender.tsx
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
  const canNavigateBack = !(0, import_date_fns6.isSameMonth)(firstMonth, commonProps.minDate);
  const canNavigateForward = !(0, import_date_fns6.isSameMonth)(secondMonth, commonProps.maxDate);
  return /* @__PURE__ */ React.createElement(
    import_Unstable_Grid23.default,
    {
      xs: 12,
      container: true,
      direction: {
        xs: "column",
        md: "row"
      },
      justifyContent: "center"
    },
    /* @__PURE__ */ React.createElement(import_Unstable_Grid23.default, { xs: "auto", container: true, direction: "column" }, /* @__PURE__ */ React.createElement(
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
    )),
    /* @__PURE__ */ React.createElement(import_Unstable_Grid23.default, { xs: "auto" }, /* @__PURE__ */ React.createElement(import_Divider.default, { orientation: "vertical" })),
    /* @__PURE__ */ React.createElement(import_Unstable_Grid23.default, { xs: "auto", container: true, direction: "column" }, /* @__PURE__ */ React.createElement(
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
    ))
  );
};

// src/components/Sections.tsx
var import_react4 = require("react");

// src/components/Sections.Footer.tsx
var import_date_fns7 = require("date-fns");
var import_material6 = require("@mui/material");
var import_Typography = __toESM(require("@mui/material/Typography"), 1);
var import_Unstable_Grid25 = __toESM(require("@mui/material/Unstable_Grid2"), 1);

// src/components/Actions.tsx
var import_material5 = require("@mui/material");
var import_Button = __toESM(require("@mui/material/Button"), 1);
var import_Unstable_Grid24 = __toESM(require("@mui/material/Unstable_Grid2"), 1);
var CancelButtonStyled = (0, import_material5.styled)(import_Button.default)(({ theme }) => ({
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
var ApplyButtonStyled = (0, import_material5.styled)(import_Button.default)({
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_Unstable_Grid24.default, null, /* @__PURE__ */ React.createElement(
    CancelButtonStyled,
    {
      disableRipple: true,
      disableElevation: true,
      variant: "text",
      size: buttonSize,
      onClick: onCloseCallback
    },
    "Cancel"
  )), /* @__PURE__ */ React.createElement(import_Unstable_Grid24.default, null, /* @__PURE__ */ React.createElement(
    ApplyButtonStyled,
    {
      disableRipple: true,
      disableElevation: true,
      type: "submit",
      variant: "contained",
      color: "primary",
      size: buttonSize,
      onClick: onSubmit
    },
    "Apply Range"
  )));
};

// src/components/Sections.Footer.tsx
var import_KeyboardDoubleArrowDown = __toESM(require("@mui/icons-material/KeyboardDoubleArrowDown"), 1);
var import_KeyboardDoubleArrowRight = __toESM(require("@mui/icons-material/KeyboardDoubleArrowRight"), 1);
var PreviewDateTypoStyled = (0, import_material6.styled)(import_Typography.default)(({ theme }) => ({
  position: "relative",
  top: "1px",
  minWidth: "130px",
  fontSize: 14,
  lineHeight: "14px",
  color: theme.palette.grey[800]
}));
var MessageTypoStyled = (0, import_material6.styled)(import_Typography.default)(({ theme }) => ({
  position: "relative",
  top: "1px",
  fontSize: 14,
  lineHeight: "14px",
  color: theme.palette.grey[500]
}));
var PreviewDateMessageTypoStyled = (0, import_material6.styled)(import_Typography.default)(({ theme }) => ({
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
  const theme = (0, import_material6.useTheme)();
  const previewDate = (date) => {
    return (0, import_date_fns7.format)(date, "dd MMMM yyyy", { locale });
  };
  const IconXs = (RangeSeparatorIcons == null ? void 0 : RangeSeparatorIcons.xs) || import_KeyboardDoubleArrowDown.default;
  const IconMd = (RangeSeparatorIcons == null ? void 0 : RangeSeparatorIcons.md) || import_KeyboardDoubleArrowRight.default;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    import_Unstable_Grid25.default,
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
      }
    },
    startDate || endDate ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      PreviewDateTypoStyled,
      {
        variant: "body1",
        textAlign: {
          xs: "center",
          md: "left"
        }
      },
      startDate ? previewDate(startDate) : "Start Date"
    ), /* @__PURE__ */ React.createElement(
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
    ), /* @__PURE__ */ React.createElement(
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
    ), endDate ? /* @__PURE__ */ React.createElement(
      PreviewDateTypoStyled,
      {
        variant: "body1",
        textAlign: {
          xs: "center",
          md: "left"
        }
      },
      previewDate(endDate)
    ) : /* @__PURE__ */ React.createElement(
      PreviewDateMessageTypoStyled,
      {
        variant: "body1",
        textAlign: {
          xs: "center",
          md: "left"
        }
      },
      "End Date"
    )) : /* @__PURE__ */ React.createElement(
      import_Unstable_Grid25.default,
      {
        xs: 12,
        container: true,
        justifyContent: {
          xs: "center",
          md: "flex-start"
        }
      },
      /* @__PURE__ */ React.createElement(MessageTypoStyled, { variant: "body1" }, "Range not selected")
    )
  ), /* @__PURE__ */ React.createElement(
    import_Unstable_Grid25.default,
    {
      display: {
        xs: "block",
        md: "none"
      }
    },
    /* @__PURE__ */ React.createElement(import_material6.Divider, { orientation: "horizontal" })
  ), /* @__PURE__ */ React.createElement(import_Unstable_Grid25.default, { xs: "auto", container: true, justifyContent: "flex-end" }, /* @__PURE__ */ React.createElement(Actions, { onCloseCallback, onSubmit })));
};

// src/components/Sections.tsx
var import_KeyboardArrowDown2 = __toESM(require("@mui/icons-material/KeyboardArrowDown"), 1);

// src/components/Sections.SingleCalender.tsx
var import_date_fns8 = require("date-fns");
var import_Unstable_Grid26 = __toESM(require("@mui/material/Unstable_Grid2"), 1);
var SingleCalender = ({
  firstMonth,
  secondMonth,
  handleSetSingleMonth,
  commonProps,
  locale,
  hideOutsideMonthDays
}) => {
  const canNavigateBack = !(0, import_date_fns8.isSameMonth)(firstMonth, commonProps.minDate);
  const canNavigateForward = !(0, import_date_fns8.isSameMonth)(firstMonth, commonProps.maxDate);
  return /* @__PURE__ */ React.createElement(
    import_Unstable_Grid26.default,
    {
      xs: 12,
      container: true,
      direction: {
        xs: "column",
        md: "row"
      },
      justifyContent: "center"
    },
    /* @__PURE__ */ React.createElement(import_Unstable_Grid26.default, { xs: "auto", container: true, direction: "column" }, /* @__PURE__ */ React.createElement(
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
    ))
  );
};

// src/components/Sections.tsx
var Sections = (props) => {
  const theme = (0, import_material7.useTheme)();
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
  const canNavigateCloser = (0, import_date_fns9.differenceInCalendarMonths)(secondMonth, firstMonth) >= 2;
  const commonProps = {
    dateRange,
    minDate,
    maxDate,
    helpers,
    handlers
  };
  const [selectedRange, setSelectedRange] = (0, import_react4.useState)("");
  const [selectedRangeObj, setSelectedRangeObj] = (0, import_react4.useState)(void 0);
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
  (0, import_react4.useMemo)(() => {
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
  return /* @__PURE__ */ React.createElement(
    import_Grid22.default,
    {
      container: true,
      sx: {
        borderRadius: "16px"
      }
    },
    /* @__PURE__ */ React.createElement(
      import_Grid22.default,
      {
        xs: "auto",
        container: true,
        direction: "column",
        className: "DRP-Defined-Ranges",
        display: { xs: "none", md: hideDefaultRanges ? "none" : "flex" }
      },
      /* @__PURE__ */ React.createElement(
        Sections_DefinedRanges_default,
        {
          selectedRange: dateRange,
          ranges,
          setRange: handleClickDefinedRange
        }
      )
    ),
    /* @__PURE__ */ React.createElement(
      import_Grid22.default,
      {
        xs: "auto",
        display: { xs: "none", md: hideDefaultRanges ? "none" : "block" }
      },
      /* @__PURE__ */ React.createElement(import_material7.Divider, { orientation: "vertical" })
    ),
    /* @__PURE__ */ React.createElement(import_Grid22.default, { xs: true, container: true, direction: "column" }, /* @__PURE__ */ React.createElement(
      import_Grid22.default,
      {
        display: { xs: hideDefaultRanges ? "none" : "flex", md: "none" },
        container: true,
        height: "54px",
        alignItems: "center",
        px: "10px",
        sx: { backgroundColor: (0, import_material7.alpha)(theme.palette.grey[400], 0.1) }
      },
      /* @__PURE__ */ React.createElement(
        import_Grid22.default,
        {
          xs: 12,
          container: true,
          justifyContent: "space-between",
          alignItems: "center"
        },
        /* @__PURE__ */ React.createElement(import_material7.Typography, { variant: "body2" }, "Quick Select"),
        /* @__PURE__ */ React.createElement(import_material7.FormControl, null, /* @__PURE__ */ React.createElement(
          import_material7.Select,
          {
            displayEmpty: true,
            SelectDisplayProps: {
              style: {
                minHeight: "unset"
              }
            },
            variant: "outlined",
            size: "small",
            IconComponent: (props2) => /* @__PURE__ */ React.createElement(
              import_KeyboardArrowDown2.default,
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
            onChange: onChangeSelectedRange
          },
          ranges.map((range) => {
            return /* @__PURE__ */ React.createElement(import_material7.MenuItem, { key: range.label, value: range.label }, /* @__PURE__ */ React.createElement(import_material7.Typography, { variant: "body2" }, range.label));
          })
        ))
      )
    ), /* @__PURE__ */ React.createElement(import_Grid22.default, { display: { xs: "block", md: "none" } }, /* @__PURE__ */ React.createElement(import_material7.Divider, null)), /* @__PURE__ */ React.createElement(import_Grid22.default, { container: true, display: { xs: "flex", md: "none" } }, /* @__PURE__ */ React.createElement(
      SingleCalender,
      {
        firstMonth,
        secondMonth,
        handleSetSingleMonth,
        canNavigateCloser,
        commonProps,
        hideOutsideMonthDays
      }
    )), /* @__PURE__ */ React.createElement(import_Grid22.default, { flex: 1, display: { xs: "none", md: "flex" }, container: true }, /* @__PURE__ */ React.createElement(
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
    )), footerRequired ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_Grid22.default, { display: hideActionButtons ? "none" : "block" }, /* @__PURE__ */ React.createElement(import_material7.Divider, null)), /* @__PURE__ */ React.createElement(
      import_Grid22.default,
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
        gap: 2
      },
      /* @__PURE__ */ React.createElement(
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
    )) : null)
  );
};
var Sections_default = Sections;

// src/hooks/useDateRangePicker.ts
var import_date_fns11 = require("date-fns");

// src/defaults.ts
var import_date_fns10 = require("date-fns");
var getDefaultRanges = (date, locale) => [
  {
    label: "Today",
    startDate: date,
    endDate: date
  },
  {
    label: "Yesterday",
    startDate: (0, import_date_fns10.addDays)(date, -1),
    endDate: (0, import_date_fns10.addDays)(date, -1)
  },
  {
    label: "This Week",
    startDate: (0, import_date_fns10.startOfWeek)(date, { locale }),
    endDate: (0, import_date_fns10.endOfWeek)(date, { locale })
  },
  {
    label: "Last Week",
    startDate: (0, import_date_fns10.startOfWeek)((0, import_date_fns10.addWeeks)(date, -1), { locale }),
    endDate: (0, import_date_fns10.endOfWeek)((0, import_date_fns10.addWeeks)(date, -1), { locale })
  },
  {
    label: "Last 7 Days",
    startDate: (0, import_date_fns10.addWeeks)(date, -1),
    endDate: date
  },
  {
    label: "This Month",
    startDate: (0, import_date_fns10.startOfMonth)(date),
    endDate: (0, import_date_fns10.endOfMonth)(date)
  },
  {
    label: "Last Month",
    startDate: (0, import_date_fns10.startOfMonth)((0, import_date_fns10.addMonths)(date, -1)),
    endDate: (0, import_date_fns10.endOfMonth)((0, import_date_fns10.addMonths)(date, -1))
  },
  {
    label: "This Year",
    startDate: (0, import_date_fns10.startOfYear)(date),
    endDate: (0, import_date_fns10.endOfYear)(date)
  },
  {
    label: "Last Year",
    startDate: (0, import_date_fns10.startOfYear)((0, import_date_fns10.addYears)(date, -1)),
    endDate: (0, import_date_fns10.endOfYear)((0, import_date_fns10.addYears)(date, -1))
  }
];

// src/hooks/useDateRangePicker.ts
var import_react5 = require("react");
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
  const [dateRange, setDateRange] = (0, import_react5.useState)({
    ...initialDateRange
  });
  const [hoverDay, setHoverDay] = (0, import_react5.useState)();
  const [firstMonth, setFirstMonth] = (0, import_react5.useState)(
    initialFirstMonth || today
  );
  const [secondMonth, setSecondMonth] = (0, import_react5.useState)(
    initialSecondMonth || (0, import_date_fns11.addMonths)(firstMonth, 1)
  );
  const { startDate, endDate } = dateRange;
  const handleSetFirstMonth = (date) => {
    if ((0, import_date_fns11.isBefore)(date, secondMonth)) {
      if ((0, import_date_fns11.isAfter)(date, minValidDate)) {
        setFirstMonth(date);
        return;
      } else {
        setFirstMonth((0, import_date_fns11.lastDayOfMonth)(minValidDate));
        return;
      }
    } else {
      if ((0, import_date_fns11.isBefore)((0, import_date_fns11.addMonths)(date, 1), maxValidDate)) {
        setFirstMonth(date);
        setSecondMonth((0, import_date_fns11.addMonths)(date, 1));
        return;
      } else {
        setSecondMonth(maxValidDate);
        setFirstMonth((0, import_date_fns11.addMonths)(maxValidDate, -1));
      }
    }
  };
  const handleSetSecondMonth = (date) => {
    if ((0, import_date_fns11.isAfter)(date, firstMonth)) {
      if ((0, import_date_fns11.isBefore)(date, maxValidDate)) {
        setSecondMonth(date);
        return;
      } else {
        setSecondMonth((0, import_date_fns11.lastDayOfMonth)(maxValidDate));
        return;
      }
    } else {
      if ((0, import_date_fns11.isAfter)((0, import_date_fns11.addMonths)(date, -1), minValidDate)) {
        setSecondMonth(date);
        setFirstMonth((0, import_date_fns11.addMonths)(date, -1));
        return;
      } else {
        setFirstMonth(minValidDate);
        setSecondMonth((0, import_date_fns11.addMonths)(minValidDate, 1));
      }
    }
  };
  const handleSetSingleMonth = (date) => {
    if ((0, import_date_fns11.isAfter)(date, minValidDate) && (0, import_date_fns11.isBefore)(date, maxValidDate)) {
      setFirstMonth(date);
      return;
    } else if ((0, import_date_fns11.isBefore)(date, minValidDate) || (0, import_date_fns11.isSameDay)(date, minValidDate)) {
      setFirstMonth(minValidDate);
      return;
    } else if ((0, import_date_fns11.isAfter)(date, maxValidDate) || (0, import_date_fns11.isSameDay)(date, maxValidDate)) {
      setFirstMonth(maxValidDate);
      return;
    }
  };
  const handleClickDefinedRange = (range) => {
    let { startDate: newStart, endDate: newEnd } = range;
    if (newStart && newEnd) {
      range.startDate = newStart = (0, import_date_fns11.max)([newStart, minValidDate]);
      range.endDate = newEnd = (0, import_date_fns11.min)([newEnd, maxValidDate]);
      setDateRange(range);
      onChangeCallback && onChangeCallback(range);
      setFirstMonth(newStart);
      setSecondMonth(
        (0, import_date_fns11.isSameMonth)(newStart, newEnd) ? (0, import_date_fns11.addMonths)(newStart, 1) : newEnd
      );
    } else {
      setDateRange({});
      onChangeCallback && onChangeCallback({});
      setFirstMonth(today);
      setSecondMonth((0, import_date_fns11.addMonths)(firstMonth, 1));
    }
  };
  const handleClickDateNumber = (day) => {
    if (startDate && !endDate && !(0, import_date_fns11.isBefore)(day, startDate)) {
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
      setFirstMonth((0, import_date_fns11.addMonths)(firstMonth, action));
      setSecondMonth((0, import_date_fns11.addMonths)(secondMonth, action));
      return;
    }
    if (marker === MARKERS.FIRST_MONTH) {
      const firstNew = (0, import_date_fns11.addMonths)(firstMonth, action);
      if ((0, import_date_fns11.isBefore)(firstNew, secondMonth))
        setFirstMonth(firstNew);
    } else {
      const secondNew = (0, import_date_fns11.addMonths)(secondMonth, action);
      if ((0, import_date_fns11.isBefore)(firstMonth, secondNew))
        setSecondMonth(secondNew);
    }
  };
  const handleHoverDateNumber = (date) => {
    if (startDate && !endDate) {
      if (!hoverDay || !(0, import_date_fns11.isSameDay)(date, hoverDay)) {
        setHoverDay(date);
      }
    }
  };
  const isInHoverRange = (day) => startDate && !endDate && hoverDay && (0, import_date_fns11.isAfter)(hoverDay, startDate) && (0, import_date_fns11.isWithinInterval)(day, { start: startDate, end: hoverDay });
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
var DateRangePicker = (props) => {
  const { customProps, ...dateRangePickerProps } = props;
  const onSubmit = customProps == null ? void 0 : customProps.onSubmit;
  const { ...computedProps } = useDateRangePicker({
    ...dateRangePickerProps,
    onSubmit
  });
  return /* @__PURE__ */ import_react6.default.createElement(Sections_default, { ...dateRangePickerProps, ...computedProps, ...customProps });
};

// src/DateRangePickerModal.tsx
var import_react7 = __toESM(require("react"), 1);
var import_Popover = __toESM(require("@mui/material/Popover"), 1);
var import_useMediaQuery = __toESM(require("@mui/material/useMediaQuery"), 1);
var import_material8 = require("@mui/material");
var DateRangePickerModal = ({
  modalProps,
  customProps,
  ...dateRangePickerProps
}) => {
  const theme = (0, import_material8.useTheme)();
  const isMobileView = (0, import_useMediaQuery.default)(theme.breakpoints.down("md"));
  if (isMobileView) {
    const { open, onClose } = modalProps;
    return /* @__PURE__ */ import_react7.default.createElement(import_material8.Dialog, { open, onClose }, /* @__PURE__ */ import_react7.default.createElement(
      DateRangePicker,
      {
        ...dateRangePickerProps,
        customProps,
        footerRequired: true
      }
    ));
  }
  return /* @__PURE__ */ import_react7.default.createElement(import_Popover.default, { ...modalProps }, /* @__PURE__ */ import_react7.default.createElement(
    DateRangePicker,
    {
      ...dateRangePickerProps,
      customProps,
      footerRequired: true
    }
  ));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DateRangePicker,
  DateRangePickerModal
});
