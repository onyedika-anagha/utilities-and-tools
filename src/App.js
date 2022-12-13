import React, { useContext, useEffect } from "react";
import "./dark-mode.scss";
import { Route, Routes } from "react-router-dom";
import Calculator from "./routes/calculator/calculator.component";
import { ThemeContext } from "./context/theme/theme.context";
import ConverterPage from "./routes/converter/converter.component";
import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";
import CryptoConverter from "./routes/currency/crypto-converter.component";
import CurrencyConverter from "./routes/currency/converter.component";

function App() {
  const { theme, setTheme } = useContext(ThemeContext),
    themeToggle = () => {
      if (theme === "dark") {
        setTheme("light");
        localStorage.setItem("theme", "light");
      } else {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      }
    };
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    }

    if (theme === "dark") {
      document
        .querySelector("body")
        .classList.add("dark_mode_active", "dark-mode");
    } else {
      document
        .querySelector("body")
        .classList.remove("dark_mode_active", "dark-mode");
    }
    return () => {
      // getAppMode();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/converter/*" element={<ConverterPage />} />
          <Route path="/currency/converter">
            <Route index element={<CurrencyConverter />} />
            <Route path="crypto" element={<CryptoConverter />} />
          </Route>
        </Route>
      </Routes>
      <div className="theme-toggle theme-toggle-btn-show">
        <a href="#!" className="back-to-top-btn" onClick={themeToggle}>
          {theme === "light" ? (
            <i className="fa fa-moon-o"></i>
          ) : (
            <i className="fa fa-sun-o"></i>
          )}
        </a>
      </div>
    </>
  );
}

export default App;
