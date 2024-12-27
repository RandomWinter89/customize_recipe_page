// import React, { createContext, useState } from 'react';

// type ThemeContextType = {
//     theme: string;
//     setTheme: React.Dispatch<React.SetStateAction<string>>;
// };

// export const ThemeContext = createContext<ThemeContextType>(
//     null as unknown as ThemeContextType,
// );

// //==========PROVIDER==========

// type ThemeProviderProps = {
//     children: React.ReactNode,
// };

// export const ThemeProvider = ({children}: ThemeProviderProps) => {
//     const [theme, setTheme] = useState<string>("light");
//     const value = { theme, setTheme, };

//     return (
//         <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
//     );
// };