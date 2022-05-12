import { Text, View } from '../components/Themed';
import { Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { greyColorDark, tintColorDark, tintColorLight } from '../constants/Colors';
import { Icon } from 'react-native-elements';

export default function GetStarted() {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleDropDown = () => {
        setVisible(!visible);
    }

    const renderDropDown = () => {
        if (visible) {
            return (
                <Text style={styles.dropdown}> Languages</Text>
            )
        }
    }

    const tailwind = useTailwind();
    return <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../assets/images/girl-doing-sports.png')} resizeMode='cover'>
            <TouchableOpacity style={styles.button} onPress={toggleDropDown}>
                {renderDropDown()}
                <Text style={styles.buttonText}>Eng</Text>
                <Icon type='font-awesome' name='chevron-down' size={12} color={greyColorDark} tvParallaxProperties={undefined} />

            </TouchableOpacity>
        </ImageBackground>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
        // width: '100%',
        // height: '100%',
    },
    languageButton: {
        // position: 'absolute',
        // alignSelf: 'center',
        top: '10%',
    },
    languageIcon: {
        color: '#000'
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: 50,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '12%',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        height: 40,
        width: '30%',
        borderRadius: 10,
        borderColor: greyColorDark,
        borderWidth: 1,
        paddingHorizontal: 10,
        zIndex: 1,
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
        color: tintColorDark
    }
})