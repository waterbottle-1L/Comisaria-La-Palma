import {StyleSheet, Text, Pressable } from 'react-native';
//import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

export function LoginOptions() {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Home');
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    const handleForgotPassword = () => {
        navigation.navigate('');
    }


    return (
        <SafeAreaView>
        <Pressable style={styles.loginButton}  onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Iniciar sesión</Text>  
        </Pressable>  
                <Pressable onPress={handleRegister}>
                    <Text style={styles.linkText}>Crear Una cuenta</Text>
                </Pressable>
            
                <Pressable onPress={handleForgotPassword}>
                    <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
                </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
     loginButton: {
    backgroundColor: "#007F5F",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#D3FF57",
    fontWeight: "bold",
    fontSize: 16,
  },
  linkText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 2,
  },
});
