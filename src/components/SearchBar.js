import React, { useState, useCallback } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/Feather';

export function SearchBar({ onSearch, placeholder = 'Cari berita...' }) {
    const { colors } = useTheme();
    const [query, setQuery] = useState('');

    const handleChangeText = useCallback((text) => {
        setQuery(text);
        onSearch(text);
    }, [onSearch]);

    const handleClear = useCallback(() => {
        setQuery('');
        onSearch('');
    }, [onSearch]);

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: colors.backgroundSecondary,
                    borderColor: colors.border,
                },
            ]}
        >
            <Icon name="search" size={20} color={colors.textSecondary} style={styles.searchIcon} />
            <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder={placeholder}
                placeholderTextColor={colors.textSecondary}
                value={query}
                onChangeText={handleChangeText}
                returnKeyType="search"
            />
            {query.length > 0 && (
                <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
                    <Icon name="x-circle" size={18} color={colors.textSecondary} />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 12,
        borderWidth: 1,
        height: 48,
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 0,
    },
    clearButton: {
        padding: 4,
    },
});
