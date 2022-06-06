import React from 'react';
import { ButtonSolid, Icon, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';
import { auth } from '../firebase'
import Images from '../config/Images';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const thankYou = props => {
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
    <ScreenContainer>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.ViewGa}>
          <Image
             source={Images.CsuLogo}
             style={styles.ImageEp}
             resizeMode={'cover'}
         
          />
        </View>

        <View style={styles.ViewPf}>
          <Text
            style={[styles.Textod, { color: theme.colors.custom_rgb255_121_0 }]}
          >
            {'Thank You!'}
          </Text>
        </View>

        <View style={styles.Viewhu}>
          <Icon
            style={styles.IconCE}
            name={'MaterialIcons/check-circle'}
            size={44}
            color={theme.colors.custom_rgb0_106_77}
          />
          <View>
            <Text
              style={[
                styles.TextdT,
                { color: theme.colors.custom_rgb255_121_0 },
              ]}
            >
              {'Thank you very much for filling our survey form.'}
            </Text>
          </View>

          <View style={styles.ViewGu}>
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
              style={styles.ButtonSolidE1}
              title={"Return To Home"}
            />
            <ButtonSolid
                  onPress={handleSignOut}
                  style={styles.ButtonSolidE1} 
                  title={'Sign Out'}
                 
                  /> 
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imageld: {
    width: 100,
    height: 100,
  },
  ViewGa: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: -150,
  },
  Textod: {
    alignSelf: 'center',
    fontSize: 36,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewPf: {
    top: 180,
  },
  IconCE: {
    left: 170,
  },
  TextdT: {
    marginTop: 20,
    textAlign: 'center',
    paddingTop: 30,
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ButtonSolid_59: {
    borderRadius: 17,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 250,
    marginTop: 20,
  },
  ButtonSolidE1: {
    borderRadius: 17,
    backgroundColor: '#006A4D',
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    width: 250,
  },
  ImageEp: {
    width: 150,
    height: 150,
    borderRadius: 24,
  },
  ViewGu: {
    alignItems: 'center',
    marginTop: 20,
  },
  Viewhu: {
    top: 220,
  },
});

export default withTheme(thankYou);
