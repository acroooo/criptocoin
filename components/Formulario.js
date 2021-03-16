import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";
import {
  useFonts,
  Lato_900Black,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const URL =
  "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

const Formulario = ({
  moneda,
  cripto,
  setMoneda,
  setCripto,
  guardarConsultarAPI,
}) => {
  // States monedas
  const [criptos, setCriptos] = useState([]);

  // UseEffects => consulta con axios
  useEffect(() => {
    const consultarAPI = async () => {
      const url = URL;
      const resultado = await axios.get(url);
      setCriptos(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  // Fuente cargada
  let [fontsLoaded] = useFonts({
    Lato_900Black,
    Lato_400Regular,
  });

  // Obtener moneda elegida por el usuario
  const obtenerMoneda = (moneda) => {
    setMoneda(moneda);
  };

  // Obtener criptomoneda elegida por el usuario
  const obtenerCripto = (cripto) => {
    setCripto(cripto);
  };

  // Funcion que cotiza
  const cotizar = () => {
    // Validacion
    if (moneda.trim() === "" || cripto.trim() === "") {
      mostrarAlerta();
      return;
    }

    // Pasa la validacion
    guardarConsultarAPI(true);
  };

  // Funcion para errores
  const mostrarAlerta = () => {
    Alert.alert("Error", "Ambos campos son obligatorios", [{ text: "OK" }]);
  };

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Las fuentes no se cargaron, inténtelo nuevamente.</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.texto}>Moneda</Text>
        <Picker
          selectedValue={moneda}
          onValueChange={(moneda) => obtenerMoneda(moneda)}
          style={styles.inputMoneda}
        >
          <Picker.Item
            label="Seleccione una moneda"
            value="Seleccione una moneda"
          />
          <Picker.Item label="Pesos Argentinos" value="ARS" />
          <Picker.Item label="Dólar" value="USD" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Libra Esterlina" value="GBP" />
        </Picker>
        <Text style={styles.texto}>Criptomoneda</Text>
        <Picker
          selectedValue={cripto}
          onValueChange={(cripto) => obtenerCripto(cripto)}
          style={styles.inputMoneda}
        >
          <Picker.Item label="Seleccione una moneda" value="" />
          {criptos &&
            criptos.map((cripto, id) => {
              return (
                <Picker.Item
                  key={id}
                  label={cripto.CoinInfo.FullName}
                  value={cripto.CoinInfo.Name}
                />
              );
            })}
        </Picker>
        <View style={styles.contenedorBtn}>
          <TouchableHighlight
            onPress={() => cotizar()}
            style={styles.btnCotizar}
          >
            <Text style={styles.textBtn}>Cotizar</Text>
          </TouchableHighlight>
        </View>
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
  btnCotizar: {
    backgroundColor: "#007FE0",
    width: 200,
    borderRadius: 50,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  contenedorBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    color: "white",
    fontSize: 17,
    fontFamily: "Lato_400Regular",
    textTransform: "uppercase",
  },
  inputMoneda: {
    marginHorizontal: 40,
  },
});

export default Formulario;
