import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      {/* HEADER */}

      <View
        style={{
          flexDirection: 'row',
          height: 60,
          justifyContent: 'space-between',
          height: 60,
          alignItems: 'center',
          backgroundColor: 'red',
          marginTop: 16,
          marginHorizontal: 16,
          padding: 16,
          borderRadius: 40,
        }}>
        <Image
          resizeMode="contain"
          style={{height: 40, width: 150}}
          source={require('../assets/images/Bola.png')}
        />

        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: 'yellow',
          }}></View>
      </View>

      <View>
        <Text
          style={{
            marginTop: 14,
            fontWeight: 'bold',
            color: 'rgb(102, 255, 102)',
          }}>
          Menu makanan
        </Text>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          borderWidth: 1,
        }}>
        <View
          style={{
            flex: 1,
            padding: 12,
            borderWidth: 2,
            borderColor: 'pink',
          }}>
          <View
            style={{
              height: 150,
              borderWidth: 1,
              borderRadius: 12,
            }}>
            <Image
              resizeMode="contain"
              style={{
                height: 148,
                borderRadius: 12,
                alignItems: 'center',
                width: 184,
              }}
              source={require('../assets/images/spagetti.jpg')}
            />
          </View>

          <View>
            <Text
              style={{
                marginTop: 12,
                fontSize: 16,
                fontWeight: 'bold',
                color: 'rgb(255,0,0)',
              }}>
              Spagetti
            </Text>
            <Text style={{marginTop: 4}}>Rp25.000</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            padding: 12,
            borderWidth: 2,
            borderColor: 'pink',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View
              style={{
                height: 150,
                borderWidth: 1,
                borderRadius: 12,
              }}>
              <Image
                resizeMode="contain"
                style={{
                  height: 148,
                  borderRadius: 12,
                  alignItems: 'center',
                  width: 184,
                }}
                source={require('../assets/images/ayam.jpeg')}
              />
            </View>

            <View>
              <Text
                style={{
                  marginTop: 12,
                  color: 'rgb(255,0,0)',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Ayam MHS
              </Text>
              <Text
                style={{
                  marginTop: 4,
                }}>
                Rp14.500{' '}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          borderWidth: 1,
        }}>
        <View
          style={{
            flex: 1,
            padding: 12,
            borderWidth: 2,
            borderColor: 'pink',
          }}>
          <View
            style={{
              height: 150,
              borderWidth: 1,
              borderRadius: 12,
            }}>
            <Image
              resizeMode="contain"
              style={{
                height: 148,
                borderRadius: 12,
                alignItems: 'center',
                width: 184,
              }}
              source={require('../assets/images/wine.jpg')}
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: 12,
                fontSize: 16,
                fontWeight: 'bold',
                color: 'rgb(255,0,0)',
              }}>
              Wine
            </Text>
            <Text style={{marginTop: 4}}>Rp160.000</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            padding: 12,
            borderWidth: 2,
            borderColor: 'pink',
          }}>
          <View
            style={{
              height: 150,
              borderWidth: 1,
              borderRadius: 12,
            }}>
            <Image
              resizeMode="contain"
              style={{
                height: 148,
                borderRadius: 12,
                alignItems: 'center',
                width: 184,
              }}
              source={require('../assets/images/alpukat.jpg')}
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: 12,
                color: 'rgb(255,0,0)',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Alpukat Juice
            </Text>
            <Text
              style={{
                marginTop: 4,
              }}>
              {' '}
              Rp 15.000{' '}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
