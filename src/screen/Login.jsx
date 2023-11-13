import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Input from '../components/Input';

export default class Login extends Component {
  constructor(props) {
    super(props);
    // ini penyimpanan sementara
    this.state = {
      nama: '',
      alamat: '',
      nope: '',
    };
  }

  render() {
    // destrukturisasi
    const {nama, Sandi, nope} = this.state;
    return (
      <View style={styles.box }>
        <Text style={{fontSize: 25, color: '#000000'}}> Login Terlebih Dahulu </Text>
        <Input
          placeholder={'isi nama'}
          onChangeText={isi => this.setState({mana: isi, color: 'Black'})} 
        />
        <Input 
          placeholder={'Isi Sandi Anda'}
          onChangeText={isi => this.setState({Sandi: isi, Color: 'Black'})}
        />
        <Input
          placeholder={'Isi no hp'}
          InputMode={'numeric'}
          onChangeText={isi => this.setState({nope: isi, color: 'Black'})}
        />
        <Text style={{fontSize: 20, color: '#000000'}}>Nama : {nama}</Text>
        <Text style={{fontSize: 20, color: '#000000'}}>Sandi : {Sandi}</Text>
        <Text style={{fontSize: 20, color: '#000000'}}>No HP : {nope}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    backgroundColor: '#E0FFFF',
    flex: 1,
    paddingHorizontal: 5,
  },
});