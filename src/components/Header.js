import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/Feather';

export function Header({ title, showBack = false, onBackPress }) {
    const { colors } = useTheme();
    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: colors.background,
                    paddingTop: insets.top + 8,
                    borderBottomColor: colors.border,
                },
            ]}
        >
            {showBack ? (
                <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color={colors.text} />
                </TouchableOpacity>
            ) : (
                <View style={styles.logoContainer}>
                    <Icon name="zap" size={24} color={colors.accent} />
                </View>
            )}
            <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
            <View style={styles.rightPlaceholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 12,
        borderBottomWidth: 0.5,
    },
    backButton: {
        padding: 4,
        width: 40,
    },
    logoContainer: {
        width: 40,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
    },
    rightPlaceholder: {
        width: 40,
    },
});
