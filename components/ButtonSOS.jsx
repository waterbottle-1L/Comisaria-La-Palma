import {useState, useRef, useEffect} from 'react';
import {StyleSheet, Pressable, Text, View, Dimensions, Animated} from 'react-native';
import { Map } from './Map';

export function ButtonSOS(){
    
  const [pressed, setPressed] = useState(false); // Estado para el botón SOS
  
  const [showMap, setShowMap] = useState(false); // Estado inicial: false

  const pulseAnim = useRef(new Animated.Value(1)).current; // para onda pequeña normal

  const clickPulseAnim = useRef(new Animated.Value(1)).current; // para onda al click

    useEffect(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(pulseAnim, {
              toValue: 1.2,
              duration: 1000,
              useNativeDriver: true,
            }),
            Animated.timing(pulseAnim, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true,
            }),
          ])
      ).start();
    }, []);

  const manejarPresion = () => {

    setPressed(true);

    clickPulseAnim.setValue(1);

    Animated.timing(clickPulseAnim, {
      
        toValue: 2.5,
        duration: 600,
        useNativeDriver: true,

    }).start(() => {

      clickPulseAnim.setValue(1);

    });

    setShowMap(true); // Cambia el estado a true al presionar el botón
  };
  return(
            <View style={styles.container}>

              {/* Onda de click - efecto más grande */}
              <Animated.View pointerEvents="none"
                style={[
                  styles.pulse,
                  {
                    transform: [{ scale: clickPulseAnim }],
                    opacity: clickPulseAnim.interpolate({
                      inputRange: [1, 2.5],
                      outputRange: [0.6, 0],
                    }),
                  },
                ]} 
                />

                 {/* Onda pequeña pulsante */}
                 <Animated.View
                    pointerEvents="none"
                    style={[
                      styles.pulse,
                      {
                        transform: [{ scale: pulseAnim }],
                        opacity: 0.3,
                      },
                  ]}
                />

              {/* Botón SOS */}              
              <Pressable onPress={manejarPresion} style={({ pressed: isPressed }) => [
                styles.sosButton,
                { backgroundColor: pressed ? 'red' : 'green' },
                isPressed,]} >

                  <Text style={styles.sosText}>{pressed ? 'Activo' : 'SOS'}</Text>

              </Pressable>
              {/* Muestra el mapa cuando showMap es true */}
                {showMap && (
                  <Map width={Dimensions.get('window').width} height={'210'} />
                )}
            </View>
    );
};

const BUTTON_SIZE = 140;

const styles = StyleSheet.create({
  container:{
    height: BUTTON_SIZE*3,
      width: BUTTON_SIZE*3, // Asegura que ocupe todo el ancho de la pantalla
      alignItems: "center",
      flex:1,
    },  
  sosButton: {
      width: BUTTON_SIZE,
      height: BUTTON_SIZE,
      borderRadius: BUTTON_SIZE/2,
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
    width: '100%',
    height: '100%',
  },
  pulse: {
    position: 'absolute',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    backgroundColor: '#3498db',
  },
});