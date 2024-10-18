import { createContext } from 'preact';
import { useState, useContext } from 'preact/hooks';
import { themedColors, staticColors } from '../../../constants/colors';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(false);

    const toggleTheme = () => {
        setIsLightTheme(prevTheme => !prevTheme);
    };

    const currentTheme = isLightTheme ? themedColors.light : themedColors.dark;

    return (
        <ThemeContext.Provider value={{ theme: {...currentTheme, ...staticColors}, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
