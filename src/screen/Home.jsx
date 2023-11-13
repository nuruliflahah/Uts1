import react,{useState,useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [seleksi, setSeleksi] = useState();
  const Tab = createBottomTabNavigator();

  return (
    <View style={{flex: 1, backgroundColor: '#E0FFFF'}}>
       <TouchableOpacity
        style={{
          backgroundColor: '#778899',
          marginTop: 20,
          marginHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 6,
          elevation: 2,
          
          paddingHorizontal: 20,
        }}
        onPress={() => setShowMenu(!showMenu)}>
      <View style={{marginHorizontal: 13}}>
      <Text style={{fontSize: 20, color: '#000000'}}>
      <Icon name="chevron-circle-down" size={20} color="#ADD8E6" />Menyediakan</Text>
      </View>
      </TouchableOpacity>
      {showMenu && (
        <View
          style={{
            marginHorizontal: 20,
            backgroundColor: '#ADD8E6',
            elevation: 2,
            paddingVertical: 20,
            paddingHorizontal: 20,
            borderBottomRightRadius: 6,
            borderBottomLeftRadius: 6,
          }}>
      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          backgroundColor: '#A9A9A9',
          elevation: 3,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 6,
          flexDirection: 'row',
          borderWidth: seleksi == 1 ? 2 : 0,
          borderColor: seleksi == 1 ? '#696969' : 'transparent',
        }}
        onPress={() => setSeleksi(1)}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 3,
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#696969',
          }}>
          <View
            style={{
              backgroundColor: seleksi == 1 ? '#696969' : '#FFFFFF',
              width: 10,
              height: 10,
              borderRadius: 10 / 2,
            }}></View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Rabbani</Text>
        </View>
      
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          backgroundColor: '#A9A9A9',
          elevation: 3,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 6,
          flexDirection: 'row',
          borderWidth: seleksi == 2 ? 1 : 0,
          borderColor: seleksi == 2 ? '#696969' : 'transparent',
        }}
        onPress={() => setSeleksi(2)}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 3,
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#696969',
          }}>
          <View
            style={{
              backgroundColor: seleksi == 2 ? '#696969' : '#FFFFFF',
              width: 10,
              height: 10,
              borderRadius: 10 / 2,
            }}></View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Kimono Sultan</Text>
        </View>
      
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          backgroundColor: '#A9A9A9',
          elevation: 3,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 6,
          flexDirection: 'row',
          borderWidth: seleksi == 3 ? 2 : 0,
          borderColor: seleksi == 3 ? '#696969' : 'transparent',
        }}
        onPress={() => setSeleksi(3)}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 3,
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#696969',
          }}>
          <View
            style={{
              backgroundColor: seleksi == 3 ? '#696969' : '#FFFFFF',
              width: 10,
              height: 10,
              borderRadius: 10 / 2,
            }}></View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Brokak</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          backgroundColor: '#A9A9A9',
          elevation: 3,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 6,
          flexDirection: 'row',
          borderWidth: seleksi == 4 ? 3 : 0,
          borderColor: seleksi == 4 ? '#696969' : 'transparent',
        }}
        onPress={() => setSeleksi(4)}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 3,
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#696969',
          }}>
          <View
            style={{
              backgroundColor: seleksi == 4 ? '#696969' : '#FFFFFF',
              width: 10,
              height: 10,
              borderRadius: 10 / 2,
            }}></View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Ayubi</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          backgroundColor: '#A9A9A9',
          elevation: 3,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 6,
          flexDirection: 'row',
          borderWidth: seleksi == 5 ? 4 : 0,
          borderColor: seleksi == 5 ? '#696969' : 'transparent',
        }}
        onPress={() => setSeleksi(5)}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 3,
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#696969',
          }}>
          <View
            style={{
              backgroundColor: seleksi == 5 ? '#696969' : '#FFFFFF',
              width: 10,
              height: 10,
              borderRadius: 10 / 2,
            }}></View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Rauna</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          backgroundColor: '#A9A9A9',
          elevation: 3,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 6,
          flexDirection: 'row',
          borderWidth: seleksi == 6 ? 5 : 0,
          borderColor: seleksi == 6 ? '#696969' : 'transparent',
        }}
        onPress={() => setSeleksi(6)}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 3,
            borderColor: '#696969',
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: seleksi == 6 ? '#696969' : '#FFFFFF',
              width: 10,
              height: 10,
              borderRadius: 10 / 2,
            }}></View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Keke</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          backgroundColor: '#A9A9A9',
          elevation: 3,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 6,
          flexDirection: 'row',
          borderWidth: seleksi == 8 ? 7 : 0,
          borderColor: seleksi == 8 ? '#696969' : 'transparent',
        }}
        onPress={() => setSeleksi(8)}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 3,
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#696969',
          }}>
          <View
            style={{
              backgroundColor: seleksi == 8 ? '#696969' : '#FFFFFF',
              width: 10,
              height: 10,
              borderRadius: 10 / 2,
            }}></View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Abaya</Text>
        </View>
      </TouchableOpacity>

        </View>
      )}
    </View>
  );
};

export default App;