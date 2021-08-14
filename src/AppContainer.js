import { useState } from 'react'
import { ThemeContext,THEMES } from "./themeContext"
import { getFruits } from './fruits.js'

import { withLoading } from './hoc/WithLoading.js'
import App from "./App";

const AppComponent = withLoading(App, getFruits);

export const AppContainer = () => {
  const [theme, setTheme] = useState(THEMES.dark);

  const toggleTheme = () => {
    const nextTheme = (theme === THEMES.dark) ? THEMES.light : THEMES.dark;
    setTheme(nextTheme);
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <AppComponent />
    </ThemeContext.Provider>
  )
}