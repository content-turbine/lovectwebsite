// import original module declarations
import "styled-components";
import { CSSProp } from "styled-components";

// Extend styled-components module
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      text: string;
      background: string;
      light: string;
      dark: string;
      peach: string;
      teal: string;
    };
    borderRadius: string;
  }
}

// Allow css prop on all elements
declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}
