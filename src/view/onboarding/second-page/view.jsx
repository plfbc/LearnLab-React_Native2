import React, { useState } from 'react';
import { TextInput, Text, TouchableOpacity } from 'react-native';
import { Container } from "../../../components";


export default ({navigation}) => {

    const [name, setName] = useState("")

    const onPress = () => navigation.navigate("OnboardingThirdPage")

    return (
      <Container.BoxCenter>
          <Text
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              fontSize: 20,
              textAlign: "center"
            }}
          >😁{'\n'}
           Como podemos chamar você?
          </Text>
          <TextInput
            onChangeText={setName}
            value={name}
            placeholder="Digite um nome"
            style={{
              borderBottomWidth: 1,
              borderColor: "#CFCFCF",
              marginVertical: 20,
              width: 250,
              textAlign: "center"
            }}
          />
          <TouchableOpacity
            disabled={name.length===0}
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
              Confirmar
            </Text>
          </TouchableOpacity>
          </Container.BoxCenter>
    );
};