import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from 'react-native-elements';
import { greyColorDark, tintColorDark, tintColorLight } from '../constants/Colors';
import { RootStackScreenProps } from "../types";

const SignIn = ({ navigation }: RootStackScreenProps<'GetStarted'>) => {
  return (
    <LinearGradient
    start={{ x: 0.7, y: 0.2 }}
    //   end={{ x: 0.5, y: 1.0 }}
      // locations={[0, 0,0]}
      colors={["#6074b6", "#352854"]}
      style={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.iconText}>
        <Icon type='font-awesome' name='long-arrow-left' size={20} color={tintColorDark} tvParallaxProperties={undefined} />
        <Text style={styles.back}>Back</Text>
        </View>
      
        <Text style={styles.signup}>Sign Up</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleBigText}>Welcome BACK</Text>
        <Text style={styles.titleSmallText}>Enter your credentials to continue</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          label="Email/ Username"
          activeUnderlineColor="#fff"
          underlineColor="#fff"
          theme={{ colors: { text: "#f5f5f5", placeholder: "#f5f5f5", background: "transparent" } }} 
          
        />
        <TextInput
          style={styles.input}
          label="Password"
          activeUnderlineColor="#fff"
          underlineColor="#fff"
          theme={{ colors: { text: "#f5f5f5", placeholder: "#f5f5f5", background: "transparent" } }} 
          secureTextEntry={true}
        />

        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')}>
      
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  iconText:{
    flexDirection:"row",
  },
  signup: {
    textDecorationLine: "underline",
    fontSize: 20,
    color:'#fff'
  },
  back:{
    color:'#fff',
    marginLeft:10
  },
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleBigText: {
    textTransform: "uppercase",
    fontSize: 20,
    color:'#fff'
  },
  titleSmallText:{
    color:'#fff'
  },
  input: {
    backgroundColor: "transparent",
    marginTop: 20,
  },
  form: {
    padding: 20,
  },
  forgotPassword: {
    textDecorationLine: "underline",
    color: "#fff",
    textAlign: "right",
    marginTop: 5,
  },
  buttonContainer: {
    flex: 2,
    padding: 20,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#8587dc",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
  },
  buttonText:{
    color:'#fff',
    fontWeight:'bold'
  }
});
