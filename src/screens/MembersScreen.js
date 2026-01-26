import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/Feather';

export function MembersScreen() {
    const { colors } = useTheme();
    const insets = useSafeAreaInsets();

    const members = [
        {
            name: 'M.Nasrulloh.A',
            role: 'NIM',
            description: '16232009',
        },
        {
            name: 'M.Iqbal Saepul Bahri',
            role: 'NIM',
            description: '16232005',
        },
        {
            name: 'Ujang Ilham Nur Zamzam',
            role: 'NIM',
            description: '16231013',
        },
        {
            name: 'Zaenal Ahmad Asori',
            role: 'NIM',
            description: '16231010',
        },
    ];

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {/* Header */}
            <View
                style={[
                    styles.header,
                    {
                        paddingTop: insets.top + 12,
                        borderBottomColor: colors.border,
                    },
                ]}
            >
                <Text style={[styles.headerTitle, { color: colors.text }]}>
                    Anggota
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {members.map((member, index) => (
                    <View
                        key={index}
                        style={[styles.card, { backgroundColor: colors.card }]}
                    >
                        <View style={[styles.avatar, { backgroundColor: colors.primary + '20' }]}>
                            <Icon name="user" size={28} color={colors.primary} />
                        </View>

                        <View style={styles.info}>
                            <Text style={[styles.name, { color: colors.text }]}>
                                {member.name}
                            </Text>
                            <Text style={[styles.role, { color: colors.primary }]}>
                                {member.role}
                            </Text>
                            <Text style={[styles.description, { color: colors.textSecondary }]}>
                                {member.description}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingBottom: 12,
        borderBottomWidth: 0.5,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
    },
    content: {
        padding: 16,
    },
    card: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        alignItems: 'center',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 2,
    },
    role: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 6,
    },
    description: {
        fontSize: 13,
        lineHeight: 18,
    },
});
