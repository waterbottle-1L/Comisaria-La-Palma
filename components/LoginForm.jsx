import { useState } from 'react';
import {  StyleSheet, View, TextInput, Pressable, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

import { MaterialCommunityIcons } from "@expo/vector-icons";

export function LoginForm(){
  

  const [tipoCuenta, setTipoCuenta] = useState(''); 

  const manejarLogin = () => {

    const entrada = tipoCuenta.trim().toLowerCase();

    if (entrada === 'admin') {
      router.replace('AdminScreen'); // O navigation.navigate('Admin')
    } else if (entrada === 'user') {
      router.replace('HomeScreen');
    } else if (entrada === 'policia') {
      router.replace('PoliceScreen');
    /* } else if (entrada === 'registro denuncia') {
      router.replace('RegistroDenunciaPt2Screen'); */
    } else {
      Alert.alert('Cuenta inválida', 'Escribe una cuenta válida');
    }
  };
    return(
        <View style={styles.formContainer}>
            <View style={styles.boxContainer}>
                <TextInput
                  placeholder="Nombre de usuario"
                  onChangeText={setTipoCuenta}
                  value={tipoCuenta}
                  placeholderTextColor="#ccc"
                  style={styles.input}
                />
                <View style={styles.passwordContainer}>
                  <TextInput
                    placeholder="Contraseña"
                    placeholderTextColor="#ccc"
                    secureTextEntry
                    style={styles.inputPassword}
                  />
                  <MaterialCommunityIcons name="eye-off" size={20} color="#ccc" />
                </View>
            </View>
                <Pressable style={styles.loginButton} onPress={manejarLogin}>
                    <Text style={styles.loginButtonText}>Iniciar sesión</Text>  
                </Pressable> 
            </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        alignItems: "center",
        height: 300, // Ajusta la altura según sea necesario
        width: "100%",
        
    },
    boxContainer: {
        width: "80%", // Ancho del cuadro
        padding: 10,
        backgroundColor: "#235B52", // Color de fondo del cuadro
        borderRadius: 20,
        shadowColor: "#fff", // Sombra para dar un efecto de elevación
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
  },
    input: {
        backgroundColor: "#1A2B24",
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        color: "#fff",
        alignItems: "center",
  },
  passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1A2B24",
        borderRadius: 10,
        paddingHorizontal: 12,
  },
  inputPassword: {
        flex: 1,
        paddingVertical: 12,
        color: "#fff",
  },    
  loginButton: {
        backgroundColor: "#007F5F",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        marginTop: "2%",
        /* marginBottom: 20, */
        width: "75%", // Ancho del botón
    },
    loginButtonText: {
        color: "#D3FF57",
        fontWeight: "bold",
        fontSize: 16,
    },
 
})