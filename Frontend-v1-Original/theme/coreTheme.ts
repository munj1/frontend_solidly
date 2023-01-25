import { createTheme } from "@mui/material/styles";

export const colors = {
  blue: "#9D7ADB",
  red: "#cd4337",
  orange: "#ffb347",
  lightBlack: "rgba(0, 0, 0, 0.87)",
};

const coreTheme = createTheme({
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: [
      "Inter",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      // Portfolio balance numbers
      fontSize: "32px",
      fontWeight: 800,
      lineHeight: 1.167,
      ["@media (max-width:576px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "1.6rem",
      },
    },
    h2: {
      // Navigation tabs / section headers
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: 1.5,
      ["@media (max-width:576px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "1rem",
      },
    },
    h3: {
      // yearn title text YEARN
      fontFamily: [
        "Druk Wide Bold",
        "Inter",
        "Arial",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "sans-serif",
      ].join(","),
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.167,
      ["@media (max-width:576px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "1.2rem",
      },
    },
    h4: {
      // yearn title text finance
      fontSize: "1.5rem",
      letterSpacing: "0.3rem",
      fontWeight: 300,
      lineHeight: 1.167,
      ["@media (max-width:576px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "1.2rem",
      },
    },
    h5: {
      // card headers
      fontSize: "0.9rem",
      fontWeight: 700,
      lineHeight: 1.167,
      ["@media (max-width:576px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "0.7rem",
      },
    },
    h6: {
      // card headers
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.167,
      ["@media (max-width:576px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "1.2rem",
      },
    },
    subtitle1: {
      fontSize: "0.9rem",
      fontWeight: 300,
      lineHeight: 1.167,
      ["@media (max-width:576px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "0.7rem",
      },
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 300,
      lineHeight: 1.167,
      ["@media (max-width:576px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "0.8rem",
      },
    },
  },
  palette: {
    primary: {
      dark: "rgba(0, 0, 0, 0.87)",
      light: "rgba(0, 0, 0, 0.87)",
      contrastText: "rgba(0, 0, 0, 0.87)",
      main: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "#FFFFFF",
      dark: "#FFFFFF",
      light: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#dc3545",
      dark: "#dc3545",
      contrastText: "#dc3545",
      light: "#dc3545",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "50px",
        },
        outlinedSizeSmall: {
          fontSize: "0.7rem",
          padding: "6px 9px",
          ["@media (max-width:576px)"]: {
            // eslint-disable-line no-useless-computed-key
            padding: "3px 0px",
          },
        },
        sizeLarge: {
          padding: "19px 24px",
          minWidth: "150px",
        },
        textSizeLarge: {
          fontSize: "2.4rem",
          ["@media (max-width:576px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "2rem",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paperWidthSm: {
          maxWidth: "800px",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          border: "none",
          borderRadius: "12px",
          "&.Mui-selected": {
            border: "1px solid #06d3d7",
            backgroundColor: "rgba(0,0,0,0)",
          },
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          maxWidth: "calc(100vw - 24px)",
        },
        anchorOriginBottomLeft: {
          bottom: "12px",
          left: "12px",
          "@media (min-width: 960px)": {
            bottom: "50px",
            left: "80px",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: "0px",
          "&:before": {
            //underline color when textfield is inactive
            backgroundColor: "none",
            height: "0px",
          },
          "&$expanded": {
            margin: "0px",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0px 24px",
          "@media (max-width:576px)": {
            padding: "0px 6px",
          },
        },
        content: {
          margin: "0px !important",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          padding: "26px 24px",
        },
        body: {
          padding: "12px 24px",
          borderBottom: "none",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            //underline color when textfield is inactive
            borderBottom: "none !important",
          },
          "&:hover:not($disabled):before": {
            //underline color when hovered
            borderBottom: "none !important",
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "&:before": {
              borderBottom: "none",
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: "absolute",
          bottom: "0",
        },
      },
    },
  },
});

export default coreTheme;
