import React from "react";
import { Text, Platform, StyleSheet } from "react-native";
import { useFonts, Lato_900Black } from "@expo-google-fonts/lato";

const Header = () => {
  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return <Text>C R I P T O C O I N</Text>;
  } else {
    return <Text style={styles.encabezado}>C R I P T O C O I N</Text>;
  }
};

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === "ios" ? 70 : 30,
    fontFamily: "Lato_900Black",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#35A7FF",
    color: "#FFFFFF",
    paddingBottom: 20,
    textTransform: "uppercase",
  },
});

export default Header;
