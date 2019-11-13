import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import MainButton from '../components/MainButton';
import Basics from '../packs/BasicPack';
import Asia from '../packs/AsiaPack';
import Europe from '../packs/EuropePack';
// import { useSelector } from 'react-redux';
// ---------use Redux later-----------------

import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';


let isTicking = false;
let time = 479;

const GameScreen = props => {
    const goToStart = () => {
        isTicking = false;
        time = 479;
        props.navigation.navigate({routeName: 'Start'})
    }
    const isBasics = props.navigation.getParam('isBasics');
    const isAsia = props.navigation.getParam('isAsia');
    const isEurope = props.navigation.getParam('isEurope');
    let TimeButton;
    let intervally;
    const [timer, setTimer] = useState('8:00');

    const pauseTimer = () => {
        console.log('pausing the timer');
        isTicking = false
    }

    const startTimer = () => {
        console.log('starting the timer');
        intervally = setInterval(tick, 1000);
        isTicking = true;
    }


    const tick = () => {
    
        let min = Math.floor(time / 60);
        let sec = time - (min * 60);
    
        //add a leading zero (as a string value) if seconds less than 10
        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min === 0 && sec == '00'){
            console.log('clear');
            clearInterval(intervally);
        }

        if(isTicking === false) {
            console.log('pause the clock');
            clearInterval(intervally)
        }
    
        setTimer(min.toString() + ':' + sec.toString());
        time--;
    
    }
    
   if (isTicking === false) {
    TimeButton = <MainButton onClick={startTimer}>Start Timer</MainButton>;
   }
   else if (isTicking === true) {
    TimeButton = <MainButton onClick={pauseTimer}>Pause Timer</MainButton>
   }
    
    let BasicPics;
    let AsiaPics;
    let EuropePics;
    
    if (isBasics) {
        BasicPics = <Basics />
    }
     
    if (isAsia) {
        AsiaPics = <Asia />
    }
     
    if (isEurope) {
        EuropePics = <Europe/>
    }


    return (
        <View style={styles.screen}>
            <CustomHeader onClick={goToStart}>end game</CustomHeader>
            <ScrollView>
            {BasicPics}
            {AsiaPics}
            {EuropePics}
            </ScrollView>
            <View style={styles.buttons}>
                <LinearGradient colors={[ Colors.primary, Colors.primary, Colors.secondary]} style={styles.gradient}>
                    <Text style={styles.time}>{timer}</Text>
                    {TimeButton}
               </LinearGradient>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    buttons: {
    
    },
    gradient: {
        flexDirection: 'row',
        marginTop: 'auto',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        marginTop: 20,
        paddingBottom: 20,
    },
    time: {
        fontSize: 40,
    }
})

export default GameScreen;