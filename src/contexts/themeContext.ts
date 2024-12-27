import { Dispatch, SetStateAction, createContext, useContext } from "react"; 

//Setup simple context
export type ThemeContextType = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
};
export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {},
});

//Error to access
export const useThemeContext = () => {
    const currentContext = useContext(ThemeContext);

    if (!currentContext) {
        throw new Error( "To access useThemeContext, it must wrapped within <ThemeContext.Provider>");
    }

    return currentContext;
};