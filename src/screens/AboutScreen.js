import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/Feather';
import logo from '../assets/logonews.png';


export function AboutScreen() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
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
          Tentang Aplikasi
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.logoWrapper}>
      <Image
      source={logo}
      style={styles.logo}
      resizeMode="contain"/>
      </View>


        <Text style={[styles.appName, { color: colors.text }]}>
          Kabar rakyat
        </Text>

        <Text style={[styles.description, { color: colors.textSecondary }]}>
          Kabar rakyat adalah aplikasi berita yang menyajikan informasi terbaru
          dari berbagai kategori seperti politik, olahraga, teknologi,
          ekonomi, hiburan, dan topik penting lainnya.
          Aplikasi ini dirancang untuk memberikan pengalaman membaca berita
          yang cepat, ringan, dan nyaman dengan tampilan modern serta dukungan
          mode gelap.
        </Text>

        <Text style={[styles.version, { color: colors.textSecondary }]}>
          Versi 1.0.0
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
  content: {
    alignItems: 'center',
    padding: 24,
  },
  appName: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'justify',
    marginBottom: 12,
  },
  version: {
    marginTop: 20,
    fontSize: 13,
  },
  logo: {
  width: 164,
  height: 154,
},
});
