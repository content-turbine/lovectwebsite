import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

import "../styles/slick.css";
import "../styles/slick-theme.css";
import "../styles/fonts.css";
import "../styles/css/screen.css";
import "../styles/css/writers-portal/writersPortal.css";
import "../styles/css/ai/ai.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
