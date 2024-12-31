import { useState } from 'react'
import { Provider } from 'react-redux'
import { ThemeContext } from './contexts/themeContext';

import Homepage from './pages/home';
import AddRecipe from './pages/addPage';

import store from "./store"
import './main.css'

const App = () => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <AddRecipe/>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
