/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {
  const [defaultRating, setdefaultRating]= useState(2)
  const [maxRating, setmaxRating]=useState([1,2,3,4,5])
  const [input, setInput] = React.useState("");

  const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
  const starImgCorner= 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'

  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingBarStyle}>
        {
          maxRating.map((item, key) => {
            return(
              <TouchableOpacity
                 activeOpacity={0.7}
                 key={item}
                 onPress={() => setdefaultRating(item)}
               >  
              <Image
              style={styles.starImgStyle}
              source={
                item <= defaultRating
                  ? {uri: starImgFilled}
                  : {uri: starImgCorner}
              }
              />
            </TouchableOpacity>
          )
        })
      }
      </View>
      )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Califique y comente</Text>
      <CustomRatingBar/>
      <Text style={styles.textStyle}>
        {defaultRating + ' / ' + maxRating.length}
      </Text>
      <TextInput style={styles.input} onChangeText={(text) => setInput(text)}
      
      />
      <TouchableOpacity
      activeOpacity={0.7}
      style={styles.buttonStyle}
      onPress={() => alert("Comentario enviado exitosamente")} //defaultRating
      >
        <Text>Enviar</Text>


      </TouchableOpacity>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center'
  },
  textStyle:{
    textAlign: 'center',
    fontSize: 23,
    marginTop:20

  },
  CustomRatingBarStyle:{
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30
  },
  starImgStyle:{
    width: 40,
    height: 40,
    resizeMode: 'cover'
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 15,
    backgroundColor: 'green'
  },
  input: {
    width: '100%',
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default App;
