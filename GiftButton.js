import React, {useState, useEffect} from 'react';
import { TouchableOpacity, Text, Animated, Easing, StyleSheet } from 'react-native';

const GiftButton = ({ onPress, title, animatedValue }) => {
  const [style,setStyle] = useState(styles.text);
  useEffect(() => {
    let todayDate = new Date();
    let todaysDay = todayDate.getDate();
    if(Number(title)>todaysDay){
      setStyle(styles.inactiveText) 
    }
  },[])
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Animated.Image
        source={require('./assets/heart.jpg')} // Replace with your image source
        style={[
          styles.image,
          {
            transform: [{ scale: animatedValue }], // Use the passed animated value
          },
        ]}
      />
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    container: {
        paddingLeft: 30
    },
    button: {
      marginLeft: 35,
        width: 100, // Adjust the width as needed
        height: 100, // Adjust the height as needed
        margin: 5,
        overflow: 'hidden', // Keeps the image background within the button's borderRadius
        borderRadius: 5, // Example border radius
        justifyContent: 'center', // Center the content
        alignItems: 'center', 
    },
    image: {
        flex: 1,
        justifyContent: 'center', // Center text vertically
        alignItems: 'center', // Center text horizontallye
        width: '100%', // Ensure the background covers the button area
        height: '100%', // Ensure the background covers the button area
    },
    text: {
      fontSize: 24,
      fontStyle: 'italic',
      position: 'absolute',
        color: '#FFD700', // Choose a text color that contrasts well with the background image
        textAlign: 'center', // Ensure text is centered
        // Add any additional styling for the text here
    },
    inactiveText: {
      fontSize: 24,
      fontStyle: 'italic',
      position: 'absolute',
        color: '#858591', // Choose a text color that contrasts well with the background image
        textAlign: 'center', // Ensure text is centered
        // Add any additional styling for the text here
    },
});

export default GiftButton;
