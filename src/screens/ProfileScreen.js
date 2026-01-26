import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView,Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logonews.png';

export function ProfileScreen() {
    const navigation = useNavigation();
    const { colors, isDarkMode, toggleTheme } = useTheme();
    const insets = useSafeAreaInsets();

    const SettingItem = ({
        icon,
        title,
        rightElement,
        onPress,
    }) => (
        <TouchableOpacity
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
            onPress={onPress}
            disabled={!onPress}
            activeOpacity={onPress ? 0.7 : 1}
        >
            <View style={styles.settingLeft}>
                <Icon name={icon} size={22} color={colors.primary} />
                <Text style={[styles.settingTitle, { color: colors.text }]}>{title}</Text>
            </View>
            {rightElement || <Icon name="chevron-right" size={22} color={colors.textSecondary} />}
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View
                style={[
                    styles.header,
                    {
                        backgroundColor: colors.background,
                        paddingTop: insets.top + 8,
                        borderBottomColor: colors.border,
                    },
                ]}
            >
                <Text style={[styles.headerTitle, { color: colors.text }]}>Profil</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* User Info Section */}
                <View style={styles.profileSection}>
                
                    <View style={[styles.avatar,]}>
                        <Image
                        source={logo}
                        style={styles.logo}
                        resizeMode="contain"/>
                    </View>
                    <Text style={[styles.userName, { color: colors.text }]}>Selamat datang </Text>
                    <Text style={[styles.userEmail, { color: colors.textSecondary }]}>
                        Di aplikasi Kabar rakyat
                    </Text>
                </View>

                {/* Settings Section */}
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>
                        PENGATURAN
                    </Text>
                    <View style={[styles.settingsCard, { backgroundColor: colors.card }]}>
                        <SettingItem
                            icon={isDarkMode ? 'moon' : 'sun'}
                            title="Mode Gelap"
                            rightElement={
                                <Switch
                                    value={isDarkMode}
                                    onValueChange={toggleTheme}
                                    trackColor={{ false: colors.border, true: colors.primary + '80' }}
                                    thumbColor={isDarkMode ? colors.primary : '#FFFFFF'}
                                />
                            }
                        />
                        <SettingItem icon="users" title="Anggota" onPress={() => navigation.navigate('Members')} />
                        <SettingItem icon="info" title="Tentang Aplikasi" onPress={() => navigation.navigate('About')}/>
                    </View>
                </View>
                <Text style={[styles.versionText, { color: colors.textSecondary }]}>
                    Berita Terkini v1.0.0
                </Text>
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
    profileSection: {
        alignItems: 'center',
        paddingVertical: 30,
        marginBottom: 20,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    userName: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 4,
    },
    userEmail: {
        fontSize: 14,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: '600',
        marginHorizontal: 20,
        marginBottom: 10,
        letterSpacing: 1,
    },
    settingsCard: {
        marginHorizontal: 16,
        borderRadius: 12,
        overflow: 'hidden',
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderBottomWidth: 0.5,
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingTitle: {
        fontSize: 16,
        marginLeft: 14,
    },
    versionText: {
        fontSize: 12,
        textAlign: 'center',
        marginVertical: 20,
    },
    logo: {
    width: 280,
    height: 120,
    marginBottom: 16,
},
});
