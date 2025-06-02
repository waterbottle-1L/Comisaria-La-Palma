import { StyleSheet } from "react-native"
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import { Link } from 'expo-router';


export function RegisterForm() {
    const navigation = useNavigation();
    const [form, setForm] = useState({
    dni: '',
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleRegister = () => {
    const newErrors = {};
    if (!form.dni.trim()) newErrors.dni = 'Este campo es obligatorio';
    if (!form.email.trim()) newErrors.email = 'Este campo es obligatorio';
    if (!form.phone.trim()) newErrors.phone = 'Este campo es obligatorio';
    if (!form.password.trim()) newErrors.password = 'Este campo es obligatorio';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Aquí va la lógica para enviar datos
      Alert.alert('Registro exitoso');
    }
  };
        return (
        <View style={styles.formContainer}>
                <TextInput
                placeholder="DNI"
                placeholderTextColor="#ccc"
                keyboardType="numeric"
                maxLength={8}
                style={styles.input}
                value={form.dni}
                onChangeText={(text) => setForm({ ...form, dni: text })}
                />
                {errors.dni && <Text style={styles.errorText}>{errors.dni}</Text>}
                <TextInput
                placeholder="Correo Electrónico"
                placeholderTextColor="#ccc"
                style={styles.input}
                keyboardType="email-address"
                value={form.email}
                onChangeText={(text) => setForm({ ...form, email: text })}
                />
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                <TextInput
                placeholder="Número de Teléfono"
                placeholderTextColor="#ccc"
                style={styles.input}
                keyboardType="numeric"
                value={form.phone}
                onChangeText={(text) => setForm({ ...form, phone: text })}
                />
                {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
                <View style={styles.passwordContainer}>
                <TextInput
                    placeholder="Contraseña"
                    placeholderTextColor="#ccc"
                    secureTextEntry
                    style={styles.inputPassword}
                    value={form.password}
                    onChangeText={(text) => setForm({ ...form, password: text })}
                />

                <MaterialCommunityIcons name="eye-off" size={20} color="#ccc" />
                </View>
                  {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                <Pressable style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Regístrate</Text>
                </Pressable>

                <Link href="/" asChild>
                <Pressable>
                <Text style={styles.linkText}>¿Ya tienes cuenta?</Text>
                </Pressable>
                </Link>
            </View>
        )
        }

const styles = StyleSheet.create({
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
  errorText: {
  color: 'red',
  fontSize: 12,
  marginBottom: 4,
  marginLeft: 4,
}
});