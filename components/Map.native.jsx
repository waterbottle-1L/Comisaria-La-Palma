import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export function Map({width, height}) {
    return (
        <View style={{width: width, height: height, justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginTop: 20}}>
            <MapView
                style={styles.mapa}
                initialRegion={{

                    latitude: 37.78825,        // Latitud inicial
                    longitude: -122.4324,      // Longitud inicial
                    latitudeDelta: 0.0922,     // Zoom vertical
                    longitudeDelta: 0.0421,    // Zoom horizontal

                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  mapa: {
    width: '100%',
    height: '100%',
  },
});


