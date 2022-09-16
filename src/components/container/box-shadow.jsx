import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default ({children, style}) => {
  return  (
  <View
    style={[
        {
            alignItems: 'center',
            borderRadius: 5,
            borderTopEndRadius: 40,
            borderTopStartRadius: 40,
            borderBottomStartRadius: 40,
            borderBottomRightRadius: 41,
            elevation: 5,
            shadowColor: '#00000029',
            shadowOffset: {
            width: 0,
            height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        },style
  ]}
>
    {children}
</View>);
}
