import {useState} from 'react';
import {StyleSheet, Pressable, Text, View, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

function ComponenteActivo() {
  return <Text></Text>;
}

function ComponenteInactivo() {
  return (
    <MapView
        style={styles.mapa}
        initialRegion={{
          latitude: 37.78825,        // Latitud inicial
          longitude: -122.4324,      // Longitud inicial
          latitudeDelta: 0.0922,     // Zoom vertical
          longitudeDelta: 0.0421,    // Zoom horizontal
        }}
      />
  );
}

export function ButtonSOS(){
    
  const [pressed, setPressed] = useState(false); // Estado inicial: false

  const manejarPresion = () => {
    setPressed(!pressed);
  };
  return(
            <View>
              
              <Pressable onPress={() => setPressed(!pressed)} style={({ pressed: isPressed }) => [
                styles.sosButton,
                { backgroundColor: pressed ? 'red' : 'green' },
                isPressed && styles.pressedStyle,]} >

                  <Text style={styles.sosText}>{pressed ? 'SOS' : 'Activo'}</Text>

              </Pressable>
              <View style={{ marginTop: 20 }}>
              {pressed ? <ComponenteActivo /> : <ComponenteInactivo />}
              </View>
            </View>
    );
};

const styles = StyleSheet.create({
  container:{
    height: "10%",
      width: "100%", // Asegura que ocupe todo el ancho de la pantalla
      alignItems: "center",
    },  
  sosButton: {
      width: 140,
      height: 140,
      borderRadius: 70,
      /* backgroundColor: '#D30000', */
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#D30000',
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 20,
      marginBottom: 30,
  },
  sosText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  mapa: {
    width: 300,
    height: 200,
  },
});