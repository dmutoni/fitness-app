import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {    BarChart } from "react-native-chart-kit";

const Dashboard = () =>{
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
      };
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.title}>
              Dashboard
            </Text>
            <Image source={require('../assets/images/woman-g6880c200f_640.png')} style={styles.profileImage}/>
            </View>
            <View style={styles.smallStatsContainer}>
                <View style={styles.smallStats}>
                    <Text style={styles.smallStatsBigText}>17</Text>
                    <Text style={styles.smallStatsSmallText}> Workouts completed</Text>
                </View>
                <View style={{borderWidth:1, borderColor:'#ccc',marginVertical:30}}/>
                <View style={styles.smallStats}>
                    <Text style={styles.smallStatsBigText}>17</Text>
                    <Text style={styles.smallStatsSmallText}> Workouts completed</Text>
                </View>
                <View style={{borderWidth:1, borderColor:'#ccc',marginVertical:30}}/>
                <View style={styles.smallStats}>
                    <Text style={styles.smallStatsBigText}>17</Text>
                    <Text style={styles.smallStatsSmallText}> Workouts completed</Text>
                </View>
            </View>
            <View style={{height:100,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20, padding:20,borderRadius:20, backgroundColor:'#acadff'}}>
                <View >
                    <Text style={{color:'#fff'}}>
                        Waist Cinching Workout
                    </Text>
                    <View style={{flex:1,marginVertical:5}}>
                        <Text style={{color:'#fff'}}>75% completed</Text>
                        <View style={{backgroundColor:'#fff', width:'100%', height:5}}>
                            <View style={{backgroundColor:'#352854', width:'75%', height:5}}>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:'#fff',borderRadius:20, height:30,paddingVertical:5, paddingHorizontal:30,alignSelf:'center'}}>
                    <Text style={{color:'#6261b0'}}>Continue</Text>
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
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        height:100,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:40,
        paddingHorizontal:20,
        marginVertical:20
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        textAlignVertical:'center'
    },
    profileImage:{
        width:100,
        height:100,
        borderRadius:50
    },
    smallStatsContainer:{height:100,flexDirection:'row'},
    smallStats:{width:130},
    smallStatsSmallText:{alignSelf:'center'},
    smallStatsBigText:{alignSelf:'center',color:'#6261b0',fontSize:20,fontWeight:'bold'},
    graphStyle:{

    }
})