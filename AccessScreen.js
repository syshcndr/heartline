import { StyleSheet, Text, View, TextInput, Alert, Image } from 'react-native';
import theme from './theme'
import SubmitButton from './SubmitButton';
import { useState } from 'react';

export default function AccessScreen({navigation}) {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    if(code=="143"){
        navigation.navigate('Heart Gifts');
    }else{
        Alert.alert('Not A Valid Code, Please Try Again.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/heart.jpg')} style={styles.heartLogo} />
      <Text style={styles.title}>Invite Code</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCode}
        value={code}
      />
      <SubmitButton onPress={handleSubmit}></SubmitButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingTop: 150,
    paddingHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'top',
  },
  input: {
    height: 40,
    margin: 12,
    width: 100,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center', 
  },
  heartLogo: {
    width: 100, // Set the width of the heart logo
    height: 100, // Set the height of the heart logo
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24, // For main titles
    fontWeight: 'bold',
    color: '#D00000', // Example color: vibrant deep red
  },
  subtitle: {
    fontSize: 18, // For subtitles or secondary titles
    color: '#FFC0CB', // Example color: soft pink
  },
  bodyText: {
    fontSize: 14, // For regular body text
    color: '#000000', // Example color: black for readability
  },
  buttonText: {
    fontSize: 16, // For text on buttons
    fontWeight: 'bold',
    color: '#FFFFFF', // Example color: white for contrast on dark backgrounds
  },
  accentText: {
    fontSize: 14, // For accent text that might appear over images or in side notes
    fontStyle: 'italic',
    color: '#FFD700', // Example color: gold
  },
});
