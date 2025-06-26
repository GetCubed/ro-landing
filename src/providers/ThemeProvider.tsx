'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes, Theme, ThemeName } from '../styles/theme';

interface ThemeContextType {
    themeName: ThemeName;
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<ThemeName>('macchiato');

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('catppuccin-theme') as ThemeName;
        if (savedTheme && (savedTheme === 'latte' || savedTheme === 'macchiato')) {
            setThemeName(savedTheme);
        }
    }, []);

    // Save theme to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('catppuccin-theme', themeName);
    }, [themeName]);

    const toggleTheme = () => {
        setThemeName(prev => prev === 'macchiato' ? 'latte' : 'macchiato');
    };

    const setTheme = (theme: ThemeName) => {
        setThemeName(theme);
    };

    const currentTheme = themes[themeName];

    const contextValue: ThemeContextType = {
        themeName,
        theme: currentTheme,
        toggleTheme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            <StyledThemeProvider theme={currentTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
