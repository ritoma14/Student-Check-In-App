import React, { useEffect } from 'react';
import Images from '../config/Images';
import { auth } from '../firebase'
//import * as firebase from "firebase";
//import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

import * as WebBrowser from 'expo-web-browser';
import {
  ButtonSolid,
  ScreenContainer,
  TextField,
  ButtonOutline,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';



const BasicLoginScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [password, setPassword] = React.useState('');
  const [studentid, setStudentid] = React.useState('');

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(user=>{
      if (user) {
        navigation.navigate('BottomTabNavigator', {
          screen: 'HomeScreen',
        })
      }

    } 
      )
    return unsubscribe
  }, [])
  
  
  


  /*const handleSignUp = () =>{
  auth
  .createUserWithEmailAndPassword(studentid,password)
  .then(userCredentials => {
    const user = userCredentials.studentid;
    console.log(user.studentid);
  })
  .catch(error => alert(error.message))
} */
//const auth = firebase.auth()


  const handleLogin = () => {
    const auth = getAuth(); 
      signInWithEmailAndPassword(auth, studentid,password)
      .then(userCredentials => {
        const user= userCredentials.user;
        console.log('Logged in with: ',user.studentid);
      })
      .catch(error => alert(error.message))

  }

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true} >
      <KeyboardAvoidingView 
        //style={styles.KeyboardAvoidingViewcV}
        enabled={true}
        behavior={'padding'}
        extraHeight={135} enabledOnAndroid={true} 
        extraScrollHeight={70} style={styles.mainContainer}
        automaticallyAdjustContentInsets={true}
        enableOnAndroid={true}
        enableOnIo
        keyboardShouldPersistTaps='handled'
        scrollEnabled={true} 
        justifyContent='space-between'
      >
        
        <View style={styles.Viewb3} pointerEvents={'auto'}>
          <Image
            style={styles.Imagebl}
            resizeMode={'cover'}
            source={Images.CsuLogo}
          />
          <Text style={[styles.Textai, { color: theme.colors.custom_rgb0_106_77, }]}>
            {'Welcome Back!'}
          </Text>

          <Text style={[styles.TextjD, { color: theme.colors.custom_rgb0_106_77, }]}>
            {'Sign in to get started.'}
          </Text>
        </View>

        <View style={styles.ViewoO} pointerEvents={'auto'}>
          <TextField
          
            onChangeText={newStudentIDValue => {
              const studentid = newStudentIDValue;
              try {
                setStudentid(studentid);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextFieldpL, { borderRadius:200, borderColor: theme.colors.custom_rgb0_106_77 }]}
            placeholder={'1234567@vikes.csuohio.edu'}
            type={'underline'}
            value={studentid}
          />
          <TextField
            onChangeText={newPasswordValue => {
              const password = newPasswordValue;
              try {
                setPassword(password);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextFieldnA, { borderRadius:200, borderColor: theme.colors.custom_rgb0_106_77 }]}
            placeholder={'Password'}
            type={'underline'}
            value={password}
            secureTextEntry={true}
          />
             <Touchable style={styles.Touchable_32}>
            <ButtonOutline
              onPress={async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://campusnet.csuohio.edu/pwdreset/pwr_step1.jsp'
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonOutlinewQ,
                {
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.background,
                  color: theme.colors.custom_rgb0_106_77,
                },
              ]}
              title={'LOST PASSWORD?'}
            />
          </Touchable>
        </View>

        <View pointerEvents={'auto'}>
        <Image
            style={styles.ImageVN}
            source={Images.CsuHelp}
            resizeMode={'contain'}
          />
          <ButtonSolid
            onPress={handleLogin} 
              style={styles.ButtonSolidJZ} 
              title={'Sign In'}
          />
        </View>
        
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};



const styles = StyleSheet.create({
  Imagebl: {
    width: 150,
    height: 150,
    marginTop: 30,
  },
  Textai: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 16,
  },
  mainContainer: { 
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10
   },
    ImageVN: {
    width: 300,
    height: 200,
    alignItems:'center',
    borderRadius: 24,
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 10,
  },
  Textai7: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 24,
    
  },
  TextjD: {
    textAlign: 'center',
    fontWeight: '700',
  },
  Viewb3: {
    alignItems: 'center',
  },
  TextFieldpL: {
    borderBottomWidth: 1,
    borderRadius:10,
    textAlign: "center",
  },
  ButtonOutlinewQ: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    textDecorationLine: 'underline',
    height: -10,
    marginTop: -10,
  },
  TextFieldnA: {
    borderBottomWidth: 1,
    borderRadius:10,
    textAlign: "center",
  },
  TextmY: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '700',
  },
  Touchable_32: {
    marginTop: 16,
  },
  ViewoO: {
    marginBottom: -45,
  },
  ButtonSolidJZ: {
    borderRadius: 24,
    //width: 300,
    backgroundColor: '#006A4D',
    //justifyContent: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginRight: 20,
    marginLeft:20,
    marginBottom: 20,
    padding: 10,
  },
 
  KeyboardAvoidingViewcV: {
    //flex: 1,
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
  inputContainer: {
    width: '80%'
  },
});

export default withTheme(BasicLoginScreen);
