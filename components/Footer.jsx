import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';

export const Footer = ({ activeTab }) => {
  const getColor = (tab) => (activeTab === tab ? '#F9C449' : '#fff');
  
  
      /* const handleHome = () => {
          navigation.navigate('Home');
      } */
  
      /* const handlePerfil = () => {
          navigation.navigate('PerfilUsuario');
      } */
 

  return (
    <View style={styles.footer}>
      {/* Boton inicio */}
      <Link href="/HomeScreen" asChild>
      <Pressable style={styles.footerItem}>
        <Ionicons name="home" size={22} color={getColor('Home')} />
        <Text style={[styles.footerText]}>
          Inicio
        </Text>
      </Pressable>
      </Link>

      {/* Boton historial */}
      <Link href="/HistorialCliDen" asChild>
          <Pressable style={styles.footerItem}>
             <Ionicons name="notifications" size={22} color="#fff" />
             <Text style={styles.footerText}>Historial</Text>
          </Pressable>
      </Link>

      <Link href="/PerfilUsuarioScreen" asChild>
      <Pressable
        style={styles.footerItem}
        
      >
        <Ionicons name="person" size={22} color={getColor('PerfilUsuario')} />
        <Text style={[styles.footerText]}>
          Perfil
        </Text>
      </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: '#012D1A',
    paddingVertical: 12,
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
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
