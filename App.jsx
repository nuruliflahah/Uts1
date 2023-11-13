import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import Bayar from './src/screen/Bayar';
import Profile from './src/screen/Profile';
import Code from './src/screen/Code';

const App = () => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const Tab = createBottomTabNavigator();

  return (
    <View style={{ flex: 1, backgroundColor: '#FAFAFA', position: 'relative' }}>
      <StatusBar backgroundColor={'#FAFAFA'} barStyle="dark-content" />
      
      {activeMenu == 'Home' && <Home />}
      {activeMenu == 'Login' && <Login />}
      {activeMenu == 'Bayar' && <Bayar />}
      {activeMenu == 'Profile' && <Profile />}
      {activeMenu == 'Code' && <Code />}

      <View
        style={{
          backgroundColor: '#ADD8E6',
          flexDirection: 'row',
          paddingVertical: 10,
          borderTopWidth: 1,
          borderTopColor: '#bdbdbd',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <TouchableOpacity
          onPress={() => setActiveMenu('Login')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Login' ? '#E0FFFF' : '#778899',
            elevation: activeMenu == 'Login' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 80,
          }}
        >
          <Icon name="arrow-right-to-bracket" size={22} color="#000000" />
          <Text style={{ color: '#000000' }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveMenu('Home')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 12,
            borderRadius: 80,
            backgroundColor: activeMenu == 'Home' ? '#E0FFFF' : '#778899',
            elevation: activeMenu == 'Menu' ? 2 : 0,
          }}
        >
          <Icon name="home" size={22} color="#000000" />
          <Text style={{ color: activeMenu == 'Home' ? '#000000' : '#000000' }}>
            Home
          </Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => setActiveMenu('Code')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#E0FFFF',
              position: 'absolute',
              zIndex: 1,
              bottom: 10,
              elevation: 3,
              borderWidth: 3,
              borderColor: '#000000',
            }}
          >
            <Icon name="qrcode" size={22} color="#000000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => setActiveMenu('Bayar')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Bayar' ? '#E0FFFF' : '#778899',
            elevation: activeMenu == 'Bayar' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 80,
          }}
        >
          <Icon name="user" size={22} color="#000000" />
          <Text style={{ color: activeMenu == 'Bayar' ? '#000000' : '#000000' }}>
            Bayar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveMenu('Profile')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Profile' ? '#E0FFFF' : '#778899',
            elevation: activeMenu == 'Profile' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 80,
          }}
        >
          <Icon name="user" size={22} color="#000000" />
          <Text style={{ color: activeMenu == 'Profile' ? '#000000' : '#000000' }}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;