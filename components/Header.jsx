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
              <View style={styles.header}>
              <Text style={styles.logo}>SENTRIC</Text>
              <Text style={styles.callText}>
                📞 Marca 105. La Policía Está Lista Para Ayudarte
              </Text>
              </View>
    );
    
};
const styles = StyleSheet.create({
    header: {
      height: "10%",
      width: "100%", // Asegura que ocupe todo el ancho de la pantalla
      alignItems: "center",
      backgroundColor: "#004d28", // Fondo verde oscuro

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


