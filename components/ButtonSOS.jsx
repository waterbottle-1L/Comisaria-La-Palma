import {useState} from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';

function ComponenteActivo() {
  return <Text></Text>;
}

function ComponenteInactivo() {
  return <Text >Un policia lo atendera en breve</Text>;
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
});