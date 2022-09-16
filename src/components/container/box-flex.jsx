import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const Container = ({children, style}) => {
  return (
      <View
        style={[{
            backgroundColor: "white",
            padding: 20
        }, style]}
      >
          {children}
      </View>
  );
}

export default Container;
