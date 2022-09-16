import React from 'react';
import { View, Text } from 'react-native';

export default () => {
  return (
      <View
        style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }}
      >
          <Text
            style={{
              fontSize: 28
            }}
          >😁</Text>
          <Text
            style={{
              fontSize: 24
            }}>Olá Learniano,</Text>
          <Text
          style={{
            fontSize: 20
          }}>bem vindo a nossa primeira aula.</Text>
      </View>
  );
}
