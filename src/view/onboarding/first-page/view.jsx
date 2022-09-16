import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Container } from "../../../components";
import { study } from "../../../assets/media";

import {MaterialIcons} from '@expo/vector-icons/';

export default ({navigation}) => {
    const onPress = () => {
      navigation.navigate('OnboardingSecondPage')
    }

    return (
      <Container.BoxCenter>
          <Text
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              fontSize: 20,
              textAlign: "center"
            }}
          >
            Acompanhe a LearningLab {'\n'}de forma fácil
          </Text>
          <Image 
            style={{
              width: 300,
              height: 300              
            }}
            source={study}
          />
          <Text
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              fontSize: 16,
              textAlign: "center",
            }}
          >
            {/* QUEBRAR COM BARRA N COMO MELHORIA */}
            Não esqueça de acompanhar nossas {'\n'} redes sociais.
            Nós cuidamos de lembrar{'\n'}você sempre que precisar.
          </Text>
          <MaterialIcons 
            name="arrow-forward"
            size={24}
            color="white"
            style={{
              backgroundColor: "#464646",
              borderRadius: 20,
              padding: 20,
              marginTop: 20
            }}
            onPress={() => onPress()}
          />
          </Container.BoxCenter>
    );
};