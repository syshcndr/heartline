import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Alert,Animated, Easing } from 'react-native';
import theme from './theme';
import GiftButton from './GiftButton';

export default function GiftScreen({ navigation}) {
  let today = new Date();
  const dayOfMonth = today.getDate();
  const month = today.getMonth() + 1;
  const handleGift = (day) => {
    if(dayOfMonth>=day && month>=2){
      navigation.navigate("Gift",{day: day})
    }else{
      Alert.alert(`Today is not the day!`)
    }
  };

  const [animatedValue] = useState(new Animated.Value(1)); 

  useEffect(() => {
    const heartbeatAnimation = () => {
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1.2,
          duration: 300,
          easing: Easing.bezier(0.33, 1, 0.68, 1),
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 300,
          easing: Easing.bezier(0.33, 1, 0.68, 1),
          useNativeDriver: false,
        }),
      ]).start(() => heartbeatAnimation());
    };

    heartbeatAnimation();
  }, [animatedValue]);

  return (
    <View style={styles.container}>
      {Array.from({ length: 8 }, (_, i) => i + 7).map((day) => (
        <View key={day} style={styles.buttonContainer}>
          <GiftButton 
            onPress={() => { handleGift(`${day}`) }} 
            title={`${day}`} 
            animatedValue={animatedValue} 
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.backgroundColor, // Correctly reference your theme color
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 50,
    justifyContent: 'space-between', // This helps maintain the spacing between two columns
  },
  buttonContainer: {
    width: '48%', // Adjust width to fit two buttons per row
    marginVertical: 10, // Optional: add vertical margin for spacing between rows
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#D00000',
  },
});
