import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Container } from "../../../components";

export default ({navigation}) => {

    const onPress = () => navigation.navigate("Home")

    return (
      <Container.BoxCenter>
          <Text
            style={{
              marginBottom: 60,
              fontSize: 72
            }}>
            😁
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              fontSize: 20,
              textAlign: "center"
            }}
          >
            Prontinho
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              fontSize: 16,
              textAlign: "center",
              marginVertical: 20
            }}
          >
            Agora vamos começar nossa jornada de aprendizado.
          </Text>
          <TouchableOpacity
            onPress={() => onPress()}
            style={{
              width: 250,
              backgroundColor:  "#464646",
              paddingVertical: 10,
              borderRadius: 10
            }}
          >
            <Text
              style={{
                fontFamily: 'Montserrat_500Medium',
                fontSize: 16,
                textAlign: "center",
                color: "white"
              }}
            >
              Começar
            </Text>
          </TouchableOpacity>
          </Container.BoxCenter>
    );
};