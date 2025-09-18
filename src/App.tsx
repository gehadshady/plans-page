import Plans from "./components/Plans";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import rtlCache from "./utils/rtlCache";
import theme from "./utils/arabicTheme";

function App() {
  return (
    <>
      <CacheProvider value={rtlCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Plans />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
