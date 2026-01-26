import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from '../context/ThemeContext';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { MembersScreen } from '../screens/MembersScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
    const { colors } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.card,
                    borderTopColor: colors.border,
                    borderTopWidth: 0.5,
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Beranda',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export function AppNavigator() {
    const { colors, isDarkMode } = useTheme();

    return (
        <NavigationContainer
            theme={{
                dark: isDarkMode,
                colors: {
                    primary: colors.primary,
                    background: colors.background,
                    card: colors.card,
                    text: colors.text,
                    border: colors.border,
                    notification: colors.accent,
                },
                fonts: {
                    regular: { fontFamily: 'System', fontWeight: '400' },
                    medium: { fontFamily: 'System', fontWeight: '500' },
                    bold: { fontFamily: 'System', fontWeight: '700' },
                    heavy: { fontFamily: 'System', fontWeight: '900' },
                },
            }}
        >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeTabs" component={HomeTabs} />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={{
                        animation: 'slide_from_right',
                    }}
                />
                 <Stack.Screen
                    name="About"
                    component={AboutScreen}
                    options={{ animation: 'slide_from_right' }}
                />
                <Stack.Screen
                 name="Members"
                 component={MembersScreen}
                options={{ animation: 'slide_from_right' }}
    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
