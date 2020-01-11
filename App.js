/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: 'row',
        width: '100%',
        height: 200,
        justifyContent: 'space-between',
        alignItems: 'stretch',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>1</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>2</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>3</Text>
      </View>
    </View>
  );
}
