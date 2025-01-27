import React from 'react';
import { View, TextInput, TouchableOpacity, Image , Alert, StyleSheet, Text } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import DefaultImage from '../Image/zipcarLogoColor.png';
import hatchbackImage from '../Image/hatchback.png'
import dotsPinCopy from '../Image/dotsPinCopy.png'
import { Dimensions } from 'react-native'
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;
const HATCHBACK_IMAGE = Image.resolveAssetSource(hatchbackImage).uri;
const DOTSPIN_IMAGE = Image.resolveAssetSource(dotsPinCopy).uri;
let deviceWidth = Dimensions.get('window').width


const LoginScreen = () => {
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} >
            <View style={styles.loginContainer}>
                <Image style = {styles.logo} source={{uri: DEFAULT_IMAGE}}/>
                <View style = {styles.loginForm}>
                   <TextInput style = {styles.input} placeholder='Email'/>
                   <TextInput style = {styles.input} placeholder='Password'/>
                  <TouchableOpacity style={styles.resetPasswordButton}>
                     <Text style={styles.resetPasswordText}>Reset password</Text>
                 </TouchableOpacity>
                  <TouchableOpacity style={styles.signInButton}>
                     <Text style={styles.signInText}>Sign In</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <View>
                     <Image source={{uri: HATCHBACK_IMAGE}}/>
                </View>
                <View style = {styles.registerContainer}>
                    <Text style = {styles.notaMemberText}>Not a member?</Text> 
                    <TouchableOpacity style={styles.joinNowButton}>
                        <Text style={styles.signInText}>Join</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerContent}>
                  <TouchableOpacity style={styles.resetPasswordBtn}>
                      <Text>Member Contract | </Text>
                  </TouchableOpacity>
                 <TouchableOpacity style={styles.resetPasswordBtn}>
                      <Text>Privacy Notice</Text>
                  </TouchableOpacity>
                </View>
            </View>
           </SafeAreaView>
      </SafeAreaProvider>
    );
};


export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
       
    },
    loginContainer: {
        //justifyContent: "center",
        //alignItems: "center",
        padding: 20,
    },
    logo: {
       height: 50,
       resizeMode: 'contain',
       margin: 20,
    },
    loginForm: {
       margin: 15,
       width: "100%"
    },
    input: {
        height: 50,
        marginBottom: 15,
        borderWidth: 0.2,
        padding: 10,
        borderColor: 'gray',
    },
    btnText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    signInButton: {
         backgroundColor: '#55A646',
         padding: 15,
         borderRadius: 25,
         margin: 10,
         justifyContent: 'center',
         alignItems: 'center'
    },
    resetPasswordBtn: {
        marginTop: 10,
        marginBottom: 10
    },
    resetPasswordText: {
        color: '#55A646',
        fontWeight: 'bold',
    },
    footer: {
        width: "100%",
        minHeight: 200,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: '#8AC850',
        padding: 20,
        position: "relative",
        flexDirection: "column"
    },
    carImageContainer: {
       position: "absolute",
       top: -35,
    },
    carImage: {
        //height: 100,
        resizeMode: 'contain',
    },
    registerContainer: {
        // justifyContent: "space-between",
        // flexDirection: "column",
        flex: 0.5,
        marginTop: 20,
        marginBottom: 20,
    },
    joinNowButton: {
        backgroundColor: '#FDC959',
        height: 30,
        width: 100,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notaMemberText: {
        color: '#ffffff',
        alignItems: 'center',
    },
    footerContent: {
       flexDirection: "row",
       margin: 20
    },
    signInText: {
        color: '#ffffff',
    }
})