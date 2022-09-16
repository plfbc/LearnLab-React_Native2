import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const Container = ({children, }) => {
  return (
      <View
        style={{
            flex: 1,
            backgroundColor: "white",
            alignItems:"center",
            justifyContent: "center"
        }}
      >
          {children}
      </View>
  );
}

export default Container;
