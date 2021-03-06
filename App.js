import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Dice1 from './assets/images/dice1.png';
import Dice2 from './assets/images/dice2.png';
import Dice3 from './assets/images/dice3.png';
import Dice4 from './assets/images/dice4.png';
import Dice5 from './assets/images/dice5.png';
import Dice6 from './assets/images/dice6.png';
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20,
    borderRadius: 20,
    color: 'black',
    backgroundColor: 'yellow',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
const App = () => {
  const [image, setImage] = useState(1);
  const [imageNew, setImageNew] = useState(1);
  const renderDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    // console.log('RANDOM NO. : ', randomNumber);
    setImage(randomNumber);
    setImageNew(randomNumber2);
    switch (randomNumber2) {
      case 1:
        setImage(Dice1);
        break;
      case 2:
        setImage(Dice2);
        break;
      case 3:
        setImage(Dice3);
        break;
      case 4:
        setImage(Dice4);
        break;
      case 5:
        setImage(Dice5);
        break;
      case 6:
        setImage(Dice6);
        break;

      default:
        setImage(Dice1);
        break;
    }
    switch (randomNumber) {
      case 1:
        setImage(Dice1);
        break;
      case 2:
        setImage(Dice2);
        break;
      case 3:
        setImage(Dice3);
        break;
      case 4:
        setImage(Dice4);
        break;
      case 5:
        setImage(Dice5);
        break;
      case 6:
        setImage(Dice6);
        break;

      default:
        setImage(Dice1);
        break;
    }
  };
  return (
    <View style={styles.root}>
      <Image source={imageNew} style={styles.image} />
      <Image source={image} style={styles.image} />

      <TouchableOpacity onPress={renderDice}>
        <Text style={styles.text}>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
