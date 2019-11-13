import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

const Card = props => {
    let picture = <Image/>
    if (props.location === '')
    {
        picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/detective.png')} />;
    }
    else if (props.location === 'United States') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/united-states.png')} />;}
    else if (props.location === 'Canada') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/canada.png')} />;}
    else if (props.location === 'France') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/france.png')} />;}
    else if (props.location === 'Germany') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/germany.png')} />;}
    else if (props.location === 'Brazil') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/brazil.png')} />;}
    else if (props.location === 'Australia') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/australia.png')} />;}
    else if (props.location === 'Russia') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/russia.png')} />;}
    else if (props.location === 'China') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/china.png')} />;}
    else if (props.location === 'Japan') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/japan.png')} />;}

    else if (props.location === 'Taiwan') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/taiwan.png')} />;}
    else if (props.location === 'India') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/india.png')} />;}
    else if (props.location === 'Saudi Arabia') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/saudi-arabia.png')} />;}
    else if (props.location === 'Singapore') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/singapore.png')} />;}
    else if (props.location === 'South Korea') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/south-korea.png')} />;}
    else if (props.location === 'Pakistan') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/pakistan.png')} />;}
    else if (props.location === 'Hong Kong') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/hong-kong.png')} />;}
    else if (props.location === 'Vietnam') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/vietnam.png')} />;}
    else if (props.location === 'Israel') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/israel.png')} />;}

    else if (props.location === 'United Kingdom') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/united-kingdom.png')} />;}
    else if (props.location === 'Italy') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/italy.png')} />;}
    else if (props.location === 'Spain') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/spain.png')} />;}
    else if (props.location === 'Greece') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/greece.png')} />;}
    else if (props.location === 'Norway') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/norway.png')} />;}
    else if (props.location === 'Ukraine') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/ukraine.png')} />;}
    else if (props.location === 'Switzerland') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/switzerland.png')} />;}
    else if (props.location === 'Ireland') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/ireland.png')} />;}
    else if (props.location === 'Finland') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/finland.png')} />;}

    return (
        <View>
            <View style={styles.card}>
                {picture}
                <Text style={styles.text}>{props.role}</Text>
                <Text style={styles.place}>{props.location}</Text>
                <LinearGradient colors={[Colors.primary, Colors.secondary]} style={styles.gradient}></LinearGradient>
            </View>
            <View style={styles.box}>
                <Animatable.View animation="fadeOut" duration={1000} delay={200} style={[styles.westBox, styles.triangle]}></Animatable.View>
                <View>
                    <Animatable.View animation="fadeOut" duration={1000} delay={1100} style={[styles.northBox, styles.triangle]}></Animatable.View>
                    <Animatable.View animation="fadeOut" duration={1000} delay={2600} style={[styles.southBox, styles.triangle]}></Animatable.View>
                </View>
                <Animatable.View animation="fadeOut" duration={1000} delay={1900} style={[styles.eastBox, styles.triangle]}></Animatable.View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 260,
        width: 260,
        borderWidth: 4,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradient: {
        marginTop: 'auto',
        height: 15,
        width: '100%',
    },
    text: {
        fontSize: 20,
    },
    place: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        height: 100,
        width: 100,
        marginBottom: 10,
        marginTop: 'auto',
    },
    box: {
        height: 260,
        width: 260,
        flexDirection: 'row',
        overflow: 'hidden',
        marginTop: -260
    },
    triangle: {
        height: 183,
        width: 183,
        backgroundColor: 'black'
    },
    westBox: {
        marginTop: 38,
        marginLeft: -90,
        transform: [{ rotate: '45deg'}],
    },
    northBox: {
        marginLeft: -53,
        marginTop: -91,
        transform: [{ rotate: '45deg'}],
    },
    southBox: {
        marginLeft: -53,
        marginTop: 'auto',
        marginBottom: -90,
        transform: [{ rotate: '45deg'}],
    },
    eastBox: {
        marginTop: 38,
        marginLeft: -54,
        transform: [{ rotate: '45deg'}],
    }
})

export default Card;