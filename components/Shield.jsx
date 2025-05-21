import {Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export function Shield() {
    return(
        <SafeAreaView style={styles.logoContainer}>
                <Image
                source={require('../assets/images/escudo.png')} // Asegúrate de colocar la imagen en la carpeta /assets
                style={styles.logoImage}
                resizeMode="contain"
                />
        </SafeAreaView>
    );
};
    const styles = StyleSheet.create({
        /* headerWrapper: {
            height: "10%",
            width: "100%", // Asegura que ocupe todo el ancho de la pantalla
            backgroundColor: "#004d28", // Fondo verde oscuro
            alignItems: "center",
         }, */
        logoImage: {
            width: "40%", // Ajusta el tamaño del logo
            height: "95%",
            resizeMode: "contain", // Mantiene las proporciones del logo
        },
        logoContainer: {
            justifyContent: "center",
            alignItems: "center",
            height: 300, // Ajusta la altura según sea necesario
            width: "100%",
            /* backgroundColor: "#004d28", */
            borderBottomLeftRadius: 200, // Curvatura en la parte inferior izquierda
            borderBottomRightRadius: 195,
            position: "absolute",
        }
  },
);
    