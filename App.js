import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import axios from "axios";

export default function App() {
  const [moneda, setMoneda] = useState("");
  const [cripto, setCripto] = useState("");
  const [consultarAPI, guardarConsultarAPI] = useState(false);
  const [resultado, guardarResultado] = useState({});
  // Spinners
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        // consultar la API para obtener la cotizacion
        // seteo url
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
        // guardo consulta
        const resultado = await axios.get(url);
        guardarCargando(true);
        // Ocultar el spinner y mostrar el resultado que
        setTimeout(() => {
          // Guardo resultado
          guardarResultado(resultado.data.DISPLAY[cripto][moneda]);
          // Para poder repetir consultas
          guardarConsultarAPI(false);
          guardarCargando(false);
        }, 3000);
      }
    };
    cotizarCriptomoneda();
  }, [consultarAPI]);

  // mostrar el spinner
  const componente = cargando ? (
    <ActivityIndicator size="large" color="#5e452e" />
  ) : (
    <Cotizacion resultado={resultado} />
  );

  return (
    <>
      <ScrollView>
        <View>
          <Header />
          <View style={styles.contenedorImagen}>
            <Image
              style={styles.imagen}
              source={require("./assets/img/banner.jpg")}
            />
          </View>
          <View style={styles.contenedorForm}>
            <Formulario
              moneda={moneda}
              cripto={cripto}
              setMoneda={setMoneda}
              setCripto={setCripto}
              guardarConsultarAPI={guardarConsultarAPI}
            />
          </View>
        </View>
        <View style={{ marginTop: 40 }}>{componente}</View>
      </ScrollView>
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
