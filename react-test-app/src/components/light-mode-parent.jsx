import { useState } from "react"
import { ThemeContext } from "./theme-context";
import LightModeChild from "./light-mode-child";


export default function LightModeParent() {
    const [theme, setTheme] = useState("light");
    const onChangeTheme = () =>{
        setTheme((theme === "light" ? "dark" : "light"))
    }
  return (
    <>
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
        <h2>Theme (Parent): {theme}</h2>
        <LightModeChild />
    </ThemeContext.Provider>
    </>
  )
}