import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

const Home = ({ navigation }) => {
  const [modalOpen, setmodalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setmodalOpen(false);
  };

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              onPress={() => setmodalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons name='add' size={24} onPress={() => setmodalOpen(true)} style={styles.modalToggle} />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          //touchableopacity is a wrapper to onPress/onClick
          <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
            {/* second argument is the data we want to pass as props. It can be an obj, or arr, or anything */}
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      {/* <Button title='Review Details' onPress={() => pressHandler()} /> */}
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 20,
  },
  modalContent: {
    flex: 1,
    padding: 50,
  },
});
