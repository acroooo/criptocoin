import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts, Lato_900Black } from "@expo-google-fonts/lato";

const Formulario = () => {
  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Moneda</Text>
        <Text>Criptomoneda</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.texto}>Moneda</Text>
        <Text style={styles.texto}>Criptomoneda</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  texto: {
    fontFamily: "Lato_900Black",
  },
});

export default Formulario;
