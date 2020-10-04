import React, { createContext, useState } from 'react';
import Switch from 'react-switch';

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => setIsDarkMode(!isDarkMode);

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};
