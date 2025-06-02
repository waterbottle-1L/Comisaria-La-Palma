import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {Dimensions} from 'react-native';


export function Map(){
    return (
        <View style={{width: Dimensions.get('window').width, height: '310', justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginTop: 160}}>
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


