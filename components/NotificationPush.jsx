import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native';
import io from 'socket.io-client';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import clientIncident from '../services/clientIncident';

export default function NotificationPush (){
    const [incidents, setIncidents] = useState([]);
    const [loading, setLoading] = useState(true); // Para mostrar spinner mientras carga
    
    const fetchIncidents = async () => {
    try {
      const response = await clientIncident.get('/api/incidents');
      setIncidents(response.data.content);
      console.log('Incidentes obtenidos:', response.data.content);
    } catch (error) {
      console.error('Error al obtener incidentes:', error);
      throw error; // Propagar el error para manejarlo en el componente
    } finally {
      setLoading(false); // Dejar de mostrar el spinner
    }
  };

    const statusColors = {
    pending: '#e74c3c',     // rojo
    attending: '#f39c12',   // naranja
    resolved: '#2ecc71',    // verde
    };

  const handleIncidentInfo = (incident) => {
    // lógica para ir a detalle, modal, etc.
    console.log("Incidente seleccionado:", incident);
  };

    useEffect(() => {
        // Obtener datos la primera vez
        fetchIncidents();

         // Establecer intervalo para recarga automática
        const interval = setInterval(fetchIncidents, 10000); // cada 10 segundos

        // Limpiar intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, []);
    
    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.sectionTitle}>Incidentes de hoy</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : incidents.length === 0 ? (
                <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16 }}>
                    No hay incidentes registrados.
                </Text>
            ) : (incidents.map((incident) => (
                    <Pressable
                        key={incident.id}
                        style={styles.incidentCard}
                onPress={() => handleIncidentInfo(incident)}
                >
                <Text style={styles.incidentTime}>{incident.time}</Text>
                <Text style={styles.incidentDesc}>{incident.description}</Text>
                <Text style={styles.incidentLoc}>
                    Ubicación: {incident.location}{' '}
                    <Text style={styles.link}>ver más.</Text>
                </Text>

                <View style={styles.cardFooter}>
                    <View
                    style={[
                        styles.statusCircle,
                        { backgroundColor: statusColors[incident.status] || '#999' },
                    ]}
                    />
                    <Pressable>
                    <FontAwesome name="search-plus" size={25} color="#333" />
                    </Pressable>
                </View>
                </Pressable>
            ))
        )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fcf8' },
  header: {
    backgroundColor: '#043927',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  agentBox: {
    backgroundColor: '#004d3c',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  agentText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  agentSubtext: { color: '#fff', fontSize: 14 },
  statusIndicators: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  statusItem: { flexDirection: 'row', alignItems: 'center' },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  incidentCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  incidentTime: { fontSize: 14, fontWeight: 'bold' },
  incidentDesc: { fontSize: 14, marginTop: 4 },
  incidentLoc: { fontSize: 13, color: '#444' },
  link: { color: '#007bff' },
  cardFooter: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
  },
  
});