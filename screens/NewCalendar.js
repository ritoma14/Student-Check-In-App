import { format } from 'date-fns';
//@format;
import React, {useRef, useState} from 'react';
import Images from '../config/Images';
import { IconButton } from 'react-native-paper';
import { Icon, RadioButton, Touchable, Row, ScreenContainer, withTheme, Center } from '@draftbit/ui';
import{
    Text,
    TouchableOpacity,
    ScrollView,
    Button,
    Animated,
    StyleSheet,
    Image,
    View,
} from 'react-native';



/*const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(15, 'days').format(_format)

initialState = {
  [_today]: {disabled: true}
}
*/

import {Calendar} from 'react-native-calendars'

//const NewCalendar= () => {
  const NewCalendar = props => {
    const { theme } = props;
  const { navigation } = props;
 
  
    return(
      
      <>
   <ScrollView
        contentContainerStyle={styles.ScrollView_86Content}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
  <View style={styles.ViewRa}>
  <View style={styles.ViewXg}>
    <Image
      style={styles.ImageEp}
      
      source={Images.CsuLogo}
      resizeMode={'cover'}
    />
    <Touchable style={styles.TouchableYH} />
  

  <Text
    //style={[styles.Textxk, { color: theme.colors.custom_rgb0_106_77 }]}
    style={[styles.Textxk, {height: "-40%", justifyContent: 'flex-start', color: '#FF7900'}]}
  >
    {'Schedule Meeting'}
  </Text>
  </View>
  <View >
    <Row justifyContent={'flex-start'} alignItems={'center'}>
      <IconButton
        onPress={() => {
          try {
            navigation.navigate('BottomTabNavigator',{
              screen: 'ListofAuthorsScreen',
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

        <Calendar 
        
        
       style={[styles.CalView,{height: "90%", justifyContent: 'center'}]}
        
       // dayComponent={(e) =>{
       //   console.log('e',e)
          
       // return(
        // <View style ={{width: 40, height: 40, backgroundColor: "red"}}>
         // <Text> {e.date.day} </Text>
        // </View>
        
   // )
      //  }}
        //disableArrowLeft
        //disableArrowRight
        //hideArrows
        //hideDayNames
        hideExtraDays
        
        //minDate={_today}
        //maxDate= {'2023-05-29'}

       // markedDates={{
         // "2022-04-20":{activeOpacity: .5, dotColor:"green", selectedColor:"orange", selected:true}
       // }}

        //onDayLongPress={(e) => {
        //  console.log('e', e)
        //}}

        //onMonthChange={(e) => {
        //  console.log('e', e)
        //}}

        enableSwipeMonths

        onDayPress={(day) => {
          //console.log('e', e)
          const dateString =day.dateString.toString()
          //setDateString(dateString);

         try {
          alert("Your Appointment is Scheduled On " +dateString)
          navigation.navigate('PostmeetingsurveryScreen',{
            screen: 'PostmeetingsurveryScreen',
          });
            } catch (err) {
              console.error(err);
            }
          

        }}



        //current={"2022-04-21"}
        //firstDay={1}

        Style={{height: "100%"}}
       // Style={{flex: 1}}
        />
</View>
</ScrollView>
        </>
        
    )
    
    
}

const styles = StyleSheet.create({
  ImageEp: {
    width: 100,
    height: 100,
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

  ViewXg: {
    alignItems: 'center',
    //paddingBottom: 10,
    marginTop: 50,
    //backgroundColor: 'white',
  },
  ViewRa: {
    paddingTop: 140,
    //paddingBottom: -100,
    //paddingLeft: 32,
    //paddingRight: 32,
    //marginLeft: 16,
    //marginRight: 16,
    marginTop: -75,
    backgroundColor: 'white',
  },
  CalView: {
    justifyContent: 'space-evenly',
    //paddingTop:-20,
    //paddingBottom: 100,
    flex: 1,
    paddingBottom:140,
  },
  arrowLoc:{
    // marginTop:44,
     //marginBottom:24,
     left: -8,
     top: -210,
   },
  Textxk: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 30,
    marginTop:10,
   //marginBottom:-10,
    //backgroundColor: 'white',
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

  TextgU: {
    fontFamily: 'System',
    textAlign: 'center',
  },
  TextXa: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'System',
    marginTop: 10,
  },
  TextReturn:{
    marginLeft:-5,
    marginTop: 10,
    marginBottom:14,
    fontWeight:'700',
    fontFamily: 'System',
    fontSize:18,

  },
  Viewig1: {
    marginBottom: 24,
    alignSelf: 'stretch',
    flexWrap: 'wrap',
  },
  
  Viewig2: {
    marginBottom: 24,
    alignSelf: 'stretch',
    flexWrap: 'wrap',
  },
  Viewig3: {
    marginBottom: 24,
    alignSelf: 'stretch',
    flexWrap: 'wrap',
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
  ImageEp: {
    width: 150,
    height: 150,
    borderRadius: 24,
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

export default withTheme(NewCalendar); 