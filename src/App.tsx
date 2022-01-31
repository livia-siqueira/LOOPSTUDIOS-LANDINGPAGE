import Header from "./components/Header";
import theme from "./shared/styles/theme";
import { ThemeProvider } from "styled-components";
import { Global } from "./shared/styles/Global";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header />
      <LandingPage/>
    </ThemeProvider>
  );
}

export default App;
