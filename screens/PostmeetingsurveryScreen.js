//import React from 'react';
import { ScreenContainer, StarRating, Row, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, } from 'react-native';
import { IconButton } from 'react-native-paper';
import { deleteDoc, doc, getDoc, setDoc, collection, addDoc } from 'firebase/firestore';
import React, {useRef, useState, useEffect} from 'react';
import { ButtonSolid } from '@draftbit/core';
import { db } from '../firebase'
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

import { auth } from '../firebase'



const PostmeetingsurveryScreen = props => {
  const [password, setPassword] = React.useState('');
  const [studentid, setStudentid] = React.useState('');
 
  const handleLogin = () => {
    const auth = getAuth(); 
      signInWithEmailAndPassword(auth, studentid,password)
      .then(userCredentials => {
        const user= studentid.user.toString();
       // const user= userCredentials.user;
        //console.log('Logged in with: ',user.studentid);
        console.log('Logged in with: ' +user);
      })
      .catch(error => alert(error.message))

  }

  // Storing User Data
  const [userDoc, setUserDoc] = useState(null)
  // Update Text
  const [text, setText] = useState("")
  

  // MARK: CRUD Functions
  const Create = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(db, "CSU Students", "Survey Response")

   

    // Your Document Goes Here
    const docData = {
      
      "Name": "Ben Bryant",
      "CSU ID": "2667725@vikes.csuohio.edu",
      "Question 1": textInputValue,
      "Question 2": textInputValue1,
      "Question 3": textInputValue2,
      "Question 4": textInputValue3,
      "Question 5": textInputValue4,
      
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Thank You For Submitting Survey!")
        navigation.navigate('thankYou',{
          screen: 'thankYou',
        });
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })
  }

  const { theme } = props;
  const { navigation } = props;

  //const [starRatingValue, setStarRatingValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue1, setTextInputValue1] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');
  const [textInputValue4, setTextInputValue4] = React.useState('');

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={[
          styles.KeyboardAvoidingView_3O,
          { backgroundColor: theme.colors.custom_rgba141_141_141_0 },
        ]}
        behavior={'position'}
        keyboardVerticalOffset={44}
        enabled={false}
      >
      <View style={styles.TouchableYH}>
      <View pointerEvents={'auto'}>
        <View >
          <Row justifyContent={'flex-start'} alignItems={'center'}>
            <IconButton
              onPress={() => {
                try {
                  navigation.navigate('BottomTabNavigator',{
                    screen: 'NewCalendar',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              size={35}
              icon={'arrow-left'}
              style={styles.arrowLoc}
              color={theme.colors.custom_rgb0_106_77}
              />
              
          </Row>
        </View>
        <View pointerEvents={'auto'}>
        <Text style={[styles.TextSurvey, { color: '#006A4D' }]}>
            {'Survey Questions'}
          </Text>
          <Text style={[styles.Textbv, { color: '#FF7900' }]}>
            {'1.) I felt that all my questions were fully answered.\n'}
          </Text>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputeu, { borderColor: theme.colors.divider }]}
            value={textInputValue}
            placeholder={'Enter Reponse'}
          />
        </View>

        <View pointerEvents={'auto'}>
          <Text style={[styles.TextOS, { color: '#FF7900' }]}>
            {'2.) I felt my Cleveland State Global staff member cared.\n'}
          </Text>
          <TextInput
            onChangeText={newTextInputValue1 => {
              try {
                setTextInputValue1(newTextInputValue1);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputeu, { borderColor: theme.colors.divider }]}
            value={textInputValue1}
            placeholder={'Enter Reponse'}
          />
        </View>

        <View pointerEvents={'auto'}>
          <Text style={[styles.Text_9W, { color: '#FF7900' }]}>
            {
              '3.) How helpful did you find your appointment with a Cleveland State Global staff member? \n'
            }
          </Text>
          <TextInput
            onChangeText={newTextInputValue2 => {
              try {
                setTextInputValue2(newTextInputValue2);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputeu, { borderColor: theme.colors.divider }]}
            value={textInputValue2}
            placeholder={'Enter Reponse'}
          />
        </View>

        <View pointerEvents={'auto'}>
          <Text style={[styles.TextJA, { color: '#FF7900' }]}>
            {'4.) How easy did we make it to solve your problem?\n'}
          </Text>
          <TextInput
            onChangeText={newTextInputValue3 => {
              try {
                setTextInputValue3(newTextInputValue3);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputeu, { borderColor: theme.colors.divider }]}
            value={textInputValue3}
            placeholder={'Enter Reponse'}
          />
        </View>

        <View pointerEvents={'auto'}>
          <Text style={[styles.TextZg, { color: '#FF7900' }]}>
            {
              '5.) How can we improve your next experience at Cleveland State Global?\n'
            }
          </Text>
          <TextInput
            onChangeText={newTextInputValue4 => {
              try {
                setTextInputValue4(newTextInputValue4);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputeu, { borderColor: theme.colors.divider }]}
            value={textInputValue4}
            placeholder={'Enter Reponse'}
          />

        </View>
        <View style={styles.ViewkD}>
              <ButtonSolid onPress={Create} style={styles.Buttonqd}
               title={'Submit'}/>
               {
        userDoc != null &&
        <Text>Bio: {userDoc.bio}</Text>
        
      }
              
                     
              
                
              
            </View>
        
        
      </View>
      </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textbv: {
    marginTop: 8,
    //marginBottom: 8,
    marginLeft: 8,
    marginBottom: 8,
    fontSize: 20,
    fontFamily: 'System',
    //fontWeight: '400',
    //textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    color: '#FF7900',
    //fontSize: 30,
  },
  StarRatingYb: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 50,
    paddingTop: -20,
  },
  TouchableYH: {
    //alignSelf: 'space-between',
    //justifyContent: 'center',
    //justifyContent: 'space-between',
    paddingTop: 15,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: -20,
  },
  Buttonqd: {
    borderRadius: 24,
    //width: 300,
    backgroundColor: '#006A4D',
    //justifyContent: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginRight: 20,
    marginLeft:20,
    marginTop: 30,
    marginBottom: 16,
    padding: 10,
  },
  TextOS: {
    marginTop: 10,
    marginLeft: 8,
    marginBottom: 8,
    fontSize: 20,
    fontFamily: 'System',
    //fontWeight: '400',
    //textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    color: '#FF7900',
    //fontSize: 30,
  },
  arrowLoc:{
    // marginTop:44,
     //marginBottom:24,
     left: -8,
     top: -30,
   },
  StarRating_1j: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 50,
    paddingTop: -20,
    
  },
  Text_9W: {
    marginTop: 10,
    marginLeft: 8,
    marginBottom: 8,
    fontSize: 20,
    fontFamily: 'System',
    //fontWeight: '400',
    //textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    color: '#FF7900',
    //fontSize: 30,
  },
  StarRatinguf: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 50,
    paddingTop: -20,
  },
  TextJA: {
    marginTop: 10,
    marginLeft: 8,
    marginBottom: 8,
    fontSize: 20,
    fontFamily: 'System',
    //fontWeight: '400',
    //textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    color: '#FF7900',
    //fontSize: 30,
  },
  TextSurvey: {
    marginTop: -35,
    marginLeft: 8,
    marginBottom: 10,
    fontSize: 40,
    fontFamily: 'System',
    //fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    color: '#006A4D',
    //fontSize: 30,
  },
  TextReturn:{
    marginLeft:-5,
    fontWeight:'700',
    fontFamily: 'System',
    fontSize:17,

  },

  KeyboardAvoidingView_3O: {
    flexGrow: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom:300,
  },
  StarRatingJa: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 50,
    paddingTop: -20,
  },
  TextZg: {
    marginTop: 10,
    marginLeft: 8,
    marginBottom: 8,
    fontSize: 20,
    fontFamily: 'System',
    //fontWeight: '400',
    //textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    color: '#FF7900',
    //fontSize: 30,
  },
  TextInputeu: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 5,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 18,
    borderRadius: 8,
  },
 
});

export default withTheme(PostmeetingsurveryScreen);