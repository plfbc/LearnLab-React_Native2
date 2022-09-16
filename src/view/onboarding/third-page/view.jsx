import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Container } from "../../../components";
import { study } from "../../../assets/media";

import {MaterialIcons} from '@expo/vector-icons/';

export default () => {

    const onPress = () => {
      console.log("cliquei 3333")      
    }

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