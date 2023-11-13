import { StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const Input = () => {
  return (
    <View style={style.kotakinput}>
      <TextInput placeholder="ketik nama disini" inputMode="email"/>
    </View>
  );
};

export default Input;

const style = StyleSheet.create({
  kotakinput: {
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderColor: 'blue',
  },
});
