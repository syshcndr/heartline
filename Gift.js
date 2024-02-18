import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Image, View, Alert } from 'react-native';
import theme from './theme';

export default function Gift({ navigation, route }) {
    const { day } = route.params
    const [gif,setGif] = useState(require("./assets/heart.jpg"));
    const [subTitle,setSubTitle] = useState("");
    const [body,setBody] = useState("");
    useEffect(() => {
        if (day == 7) {
            setGif(require('./assets/rose-day.gif'))
            setSubTitle("ROSE DAY🌹")
            setBody('"Roses are red, violets are blue, on this Rose Day, I want to say thank you for being you — a true friend, a constant support, and my forever Valentine. Happy Rose Day!"')
        }else if(day == 8){
            setGif(require('./assets/propose-day.gif'))
            setSubTitle("PROPOSE DAY💍")
            setBody('"I choose you, and I\'ll choose you over and over and over. Without pause, without a doubt, in a heartbeat. I\'ll keep choosing you. Will you choose me too?"')
        }
        else if(day == 9){
            setGif(require('./assets/chocolate-day.gif'))
            setSubTitle("CHOCOLATE DAY🍫")
            setBody('"Your love is the chocolate that sweetens every moment of my life. Thank you for being my sweet delight. Happy Chocolate Day!"')
        }
        else if(day == 10){
            setGif(require('./assets/teddy-day.gif'))
            setSubTitle("TEDDY DAY🧸")
            setBody('"You are the teddy bear I want to hold tight at night and wake up next to in the morning. Happy Teddy Day to my forever cuddle buddy."')
        }
        else if(day == 11){
            setGif(require('./assets/promise-day.gif'))
            setSubTitle("PROMISE DAY🤙")
            setBody('"On this Promise Day, I vow not just to promise you the moon and the stars but to promise to stand by your side through thick and thin. Happy Promise Day!"')
        }
        else if(day == 12){
            setGif(require('./assets/hug-day.gif'))
            setSubTitle("HUG DAY🤗")
            setBody('"Your hugs speak the language of love and comfort, telling me without words that it\'s okay to cry, it\'s okay to be me. Happy Hug Day."')
        }
        else if(day == 13){
            setGif(require('./assets/kiss-day.gif'))
            setSubTitle("KISS DAY😘")
            setBody('"Here\'s to the magic of your kisses that makes my world dissolve into happiness. Happy Kiss Day to the magician of my heart."')
        }
        else if(day == 14){
            setGif(require('./assets/valentine.gif'))
            setSubTitle("VALENTINE DAY😍")
            setBody('"You\'ve captured my heart and soul, and in your love, I\'ve found the home I\'ve always longed for. Happy Valentine\'s Day to my heart\'s keeper."')
        }
        else {
            Alert.alert('Contact Heart');
        }
      }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{subTitle}</Text>
            <Image source={gif} style={styles.giftGif} />
            <Text style={styles.body}>{body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        paddingHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'top', // This helps maintain the spacing between two columns
    },
    title: {
        fontSize: 28,
        color: '#D00000',
        justifyContent: 'center', // Center the content
        alignItems: 'center',
        marginBottom: 50
    },
    body: {
        fontSize: 22,
        color: '#808080', // Choose a text color that contrasts well with the background image
        textAlign: 'center',
        marginVertical: 30
    },
    giftGif: {
        height: 300,
        width: 300,
        overflow: 'visible',
        justifyContent: 'center', // Center the content
        alignItems: 'center',
    }
});
