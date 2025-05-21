import {
  Text,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Shield } from "../components/Shield";

/* import { SafeAreaView } from "react-native-safe-area-context"; */
export function Header(){
    return(
        <SafeAreaView >
            <SafeAreaView style={styles.header}>
              <Text style={styles.logo}>SENTRIC</Text>
              <Text style={styles.callText}>
                📞 Marca 105. La Policía Está Lista Para Ayudarte
              </Text>
            </SafeAreaView>
              <Shield />
        </SafeAreaView>
    );
    
};
const styles = StyleSheet.create({
    header: {
      height: "45%",
      width: "100%", // Asegura que ocupe todo el ancho de la pantalla
      backgroundColor: "#102824", // Fondo verde oscuro
      position: "absolute", // Fija el contenedor en la parte superior
      top: 0, // Alinea el contenedor al borde superior
      left: 0,
      right: 0,
      alignItems: "center",
      paddingBottom: 20,

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
});


