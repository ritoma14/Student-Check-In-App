import React from 'react';
import { Icon, RadioButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ButtonSolid } from '@draftbit/core';
import { auth } from '../firebase'

const ListofAuthorsScreen = props => {
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
    <ScreenContainer
      justifyContent='space-around'
      style={styles.screen}
      hasSafeArea={true}
      scrollable={false}
    >
      <View style={styles.View_2r}>
        <Text
          style={[
            theme.typography.headline4,
            styles.TextoA,
            { color: theme.colors.custom_rgb0_106_77 },
          ]}
        >
          {'Please Pick Your Advisor Before Scheduling Appointment'}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.ScrollView_86Content}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View>
          <View
            style={[
              styles.View_6Q,
              {
                borderRadius: theme.roundness,
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.custom_rgba141_141_141_0,
              },
            ]}
          >
            <View style={styles.ViewGk}>
              <View style={styles.Viewzq}>
                <Icon
                  style={styles.Icon_9Y}
                  size={32}
                  color={theme.colors.custom_rgba141_141_141_0}
                  name={'AntDesign/book'}
                />
              </View>

              <View style={styles.View_new}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb255_121_0 },
                  ]}
                >
                  {'Ms. Rose Begalla'}
                </Text>

                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                >
                  {'Managing Director'}
                </Text>
                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textff,
                    { color: theme.colors.custom_rgb0_106_77},
                  ]}
                >
                  {'rose.begalla@clevelandstateglobal.org'}
                </Text>
              </View>
            </View>
            <RadioButton
              onPress={() => {
                try {
                  navigation.navigate('NewCalendar',{
                   // screen: 'Schedule',
                   screen: 'NewCalendar',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.RadioButton_6O}
              selected={false}
              color={theme.colors.custom_rgb0_106_77}
              unselectedColor={theme.colors.custom_rgb0_128_0}
              selectedIcon={'Ionicons/radio-button-on'}
            />
          </View>
        </View>

        <View>
          <View
            style={[
              styles.ViewDa,
              {
                borderRadius: theme.roundness,
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.custom_rgba141_141_141_0,
              },
            ]}
          >
            <View style={styles.ViewGP}>
              <View style={styles.ViewUW}>
                
                <Icon name={'FontAwesome/graduation-cap'} size={32} />
              </View>

              <View style={styles.Viewcc}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb255_121_0 },
                  ]}
                >
                  {'Dr. Sarah West'}
                </Text>

                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb0_106_77},
                  ]}
                >
                  {'Assoc. Academic Director'}
                </Text>
                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textff,
                    { color: theme.colors.custom_rgb0_106_77},
                  ]}
                >
                  {'sarah.west@clevelandstateglobal.org'}
                </Text>
              </View>
            </View>
            <RadioButton
              onPress={() => {
                try {
                  navigation.navigate('NewCalendar',{
                    // screen: 'Schedule',
                    screen: 'NewCalendar',
                   });
                 } catch (err) {
                   console.error(err);
                 }
              }}
              style={styles.RadioButtonc2}
              selected={false}
              color={theme.colors.custom_rgb0_106_77}
              unselectedColor={theme.colors.custom_rgb0_128_0}
              selectedIcon={'Ionicons/radio-button-on'}
            />
          </View>
        </View>

        <View>
          <View
            style={[
              styles.ViewgT,
              {
                borderRadius: theme.roundness,
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.custom_rgba141_141_141_0,
              },
            ]}
          >
            <View style={styles.ViewVj}>
              <View style={styles.Viewqc}>
                <Icon
                  style={styles.IconT7}
                  size={32}
                  color={theme.colors.dark}
                  name={'FontAwesome/graduation-cap'}
                />
              </View>

              <View style={styles.View_new}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb255_121_0 },
                  ]}
                >
                  {'Ms. Angela Mulby'}
                </Text>

                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                >
                  {'Undergraduate Academic Advisor'}
                </Text>
                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textff,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                >
                  {'angela.mulby@clevelandstateglobal.org'}
                </Text>
              </View>
            </View>
            <RadioButton
              onPress={() => {
                try {
                  navigation.navigate('NewCalendar',{
                    // screen: 'Schedule',
                    screen: 'NewCalendar',
                   });
                 } catch (err) {
                   console.error(err);
                 }
              }}
              style={styles.RadioButton_6O}
              selected={false}
              color={theme.colors.custom_rgb0_106_77}
              unselectedColor={theme.colors.custom_rgb0_128_0}
              selectedIcon={'Ionicons/radio-button-on'}
            />
          </View>
        </View>

        <View>
          <View
            style={[
              styles.ViewpA,
              {
                borderRadius: theme.roundness,
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.custom_rgba141_141_141_0,
              },
            ]}
          >
            <View style={styles.ViewUk}>
              <View style={styles.ViewQh}>
                <Icon
                  style={styles.IconzW}
                  size={32}
                  color={theme.colors.dark}
                  name={'FontAwesome/graduation-cap'}
                />
              </View>

              <View style={styles.View_0J}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb255_121_0 },
                  ]}
                >
                  {'Dr. Elise Geither'}
                </Text>

                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb0_106_77},
                  ]}
                >
                  {'Graduate Academic Coordinator'}
                </Text>
                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textff,
                    { color: theme.colors.custom_rgb0_106_77},
                  ]}
                >
                  {'elise.geither@clevelandstateglobal.org'}
                </Text>
              </View>
            </View>
            <RadioButton
              onPress={() => {
                try {
                  navigation.navigate('NewCalendar',{
                    // screen: 'Schedule',
                    screen: 'NewCalendar',
                   });
                 } catch (err) {
                   console.error(err);
                 }
              }}
              style={styles.RadioButtonak}
              selected={false}
              color={theme.colors.custom_rgb0_106_77}
              unselectedColor={theme.colors.custom_rgb0_128_0}
              selectedIcon={'Ionicons/radio-button-on'}
            />
          </View>
        </View>

        <View>
          <View
            style={[
              styles.ViewuR,
              {
                borderRadius: theme.roundness,
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.custom_rgba141_141_141_0,
              },
            ]}
          >
            <View style={styles.ViewWe}>
              <View style={styles.Viewo8}>
                <Icon
                  style={styles.Iconja}
                  size={32}
                  color={theme.colors.dark}
                  name={'Ionicons/people'}
                />
              </View>

              <View style={styles.View_new}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb255_121_0 },
                  ]}
                >
                  {'Dr. Robert Schleper'}
                </Text>

                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                >
                  {'Student Services Manager'}
                </Text>
                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textff,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                >
                  {'robert.schleper@clevelandstateglobal.org'}
                </Text>
              </View>
            </View>
            <RadioButton
              onPress={() => {
                try {
                  navigation.navigate('NewCalendar',{
                    // screen: 'Schedule',
                    screen: 'NewCalendar',
                   });
                 } catch (err) {
                   console.error(err);
                 }
              }}
              style={styles.RadioButtona3}
              selected={false}
              color={theme.colors.custom_rgb0_106_77}
              unselectedColor={theme.colors.custom_rgb0_128_0}
              selectedIcon={'Ionicons/radio-button-on'}
            />
          </View>
          <View
            style={[
              styles.ViewuR,
              {
                borderRadius: theme.roundness,
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.custom_rgba141_141_141_0,
              },
            ]}
          >
            <View style={styles.ViewWe}>
              <View style={styles.Viewo8}>
                <Icon
                  style={styles.Iconja}
                  size={32}
                  color={theme.colors.dark}
                  name={'Ionicons/people'}
                />
              </View>

              <View style={styles.ViewXy}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb255_121_0 },
                  ]}
                >
                  {'Wael Bahhur'}
                </Text>

                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                >
                  {'Student Services Advisor'}
                </Text>
                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textff,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                >
                  {'wael.bahhur@clevelandstateglobal.org'}
                </Text>
              </View>
            </View>
            <RadioButton
              onPress={() => {
                try {
                  navigation.navigate('NewCalendar',{
                    // screen: 'Schedule',
                    screen: 'NewCalendar',
                   });
                 } catch (err) {
                   console.error(err);
                 }
              }}
              style={styles.RadioButtona3}
              selected={false}
              color={theme.colors.custom_rgb0_106_77}
              unselectedColor={theme.colors.custom_rgb0_128_0}
              selectedIcon={'Ionicons/radio-button-on'}
            />
          </View>
          <View
            style={[
              styles.ViewuR,
              {
                borderRadius: theme.roundness,
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.custom_rgba141_141_141_0,
              },
            ]}
          >
            <View style={styles.ViewWe}>
              <View style={styles.Viewo8}>
                <Icon
                  style={styles.Iconja}
                  size={32}
                  color={theme.colors.dark}
                  name={'Ionicons/people'}
                />
              </View>

              <View style={styles.View_new}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb255_121_0 },
                  ]}
                >
                  {'Dr Anjali Barnick'}
                </Text>

                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                >
                  {'Student Services Advisor'}
                </Text>
                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textff,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                >
                  {'anjali.barnick@clevelandstateglobal.org'}
                </Text>
              </View>
              
                  
                
            
            </View>
            
            
            
            <RadioButton
              onPress={() => {
                try {
                  navigation.navigate('NewCalendar',{
                    // screen: 'Schedule',
                    screen: 'NewCalendar',
                   });
                 } catch (err) {
                   console.error(err);
                 }
              }}
              style={styles.RadioButtona3}
              selected={false}
              color={theme.colors.custom_rgb0_106_77}
              unselectedColor={theme.colors.custom_rgb0_128_0}
              selectedIcon={'Ionicons/radio-button-on'}
            />

            
          </View>
          <View>
          <View
            style={[
              styles.ViewpA,
              {
                borderRadius: theme.roundness,
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.custom_rgba141_141_141_0,
              },
            ]}
          >
            <View style={styles.ViewUk}>
              <View style={styles.ViewQh}>
                <Icon
                  style={styles.IconzW}
                  size={32}
                  color={theme.colors.dark}
                  name={'Ionicons/people'}
                />
              </View>

              <View style={styles.View_new}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb255_121_0 },
                  ]}
                >
                  {'Caity Grundtisch'}
                </Text>

                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textfa,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                >
                  {'Student Services Advisor'}
                </Text>
                <Text
                  style={[
                    theme.typography.caption,
                    styles.Textff,
                    { color: theme.colors.custom_rgb0_106_77 },
                  ]}
                >
                  {'caity.grundtisch@clevelandstateglobal.org'}
                </Text>
              </View>
            </View>
            <RadioButton
              onPress={() => {
                try {
                  navigation.navigate('NewCalendar',{
                    // screen: 'Schedule',
                    screen: 'NewCalendar',
                   });
                 } catch (err) {
                   console.error(err);
                 }
              }}
              style={styles.RadioButtonak}
              selected={false}
              color={theme.colors.custom_rgb0_106_77}
              unselectedColor={theme.colors.custom_rgb0_128_0}
              selectedIcon={'Ionicons/radio-button-on'}
            />
          </View>
        </View>


          

          
          
          <View pointerEvents={'auto'}>
                  <ButtonSolid
                  onPress={handleSignOut}
                  style={styles.ButtonSignOut} 
                  title={'Sign Out'}
                 
                  /> 
          </View>
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
        
       
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextoA: {
    fontSize: 27,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  View_2r: {
    marginTop: 40,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
  },

  Icon_9Y: {
    height: 32,
    width: 32,
  },
  Viewzq: {
    marginRight: 14,
    alignContent: 'center',
    minWidth: 32,
    minHeight: 32,
    maxWidth: 32,
    maxHeight: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextKV: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextvU: {
    fontFamily: 'System',
    fontWeight: '700',
    
  },
  TextvU1: {
    fontFamily: 'System',
    fontWeight: '900',
    marginRight:-3
  },
  ViewKH: {
    alignItems: 'flex-start',
    marginRight: 24,
    width: '100%',
  },
  ViewGk: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    alignSelf: 'stretch',
  },
  RadioButton_6O: {
    height: 24,
    width: 24,
  },
  View_6Q: {
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
  ViewUW: {
    marginRight: 14,
    alignContent: 'center',
    minWidth: 32,
    minHeight: 32,
    maxWidth: 32,
    maxHeight: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Textfa: {
    fontFamily: 'System',
    fontWeight: '800',
  },
  Textff:{
    fontFamily: 'System',
    fontWeight: '500',
  },
  Viewcc: {
    alignItems: 'flex-start',
    marginRight: 24,
    width: '100%',
  },
  ViewGP: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    alignSelf: 'stretch',
  },
  RadioButtonc2: {
    height: 24,
    width: 24,
  },
  ViewDa: {
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
  IconT7: {
    height: 32,
    width: 32,
  },
  Viewqc: {
    marginRight: 14,
    alignContent: 'center',
    minWidth: 32,
    minHeight: 32,
    maxWidth: 32,
    maxHeight: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextXk: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextBD: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewpE: {
    alignItems: 'flex-start',
    marginRight: 24,
    width: '100%',
  },
  ViewVj: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    alignSelf: 'stretch',
  },
  RadioButtonLx: {
    height: 24,
    width: 24,
  },
  ViewgT: {
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
  IconzW: {
    height: 32,
    width: 32,
  },
  ViewQh: {
    marginRight: 14,
    alignContent: 'center',
    minWidth: 32,
    minHeight: 32,
    maxWidth: 32,
    maxHeight: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textqn: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  
  View_0J: {
    alignItems: 'flex-start',
    marginRight: 24,
    width: '100%',
  },
  View_new: {
    alignItems: 'flex-start',
    marginRight: 24,
    width: '110%',
  },
  ViewUk: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    alignSelf: 'stretch',
  },
  RadioButtonak: {
    height: 24,
    width: 24,
  },
  ViewpA: {
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
  Iconja: {
    height: 32,
    width: 32,
  },
  Viewo8: {
    marginRight: 14,
    alignContent: 'center',
    minWidth: 32,
    minHeight: 32,
    maxWidth: 32,
    maxHeight: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextmI: {
    fontFamily: 'System',
    fontWeight: '700',
  },
 
  ViewXy: {
    alignItems: 'flex-start',
    marginRight: 24,
    width: '100%',
  },
  ViewWe: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    alignSelf: 'stretch',
  },
  RadioButtona3: {
    height: 24,
    width: 24,
  },
  ViewuR: {
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
  ScrollView_86Content: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  screen: {
    flex: 1,
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
    marginTop: 50,
    //marginBottom: 16,
    padding: 10,
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
    marginTop: 20,
    //marginBottom: 16,
    padding: 10,
  },
});

export default withTheme(ListofAuthorsScreen);