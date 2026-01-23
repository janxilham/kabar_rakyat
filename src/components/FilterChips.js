import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export function FilterChips({ categories, selectedCategory, onSelectCategory }) {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {categories.map((category) => {
                    const isSelected = category === selectedCategory;
                    return (
                        <TouchableOpacity
                            key={category}
                            style={[
                                styles.chip,
                                {
                                    backgroundColor: isSelected ? colors.primary : colors.backgroundSecondary,
                                    borderColor: isSelected ? colors.primary : colors.border,
                                },
                            ]}
                            onPress={() => onSelectCategory(category)}
                            activeOpacity={0.7}
                        >
                            <Text
                                style={[
                                    styles.chipText,
                                    {
                                        color: isSelected ? '#FFFFFF' : colors.text,
                                        fontWeight: isSelected ? '600' : '400',
                                    },
                                ]}
                            >
                                {category}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 8,
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    chip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
        borderWidth: 1,
    },
    chipText: {
        fontSize: 14,
    },
});
