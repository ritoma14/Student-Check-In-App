import React from 'react';
import { auth } from '../firebase'
import {
  Button,
  Icon,
  RadioButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonSolid } from '@draftbit/core';
import * as WebBrowser from 'expo-web-browser';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateAccountOptionsScreen = props => {
  const { theme } = props;
  const { navigation } = props;
  const handleSignOut=()=> {
    auth
      .signOut()
      .then (() => {
        //navigation.navigate('RootAppNavigator', {
        // screen: 'BasicLoginScreen',
       // })
        
          navigation.replace("BasicLoginScreen")
      })
        .catch(error => alert (error.message))
      
      
  }

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      <KeyboardAwareScrollView>
        <View style={styles.ViewhE} pointerEvents={'auto'}>
          <View style={styles.ViewX9}>
            <Text style={[styles.TextSL, { color: theme.colors.custom_rgb0_106_77, }]}>
              {'How Can We Assist You Today?'}
            </Text>
          </View>
          

          <View style={styles.View_8x}>
            <View>

            <View>
                <View
                  style={[
                    styles.Viewum,
                    {
                      borderRadius: theme.roundness,
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.divider,
                    },
                  ]}
                >
                  <View style={styles.ViewMJ}>
                    <View style={styles.Viewea}>
                      <Icon
                        style={styles.IconcF}
                        size={32}
                        name={'MaterialCommunityIcons/numeric-1-circle'}
                        color={theme.colors.custom_rgb255_121_0}
                      />
                    </View>

                    <View style={styles.ViewcO}>
                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.custom_rgb0_106_77 },
                        ]}
                      >
                        {'Brittany Chill'}
                      </Text>
                      <Text
                        style={[
                          theme.typography.caption,
                          { color: theme.colors.custom_rgb0_106_77 },
                        ]}
                      >
                        {'Manager, Shorelight Career Services'}
                      </Text>
                      <Text
                        style={[
                          theme.typography.caption,
                          { color: theme.colors.custom_rgb0_106_77 },
                        ]}
                      >
                        {'brittany.chill@shorelight.com'}
                      </Text>

                      
                    </View>
                  </View>
                  <RadioButton
                    
                    style={styles.RadioButtonYw}
                    selected={false}
                    color={theme.colors.medium}
                    unselectedColor={theme.colors.custom_rgb0_106_77}
                  />
                </View>
              </View>

              
              <View>
                <View
                  style={[
                    styles.ViewJb,
                    {
                      borderRadius: theme.roundness,
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.divider,
                    },
                  ]}
                >
                  



                  <View style={styles.ViewjU}>
                    <View style={styles.ViewiN}>
                      <Icon
                        style={styles.Icons1}
                        size={32}
                        name={'MaterialCommunityIcons/numeric-2-circle'}
                        color={theme.colors.custom_rgb255_121_0}
                      />
                    </View>

                    <View style={styles.Viewh7}>
                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.custom_rgb0_106_77 },
                        ]}
                      >
                        {'Library Research Help'}
                      </Text>

                    
                    </View>
                  </View>
                  <RadioButton
                    onPress={async() => {
                      try{
                        if (false){
                          return;
                        }
                        await WebBrowser.openBrowserAsync(
                          'https://library.csuohio.edu/'
                        );
                      }catch (err){
                        console.error(err);
                      }
                    }}
                    style={styles.RadioButtonYw}
                    selected={false}
                    color={theme.colors.medium}
                    unselectedColor={theme.colors.custom_rgb0_106_77}
                  />
                </View>
              </View>

              <View>
                <View
                  style={[
                    styles.Viewum,
                    {
                      borderRadius: theme.roundness,
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.divider,
                    },
                  ]}
                >
                  <View style={styles.ViewMJ}>
                    <View style={styles.Viewea}>
                      <Icon
                        style={styles.IconcF}
                        size={32}
                        name={'MaterialCommunityIcons/numeric-3-circle'}
                        color={theme.colors.custom_rgb255_121_0}
                      />
                    </View>

                    <View style={styles.ViewcO}>
                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.custom_rgb0_106_77 },
                        ]}
                      >
                        {'Math Learning Center'}
                      </Text>

                      
                    </View>
                  </View>
                  <RadioButton
                    onPress={async() => {
                      try{
                        if (false){
                          return;
                        }
                        await WebBrowser.openBrowserAsync(
                          'https://sciences.csuohio.edu/mathematics/math-learning-center'
                        );
                      }catch (err){
                        console.error(err);
                      }
                    }}
                    style={styles.RadioButtonYw}
                    selected={false}
                    color={theme.colors.medium}
                    unselectedColor={theme.colors.custom_rgb0_106_77}
                  />
                </View>
              </View>

              <View>
                <View
                  style={[
                    styles.ViewON,
                    {
                      backgroundColor: theme.colors.background,
                      borderRadius: theme.roundness,
                      borderColor: theme.colors.divider,
                    },
                  ]}
                >
                  <View style={styles.ViewXx}>
                    <View style={styles.Viewod}>
                      <Icon
                        style={styles.IconS3}
                        size={32}
                        color={theme.colors.custom_rgb255_121_0}
                        name={'MaterialCommunityIcons/numeric-4-circle'}
                      />
                    </View>

                    <View style={styles.Viewzr}>
                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.custom_rgb0_106_77 },
                        ]}
                      >
                        {'TASC- Tutoring & Academic Success'}
                      </Text>

                      
                    </View>
                  </View>
                  <RadioButton
                    onPress={async() => {
                      try{
                        if (false){
                          return;
                        }
                        await WebBrowser.openBrowserAsync(
                          'https://www.csuohio.edu/tutoring/tutoring'
                        );
                      }catch (err){
                        console.error(err);
                      }
                    }}
                    style={styles.RadioButtonYw}
                    selected={false}
                    color={theme.colors.medium}
                    unselectedColor={theme.colors.custom_rgb0_106_77}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.Viewxb}>
            <View>
              <View>
                <View
                  style={[
                    styles.ViewCT,
                    {
                      borderRadius: theme.roundness,
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.divider,
                    },
                  ]}
                >
                  <View style={styles.ViewCw}>
                    <View style={styles.ViewIH}>
                      <Icon
                        style={styles.IconIz}
                        size={32}
                        name={'MaterialCommunityIcons/numeric-5-circle'}
                        color={theme.colors.custom_rgb255_121_0}
                      />
                    </View>

                    <View style={styles.ViewEt}>
                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.custom_rgb0_106_77 },
                        ]}
                      >
                        {'CASC- Counseling & \nAcademic Success Clinic'}
                      </Text>

                    
                    </View>
                  </View>
                  <RadioButton
                    onPress={async() => {
                      try{
                        if (false){
                          return;
                        }
                        await WebBrowser.openBrowserAsync(
                          'https://cehs.csuohio.edu/casal/counseling-academic-success-clinic-1'
                        );
                      }catch (err){
                        console.error(err);
                      }
                    }}
                    style={styles.RadioButtonYw}
                    selected={false}
                    color={theme.colors.medium}
                    unselectedColor={theme.colors.custom_rgb0_106_77}
                  />
                </View>
              </View>

              <View>
                <View
                  style={[
                    styles.View_5K,
                    {
                      borderRadius: theme.roundness,
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.divider,
                    },
                  ]}
                >
                  <View style={styles.ViewbE}>
                    <View style={styles.ViewIu}>
                      <Icon
                        style={styles.Iconkl}
                        size={32}
                        name={'MaterialCommunityIcons/numeric-6-circle'}
                        color={theme.colors.custom_rgb255_121_0}
                      />
                    </View>

                    <View style={styles.ViewKW}>
                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.custom_rgb0_106_77 },
                        ]}
                      >
                        {'Counseling Center'}
                      </Text>

                      
                    </View>
                  </View>
                  <RadioButton
                    onPress={async() => {
                      try{
                        if (false){
                          return;
                        }
                        await WebBrowser.openBrowserAsync(
                          'https://www.csuohio.edu/counselingcenter/counselingcenter'
                        );
                      }catch (err){
                        console.error(err);
                      }
                    }}
                    style={styles.RadioButtonYw}
                    selected={false}
                    color={theme.colors.medium}
                    unselectedColor={theme.colors.custom_rgb0_106_77}
                  />
                </View>
              </View>

              <View>
                <View
                  style={[
                    styles.Viewo9,
                    {
                      backgroundColor: theme.colors.background,
                      borderRadius: theme.roundness,
                      borderColor: theme.colors.divider,
                    },
                  ]}
                >
                  <View style={styles.View_4M}>
                    <View style={styles.Viewu6}>
                      <Icon
                        style={styles.IconF9}
                        size={32}
                        color={theme.colors.custom_rgb255_121_0}
                        name={'MaterialCommunityIcons/numeric-7-circle'}
                      />
                    </View>

                    <View style={styles.Viewbr}>
                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.custom_rgb0_106_77 },
                        ]}
                      >
                        {'Lift Up Vikes Food Party'}
                      </Text>

                      
                    </View>
                  </View>
                  <RadioButton
                    onPress={async() => {
                      try{
                        if (false){
                          return;
                        }
                        await WebBrowser.openBrowserAsync(
                          'https://www.csuohio.edu/liftupvikes/liftupvikes'
                        );
                      }catch (err){
                        console.error(err);
                      }
                    }}
                    style={styles.RadioButtonYw}
                    selected={false}
                    color={theme.colors.medium}
                    unselectedColor={theme.colors.custom_rgb0_106_77}
                  />
                </View>
              </View>
            
              <View>
                <View
                  style={[
                    styles.ViewVr,
                    {
                      backgroundColor: theme.colors.background,
                      borderRadius: theme.roundness,
                      borderColor: theme.colors.divider,
                    },
                  ]}
                >
                  <View style={styles.ViewiZ}>
                    <View style={styles.View_0r}>
                      <Icon
                        style={styles.Icon_2j}
                        size={32}
                        color={theme.colors.custom_rgb255_121_0}
                        name={'MaterialCommunityIcons/numeric-8-circle'}
                      />
                    </View>

                    <View style={styles.ViewED}>
                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.custom_rgb0_106_77},
                        ]}
                      >
                        {'Career Development \n and Exploration'}
                      </Text>

                    </View>
                  </View>
                  <RadioButton
                    onPress={async() => {
                      try{
                        if (false){
                          return;
                        }
                        await WebBrowser.openBrowserAsync(
                          'https://www.csuohio.edu/career-development-exploration/career-development-exploration'
                        );
                      }catch (err){
                        console.error(err);
                      }
                    }}
                    style={styles.RadioButtonYw}
                    selected={false}
                    color={theme.colors.medium}
                    unselectedColor={theme.colors.custom_rgb0_106_77}
                  />
                </View>
              </View>
              

              <View>
                <View
                  style={[
                    styles.ViewVr,
                    {
                      backgroundColor: theme.colors.background,
                      borderRadius: theme.roundness,
                      borderColor: theme.colors.divider,
                    },
                  ]}
                >
                  <View style={styles.ViewiZ}>
                    <View style={styles.View_0r}>
                      <Icon
                        style={styles.Icon_2j}
                        size={32}
                        color={theme.colors.custom_rgb255_121_0}
                        name={'MaterialCommunityIcons/numeric-9-circle'}
                      />
                    </View>

                    <View style={styles.ViewEDD}>
                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.custom_rgb0_106_77},
                        ]}
                      >
                        {'Schedule Appointment\nWith Advisor'}
                      </Text>

                    </View>
                  </View>
                  <RadioButton
                   onPress={() => {
                    try {
                      navigation.navigate('BottomTabNavigator',{
                       // screen: 'Schedule',
                       screen: 'ListofAuthorsScreen',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                    style={styles.RadioButtonXB}
                    unselectedColor={theme.colors.custom_rgb0_106_77}
                    selected={false}
                    color={theme.colors.primary}
                  />
                </View>
              </View>
            </View>

            <View pointerEvents={'auto'}>
                  <ButtonSolid
                  onPress={handleSignOut}
                  style={styles.ButtonSignOut} 
                  title={'Sign Out'}
                 
                  /> 

            <View style={styles.ViewkD}>
              <ButtonSolid
                     onPress={() => {
                      try {
                        navigation.navigate('BottomTabNavigator',{
                          screen: 'HomeScreen',
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={styles.Buttonqd}
                    title={"Return To Home"}
              />
                
              
            </View>
          </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextSL: {
    fontSize: 38,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  ViewX9: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingBottom: 32,
     color: '#006A4D',
     alignItems: 'center',
  },
  Icons1: {
    height: 32,
    width: 32,
  },
  ViewiN: {
    marginRight: 14,
    alignContent: 'center',
    minWidth: 32,
    minHeight: 32,
    maxWidth: 32,
    maxHeight: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Viewh7: {
    alignItems: 'flex-start',
    marginRight: 24,
    width: '80%',
  },
  ViewjU: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    alignSelf: 'stretch',
  },
  RadioButtonYw: {
    height: 24,
    width: 24,
  },
  ViewJb: {
    paddingLeft: 16,
    flexDirection: 'row',
    marginTop: 8,
    paddingRight: 16,
    paddingBottom: 12,
    paddingTop: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  IconcF: {
    height: 32,
    width: 32,
  },
  Viewea: {
    marginRight: 14,
    alignContent: 'center',
    minWidth: 32,
    minHeight: 32,
    maxWidth: 32,
    maxHeight: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewcO: {
    alignItems: 'flex-start',
    marginRight: 24,
    width: '80%',
  },
  ViewMJ: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    alignSelf: 'stretch',
  },
  RadioButtons8: {
    height: 24,
    width: 24,
  },
  Viewum: {
    paddingLeft: 16,
    flexDirection: 'row',
    marginTop: 8,
    paddingRight: 16,
    paddingBottom: 12,
    paddingTop: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  IconS3: {
    height: 32,
    width: 32,
  },
  Viewod: {
    minWidth: 32,
    minHeight: 32,
    maxHeight: 32,
    maxWidth: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    alignContent: 'center',
  },
  Viewzr: {
    alignItems: 'flex-start',
    width: '80%',
    marginRight: 24,
  },
  ViewXx: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
  },
  RadioButtonSh: {
    width: 24,
    height: 24,
  },
  ViewON: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    marginBottom: 8,
    marginTop: 8,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  View_8x: {
    //paddingBottom: 16,
  },
  IconIz: {
    height: 32,
    width: 32,
  },
  ViewIH: {
    marginRight: 14,
    alignContent: 'center',
    minWidth: 32,
    minHeight: 32,
    maxWidth: 32,
    maxHeight: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewEt: {
    alignItems: 'flex-start',
    marginRight: 24,
    width: '80%',
  },
  ViewCw: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    alignSelf: 'stretch',
  },
  RadioButton_2Y: {
    height: 24,
    width: 24,
  },
  ViewCT: {
    paddingLeft: 16,
    flexDirection: 'row',
    marginTop: 8,
    paddingRight: 16,
    paddingBottom: 12,
    paddingTop: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  Iconkl: {
    height: 32,
    width: 32,
  },
  ViewIu: {
    marginRight: 14,
    alignContent: 'center',
    minWidth: 32,
    minHeight: 32,
    maxWidth: 32,
    maxHeight: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewKW: {
    alignItems: 'flex-start',
    marginRight: 24,
    width: '80%',
  },
  ViewbE: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    alignSelf: 'stretch',
  },
  RadioButtonM2: {
    height: 24,
    width: 24,
  },
  View_5K: {
    paddingLeft: 16,
    flexDirection: 'row',
    marginTop: 8,
    paddingRight: 16,
    paddingBottom: 12,
    paddingTop: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  IconF9: {
    height: 32,
    width: 32,
  },
  Viewu6: {
    minWidth: 32,
    minHeight: 32,
    maxHeight: 32,
    maxWidth: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    alignContent: 'center',
  },
  Viewbr: {
    alignItems: 'flex-start',
    width: '80%',
    marginRight: 24,
  },
  View_4M: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
  },
  RadioButtonxF: {
    width: 24,
    height: 24,
  },
  Viewo9: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    marginBottom: 8,
    marginTop: 8,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  Icon_2j: {
    height: 32,
    width: 32,
  },
  View_0r: {
    minWidth: 32,
    minHeight: 32,
    maxHeight: 32,
    maxWidth: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    alignContent: 'center',
  },
  ViewED: {
    alignItems: 'flex-start',
    width: '80%',
    marginRight: 24,
  },
  ViewED: {
    alignItems: 'flex-start',
    width: '100%',
    marginRight: 24,
  },
  ViewiZ: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
  },
  RadioButtonXB: {
    width: 24,
    height: 24,
  },
  ViewVr: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingTop: 20,
    paddingBottom: 5,
    paddingRight: 16,
    marginBottom: 8,
    marginTop: 8,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
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
    marginTop: -20,
    marginBottom: 16,
    padding: 10,
  },
   ButtonSignOut:{
    borderRadius: 24,
    //width: 300,
    backgroundColor: '#006A4D',
    //justifyContent: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginRight: 20,
    marginLeft:20,
    marginTop: 15,
    marginBottom: 16,
    padding: 10,
  },
  ViewkD: {
    marginTop: 32,
  },
  Viewxb: {
   // paddingBottom: 16,
   paddingTop:-40,
  },
  ViewhE: {
    justifyContent: 'flex-end',
    flex: 1,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop:10,
    paddingBottom: 16,
  },
 
});

export default withTheme(CreateAccountOptionsScreen);
