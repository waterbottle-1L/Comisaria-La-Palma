import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function IncidenceInfoScreen() {
  const location = {
    latitude: -12.0586,
    longitude: -77.0417,
  };
  const region = {
    latitude: -12.049,  // coordenadas de ejemplo
    longitude: -77.042,
    latitudeDelta: 0.002,
    longitudeDelta: 0.002,
  };
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate('Police');
    }
    const route = useRoute();
    const { status } = route.params;
    console.log('Status:', status);
    switch (status) {
        case 'pending':
            return (
            <View style={styles.container}>
              {/* Header */}
              <View style={styles.header}>
                <Pressable style={styles.backButton} onPress={handleBack}>
                  <Ionicons name="arrow-back" size={24} color="white" />
                </Pressable>
                <Text style={styles.headerText}>Mapa de Incidencias</Text>
              </View>

              {/* Estado de incidencia */}
              <View style={styles.statusContainer}>
                <Text style={styles.statusText}>PENDIENTE</Text>
              </View>

              {/* Botones */}
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.attendButton}>
                  <Text style={styles.attendText}>ATENDER</Text>
                </TouchableOpacity>
              </View>

              {/* Mapa */}
              <MapView
                style={styles.map}
                initialRegion={{
                  ...location,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
              >
                <Marker coordinate={location} />
                <Circle center={location} radius={100} fillColor="rgba(255, 0, 0, 0.2)" />
              </MapView>
            </View>
          );
        case 'attending':
            return (
    <View style={styles2.container}>
      <View style={styles2.header}>
        <Text style={styles2.statusText}>ATENDIDO</Text>
        <TouchableOpacity style={styles2.registerButton}>
          <Text style={styles2.registerText}>REGISTRAR INFORMACION</Text>
        </TouchableOpacity>

        <View style={styles2.buttonRow}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles2.backText}>VOLVER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles2.disabledButton} disabled>
            <Text style={styles2.disabledText}>ATENDER</Text>
          </TouchableOpacity>
        </View>
      </View>

      <MapView style={styles2.map} region={region}>
        <Marker coordinate={region} />
        <Circle
          center={region}
          radius={50}
          fillColor="rgba(255, 165, 0, 0.3)"
          strokeColor="orange"
        />
      </MapView>
    </View>
  );  
  case 'resolved':
          return (
            <View style={styles3.container}>
      <View style={styles3.header}>
        <View style={styles3.card}>
          <Text style={styles3.cardText}>INCIDENTE NA 1234</Text>
        </View>

        <View style={styles3.statusGreen}>
          <Text style={styles3.statusText}>RESUELTO</Text>
        </View>
      </View>

      <MapView style={styles3.map} region={region}>
        <Marker coordinate={region} />
        <Circle
          center={region}
          radius={50}
          fillColor="rgba(255, 165, 0, 0.3)"
          strokeColor="orange"
        />
      </MapView>

      
    </View>
  );    
        default:
          return(
            <Text>Hola</Text>
          )            
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00221A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: 30,
  },
  backButton: {
    marginRight: 12,
    backgroundColor: '#6C983B',
    padding: 8,
    borderRadius: 50,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusContainer: {
    backgroundColor: '#8B0000',
    marginHorizontal: 40,
    marginVertical: 12,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  statusText: {
    color: '#FFCCCC',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  backActionButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
  },
  backActionText: {
    color: '#000',
    fontWeight: 'bold',
  },
  attendButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
  },
  attendText: {
    color: '#000',
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#043927',
  },
  header: {
    padding: 16,
    alignItems: 'center',
  },
  statusText: {
    backgroundColor: '#f1c40f',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 15,
  },
  registerText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  backButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  backText: {
    color: '#000',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#666',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  disabledText: {
    color: '#ccc',
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
    width: '100%',
  },
});
const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#043927',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginBottom: 15,
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  statusGreen: {
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#022f23',
    paddingVertical: 10,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  footerIcon: {
    fontSize: 20,
  },
});
