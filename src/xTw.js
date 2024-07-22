import { TRANSITIONS } from "primereact/passthrough/tailwind";
import { classNames } from "primereact/utils";

export const xTw = {
  badge: {
    root: function root(_ref87) {
      var props = _ref87.props;
      return {
        className: classNames(
          "rounded-full p-0 text-center inline-block",
          "bg-blue-500 text-white font-bold",
          {
            "bg-gray-500 ": props.severity == "secondary",
            "bg-green-500 ": props.severity == "success",
            "bg-blue-500 ": props.severity == "info",
            "bg-orange-500 ": props.severity == "warning",
            "bg-purple-500 ": props.severity == "help",
            "bg-red-500 ": props.severity == "danger",
          },
          {
            "text-xs min-w-[1.5rem] h-[1.5rem] leading-[1.5rem]":
              props.size == null,
            "text-lg min-w-[2.25rem] h-[2.25rem] leading-[2.25rem]":
              props.size == "large",
            "text-2xl min-w-[3rem] h-[3rem] leading-[3rem]":
              props.size == "xlarge",
          }
        ),
      };
    },
  },
  tooltip: {
    root: function root(_ref19) {
      var context = _ref19.context;
      return {
        className: classNames("absolute shadow-md", {
          "py-0 px-1":
            context.right ||
            context.left ||
            (!context.right &&
              !context.left &&
              !context.top &&
              !context.bottom),
          "py-1 px-0": context.top || context.bottom,
        }),
      };
    },
    arrow: function arrow(_ref20) {
      var context = _ref20.context;
      return {
        className: classNames(
          "absolute w-0 h-0 border-transparent border-solid",
          {
            "-mt-1 border-y-[0.25rem] border-r-[0.25rem] border-l-0 border-r-gray-600":
              context.right,
            "-mt-1 border-y-[0.25rem] border-l-[0.25rem] border-r-0 border-l-gray-600":
              context.left,
            "-ml-1 border-x-[0.25rem] border-t-[0.25rem] border-b-0 border-t-gray-600":
              context.top,
            "-ml-1 border-x-[0.25rem] border-b-[0.25rem] border-t-0 border-b-gray-600":
              context.bottom,
          }
        ),
      };
    },
    text: {
      className:
        "p-3 bg-gray-600 text-white rounded-md whitespace-pre-line break-words",
    },
  },
  //UPLOAD
  fileupload: {
    input: "hidden",
    buttonbar: {
      className: classNames(
        "flex flex-wrap",
        "bg-gray-50 dark:bg-gray-800 p-5 border border-solid border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 rounded-tr-lg rounded-tl-lg gap-2 border-b-0"
      ),
    },
    basicButton: {
      className: classNames(
        "text-white bg-blue-500 border border-blue-500 p-3 px-5 rounded-md text-base",
        "overflow-hidden relative"
      ),
    },
    chooseButton: {
      className: classNames(
        "text-white bg-blue-500 border border-blue-500 p-3 px-5 rounded-md text-base",
        "overflow-hidden relative"
      ),
    },
    chooseIcon: "mr-2 inline-block",
    chooseButtonLabel: "flex-1 font-bold",
    uploadButton: {
      icon: "mr-2",
    },
    cancelButton: {
      icon: "mr-2",
    },
    content: {
      className: classNames(
        "relative",
        "bg-white dark:bg-gray-900 p-8 border border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 rounded-b-lg"
      ),
    },
    file: {
      className: classNames(
        "flex items-center flex-wrap",
        "p-4 border border-gray-300 dark:border-blue-900/40 rounded gap-2 mb-2",
        "last:mb-0"
      ),
    },
    thumbnail: "shrink-0",
    fileName: "mb-2",
    fileSize: "mr-2",
    uploadIcon: "mr-2",
  },
  dialog: {
    root: function root(_ref13) {
      var state = _ref13.state;
      return {
        className: classNames(
          "rounded-lg shadow-lg border-0",
          "max-h-[90%] transform scale-100",
          "m-0 w-[50vw]",

          {
            "transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0":
              state.maximized,
          }
        ),
      };
    },
    header: {
      className: classNames(
        "flex items-center justify-between shrink-0",
        "bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6"
      ),
    },
    headerTitle: "font-bold text-lg",
    headerIcons: "flex items-center",
    closeButton: {
      className: classNames(
        "flex items-center justify-center overflow-hidden relative",
        "w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0",
        "hover:text-gray-700 hover:border-transparent hover:bg-gray-200",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]"
        // focus
        // "dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]"
      ),
    },
    closeButtonIcon: "w-4 h-4 inline-block",
    content: function content(_ref14) {
      var props = _ref14.props,
        state = _ref14.state;
      return {
        className: classNames(
          "overflow-y-auto",
          "bg-white text-gray-700 px-6 pb-8 pt-0",
          {
            "rounded-bl-lg rounded-br-lg": !props.footer,
          },
          {
            grow: state.maximized,
          }
        ),
      };
    },
    footer: {
      className: classNames(
        "flex gap-2 shrink-0 justify-end align-center",
        "border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-lg"
      ),
    },
    mask: function mask(_ref15) {
      var state = _ref15.state;
      return {
        className: classNames("transition duration-200", {
          "bg-black/40": state.containerVisible,
        }),
      };
    },
    transition: function transition(_ref16) {
      var props = _ref16.props;
      return {
        timeout: 200,
        classNames:
          props.position === "top"
            ? {
                enter:
                  "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0",
                enterActive:
                  "!opacity-100 !scale-100 !translate-y-0 transition-all duration-200 ease-out",
                exit: "opacity-100 scale-100 transition-all duration-200 ease-out",
                exitActive:
                  "!opacity-0 !scale-75 translate-x-0 -translate-y-full translate-z-0",
              }
            : props.position === "bottom"
            ? {
                enter: "opacity-0 scale-75 translate-y-full",
                enterActive:
                  "!opacity-100 !scale-100 !translate-y-0 transition-all duration-200 ease-out",
                exit: "opacity-100 scale-100 transition-all duration-200 ease-out",
                exitActive:
                  "!opacity-0 !scale-75 translate-x-0 translate-y-full translate-z-0",
              }
            : props.position === "left" ||
              props.position === "top-left" ||
              props.position === "bottom-left"
            ? {
                enter:
                  "opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0",
                enterActive:
                  "!opacity-100 !scale-100 !translate-x-0 transition-all duration-200 ease-out",
                exit: "opacity-100 scale-100 transition-all duration-200 ease-out",
                exitActive:
                  "!opacity-0 !scale-75 -translate-x-full translate-y-0 translate-z-0",
              }
            : props.position === "right" ||
              props.position === "top-right" ||
              props.position === "bottom-right"
            ? {
                enter:
                  "opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0",
                enterActive:
                  "!opacity-100 !scale-100 !translate-x-0 transition-all duration-200 ease-out",
                exit: "opacity-100 scale-100 transition-all duration-200 ease-out",
                exitActive:
                  "!opacity-0 !scale-75 translate-x-full translate-y-0 translate-z-0",
              }
            : {
                enter: "opacity-0 scale-75",
                enterActive:
                  "!opacity-100 !scale-100 transition-all duration-200 ease-out",
                exit: "opacity-100 scale-100 transition-all duration-200 ease-out",
                exitActive: "!opacity-0 !scale-75",
              },
      };
    },
  },
  checkbox: {
    root: {
      className: classNames(
        "cursor-pointer inline-flex relative select-none align-bottom",
        "w-6 h-6"
      ),
    },
    input: {
      className: classNames(
        "absolute appearance-none top-0 left-0 size-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer"
      ),
    },
    box: function box(_ref58) {
      var props = _ref58.props,
        context = _ref58.context;
      return {
        className: classNames(
          "flex items-center justify-center",
          "border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200",
          {
            "border-gray-300 bg-white ": !context.checked,
            "border-blue-500 bg-blue-500 ": context.checked,
          },
          {
            "hover:border-blue-500 ": !props.disabled,
            "cursor-default opacity-60": props.disabled,
          }
        ),
      };
    },
    icon: "w-4 h-4 transition-all duration-200 text-white text-base ",
  },
  inputtext: {
    root: function root(_ref35) {
      var props = _ref35.props,
        context = _ref35.context;
      return {
        className: classNames(
          "m-0",
          "font-sans text-gray-600  bg-white  border border-gray-300  transition-colors duration-200 appearance-none rounded-lg",
          {
            "hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]  ":
              !context.disabled,
            "opacity-60 select-none pointer-events-none cursor-default":
              context.disabled,
          },
          {
            "text-lg px-4 py-4": props.size == "large",
            "text-xs px-2 py-2": props.size == "small",
            "p-3 text-base": !props.size || typeof props.size === "number",
          }
        ),
      };
    },
  },
  card: {
    root: {
      className: classNames(
        "bg-white text-gray-700 shadow-md rounded-md",
        // Background, text color, box shadow, and border radius.
        "" //dark
      ),
    },
    body: "p-5",
    // Padding.
    title: "text-2xl font-bold mb-2",
    // Font size, font weight, and margin bottom.
    subTitle: {
      className: classNames(
        "font-normal mb-2 text-gray-600",
        // Font weight, margin bottom, and text color.
        "" //dark
      ),
    },
    content: "py-5",
    // Vertical padding.
    footer: "pt-5", // Top padding.
  },
  dataview: {
    content: {
      className: classNames("bg-white blue-gray-700 border-0 p-0"),
    },
    grid: "flex flex-wrap ml-0 mr-0 mt-0 bg-white ",
    header:
      "bg-gray-100 text-gray-800 border-gray-200 border-t border-b p-4 font-bold",
  },
  paginator: {
    root: {
      className: classNames(
        "flex items-center justify-center flex-wrap",
        "bg-white text-gray-500 border-0 px-4 py-2 rounded-md",
        "" // Dark Mode
      ),
    },
    firstPageButton: function firstPageButton(_ref146) {
      var context = _ref146.context;
      return {
        className: classNames(
          "relative inline-flex items-center justify-center user-none overflow-hidden leading-none",
          "border-0 text-gray-500  min-w-[3rem] h-12 m-[0.143rem] rounded-md",
          "transition duration-200",
          "",
          //Dark Mode
          {
            "cursor-default pointer-events-none opacity-60": context.disabled,
            "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]":
              !context.disabled, // Focus
          }
        ),
      };
    },
    prevPageButton: function prevPageButton(_ref147) {
      var context = _ref147.context;
      return {
        className: classNames(
          "relative inline-flex items-center justify-center user-none overflow-hidden leading-none",
          "border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md",
          "transition duration-200",
          "",
          //Dark Mode
          {
            "cursor-default pointer-events-none opacity-60": context.disabled,
            "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]":
              !context.disabled, // Focus
          }
        ),
      };
    },
    nextPageButton: function nextPageButton(_ref148) {
      var context = _ref148.context;
      return {
        className: classNames(
          "relative inline-flex items-center justify-center user-none overflow-hidden leading-none",
          "border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md",
          "transition duration-200",
          "",
          //Dark Mode
          {
            "cursor-default pointer-events-none opacity-60": context.disabled,
            "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]":
              !context.disabled, // Focus
          }
        ),
      };
    },
    lastPageButton: function lastPageButton(_ref149) {
      var context = _ref149.context;
      return {
        className: classNames(
          "relative inline-flex items-center justify-center user-none overflow-hidden leading-none",
          "border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md",
          "transition duration-200",
          "",
          //Dark Mode
          {
            "cursor-default pointer-events-none opacity-60": context.disabled,
            "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]":
              !context.disabled, // Focus
          }
        ),
      };
    },
    pageButton: function pageButton(_ref150) {
      var context = _ref150.context;
      return {
        className: classNames(
          "relative inline-flex items-center justify-center user-none overflow-hidden leading-none",
          "border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md",
          "transition duration-200",
          "",
          // Dark Mode
          "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]",
          // Focus
          {
            "bg-blue-50 border-blue-50 text-blue-700 ": context.active,
          }
        ),
      };
    },
    RPPDropdown: {
      root: function root(_ref151) {
        var props = _ref151.props,
          state = _ref151.state;
        return {
          className: classNames(
            "inline-flex relative cursor-pointer user-none",
            "bg-white border rounded-md",
            "transition duration-200",
            "h-12 mx-2",
            "",
            //DarkMode
            {
              "outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-blue-500":
                state.focused && !props.disabled,
              //Focus
              "border-gray-300": !state.focused,
              "hover:border-blue-500": !props.disabled, //Hover
            }
          ),
        };
      },
      input: {
        className: classNames(
          "font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none",
          "block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0",
          "focus:outline-none focus:outline-offset-0",
          "" //Dark Mode
        ),
      },
      trigger: {
        className: classNames(
          "flex items-center justify-center shrink-0",
          "text-gray-500 "
        ),
      },
      panel: {
        className: classNames(
          "bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]",
          "" //Dark Mode
        ),
      },
      wrapper: "overflow-auto",
      list: "m-0 p-0 py-3 list-none",
      item: function item(_ref152) {
        var context = _ref152.context;
        return {
          className: classNames(
            "relative font-normal cursor-pointer space-nowrap overflow-hidden",
            "m-0 py-3 px-5 border-none text-gray-600 rounded-none",
            "transition duration-200",
            "",
            // Dark Mode
            {
              "text-blue-700 bg-blue-50 ": !context.focused && context.selected,
              "bg-blue-300/40": context.focused && context.selected,
              "text-gray-600 bg-gray-300 ":
                context.focused && !context.selected,
            }
          ),
        };
      },
    },
    JTPInput: {
      root: "inline-flex mx-2",
      input: {
        className: classNames(
          "font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none",
          "block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border border-gray-300 pr-0",
          "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] focus:border-blue-300",
          "",
          //Dark Mode
          "m-0 flex-auto max-w-[3rem]"
        ),
      },
    },
    jumptopagedropdown: {
      root: function root(_ref153) {
        var props = _ref153.props,
          state = _ref153.state;
        return {
          className: classNames(
            "inline-flex relative cursor-pointer user-none",
            "bg-white border rounded-md",
            "transition duration-200",
            "h-12 mx-2",
            "",
            //DarkMode
            {
              "outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-blue-500":
                state.focused && !props.disabled,
              //Focus
              "border-gray-300": !state.focused,
              "hover:border-blue-500": !props.disabled, //Hover
            }
          ),
        };
      },
      input: {
        className: classNames(
          "font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none",
          "block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0",
          "focus:outline-none focus:outline-offset-0",
          "" //Dark Mode
        ),
      },
      trigger: {
        className: classNames(
          "flex items-center justify-center shrink-0",
          "text-gray-500 "
        ),
      },
      panel: {
        className: classNames(
          "bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]",
          "" //Dark Mode
        ),
      },
      wrapper: "overflow-auto",
      list: "m-0 p-0 py-3 list-none",
      item: function item(_ref154) {
        var context = _ref154.context;
        return {
          className: classNames(
            "relative font-normal cursor-pointer space-nowrap overflow-hidden",
            "m-0 py-3 px-5 border-none text-gray-600 rounded-none",
            "transition duration-200",
            "",
            // Dark Mode
            {
              "text-blue-700 bg-blue-50 ": !context.focused && context.selected,
              "bg-blue-300/40": context.focused && context.selected,
              "text-gray-600 bg-gray-300 ":
                context.focused && !context.selected,
            }
          ),
        };
      },
    },
  },
  datatable: {
    root: function root(_ref169) {
      var props = _ref169.props;
      return {
        className: classNames("relative", {
          "flex flex-col h-full":
            props.scrollable && props.scrollHeight === "flex",
        }),
      };
    },
    loadingOverlay: {
      className: classNames(
        "fixed w-full h-full t-0 l-0 bg-gray-100/40",
        "transition duration-200",
        "absolute flex items-center justify-center z-2",
        "" // Dark Mode
      ),
    },
    loadingIcon: "w-8 h-8",
    wrapper: function wrapper(_ref170) {
      var props = _ref170.props;
      return {
        className: classNames({
          relative: props.scrollable,
          "flex flex-col grow h-full":
            props.scrollable && props.scrollHeight === "flex",
        }),
      };
    },
    header: function header(_ref171) {
      var props = _ref171.props;
      return {
        className: classNames(
          "bg-slate-50 text-slate-700 border-gray-300 font-bold p-4",
          "",
          // Dark Mode
          props.showGridlines
            ? "border-x border-t border-b-0"
            : "border-y border-x-0"
        ),
      };
    },
    table: "w-full border-spacing-0",
    thead: function thead(_ref172) {
      var context = _ref172.context;
      return {
        className: classNames({
          "bg-slate-50 top-0 z-[1]": context.scrollable,
        }),
      };
    },
    tbody: function tbody(_ref173) {
      var props = _ref173.props,
        context = _ref173.context;
      return {
        className: classNames({
          "sticky z-[1]": props.frozenRow && context.scrollable,
        }),
      };
    },
    tfoot: function tfoot(_ref174) {
      var context = _ref174.context;
      return {
        className: classNames({
          "bg-slate-50 bottom-0 z-[1]": context.scrollable,
        }),
      };
    },
    footer: {
      className: classNames(
        "bg-slate-50 text-slate-700 border-t-0 border-b border-x-0 border-gray-300 font-bold p-4",
        "" // Dark Mode
      ),
    },
    column: {
      headerCell: function headerCell(_ref175) {
        var context = _ref175.context,
          props = _ref175.props;
        return {
          className: classNames(
            "text-left border-0 border-b border-solid border-gray-300 ",
            "transition duration-200",
            (context === null || context === void 0 ? void 0 : context.size) ===
              "small"
              ? "p-2"
              : (context === null || context === void 0
                  ? void 0
                  : context.size) === "large"
              ? "p-5"
              : "p-4",
            // Size
            context.sorted
              ? "bg-blue-50 text-blue-700"
              : "bg-slate-50 text-slate-700",
            // Sort
            context.sorted ? "" : "",
            // Dark Mode
            {
              "sticky z-[1]": props && (props.frozen || props.frozen === ""),
              // Frozen Columns
              "border-x border-y":
                context === null || context === void 0
                  ? void 0
                  : context.showGridlines,
              "overflow-hidden space-nowrap border-y relative bg-clip-padding":
                context.resizable, // Resizable
            }
          ),
        };
      },
      headerContent: "flex items-center",
      bodyCell: function bodyCell(_ref176) {
        var props = _ref176.props,
          context = _ref176.context;
        return {
          className: classNames(
            "text-left border-0 border-b border-solid border-gray-300",
            (context === null || context === void 0 ? void 0 : context.size) ===
              "small"
              ? "p-2"
              : (context === null || context === void 0
                  ? void 0
                  : context.size) === "large"
              ? "p-5"
              : "p-4",
            // Size
            "",
            // Dark Mode
            {
              "sticky bg-inherit":
                props && (props.frozen || props.frozen === ""),
              // Frozen Columns
              "border-x border-y": context.showGridlines,
            }
          ),
        };
      },
      footerCell: function footerCell(_ref177) {
        var context = _ref177.context;
        return {
          className: classNames(
            "text-left border-0 border-b border-solid border-gray-300 font-bold",
            "bg-slate-50 text-slate-700",
            "transition duration-200",
            (context === null || context === void 0 ? void 0 : context.size) ===
              "small"
              ? "p-2"
              : (context === null || context === void 0
                  ? void 0
                  : context.size) === "large"
              ? "p-5"
              : "p-4",
            // Size
            "",
            // Dark Mode
            {
              "border-x border-y": context.showGridlines,
            }
          ),
        };
      },
      sortIcon: function sortIcon(_ref178) {
        var context = _ref178.context;
        return {
          className: classNames(
            "ml-2",
            context.sorted ? "text-blue-700 " : "text-slate-700 "
          ),
        };
      },
      sortBadge: {
        className: classNames(
          "flex items-center justify-center align-middle",
          "rounded-[50%] w-[1.143rem] leading-[1.143rem] ml-2",
          "text-blue-700 bg-blue-50",
          "" // Dark Mode
        ),
      },
      columnFilter: "inline-flex items-center ml-auto",
      filterOverlay: {
        className: classNames(
          "bg-white text-gray-600 border-0 rounded-md min-w-[12.5rem]",
          "" //Dark Mode
        ),
      },
      filterMatchModeDropdown: {
        root: "min-[0px]:flex mb-2",
      },
      filterRowItems: "m-0 p-0 py-3 list-none ",
      filterRowItem: function filterRowItem(_ref179) {
        var context = _ref179.context;
        return {
          className: classNames(
            "m-0 py-3 px-5 bg-transparent",
            "transition duration-200",
            context !== null && context !== void 0 && context.highlighted
              ? "text-blue-700 bg-blue-100 "
              : "text-gray-600 bg-transparent "
          ),
        };
      },
      filterOperator: {
        className: classNames(
          "px-5 py-3 border-b border-solid border-gray-300 text-slate-700 bg-slate-50 rounded-t-md",
          "" // Dark Mode
        ),
      },
      filterOperatorDropdown: {
        root: "min-[0px]:flex",
      },
      filterConstraint: "p-5 border-b border-solid border-gray-300 ",
      filterAddRule: "py-3 px-5",
      filterAddRuleButton: {
        root: "justify-center w-full min-[0px]:text-sm",
        label: "flex-auto grow-0",
        icon: "mr-2",
      },
      filterRemoveButton: {
        root: "ml-2",
        label: "grow-0",
      },
      filterButtonbar: "flex items-center justify-between p-5",
      filterClearButton: {
        root: "w-auto min-[0px]:text-sm border-blue-500 text-blue-500 px-4 py-3",
      },
      filterApplyButton: {
        root: "w-auto min-[0px]:text-sm px-4 py-3",
      },
      filterMenuButton: function filterMenuButton(_ref180) {
        var context = _ref180.context;
        return {
          className: classNames(
            "inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative ml-2",
            "w-8 h-8 rounded-[50%]",
            "transition duration-200",
            "hover:text-slate-700 hover:bg-gray-300/20",
            // Hover
            "focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]",
            // Focus
            "",
            // Dark Mode
            {
              "bg-blue-50 text-blue-700": context.active,
            }
          ),
        };
      },
      headerFilterClearButton: function headerFilterClearButton(_ref181) {
        var context = _ref181.context;
        return {
          className: classNames(
            "inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative",
            "text-left bg-transparent m-0 p-0 border-none select-none ml-2",
            {
              invisible: !context.hidden,
            }
          ),
        };
      },
      columnResizer:
        "block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent",
      rowreordericon: "cursor-move",
      rowEditorInitButton: {
        className: classNames(
          "inline-flex items-center justify-center overflow-hidden relative",
          "text-left cursor-pointer select-none",
          "w-8 h-8 border-0 rounded-[50%]",
          "transition duration-200",
          "text-slate-700 border-transparent",
          "focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]",
          //Focus
          "hover:text-slate-700 hover:bg-gray-300/20",
          //Hover
          "" // Dark Mode
        ),
      },
      rowEditorSaveButton: {
        className: classNames(
          "inline-flex items-center justify-center overflow-hidden relative",
          "text-left cursor-pointer select-none",
          "w-8 h-8 border-0 rounded-[50%]",
          "transition duration-200",
          "text-slate-700 border-transparent",
          "focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]",
          //Focus
          "hover:text-slate-700 hover:bg-gray-300/20",
          //Hover
          "" // Dark Mode
        ),
      },
      rowEditorCancelButton: {
        className: classNames(
          "inline-flex items-center justify-center overflow-hidden relative",
          "text-left cursor-pointer select-none",
          "w-8 h-8 border-0 rounded-[50%]",
          "transition duration-200",
          "text-slate-700 border-transparent",
          "focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]",
          //Focus
          "hover:text-slate-700 hover:bg-gray-300/20",
          //Hover
          "" // Dark Mode
        ),
      },
      radioButton: {
        className: classNames(
          "relative inline-flex cursor-pointer select-none align-bottom",
          "w-6 h-6"
        ),
      },
      radioButtonInput: {
        className: classNames(
          "w-full h-full top-0 left-0 absolute appearance-none select-none",
          "p-0 m-0 opacity-0 z-[1] rounded-[50%] outline-none",
          "cursor-pointer peer"
        ),
      },
      radioButtonBox: function radioButtonBox(_ref182) {
        var context = _ref182.context;
        return {
          className: classNames(
            "flex items-center justify-center",
            "h-6 w-6 rounded-full border-2 text-gray-700 transition duration-200 ease-in-out",
            context.checked
              ? "border-blue-500 bg-blue-500 "
              : "border-gray-300 bg-white ",
            {
              "hover:border-blue-500 focus:shadow-input-focus focus:outline-none focus:outline-offset-0 ":
                !context.disabled,
              "cursor-default opacity-60": context.disabled,
            }
          ),
        };
      },
      radioButtonIcon: function radioButtonIcon(_ref183) {
        var context = _ref183.context;
        return {
          className: classNames(
            "transform rounded-full",
            "block h-3 w-3 bg-white transition duration-200 ",
            {
              "backface-hidden scale-10 invisible": context.checked === false,
              "visible scale-100 transform": context.checked === true,
            }
          ),
        };
      },
      headercheckboxwrapper: {
        className: classNames(
          "cursor-pointer inline-flex relative select-none align-bottom",
          "w-6 h-6"
        ),
      },
      headerCheckbox: function headerCheckbox(_ref184) {
        var context = _ref184.context;
        return {
          className: classNames(
            "flex items-center justify-center",
            "border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200",
            context.checked
              ? "border-blue-500 bg-blue-500 "
              : "border-gray-300 bg-white ",
            {
              "hover:border-blue-500 ": !context.disabled,
              "cursor-default opacity-60": context.disabled,
            }
          ),
        };
      },
      headercheckboxicon:
        "w-4 h-4 transition-all duration-200 text-white text-base ",
      checkboxwrapper: {
        className: classNames(
          "cursor-pointer inline-flex relative select-none align-bottom",
          "w-6 h-6"
        ),
      },
      checkbox: function checkbox(_ref185) {
        var context = _ref185.context;
        return {
          className: classNames(
            "flex items-center justify-center",
            "border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200",
            context.checked
              ? "border-blue-500 bg-blue-500 "
              : "border-gray-300 bg-white ",
            {
              "hover:border-blue-500 ": !context.disabled,
              "cursor-default opacity-60": context.disabled,
            }
          ),
        };
      },
      checkboxicon: "w-4 h-4 transition-all duration-200 text-white text-base ",
      transition: TRANSITIONS.overlay,
    },
    bodyRow: function bodyRow(_ref186) {
      var context = _ref186.context;
      return {
        className: classNames(
          context.selected
            ? "bg-blue-50 text-blue-700 "
            : "bg-white text-gray-600 ",
          context.stripedRows
            ? context.index % 2 === 0
              ? "bg-white text-gray-600 "
              : "bg-blue-50/50 text-gray-600 "
            : "",
          "transition duration-200",
          "focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]",
          // Focus
          "",
          // Dark Mode
          {
            "cursor-pointer": context.selectable,
            "hover:bg-gray-300/20 hover:text-gray-600":
              context.selectable && !context.selected, // Hover
          }
        ),
      };
    },
    rowExpansion: "bg-white text-gray-600 ",
    rowGroupHeader: {
      className: classNames(
        "sticky z-[1]",
        "bg-white text-gray-600",
        "transition duration-200"
      ),
    },
    rowgroupFooter: {
      className: classNames(
        "sticky z-[1]",
        "bg-white text-gray-600",
        "transition duration-200"
      ),
    },
    rowgrouptoggler: {
      className: classNames(
        "text-left m-0 p-0 cursor-pointer select-none",
        "inline-flex items-center justify-center overflow-hidden relative",
        "w-8 h-8 text-gray-500 border-0 bg-transparent rounded-[50%]",
        "transition duration-200",
        "" // Dark Mode
      ),
    },
    rowgrouptogglericon: "inline-block w-4 h-4",
    resizeHelper: "absolute hidden w-px z-10 bg-blue-500 ",
  },
  selectbutton: {
    root: function root(_ref48) {
      var props = _ref48.props;
      return {
        className: classNames({
          "opacity-60 select-none pointer-events-none cursor-default":
            props.disabled,
        }),
      };
    },
    button: function button(_ref49) {
      var context = _ref49.context;
      return {
        className: classNames(
          "inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative",
          "px-4 py-3",
          "transition duration-200 border border-r-0",
          "first:rounded-l-md first:rounded-tr-none first:rounded-br-none last:border-r last:rounded-tl-none last:rounded-bl-none last:rounded-r-md",
          "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] ",
          {
            "bg-white ": !context.selected,
            "bg-blue-500 border-blue-500 text-white hover:bg-blue-600":
              context.selected,
            "opacity-60 select-none pointer-events-none cursor-default":
              context.disabled,
          }
        ),
      };
    },
    label: "font-bold",
  },
  dropdown: {
    root: function root(_ref61) {
      var props = _ref61.props;
      return {
        className: classNames(
          "cursor-pointer inline-flex relative select-none",
          "bg-white border border-gray-400 transition-colors duration-200 ease-in-out rounded-md",
          "",
          "w-full md:w-56",
          "hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] ",
          {
            "opacity-60 select-none pointer-events-none cursor-default":
              props.disabled,
          }
        ),
      };
    },
    input: function input(_ref62) {
      var props = _ref62.props;
      return {
        className: classNames(
          "cursor-pointer block flex flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative",
          "bg-transparent border-0 text-gray-800",
          "",
          "p-3 transition duration-200 bg-transparent rounded appearance-none font-sans text-base",
          "focus:outline-none focus:shadow-none",
          {
            "pr-7": props.showClear,
          }
        ),
      };
    },
    trigger: {
      className: classNames(
        "flex items-center justify-center shrink-0",
        "bg-transparent text-gray-500 w-12 rounded-tr-lg rounded-br-lg"
      ),
    },
    wrapper: {
      className:
        "max-h-[200px] overflow-auto bg-white text-gray-700 border-0 rounded-md shadow-lg ",
    },
    list: "py-3 list-none m-0",
    item: function item(_ref63) {
      var context = _ref63.context;
      return {
        className: classNames(
          "cursor-pointer font-normal overflow-hidden relative whitespace-nowrap",
          "m-0 p-3 border-0  transition-shadow duration-200 rounded-none",
          {
            "text-gray-700 hover:text-gray-700 hover:bg-gray-200 ":
              !context.focused && !context.selected,
            "bg-gray-300 text-gray-700 ": context.focused && !context.selected,
            "bg-blue-100 text-blue-700 ": context.focused && context.selected,
            "bg-blue-50 text-blue-700 ": !context.focused && context.selected,
            "opacity-60 select-none pointer-events-none cursor-default":
              context.disabled,
          }
        ),
      };
    },
    itemGroup: {
      className: classNames(
        "m-0 p-3 text-gray-800 bg-white font-bold",
        "",
        "cursor-auto"
      ),
    },
    header: {
      className: classNames(
        "p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg",
        ""
      ),
    },
    filterContainer: "relative",
    filterInput: {
      className: classNames(
        "pr-7 -mr-7",
        "w-full",
        "font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none",
        "",
        "hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] "
      ),
    },
    filterIcon: "-mt-2 absolute top-1/2",
    clearIcon: "text-gray-500 right-12 -mt-2 absolute top-1/2",
    transition: TRANSITIONS.overlay,
  },
  avatar: {
    root: function root(_ref88) {
      var props = _ref88.props,
        state = _ref88.state;
      return {
        className: classNames(
          "flex items-center justify-center",
          "bg-gray-200 ",
          {
            "rounded-lg": props.shape == "square",
            "rounded-full": props.shape == "circle",
          },
          {
            "text-base h-8 w-8": props.size == null || props.size == "normal",
            "w-12 h-12 text-xl": props.size == "large",
            "w-16 h-16 text-2xl": props.size == "xlarge",
          },
          {
            "-ml-4 border-2 border-white ": state.nested,
          }
        ),
      };
    },
    image: "h-full w-full",
  },
  button: {
    root: function root(_ref24) {
      var props = _ref24.props,
        context = _ref24.context;
      return {
        className: classNames(
          "items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom",
          "transition duration-200 ease-in-out",
          "focus:outline-none focus:outline-offset-0",
          {
            "text-white dark:text-gray-900 bg-blue-500 dark:bg-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:border-blue-600 dark:hover:border-blue-500 focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              !props.link &&
              props.severity === null &&
              !props.text &&
              !props.outlined &&
              !props.plain,
            "text-blue-600 bg-transparent border-transparent focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              props.link,
          },
          {
            "focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(176,185,198,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(203,213,225,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              props.severity === "secondary",
            "focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(136,234,172,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(134,239,172,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              props.severity === "success",
            "focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              props.severity === "info",
            "focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(250,207,133,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(252,211,77,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              props.severity === "warning",
            "focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(212,170,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(216,180,254,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              props.severity === "help",
            "focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(247,162,162,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(252,165,165,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              props.severity === "danger",
          },
          {
            "text-white dark:text-gray-900 bg-gray-500 dark:bg-gray-400 border border-gray-500 dark:border-gray-400 hover:bg-gray-600 dark:hover:bg-gray-500 hover:border-gray-600 dark:hover:border-gray-500":
              props.severity === "secondary" &&
              !props.text &&
              !props.outlined &&
              !props.plain,
            "text-white dark:text-gray-900 bg-green-500 dark:bg-green-400 border border-green-500 dark:border-green-400 hover:bg-green-600 dark:hover:bg-green-500 hover:border-green-600 dark:hover:border-green-500":
              props.severity === "success" &&
              !props.text &&
              !props.outlined &&
              !props.plain,
            "text-white dark:text-gray-900 dark:bg-blue-400 bg-blue-500 dark:bg-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500":
              props.severity === "info" &&
              !props.text &&
              !props.outlined &&
              !props.plain,
            "text-white dark:text-gray-900 bg-orange-500 dark:bg-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-600 dark:hover:bg-orange-500 hover:border-orange-600 dark:hover:border-orange-500":
              props.severity === "warning" &&
              !props.text &&
              !props.outlined &&
              !props.plain,
            "text-white dark:text-gray-900 bg-purple-500 dark:bg-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 hover:border-purple-600 dark:hover:border-purple-500":
              props.severity === "help" &&
              !props.text &&
              !props.outlined &&
              !props.plain,
            "text-white dark:text-gray-900 bg-red-500 dark:bg-red-400 border border-red-500 dark:border-red-400 hover:bg-red-600 dark:hover:bg-red-500 hover:border-red-600 dark:hover:border-red-500":
              props.severity === "danger" &&
              !props.text &&
              !props.outlined &&
              !props.plain,
          },
          {
            "shadow-lg": props.raised,
          },
          {
            "rounded-md": !props.rounded,
            "rounded-full": props.rounded,
          },
          {
            "bg-transparent border-transparent": props.text && !props.plain,
            "text-blue-500 dark:text-blue-400 hover:bg-blue-300/20":
              props.text &&
              (props.severity === null || props.severity === "info") &&
              !props.plain,
            "text-gray-500 dark:text-grayy-400 hover:bg-gray-300/20":
              props.text && props.severity === "secondary" && !props.plain,
            "text-green-500 dark:text-green-400 hover:bg-green-300/20":
              props.text && props.severity === "success" && !props.plain,
            "text-orange-500 dark:text-orange-400 hover:bg-orange-300/20":
              props.text && props.severity === "warning" && !props.plain,
            "text-purple-500 dark:text-purple-400 hover:bg-purple-300/20":
              props.text && props.severity === "help" && !props.plain,
            "text-red-500 dark:text-red-400 hover:bg-red-300/20":
              props.text && props.severity === "danger" && !props.plain,
          },
          {
            "shadow-lg": props.raised && props.text,
          },
          {
            "text-gray-500 hover:bg-gray-300/20": props.plain & props.text,
            "text-gray-500 border border-gray-500 hover:bg-gray-300/20":
              props.plain & props.outlined,
            "text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600":
              props.plain & !props.outlined & !props.text,
          },
          {
            "bg-transparent border": props.outlined && !props.plain,
            "text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-300/20":
              props.outlined &&
              (props.severity === null || props.severity === "info") &&
              !props.plain,
            "text-gray-500 dark:text-gray-400 border border-gray-500 dark:border-gray-400 hover:bg-gray-300/20":
              props.outlined && props.severity === "secondary" && !props.plain,
            "text-green-500 dark:text-green-400 border border-green-500 dark:border-green-400 hover:bg-green-300/20":
              props.outlined && props.severity === "success" && !props.plain,
            "text-orange-500 dark:text-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-300/20":
              props.outlined && props.severity === "warning" && !props.plain,
            "text-purple-500 dark:text-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-300/20":
              props.outlined && props.severity === "help" && !props.plain,
            "text-red-500 dark:text-red-400 border border-red-500 dark:border-red-400 hover:bg-red-300/20":
              props.outlined && props.severity === "danger" && !props.plain,
          },
          {
            "px-4 py-3 text-base": props.size === null,
            "text-xs py-2 px-3": props.size === "small",
            "text-xl py-3 px-4": props.size === "large",
          },
          {
            "flex-column": props.iconPos == "top" || props.iconPos == "bottom",
          },
          {
            "opacity-60 pointer-events-none cursor-default":
              context === null || context === void 0
                ? void 0
                : context.disabled,
          }
        ),
      };
    },
    label: function label(_ref25) {
      var props = _ref25.props;
      return {
        className: classNames(
          "flex-1",
          "duration-200",
          "font-bold",
          {
            "hover:underline": props.link,
          },
          {
            "invisible w-0": props.label == null,
          }
        ),
      };
    },
    icon: function icon(_ref26) {
      var props = _ref26.props;
      return {
        className: classNames("mx-0", {
          "mr-2": props.iconPos == "left" && props.label != null,
          "ml-2 order-1": props.iconPos == "right" && props.label != null,
          "mb-2": props.iconPos == "top" && props.label != null,
          "mt-2 order-2": props.iconPos == "bottom" && props.label != null,
        }),
      };
    },
    loadingIcon: function loadingIcon(_ref27) {
      var props = _ref27.props;
      return {
        className: classNames("mx-0", {
          "mr-2":
            props.loading && props.iconPos == "left" && props.label != null,
          "ml-2 order-1":
            props.loading && props.iconPos == "right" && props.label != null,
          "mb-2":
            props.loading && props.iconPos == "top" && props.label != null,
          "mt-2 order-2":
            props.loading && props.iconPos == "bottom" && props.label != null,
        }),
      };
    },
    badge: function badge(_ref28) {
      var props = _ref28.props;
      return {
        className: classNames({
          "ml-2 w-4 h-4 leading-none flex items-center justify-center":
            props.badge,
        }),
      };
    },
  },
};
