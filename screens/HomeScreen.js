import React from 'react';
import { auth } from '../firebase'
import { NavigationContainer } from '@react-navigation/native';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

import Images from '../config/Images';
import {
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ButtonSolid } from '@draftbit/core';

const HomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;
  const auth = getAuth();

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

  //const [searchBarValue, setSearchBarValue] = React.useState('');

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
        <View style={styles.ViewRa}>
          <View style={styles.ViewXg}>
            <Image
              style={styles.ImageEp}
              source={Images.CsuLogo}
              resizeMode={'cover'}
            />
            <Touchable style={styles.TouchableYH} />
            <View>
            <IconButton
              onPress={()=>{
                try{
                  navigation.navigate('TimeSlot');

                }catch (err){
                  console.error(err);
                }
              }
              }
            
              style={styles.IconButtonVM}
              icon={'MaterialIcons/dehaze'}
             
              size={40}
              color={theme.colors.custom_rgb0_106_77}
              />
              </View>
          </View>

          <Text
            style={[styles.Textxk, { color: theme.colors.custom_rgb0_106_77 }]}
          >
            {'CSU Homepage'}
            
          </Text>
        </View>
        
        <ScrollView
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
        <View style={styles.View_3p} needsOffscreenAlphaCompositing={false}>
          <Touchable style={styles.Touchable_4n}>
            <View
              style={[
                styles.View_00,
                {
                  borderColor: theme.colors.divider,
                  backgroundColor: theme.colors.background,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <View style={styles.Viewig3}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.TextZo,
                    { color: theme.colors.custom_rgb255_121_0 },
                  ]}
                  allowFontScaling={true}
                >
                  {'Student \n Resources'}
                </Text>

                <Text
                  style={[
                    styles.TextXa,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                  allowFontScaling={true}
                >
                  {'Tools For Success'}
                </Text>
              </View>

              <View style={styles.Viewd7}>
                <IconButton
                  onPress={async () => {
                    try {
                      await WebBrowser.openBrowserAsync(
                        'https://www.csuohio.edu/academic-programs/student-resources'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  icon={'MaterialCommunityIcons/bookshelf'}
                  size={32}
                  color={theme.colors.custom_rgb0_106_77}
                />
              </View>
            </View>
          </Touchable>

          <Touchable style={styles.Touchable_4k}>
            <View
              style={[
                styles.ViewBI,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.divider,
                },
              ]}
            >
              <View style={styles.Viewig3}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.TextZo,
                    { color: theme.colors.custom_rgb255_121_0 },
                  ]}
                  allowFontScaling={true}
                >
                  {'Walk-In-App'}
                </Text>

                <Text
                  style={[
                    styles.TextBook,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                  allowFontScaling={true}
                >
                  {'Schedule Now'}
                </Text>
              </View>

              <View style={styles.ViewGE}>
                <IconButton
                  onPress={() => {
                    try {
                      navigation.navigate('CreateAccountOptionsScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  icon={'MaterialCommunityIcons/phone-in-talk'}
                  size={32}
                  color={theme.colors.custom_rgb0_106_77}
                />
              </View>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableLP}>
            <View
              style={[
                styles.ViewTu,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.divider,
                },
              ]}
            >
              <View style={styles.Viewig3}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.TextZo,
                    { color: theme.colors.custom_rgb255_121_0 },
                  ]}
                  allowFontScaling={true}
                >
                  {'Schedule \nAppointment'}
                </Text>

                <Text
                  style={[
                    styles.TextBook,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                  allowFontScaling={true}
                >
                  {'Book Now'}
                </Text>
              </View>

              <View style={styles.ViewQk}>
                <IconButton
                 onPress={() => {
                  try {
                    navigation.navigate('ListofAuthorsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                  icon={'MaterialIcons/event'}
                  size={32}
                  color={theme.colors.custom_rgb0_106_77}
                />
              </View>
            </View>
          </Touchable>
         
          <Touchable style={styles.Touchable_4V}>
            <View
              style={[
                styles.View_2g,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.divider,
                },
              ]}
            >
              <View style={styles.Viewig}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.Text_4O,
                    { color: theme.colors.custom_rgb255_121_0 },
                  ]}
                  allowFontScaling={true}
                >
                  {'Financial Aid'}
                </Text>
                <Text
                  style={[
                    styles.TextBook,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                  allowFontScaling={true}
                >
                  {'Financial Tools'}
                </Text>
              </View>

              <View style={styles.Viewyw}>
                <IconButton
                  onPress={async () => {
                    try {
                      await WebBrowser.openBrowserAsync(
                        'https://www.csuohio.edu/financial-aid/financial-aid?_ga=2.146134897.471278209.1649697737-1920657443.1649697737'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  icon={'Entypo/hand'}
                  size={32}
                  color={theme.colors.custom_rgb0_106_77}
                />
              </View>
            </View>
          </Touchable>

          <Touchable style={styles.Touchablebp}>
            <View
              style={[
                styles.Viewl0,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.divider,
                },
              ]}
            >
              <View style={styles.Viewig4}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.TextgU,
                    { color: theme.colors.custom_rgb255_121_0 },
                  ]}
                  allowFontScaling={true}
                >
                  {'Academic \nCalender'} 
                </Text>

                <Text
                  style={[
                    styles.TextXa,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                  allowFontScaling={true}
                >
                  {'Tools For Success'}
                </Text>
              </View>

              <View style={styles.ViewZB}>
                <IconButton
                  onPress={async () => {
                    try {
                      await WebBrowser.openBrowserAsync(
                        'https://www.csuohio.edu/registrar/academic-calendar'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  icon={'Ionicons/calendar'}
                  size={32}
                  color={theme.colors.custom_rgb0_106_77}
                />
              </View>
            </View>
          </Touchable>

          <Touchable style={styles.Touchablep5}>
            <View
              style={[
                styles.ViewTh,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.divider,
                },
              ]}
            >
              <View style={styles.Viewig5}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.TextcV,
                    { color: theme.colors.custom_rgb255_121_0 },
                  ]}
                  allowFontScaling={true}
                >
                  {'CISP \nResources'}
                </Text>

                <Text
                  style={[
                    styles.TextXa,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                  allowFontScaling={true}
                >
                  {'Tools For Success'}
                </Text>
              </View>

              <View style={styles.ViewvO}>
                <IconButton
                  onPress={async () => {
                    try {
                      await WebBrowser.openBrowserAsync(
                        'https://www.csuohio.edu/international/international'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  icon={'MaterialCommunityIcons/office-building'}
                  size={32}
                  color={theme.colors.custom_rgb0_106_77}
                />
              </View>
            </View>
          </Touchable>
        </View>
        </ScrollView>
        <View pointerEvents={'auto'}>
                  <ButtonSolid
                  onPress={handleSignOut}
                  style={styles.ButtonSignOut} 
                  title={'Sign Out'}
                 
                  /> 
          </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageEp: {
    width: 150,
    height: 150,
    borderRadius: 24,
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
    marginBottom: 16,
    padding: 10,
  },
  TouchableYH: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  IconButtonVM:{
    left:-150,
    top:-150,
    
  },
  ViewXg: {
    alignItems: 'center',
    paddingBottom: 18,
  },
  Textxk: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 30,
  },
  TextBook:{
    textAlign:'center',
    fontSize:15,
    paddingTop:12,
    fontWeight:'700',
    

  },
    
  ViewRa: {
    paddingTop: 32,
    paddingBottom: 14,
    paddingLeft: 32,
    paddingRight: 32,
    marginLeft: 16,
    marginRight: 16,
    marginTop: -35,
  },
  Text_4O: {
    fontFamily: 'System',
    textAlign: 'center',
    marginLeft: 4,
    
  },
  TextBw: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'System',
    marginTop: 10,
  },
  ViewRt: {
    marginBottom: 24,
  },
  Viewd7: {
    justifyContent: 'center',
    width: 42,
    height: 42,
    alignContent: 'center',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  View_00: {
    paddingRight: 14,
    paddingBottom: 14,
    paddingTop: 14,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    width: '100%',
    height: 140,
    paddingLeft: 14,
  },
  Touchable_4n: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
  },
  TextBH: {
    marginBottom:8,
    textAlign: 'center',
    fontFamily: 'System',
    
  },
  
  ViewiZ: {
    marginBottom: 24,
  },
  ViewGE: {
    width: 42,
    justifyContent: 'center',
    height: 42,
    alignSelf: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  ViewBI: {
    borderRightWidth: 1,
    width: '100%',
    height: 140,
    paddingLeft: 14,
    borderBottomWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 14,
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
  Touchable_4k: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
  },
  TextZo: {
    fontFamily: 'System',
    textAlign: 'center',
  },
  Textnh: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'System',
    marginTop: 10,
  },
  View_7G: {
    marginBottom: 24,
  },
  ViewQk: {
    justifyContent: 'center',
    height: 42,
    width: 42,
    alignSelf: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  ViewTu: {
    width: '100%',
    borderRightWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    paddingRight: 14,
    paddingBottom: 14,
    paddingTop: 14,
    borderBottomWidth: 1,
    paddingLeft: 14,
    height: 140,
  },
  TouchableLP: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
  },
  Textdy: {
    fontFamily: 'System',
    textAlign: 'center',
  },
  Viewwj: {
    marginBottom: 24,
    marginTop: -17,
    right: -9,
  },
  Viewyw: {
    justifyContent: 'center',
    height: 42,
    width: 42,
    alignSelf: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  View_2g: {
    width: '100%',
    borderRightWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    paddingRight: 14,
    paddingBottom: 14,
    paddingTop: 14,
    borderBottomWidth: 1,
    paddingLeft: 14,
    height: 140,
  },
  Touchable_4V: {
    
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
  },
  TextgU: {
    fontFamily: 'System',
    textAlign: 'center',
  },
  TextXa: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight:'700',
    fontFamily: 'System',
    marginTop: 10,
  },
 
  Viewig: {
    //marginBottom: 5,
    marginTop:-15,
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    marginRight:-100,
  },
  Viewig1: {
    marginBottom: 14,
    alignSelf: 'stretch',
    flexWrap: 'wrap',
  },
  Viewig2: {
    marginBottom: 24,
    alignSelf: 'stretch',
    flexWrap: 'wrap',
  },
  Viewig3: {
    marginBottom: 14,
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    marginTop:-5,
  },
  Viewig4: {
    marginBottom: 24,
    alignSelf: 'stretch',
    flexWrap: 'wrap',
  },
  Viewig5: {
    marginBottom: 24,
    alignSelf: 'stretch',
    flexWrap: 'wrap',
  },
  ViewZB: {
    justifyContent: 'center',
    height: 42,
    width: 42,
    alignSelf: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  Viewl0: {
    width: '100%',
    borderRightWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    paddingRight: 14,
    paddingBottom: 14,
    paddingTop: 14,
    borderBottomWidth: 1,
    paddingLeft: 14,
    height: 140,
  },
  Touchablebp: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
  },
  TextcV: {
    fontFamily: 'System',
    textAlign: 'center',
  },
  TextaM: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'System',
    marginTop: 10,
  },
  Viewh1: {
    marginBottom: 24,
    flexWrap: 'wrap',
    marginTop: -1,
  },
  ViewvO: {
    justifyContent: 'center',
    height: 42,
    width: 42,
    flexWrap: 'wrap',
    alignContent: 'center',
    alignSelf: 'center',
  },
  ScrollView_86Content: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ViewTh: {
    width: '100%',
    borderRightWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    paddingRight: 14,
    borderBottomWidth: 1,
    height: 140,
    paddingTop: 14,
    paddingLeft: 14,
    paddingBottom: 14,
    alignSelf: 'center',
  },
  Touchablep5: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
  },
  View_3p: {
    justifyContent: 'space-between',
    paddingLeft: 32,
    alignItems: 'flex-start',
    paddingRight: 32,
    flexWrap: 'wrap',
    paddingBottom: 72,
    flexDirection: 'row',
  },
  KeyboardAvoidingView_3O: {
    flexGrow: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
});

export default withTheme(HomeScreen);