import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';

const About = () => {
  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a tempora ducimus esse, ut delectus, ad,
          debitis quibusdam qui mollitia recusandae porro perspiciatis necessitatibus est iusto inventore reiciendis?
          Quo, sunt.
        </Text>
      </View>
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a tempora ducimus esse, ut delectus, ad,
          debitis quibusdam qui mollitia recusandae porro perspiciatis necessitatibus est iusto inventore reiciendis?
          Quo, sunt.
        </Text>
      </View>
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a tempora ducimus esse, ut delectus, ad,
          debitis quibusdam qui mollitia recusandae porro perspiciatis necessitatibus est iusto inventore reiciendis?
          Quo, sunt.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default About;

const styles = StyleSheet.create({});
