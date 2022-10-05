import React from 'react';
import { Text, Image, View, TouchableOpacity } from "react-native";
import {image} from './resources'
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <Text> Carregando</Text>;
  }

  function handle(){
    console.log("helllo learniano");
  }
  
  return (
    <View
      style={{
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text
        style={{
          color: "#04BFBF",
          fontSize: 24,
          fontFamily: ''
        }}
      >
        Acompanhe a LearninLab de forma fácil.
      </Text>
      <Image
        source={image}
        style={{
          height: 250,
          width: 250
        }}
      />
      <Text
        style={{
          fontSize: 16,
          color: "#04BFBF",
          paddingVertical:20,
          paddingHorizontal: 30
        }}
      >
        Não esqueça de acompanhar nossas redes sociais.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      <TouchableOpacity
        onPress={() => handle()}
        style={{
          height:40,
          width:40,
          backgroundColor: "#04BFBF",
          borderRadius:10,
          alignItems: "center"
        }}
      >
      <Text
        style={{
          fontSize: 24,
          color: 'white'
          
        }}
      >
        >
      </Text>
      </TouchableOpacity>
    </View>
  );
}
