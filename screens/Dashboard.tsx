import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BarChart } from "react-native-chart-kit";
import { greyColorDark, tintColorDark } from '../constants/Colors';

const Dashboard = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Dashboard
                </Text>
                <Image source={require('../assets/images/woman-g6880c200f_640.png')} style={styles.profileImage} />
            </View>
            <View style={styles.smallStatsContainer}>
                <View style={styles.smallStats}>
                    <Text style={styles.smallStatsBigText}>17</Text>
                    <Text style={styles.smallStatsSmallText}> Workouts completed</Text>
                </View>
                <View style={{ borderWidth: 0.5, borderColor: '#ccc', marginVertical: 30 }} />
                <View style={styles.smallStats}>
                    <Text style={styles.smallStatsBigText}>245</Text>
                    <Text style={styles.smallStatsSmallText}> hours spent on training</Text>
                </View>
                <View style={{ borderWidth: 0.5, borderColor: '#ccc', marginVertical: 30 }} />
                <View style={styles.smallStats}>
                    <Text style={styles.smallStatsBigText}>7</Text>
                    <Text style={styles.smallStatsSmallText}> challenges participated in</Text>
                </View>
            </View>
            <View style={{ height: 100, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, padding: 20, borderRadius: 15, backgroundColor: '#acadff' }}>
                <View >
                    <Text style={{ color: '#fff', fontFamily: 'poppins-regular' }}>
                        Waist Cinching Workout
                    </Text>
                    <View style={{ flex: 1, marginVertical: 5 }}>
                        <Text style={{ color: '#fff', fontFamily: 'poppins-regular' }}>75% completed</Text>
                        <View style={{ backgroundColor: '#fff', width: '100%', height: 5 }}>
                            <View style={{ backgroundColor: '#352854', width: '75%', height: 5 }}>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff', borderRadius: 20, height: 40, paddingVertical: 5, paddingHorizontal: 30, alignSelf: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#6261b0', fontFamily: 'poppins-bold' }}>Continue</Text>
                </View>
            </View>
            {/* <View>
                <Text>Today Acivity</Text>
                <Text>2 hours workout . 387 kcal . 2.6 km</Text>

                
            </View> */}


        </View>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: tintColorDark
    },
    header: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 20,
        marginVertical: 20
    },
    title: {
        fontSize: 25,
        textAlignVertical: 'center',
        fontFamily: 'poppins-bold'
    },
    profileImage: {
        marginTop: 15,
        width: 70,
        height: 70,
        borderRadius: 50
    },
    smallStatsContainer: { height: 100, flexDirection: 'row' },
    smallStats: { width: 130 },
    smallStatsSmallText: { alignSelf: 'center', fontFamily: 'poppins-regular', color: greyColorDark },
    smallStatsBigText: { alignSelf: 'center', fontFamily: 'poppins-regular', color: '#6261b0', fontSize: 20, fontWeight: 'bold' },
    graphStyle: {

    }
})