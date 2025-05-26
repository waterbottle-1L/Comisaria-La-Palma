import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image, // Asegúrate de importar Image si no está ya
} from 'react-native';

// Importa los componentes reutilizables (Header y Footer)
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// Para el Picker, aunque no se usa en la imagen, si lo necesitas en el futuro, ya está importado
import { Picker } from '@react-native-picker/picker';

// Para los iconos de más y menos, si los necesitas
import { Ionicons } from '@expo/vector-icons';

// Define tu nuevo componente de pantalla
const RegDenPt2Screen = ({ navigation }) => {
  // --- Estados para los campos de la vista ---

  // Sección "Agraviados"
  const [agraviadoOption, setAgraviadoOption] = useState('yo'); // 'yo' o 'otro'
  const [tipoDocumento, setTipoDocumento] = useState(''); // Para el Picker de tipo de documento
  const [numDocumento, setNumDocumento] = useState('');
  const [nombreAgraviado, setNombreAgraviado] = useState('');
  const [agraviadosList, setAgraviadosList] = useState([]); // Para la lista de agraviados agregados

  // Sección "Denunciados"
  const [denunciadoOption, setDenunciadoOption] = useState('desconocido'); // 'conocido' o 'desconocido'
  const [nombreDenunciado, setNombreDenunciado] = useState('');
  const [denunciadosList, setDenunciadosList] = useState([]); // Para la lista de denunciados agregados

  // Sección "¿Dónde y cuándo ocurrió?"
  const [lugarIncidente, setLugarIncidente] = useState('');
  const [fechaIncidente, setFechaIncidente] = useState(''); // Esto podría ser un DatePicker real
  const [horaIncidente, setHoraIncidente] = useState('');   // Esto podría ser un TimePicker real

  // --- Funciones para manejar lógica ---

  const handleAddAgraviado = () => {
    if (nombreAgraviado.trim() !== '') {
      setAgraviadosList([...agraviadosList, { nombre: nombreAgraviado, tipoDoc: tipoDocumento, numDoc: numDocumento }]);
      setNombreAgraviado('');
      setTipoDocumento('');
      setNumDocumento('');
    }
  };

  const handleDeleteAgraviado = (index) => {
    const newList = agraviadosList.filter((_, i) => i !== index);
    setAgraviadosList(newList);
  };

  const handleAddDenunciado = () => {
    if (nombreDenunciado.trim() !== '') {
      setDenunciadosList([...denunciadosList, { nombre: nombreDenunciado }]);
      setNombreDenunciado('');
    }
  };

  const handleDeleteDenunciado = (index) => {
    const newList = denunciadosList.filter((_, i) => i !== index);
    setDenunciadosList(newList);
  };

  const handleSubmit = () => {
    // Lógica para enviar todos los datos recopilados
    console.log('Datos de la Denuncia Parte 2:');
    console.log('Agraviados:', agraviadosList);
    console.log('Denunciados:', denunciadosList);
    console.log('Lugar del Incidente:', lugarIncidente);
    console.log('Fecha del Incidente:', fechaIncidente);
    console.log('Hora del Incidente:', horaIncidente);
    // Aquí podrías navegar a la siguiente pantalla o enviar a una API
    // navigation.navigate('ConfirmacionDenunciaScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      /* ScrollView para el contenido principal */
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        /* Componente Header */
        <Header /> /* Si el Header necesita props como "navigation", pásalos aquí */

        /* Título principal de la vista */
        <Text style={styles.mainTitle}>Detalles de la Denuncia</Text>

        {/* Sección: Agraviados */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Agraviados</Text>
          <View style={styles.radioGroup}>
            <Pressable
              style={styles.radioButton}
              onPress={() => setAgraviadoOption('yo')}
            >
              <View style={styles.radioCircle}>
                <Text>{agraviadoOption === 'yo' && <View style={styles.selectedRadioCircle} />}</Text>
              </View>
              <Text style={styles.radioText}>Yo</Text>
            </Pressable>
            <Pressable
              style={styles.radioButton}
              onPress={() => setAgraviadoOption('otro')}
            >
              <View style={styles.radioCircle}>
                {agraviadoOption === 'otro' && <View style={styles.selectedRadioCircle} />}
              </View>
              <Text style={styles.radioText}>Otro</Text>
            </Pressable>
          </View>

          {agraviadoOption === 'otro' && (
            <>
              <Text style={styles.label}>Tipo de documento:</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={tipoDocumento}
                  onValueChange={(itemValue) => setTipoDocumento(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Seleccione tipo" value="" />
                  <Picker.Item label="DNI" value="dni" />
                  <Picker.Item label="Pasaporte" value="pasaporte" />
                  <Picker.Item label="Carnet de Extranjería" value="ce" />
                </Picker>
              </View>

              <Text style={styles.label}>N° Documento</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                keyboardType="numeric"
                value={numDocumento}
                onChangeText={setNumDocumento}
              />
            </>
          )}

          <Text style={styles.label}>Nombre de agraviado:</Text>
          <View style={styles.inputWithButton}>
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 10 }]}
              placeholder={agraviadoOption === 'yo' ? "Tu nombre (automático)" : "Nombre o alias"}
              value={agraviadoOption === 'yo' ? "Bruce Lee" : nombreAgraviado} // Simula nombre automático
              onChangeText={setNombreAgraviado}
              editable={agraviadoOption === 'otro'} // Solo editable si es 'otro'
            />
            <Pressable style={styles.addButton} onPress={handleAddAgraviado}>
              <Text style={styles.addButtonText}>Agregar</Text>
              <Ionicons name="add" size={20} color="#fff" />
            </Pressable>
          </View>
          {agraviadosList.map((item, index) => (
            <View key={index} style={styles.addedItem}>
              <Text>{item.nombre} ({item.tipoDoc} - {item.numDoc})</Text>
              <Pressable onPress={() => handleDeleteAgraviado(index)}>
                <Ionicons name="trash-outline" size={20} color="#FF6347" />
              </Pressable>
            </View>
          ))}
        </View>

        /* Sección: Denunciados */
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Denunciados</Text>
          <View style={styles.radioGroup}>
            <Pressable
              style={styles.radioButton}
              onPress={() => setDenunciadoOption('conocido')}
            >
              <View style={styles.radioCircle}>
                {denunciadoOption === 'conocido' && <View style={styles.selectedRadioCircle} />}
              </View>
              <Text style={styles.radioText}>Conocido</Text>
            </Pressable>
            <Pressable
              style={styles.radioButton}
              onPress={() => setDenunciadoOption('desconocido')}
            >
              <View style={styles.radioCircle}>
                {denunciadoOption === 'desconocido' && <View style={styles.selectedRadioCircle} />}
              </View>
              <Text style={styles.radioText}>Desconocido</Text>
            </Pressable>
          </View>

          {denunciadoOption === 'conocido' && (
            <>
              <View style={styles.inputWithButton}>
                <TextInput
                  style={[styles.input, { flex: 1, marginRight: 10 }]}
                  placeholder="Nombre del denunciado"
                  value={nombreDenunciado}
                  onChangeText={setNombreDenunciado}
                />
                <Pressable style={styles.addButton} onPress={handleAddDenunciado}>
                  <Text style={styles.addButtonText}>Agregar</Text>
                  <Ionicons name="add" size={20} color="#fff" />
                </Pressable>
              </View>
              {denunciadosList.map((item, index) => (
                <View key={index} style={styles.addedItem}>
                  <Text>{item.nombre}</Text>
                  <Pressable onPress={() => handleDeleteDenunciado(index)}>
                    <Ionicons name="trash-outline" size={20} color="#FF6347" />
                  </Pressable>
                </View>
              ))}
            </>
          )}
        </View>

        /* Sección: ¿Dónde y cuándo ocurrió? */
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>¿Dónde y cuándo ocurrió?</Text>

          <Text style={styles.label}>Lugar Incidente:</Text>
          <TextInput
            style={styles.input}
            placeholder="Dirección o referencia"
            value={lugarIncidente}
            onChangeText={setLugarIncidente}
          />
          /* Aquí puedes integrar un DatePicker real para Fecha y Hora */
          <Text style={styles.label}>Fecha:</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            keyboardType="numeric"
            value={fechaIncidente}
            onChangeText={setFechaIncidente}
          />

          <Text style={styles.label}>Hora:</Text>
          <TextInput
            style={styles.input}
            placeholder="HH:MM"
            keyboardType="numeric"
            value={horaIncidente}
            onChangeText={setHoraIncidente}
          />
        </View>

        /* Botón de Enviar */
        <Pressable style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Enviar</Text>
        </Pressable>

        /* Espacio extra para el Footer */
        <View style={{ height: 80 }} />
      </ScrollView>

      /* Componente Footer - Colócalo fuera del ScrollView para que sea fijo */
      <Footer activeTab="inicio" navigation={navigation} /> {/* Ajusta activeTab según la vista */}
    </SafeAreaView>
  );
};

// --- Estilos para la nueva vista ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FFF5', // Color de fondo claro
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 20, // Ajusta si el Footer se superpone o si necesitas más espacio
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#000',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  label: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 6,
    color: '#333',
    marginTop: 10, // Espacio entre elementos
  },
  input: {
    height: 45,
    backgroundColor: '#F6FFF5', // Fondo más claro para los inputs
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  pickerWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F6FFF5',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  picker: {
    height: 45,
    width: '100%',
  },
  radioGroup: {
    flexDirection: 'row',
    marginBottom: 15,
    gap: 20, // Espacio entre los radio buttons
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007A5A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  selectedRadioCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007A5A',
  },
  radioText: {
    fontSize: 15,
    color: '#333',
  },
  inputWithButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007A5A',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  addedItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8F5E9', // Un verde muy claro para los items agregados
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  submitButton: {
    backgroundColor: '#007A5A',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RegDenPt2Screen;