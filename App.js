import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

export default function App() {
  return (
    <>
      <View>
        <Header />
        <View style={styles.contenedorImagen}>
          <Image
            style={styles.imagen}
            source={require("./assets/img/banner.jpg")}
          />
        </View>
        <View style={styles.contenedorForm}>
          <Formulario />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imagen: {
    width: "100%",
    height: 200,
  },
  contenedorImagen: {
    borderBottomColor: "#35A7FF",
    borderBottomWidth: 5,
  },
  contenedorForm: {
    marginVertical: 20,
  },
});
