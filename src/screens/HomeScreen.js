import React, { useState, useMemo, useCallback } from 'react';
import { View, FlatList, StyleSheet, RefreshControl, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { FilterChips } from '../components/FilterChips';
import { NewsCard } from '../components/NewsCard';
import { newsData, categories } from '../data/newsData';

export function HomeScreen({ navigation }) {
    const { colors } = useTheme();
    const [refreshing, setRefreshing] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Semua');

    const filteredNews = useMemo(() => {
        let result = newsData;

        // Filter by category
        if (selectedCategory !== 'Semua') {
            result = result.filter((article) => article.category === selectedCategory);
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                (article) =>
                    article.title.toLowerCase().includes(query) ||
                    article.summary.toLowerCase().includes(query) ||
                    article.source.toLowerCase().includes(query)
            );
        }

        return result;
    }, [searchQuery, selectedCategory]);

    const handleRefresh = useCallback(() => {
        setRefreshing(true);
        // Simulate refresh
        setTimeout(() => {
            setRefreshing(false);
        }, 1500);
    }, []);

    const handleArticlePress = useCallback(
        (article) => {
            navigation.navigate('Detail', { article });
        },
        [navigation]
    );

    const renderItem = useCallback(
        ({ item }) => (
            <NewsCard article={item} onPress={() => handleArticlePress(item)} />
        ),
        [handleArticlePress]
    );

    const keyExtractor = useCallback((item) => item.id, []);

    const ListEmptyComponent = useMemo(
        () => (
            <View style={styles.emptyContainer}>
                <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                    Tidak ada berita ditemukan
                </Text>
            </View>
        ),
        [colors.textSecondary]
    );

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Header title="Berita Terkini" />
            <SearchBar onSearch={setSearchQuery} />
            <FilterChips
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />
            <FlatList
                data={filteredNews}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={ListEmptyComponent}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={[colors.primary]}
                        tintColor={colors.primary}
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContent: {
        paddingBottom: 16,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 60,
    },
    emptyText: {
        fontSize: 16,
    },
});
