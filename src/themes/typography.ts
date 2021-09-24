/**
 * Typography used in theme
 */
import {NavObject} from "./index";
import {TypographyOptions} from "@material-ui/core/styles/createTypography";

export function themeTypography(navObject: NavObject):TypographyOptions {
  return {
    fontFamily: navObject.customization.fontFamily,
    h6: {
      fontWeight: "bold",
      color: navObject.textDark,
      fontSize: "0.75rem"
    },
    h5: {
      fontSize: "0.875rem",
      color: navObject.textDark,
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1rem",
      color: navObject.textDark,
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.25rem",
      color: navObject.textDark,
      fontWeight: 600
    },
    h2: {
      fontSize: "1.5rem",
      color: navObject.textDark,
      fontWeight: "bold",
    },
    h1: {
      fontSize: "2.125rem",
      color: navObject.textDark,
      fontWeight: "bold",
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: "bold",
      color: navObject.textDark
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: "bold",
      color: navObject.textSecondary
    },
    caption: {
      fontSize: "0.75rem",
      color: navObject.textSecondary,
      fontWeight: "bold",
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: "bold",
      lineHeight: "1.334em"
    },
    body2: {
      letterSpacing: "0em",
      fontWeight: "bold",
      lineHeight: "1.5em",
      color: navObject.textPrimary
    },
    mainContent: {
      backgroundColor: navObject.background,
      width: "100%",
      minHeight: "calc(100vh - 88px)",
      flexGrow: 1,
      padding: "20px",
      marginTop: "88px",
      marginRight: "20px",
      borderRadius: navObject.customization.borderRadius + "px"
    },
    menuCaption: {
      fontSize: "0.875rem",
      fontWeight: 600,
      color: navObject.textDark,
      padding: "6px",
      textTransform: "capitalize",
      marginTop: "10px"
    },
    subMenuCaption: {
      fontSize: "0.6875rem",
      fontWeight: 600,
      color: navObject.textSecondary,
      textTransform: "capitalize"
    },
    commonAvatar: {
      cursor: "pointer",
      borderRadius: "8px"
    },
    smallAvatar: {
      width: "22px",
      height: "22px",
      fontSize: "1rem"
    },
    mediumAvatar: {
      width: "34px",
      height: "34px",
      fontSize: "1.2rem"
    },
    largeAvatar: {
      width: "44px",
      height: "44px",
      fontSize: "1.5rem"
    }
  };
}