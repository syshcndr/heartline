import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'; // Import moment
import theme from './theme';
import SubmitButton from './SubmitButton';

export default function EntryScreen({ navigation }) {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const handleSubmit = () => {
    // Format the date to dd mm yyyy using moment
    const formattedDate = moment(date).format('DD MM YYYY');
    const dateArr = formattedDate.split(' ');
    console.log(dateArr)
    // Checking the formatted date
    if (dateArr[0] === "09" && dateArr[1] === "06" && dateArr[2] === "2000") {
      navigation.navigate('Heart Gifts Products');
    } else {
      Alert.alert('Please Enter Correct Date Of Birth');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/heart.jpg')} style={styles.heartLogo} />
      <Text style={styles.title}>Date Of Birth</Text>
      <DateTimePicker
        value={date}
        display="spinner"
        onChange={onChange}
      />
      <SubmitButton onPress={handleSubmit} />
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
