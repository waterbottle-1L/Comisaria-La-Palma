import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export const PoliceFooter = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Police')}>
          <Ionicons name="home-outline" size={24} color="yellow" />
          <Text style={styles.footerLabelActive}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('PoliceScreenInfo')} >
          <Ionicons name="person-outline" size={24} color="#fff" />
          <Text style={styles.footerLabel}>Perfil</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#043927',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  footerItem: { alignItems: 'center' },
  footerLabel: { color: '#fff', fontSize: 12 },
  footerLabelActive: { color: 'yellow', fontSize: 12 },
});