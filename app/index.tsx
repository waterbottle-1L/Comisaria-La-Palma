import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { ScrollView, StyleSheet, View } from "react-native";
import { Header } from "../components/Header";
/* import { Shield } from "../components/Shield"; */
import { LoginForm } from "../components/LoginForm";
import { LoginOptions } from "../components/LoginButtonGroup";
import { Shield } from "../components/Shield";



const LoginScreen = ({ navigation }) => {
  
  return (
    <SafeAreaProvider>
        <StatusBar style="auto" />
        <SafeAreaView style={styles.container}>
          <Header color1={'black'} color2={'green'} />
          <Shield height={200} width={200}/>  
        <LoginForm />
        <LoginOptions />
        </SafeAreaView>
    </SafeAreaProvider>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", // Fondo blanco
    justifyContent: "space-between", // Centra los elementos en el eje vertical
    paddingHorizontal: 0, // Sin espaciado horizontal
  },
});

export default LoginScreen;
