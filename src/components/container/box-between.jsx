import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const Container = ({children, style}) => {
  return (
      <View
        style={[{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center"
        }, style]}
      >
          {children}
      </View>
  );
}

export default Container;
