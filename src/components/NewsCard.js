import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

export function NewsCard({ article, onPress }) {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            style={[
                styles.card,
                {
                    backgroundColor: colors.card,
                    shadowColor: colors.shadow,
                    borderColor: colors.border,
                },
            ]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Image source={{ uri: article.imageUrl }} style={styles.image} />
            <View style={styles.content}>
                <View style={styles.categoryRow}>
                    <View style={[styles.categoryBadge, { backgroundColor: colors.primary + '20' }]}>
                        <Text style={[styles.categoryText, { color: colors.primary }]}>
                            {article.category}
                        </Text>
                    </View>
                    <View style={styles.dateRow}>
                        <Icon name="clock" size={12} color={colors.textSecondary} />
                        <Text style={[styles.dateText, { color: colors.textSecondary }]}>
                            {article.date}
                        </Text>
                    </View>
                </View>
                <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
                    {article.title}
                </Text>
                <Text style={[styles.summary, { color: colors.textSecondary }]} numberOfLines={2}>
                    {article.summary}
                </Text>
                <View style={styles.sourceRow}>
                    <Icon name="external-link" size={12} color={colors.textSecondary} />
                    <Text style={[styles.sourceText, { color: colors.textSecondary }]}>
                        {article.source}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        borderWidth: 0.5,
    },
    image: {
        width: '100%',
        height: 180,
        backgroundColor: '#E0E0E0',
    },
    content: {
        padding: 16,
    },
    categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    categoryBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 4,
    },
    categoryText: {
        fontSize: 12,
        fontWeight: '600',
    },
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 12,
        marginLeft: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 24,
        marginBottom: 8,
    },
    summary: {
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 12,
    },
    sourceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sourceText: {
        fontSize: 12,
        marginLeft: 4,
    },
});
