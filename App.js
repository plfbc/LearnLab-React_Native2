import React from 'react';
import { Text, Image, View, TouchableOpacity } from "react-native";
import {image} from './resources'

export default function App() {

  function handle(){
    console.log("helllo learniano");
  }
  
  return (
    <View
      style={{
        alignSelf: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Text
        style={{
          color: "#04BFBF",
          fontSize: 24
        }}
      >
        Acompanhe a LearninLab de forma fácil.
      </Text>
      <Image
        source={image}
        style={{
          height: 100,
          width: 100
        }}
      />
      <Text
        style={{
          fontSize: 24,
          color: "#04BFBF"
        }}
      >
        Não esqueça de acompanhar nossas redes sociais.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      <TouchableOpacity
        onPress={() => handle()}
      >
      <Text
        style={{
          fontSize: 24
        }}
      >
        botão para proximo
      </Text>
      </TouchableOpacity>
    </View>
  );
}
