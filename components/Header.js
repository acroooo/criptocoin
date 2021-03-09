import React from "react";
import { Text, Platform, StyleSheet } from "react-native";
import { useFonts, Lato_900Black } from "@expo-google-fonts/lato";

const Header = () => {
  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return <Text>Cotizador de Criptomonedas</Text>;
  } else {
    return <Text style={styles.encabezado}>Cotizador de Criptomonedas</Text>;
  }
};

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === "ios" ? 70 : 30,
    fontFamily: "Lato_900Black",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Header;
