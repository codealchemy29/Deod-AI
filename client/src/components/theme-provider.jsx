import { createContext, useContext, useEffect, useState } from "react";
var ThemeProviderContext = createContext(undefined);
export function ThemeProvider(_a) {
    var children = _a.children;
    var _b = useState(function () {
        if (typeof window !== "undefined") {
            var stored = localStorage.getItem("deod-theme");
            if (stored)
                return stored;
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return "light";
    }), theme = _b[0], setTheme = _b[1];
    useEffect(function () {
        var root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("deod-theme", theme);
    }, [theme]);
    var toggleTheme = function () {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (<ThemeProviderContext.Provider value={{ theme: theme, setTheme: setTheme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>);
}
export function useTheme() {
    var context = useContext(ThemeProviderContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
