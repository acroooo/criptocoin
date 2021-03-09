import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useFonts, Lato_900Black } from "@expo-google-fonts/lato";
import { Picker } from "@react-native-picker/picker";

const Formulario = () => {
  // States monedas
  const [moneda, setMoneda] = useState("");
  const [cripto, setCripto] = useState("");

  // Fuente cargada
  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });

  // Obtener moneda elegida por el usuario
  const obtenerMoneda = (moneda) => {
    setMoneda(moneda);
  };

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
        <Picker
          selectedValue={moneda}
          onValueChange={(moneda) => obtenerMoneda(moneda)}
        >
          <Picker.item label="Seleccione una moneda" value="" />
          <Picker.item label="Dólar" value="USD" />
          <Picker.item label="Euro" value="EUR" />
          <Picker.item label="Peso Argentino" value="ARS" />
          <Picker.item label="Libra Esterlina" value="GBP" />
        </Picker>
        <Text style={styles.texto}>Criptomoneda</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  texto: {
    fontFamily: "Lato_900Black",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 20,
    marginVertical: 22,
    color: "#007FE0",
  },
});

export default Formulario;
