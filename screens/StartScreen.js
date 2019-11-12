import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import MainButton from '../components/MainButton';
import InputButton from '../components/InputButton';

import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';


const StartScreen = props => {
    const isBasics = props.navigation.getParam('isBasics');
    const isAsia = props.navigation.getParam('isAsia');
    const isEurope = props.navigation.getParam('isEurope');

    const [playersNumber, setPlayersNumber] = useState(5);
    const [spiesNumber, setSpiesNumber] = useState(1);
    const [spyText, setSpyText] = useState('spy');
    const [firstRender, setFirstRender] = useState(true);
    
    const addPlayers = () => {
        if (playersNumber < 99) {
            setPlayersNumber(playersNumber + 1);
        }
    }
    const substractPlayers = () => {
        if (playersNumber > 2 && spiesNumber < playersNumber){
            setPlayersNumber(playersNumber - 1);
        }
        else if (playersNumber > 2 && spiesNumber === playersNumber)
        {
            setPlayersNumber(playersNumber - 1);
            setSpiesNumber(spiesNumber - 1);           
        }
    }

    const addSpies = () => {
        if (spiesNumber < 99 && playersNumber > spiesNumber) {
            setSpiesNumber(spiesNumber + 1);
        }
        else if (spiesNumber < 99 && playersNumber == spiesNumber) {
            setSpiesNumber(spiesNumber + 1);
            setPlayersNumber(playersNumber + 1);
        } 
        checkSpelling();
    }
    const substractSpies = () => {
        if (spiesNumber > 1){
            setSpiesNumber(spiesNumber - 1);
        }
        checkSpelling();
    }

    const toRules = () => {
        props.navigation.navigate({routeName: 'Rules'})
    }

    const [ErrorText, setErrorText] = useState(<View style={styles.emptyBox}></View>) ;

    const startGame = () => {
        if (isBasics || isAsia || isEurope ) {
        props.navigation.navigate({routeName: 'Picking', params: {
            spyAmount: spiesNumber, playerAmount: playersNumber,
            isBasics: isBasics, isAsia: isAsia, isEurope: isEurope

        }})
        setErrorText(<View style={styles.emptyBox}></View>)
        }
        else {
            setErrorText(<View style={styles.errorBox}><Text style={styles.errorText}>choose locations first!</Text></View>);
        }
    }
    const toLocation = () => {
        props.navigation.navigate({routeName: 'Locations'})
    }
    const checkSpelling = () => {
        if (spiesNumber >= 2) {
            setSpyText('spies')
        }
        else {
            setSpyText('spy')
        }
    }

    if (firstRender) {
        props.navigation.setParams({isBasics: true, })
        setFirstRender(false)
    }

    console.log(isBasics);
    console.log(isAsia);
    console.log(isEurope);

    return (
        <View style={styles.container}>
            <LinearGradient colors={[Colors.primary, Colors.primary, Colors.secondary]} style={styles.gradient}>
            <Text style={styles.title}>Spyfall</Text>
            <View style={styles.containerBox}>
                <Text style={styles.number}>{playersNumber}</Text>
                <Text style={styles.text}>players</Text>
                <InputButton add={addPlayers} substract={substractPlayers} />                
            </View>
            <View style={styles.containerBox}>
                <Text style={styles.number}>{spiesNumber}</Text>
                <Text style={styles.text}>{spyText}</Text>
                <InputButton add={addSpies} substract={substractSpies}  />
            </View>
            <View style={styles.button}><Button onPress={toLocation} title="choose locations" color='black' /></View>
            <View style={styles.buttons}>
                <MainButton onClick={toRules}>rules</MainButton>
                <MainButton onClick={startGame}>start</MainButton>
            </View>
        </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    gradient: {
        flex: 1,
        height: '100%',
        width: '100%',
        marginTop: '20%',
        paddingHorizontal: 40,
    },
    title: {
        fontSize: 70,
        color: 'black',
        fontFamily: 'avenir-heavy',
        textAlign: 'center',
        marginBottom: 50,
    },
    containerBox: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: "space-between",
        alignItems: 'center',
    },
    number: {
        fontSize: 30,
    },
    text: {
        fontSize: 30,
    },
    input: {
        height: 30,
        width: 60,
        backgroundColor: 'black',
    },
    button: {
        marginTop: 30,
        marginLeft: 'auto',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: 'auto',
    },
    emptyBox: {
        width: '100%',
        height: 35,
    },
    errorBox: {
        backgroundColor: 'grey',
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    errorText: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
    }
})

export default StartScreen;