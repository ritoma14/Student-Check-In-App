import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import NewCalendar from './screens/NewCalendar';
import TimeSlot from './screens/TimeSlot.js';
import thankYou from './screens/thankYou.js';

//import StoreResponse from './screens/StoreResponse'



import BasicLoginScreen from './screens/BasicLoginScreen';
import CreateAccountOptionsScreen from './screens/CreateAccountOptionsScreen';
import HomeScreen from './screens/HomeScreen';
import ListofAuthorsScreen from './screens/ListofAuthorsScreen';

//import NewCalendar from './screens/NewCalendar';
import PostmeetingsurveryScreen from './screens/PostmeetingsurveryScreen';

//import Reservation from './screens/reservation.js';
//import MakeAppointmentScreen from './screens/MakeAppointmentScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screens
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Your app doesn't have any screens added to the Root Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        Click the + (plus) icon in the Navigator tab on the left side to add
        some.
      </Text>
    </View>
  );
}
function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarVisible: true,
          title: 'Home Screen',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/home"
              size={25}
              color={focused ? color : color}
            />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="CreateAccountOptionsScreen"
        component={CreateAccountOptionsScreen}
        options={{
          title: 'Create Account - Options',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/clipboard"
              size={25}
              color={focused ? color : color}
            />
          ),
          tabBarLabel: 'Assistance',
        }}
      />
            
      <Tab.Screen
        name="ListofAuthorsScreen"
        component={ListofAuthorsScreen}
        options={{
          title: 'List of Authors',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialIcons/people-alt"
              size={25}
              color={focused ? color : color}
            />
          ),
          tabBarLabel: 'Meet The Staff',
        }}
      />
       
       <Tab.Screen
       // name="Schedule"
       // component={Schedule}
       name="NewCalendar"
        component={NewCalendar}
        options={{
         // title: 'Schedule',
         title: 'NewCalendar',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/calendar"
              size={25}
              color={focused ? color : color}
            />
          ),
          tabBarLabel: 'Pick A Date',
        }}
      />
       
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerBackTitle: ' ',
        }}
      >
        <Stack.Screen
          name="BasicLoginScreen"
          component={BasicLoginScreen}
          options={{ headerShown: false }}
        />
         
        <Stack.Screen
          name="PostmeetingsurveryScreen"
          component={PostmeetingsurveryScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="NewCalendar"
          component={NewCalendar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options= {{headerShown: false}}
        />
       
        
        <Stack.Screen
          name="thankYou"
          component={thankYou}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TimeSlot"
          component={TimeSlot}
          options={{ headerShown: false }}
        />
      
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
