import { useContext } from "react"
import { ThemeContext } from "./theme-context"

export default function LightModeChild() {
    const { theme, onChangeTheme } = useContext(ThemeContext)
  return (
    <button onClick={onChangeTheme}>{theme == "light" ? "Dark Mode" : "Light Mode"} (Child)</button>
  )
}