import { Text, View } from '../components/Themed';
import { FlatList, Image, ImageBackground, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { FontAwesome } from '@expo/vector-icons';
import React, { ReactElement, useRef, useState } from 'react';
import { greyColorDark, tintColorDark, tintColorLight } from '../constants/Colors';
import { Icon } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

export default function GetStarted() {

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
        { image: 'assets:/images/usa.png', language: 'English' },
        { image: 'assets:/images/french.png', language: 'French' },
    ]

    const tailwind = useTailwind();
    return <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../assets/images/girl-doing-sports.png')} resizeMode='cover'>
            <TouchableOpacity ref={DropdownButton} style={styles.button} onPress={toggleDropDown}>
                {renderDropDown()}
                <Text style={styles.buttonText}>{(selected && selected) || 'Eng'}</Text>
                <Icon type='font-awesome' name='chevron-down' size={12} color={greyColorDark} tvParallaxProperties={undefined} />
                <StatusBar style='auto' />
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
    overlay: {
        width: '100%',
        height: '100%',
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
        color: tintColorDark
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: tintColorLight,
    },
})


