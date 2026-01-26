

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { AppNavigator } from './src/navigation/AppNavigator';

function AppContent() {
    const { isDarkMode } = useTheme();

    return (
        <>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor="transparent"
                translucent
            />
            <AppNavigator />
        </>
    );
}

function App() {
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <AppContent />
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

export default App;
