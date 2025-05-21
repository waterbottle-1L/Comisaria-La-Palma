import {StyleSheet, View, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export function LoginForm(){
    return(
        <SafeAreaView style={styles.formContainer}>
          <View style={styles.boxContainer}>
          <TextInput
            placeholder="Correo electrónico"
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

          </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    formContainer: {
    flex: 1,
    paddingTop: 245,
    justifyContent: "center",
    alignItems: "center",
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
 
})