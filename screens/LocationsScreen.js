import React, {useState} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import LocationHeader from '../components/LocationHeader';
import CustomHeader from '../components/CustomHeader';
import BasicPack from '../packs/BasicPack';
import AsiaPack from '../packs/AsiaPack';
import EuropePack from '../packs/EuropePack';

//import { useSelector } from 'react-redux';
// ------use redux later-------------------

const LocationScreen = props => {

    const goToStart = () => {
        props.navigation.navigate({routeName: 'Start', params: {
            isBasics: isBasics, isAsia: isAsia, isEurope: isEurope
        }})
    }
    const [isBasics, setIsBasics] = useState(true); 
    const [isAsia, setIsAsia] = useState(false); 
    const [isEurope, setIsEurope] = useState(false); 
   
    const Basics = <BasicPack />;
    const Asia = <AsiaPack />;
    const Europe = <EuropePack />;
    
    
    const [isOpenBasics, setIsOpenBasic] = useState(true);
    const [isOpenAsia, setIsOpenAsia] = useState(false);
    const [isOpenEurope, setIsOpenEurope] = useState(false);

    const changeBasics = () => {
        setIsOpenBasic(!isOpenBasics);
    }
    const changeAsia = () => {
        setIsOpenAsia(!isOpenAsia);
    }
    const changeEurope = () => {
        setIsOpenEurope(!isOpenEurope);
    }
    

    const toggleBasics = () => {
        setIsBasics(!isBasics);
    }
    const toggleAsia = () => {
        setIsAsia(!isAsia);
    }
    const toggleEurope = () => {
        setIsEurope(!isEurope);
    }
    
    console.log(isBasics);
    console.log(isAsia);
    console.log(isEurope);

    return (
        <View style={styles.container}>
            <CustomHeader onClick={goToStart}>back</CustomHeader>
            <ScrollView>
                <View style={styles.scroll}>
                    <LocationHeader value={isBasics} onToggle={toggleBasics} onClick={changeBasics}>Basic</LocationHeader>
                    {isOpenBasics ? Basics : Nothing}
                    <LocationHeader value={isAsia} onToggle={toggleAsia} onClick={changeAsia}>Asia</LocationHeader>
                    {isOpenAsia ? Asia : Nothing}
                    <LocationHeader value={isEurope} onToggle={toggleEurope} onClick={changeEurope}>Europe</LocationHeader>
                    {isOpenEurope ? Europe : Nothing}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        paddingTop: 30,
        paddingBottom: 10,
        
    },
})

export default LocationScreen