import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Header } from '../components/Header';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

export function DetailScreen({ navigation, route }) {
    const { colors } = useTheme();
    const { article } = route.params;

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Header title="Detail" showBack onBackPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={{ uri: article.imageUrl }} style={styles.heroImage} />
                <View style={styles.content}>
                    <View style={styles.metaRow}>
                        <View style={[styles.categoryBadge, { backgroundColor: colors.primary + '20' }]}>
                            <Text style={[styles.categoryText, { color: colors.primary }]}>
                                {article.category}
                            </Text>
                        </View>
                        <View style={styles.dateContainer}>
                            <Icon name="clock" size={14} color={colors.textSecondary} />
                            <Text style={[styles.dateText, { color: colors.textSecondary }]}>
                                {article.date}
                            </Text>
                        </View>
                    </View>

                    <Text style={[styles.title, { color: colors.text }]}>{article.title}</Text>

                    <View style={styles.sourceRow}>
                        <Icon name="link" size={14} color={colors.primary} />
                        <Text style={[styles.sourceText, { color: colors.primary }]}>
                            {article.source}
                        </Text>
                    </View>

                    <View style={[styles.divider, { backgroundColor: colors.border }]} />

                    <Text style={[styles.articleContent, { color: colors.text }]}>
                        {article.content}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heroImage: {
        width: width,
        height: 250,
        backgroundColor: '#E0E0E0',
    },
    content: {
        padding: 20,
    },
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    categoryBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
    categoryText: {
        fontSize: 13,
        fontWeight: '600',
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 13,
        marginLeft: 6,
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        lineHeight: 32,
        marginBottom: 12,
    },
    sourceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    sourceText: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 6,
    },
    divider: {
        height: 1,
        marginBottom: 20,
    },
    articleContent: {
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'justify',
    },
});
