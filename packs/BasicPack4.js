import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BasicPack4 = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/hospital.png')} />
                <Text style={styles.name}>hospital</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/circus.png')} />
                <Text style={styles.name}>circus tent</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/cat.png')} />
                <Text style={styles.name}>cat show</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/gaming.png')} />
                <Text style={styles.name}>gaming convention</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/rock.png')} />
                <Text style={styles.name}>rock concert</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/train.png')} />
                <Text style={styles.name}>subway</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/basketball.png')} />
                <Text style={styles.name}>basketball stadium</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/gas.png')} />
                <Text style={styles.name}>gas station</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/harbor.png')} />
                <Text style={styles.name}>harbor docks</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    icon: {
        height: 80,
        width: 80,
        marginTop: 10,
        marginHorizontal: 10,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-evenly",
        marginBottom: 30,
    },
    name: {
        textAlign: 'center',
        marginTop: 3,
    }
})

export default BasicPack4;