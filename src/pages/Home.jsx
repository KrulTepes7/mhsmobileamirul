import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    onPress,
    Alert,
  } from 'react-native';
  import React from 'react';
  
  const Home = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 60,
            alignItems: 'center',
            backgroundColor: 'red',
            marginHorizontal: 16,
            marginTop: 16,
            padding: 16,
            borderRadius: 40,
          }}>
          <Image
            resizeMode="contain"
            style={{height: 40, width: 150}}
            Source={require('../assets/images/logomhs.png')}
          />
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: 'yellow',
            }}></View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              borderWidth: 1,
              padding: 12,
              flex: 1,
              marginTop: 16,
            }}>
            <View
              style={{
                height: 200,
                backgroundColor: 'red',
                borderRadius: 40,
              }}></View>
            <Text>Teh oolong</Text>
            <Text>Rp.5000</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 12,
              flex: 1,
              marginTop: 16,
            }}>
            <View
              style={{
                height: 200,
                backgroundColor: 'red',
                borderRadius: 40,
              }}></View>
            <Text>Nasi Kuning</Text>
            <Text>Rp.10.000</Text>
          </View>
        </View>
      </View>
    );
  };
  
  export default Home;
  