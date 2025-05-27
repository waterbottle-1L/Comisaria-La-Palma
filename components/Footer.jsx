import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Footer = ({ activeTab, navigation }) => {
  const getColor = (tab) => (activeTab === tab ? '#F9C449' : '#fff');

  return (
    <View style={styles.footer}>
      <Pressable
        style={styles.footerItem}
        onPress={() => navigation.navigate('Inicio')}
      >
        <Ionicons name="home" size={22} color={getColor('home')} />
        <Text style={[styles.footerText, activeTab === 'home' && styles.activeText]}>
          Inicio
        </Text>
      </Pressable>

      <Pressable
        style={styles.footerItem}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Ionicons name="person" size={22} color={getColor('perfil')} />
        <Text style={[styles.footerText, activeTab === 'perfil' && styles.activeText]}>
          Perfil
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: '#012D1A',
    paddingVertical: 12,
    justifyContent: 'space-around',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#fff',
    marginTop: 2,
  },
  activeText: {
    color: '#F9C449',
    fontWeight: 'bold',
  },
});
