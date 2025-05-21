import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function RegisterScreen() {
  const navigation = useNavigation();
  
  const handleRegister = () => {
      navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header superior */}
      <View style={styles.header}>
        <Pressable style={styles.loginButton}  onPress={handleRegister}>
                    <Text style={styles.loginButtonText}>Volver</Text>  
          </Pressable> 
        <Text style={styles.logo}>SENTRIC</Text>
        <Text style={styles.callText}>📞 Marca 105. La Policía Está Lista Para Ayudarte</Text>
      </View>

      {/* Escudo */}
      <Image
        source={require('../assets/images/escudo.png')} // Ruta del escudo
        style={styles.logoImage}
        resizeMode="contain"
      />

      <Text style={styles.comisariaText}>COMISARÍA LA PALMA</Text>

      {/* Formulario */}
      <View style={styles.formContainer}>
        <TextInput
          placeholder="DNI / Carnet de extranjería"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
        <TextInput
          placeholder="Correo Electrónico"
          placeholderTextColor="#ccc"
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Número de Teléfono"
          placeholderTextColor="#ccc"
          style={styles.input}
          keyboardType="phone-pad"
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

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Regístrate</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.linkText}>¿Ya tienes cuenta?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C1E15',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  callText: {
    color: '#9FFFCB',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  logoImage: {
    width: 150,
    height: 150,
    marginTop: 10,
  },
  comisariaText: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 14,
  },
  formContainer: {
    width: '80%',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#1A2B24',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A2B24',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  inputPassword: {
    flex: 1,
    paddingVertical: 12,
    color: '#fff',
  },
  registerButton: {
    backgroundColor: '#007F5F',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: '#D3FF57',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
  },
});
export default RegisterScreen;

