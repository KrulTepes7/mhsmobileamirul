import {View, Text, Image, TextInput ,TouchableOpacity,}  from 'react-native';
import React from 'react';

const detail = () => {
  return (
    <View>
      <Image
        style={{
          height: 300,
          width: 350,
          alignItems: 'center',
          marginHorizontal: 40,
          marginTop: 30,
          borderRadius: 15,
        }}
        source={require('../assets/images/ayam.jpeg')}
      />

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            marginLeft: 40,
            marginTop: 10,
          }}>
          Ayam MHS Rp 14.500
        </Text>

        <Text
          style={{
            textAlign: 'justify',
            marginHorizontal: 40,
            marginTop: 10,
            color: 'rgb(192,192,192)',
          }}>
          Ayam lezat yang bisa digoreng kapan saja.
        </Text>

        <View
          style={{
            borderWidth: 1,
            borderColor: 'rgb(192,192,192)',
            marginTop: 10,
          }}></View>

        <View>
          <TextInput
            style={{
              height: 50,
              borderWidth: 1,
              width: 350,
              borderRadius: 40,
              marginTop: 20,
              alignItems: 'center',
              marginHorizontal: 40,
            }}
            placeholder="Menu tambahan"></TextInput>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('success')}>
          <View
            style={{
              borderWidth: 1,
              height: 40,
              borderRadius: 30,
              backgroundColor: 'red',
              marginTop: 180,
              width: 350,
              marginHorizontal: 40,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 8,
                color: 'rgb(255,255,255)',
              }}>
              Pembayaran
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default detail;
