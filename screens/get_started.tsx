import { Text, View } from '../components/Themed';
import { FlatList, Image, ImageBackground, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, { ReactElement, useRef, useState } from 'react';
import { greyColorDark, tintColorDark, tintColorLight } from '../constants/Colors';
import { Icon } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { RootStackScreenProps } from '../types';

export default function GetStarted({ navigation }: RootStackScreenProps<'GetStarted'>) {

    const DropdownButton = useRef<any>();

    const [visible, setVisible] = useState<boolean>(false);
    const [dropdownTop, setDropdownTop] = useState<number>(0);
    const [selected, setSelected] = useState(undefined);

    const onSelect = (item: { image: string, language: string }): void => {

    }

    const toggleDropDown = () => {
        visible ? setVisible(!visible) : openDropdown();
    }

    const openDropdown = (): void => {
        DropdownButton.current.measure(
            (_fx: any, _fy: any, _w: any, h: any, _px: any, py: any) => {
                setDropdownTop(py + h);
            },
        );
        setVisible(true);
    };

    const onItemPress = (item: any): void => {
        setSelected(item.language);
        onSelect(item.language);
        setVisible(false);
    };

    const renderItem = ({ item }: any): ReactElement<any, any> => (
        <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
            <Text style={{ color: tintColorLight }}>{item.language}</Text>
        </TouchableOpacity>
    )

    const renderDropDown = (): ReactElement<any, any> => {

        return (
            <Modal visible={visible} transparent animationType='none'>
                <TouchableOpacity style={styles.overlay} onPress={() => setVisible(false)}>
                    <View style={[styles.dropdown, { top: dropdownTop }]}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        )

    }

    const data: { image: string, language: string }[] = [
        { image: '', language: 'English' },
        { image: '', language: 'French' },
    ]

    return <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../assets/images/girl-doing-sports.png')} resizeMode='cover'>
            <TouchableOpacity ref={DropdownButton} style={styles.button} onPress={toggleDropDown}>
                {renderDropDown()}
                <Image style={{ height: 20, width: 20 }} source={require('../assets/images/french.png')} height={10} width={20} />
                <Text style={styles.buttonText}>{(selected && selected) || 'Eng'}</Text>
                <Icon type='font-awesome' name='chevron-down' size={12} color={greyColorDark} tvParallaxProperties={undefined} />
                <StatusBar style='auto' />
            </TouchableOpacity>

            <View style={styles.middleContainer}>
                <Text style={styles.myFit}>MY FIT</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>This app will help you</Text>
                    <Text style={styles.descriptionText}>Keep your body fit and strong.</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("SignIn")}>
            <View style={styles.getStartedContainer}>
                <Text style={styles.buttonText}>Get started</Text>
                <Icon type='font-awesome' name='long-arrow-right' size={20} color={tintColorDark} tvParallaxProperties={undefined} />
            </View>
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
        flexDirection: 'column',

        justifyContent: 'space-around',
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
        backgroundColor: '#fff',
        width: '40%',
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
        left: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        // top: '12%',
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
    overlay: {
        width: '100%',
        height: '100%',
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'poppins-regular',
        color: tintColorDark
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: tintColorLight,
    },
    middleContainer: {
        // top: '20%',
        backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    getStartedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '40%',
        // top: '150%',
        backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    myFit: {
        fontSize: 80,
        color: tintColorDark,
        fontFamily: 'poppins-bold',
    },
    descriptionContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    descriptionText: {
        color: tintColorDark,
        fontFamily: 'poppins-regular',
    }
})


