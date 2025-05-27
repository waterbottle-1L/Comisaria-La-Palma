//import { CustomButton } from "./components/button";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "./screens/RegisterScreen";
import { enableScreens } from "react-native-screens";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import PoliciaScreen from "./screens/PoliciaScreen";
import AdminScreen from "./screens/AdminScreen";
import HistorialCliDen from "./screens/HistorialCliDen";
import PerfilUsuarioScreen from "./screens/PerfilUsuarioScreen";
import RegDenPt1Screen from "./screens/RegDenPt1Screen";
import RegDenPt2Screen from "./screens/RegDenPt2Screen";
import IncidenceInfoScreen from "./screens/IncidentInfoScreen";
import { PoliceInfoScreen } from "./screens/PoliceInfoScreen";
import { UpdatePassPolice } from "./screens/UpdatePassPoliceScreen";

const icon = require("./assets/images/original.jpg");

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Police"
            component={PoliciaScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Admin"
            component={AdminScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HistorialCliDen"
            component={HistorialCliDen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PerfilUsuario"
            component={PerfilUsuarioScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegistroDenuncia"
            component={RegDenPt1Screen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegistroDenunciaPt2"
            component={RegDenPt2Screen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="IncidentInfo"
            component={IncidenceInfoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PoliceScreenInfo"
            component={PoliceInfoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UpdatePassPolice"
            component={UpdatePassPolice}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
