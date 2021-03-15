import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  useFonts,
  Lato_900Black,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

const Cotizacion = ({ resultado }) => {
  // Fuente cargada
  let [fontsLoaded] = useFonts({
    Lato_900Black,
    Lato_400Regular,
  });
  if (Object.keys(resultado).length === 0) return null;
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Las fuentes no se cargaron, inténtelo nuevamente.</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.resultado}>
        <Text style={styles.texto2}>
          <Text style={styles.span}> {resultado.PRICE}</Text>
        </Text>
        <Text style={styles.texto}>
          Precio tope del día:
          <Text style={styles.span}> {resultado.HIGHDAY}</Text>
        </Text>
        <Text style={styles.texto}>
          Precio más bajo del día:
          <Text style={styles.span}> {resultado.LOWDAY}</Text>
        </Text>
        <Text style={styles.texto}>
          Variación (últimas 24hs):
          <Text style={styles.span}> {resultado.CHANGEPCT24HOUR} %</Text>
        </Text>
        <Text style={styles.texto}>
          Última actualización:
          <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  resultado: {
    fontFamily: "Lato_400Regular",
    marginVertical: 20,
    backgroundColor: "#35A7FF",
    padding: 35,
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 17,
  },
  texto2: {
    fontSize: 30,
    color: "#353423",
  },
  precio: {
    fontSize: 38,
    fontFamily: "Lato_400Regular",
  },
  span: {
    fontFamily: "Lato_400Regular",
  },
});

export default Cotizacion;
