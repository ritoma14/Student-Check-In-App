export default {};
import React from 'react';
import { Text } from 'react-native';
import { Avatar, Button, Card,Title, Paragraph } from 'react-native-paper';
//export const {Typography}= Platform.OS=='web' ? 20:8;
//export {Typography} from 'react-native-typography'
export const Typography= 'NunitoSans-SemiBold';


import {material } from 'react-native-typography'

//<Text style={material.display1}>Hello Typography!</Text>



/*class MyAppHeaderText extends Component {
  render() {
    return (
      <MyAppText>
        <Text style={{ fontSize: 20 }}>
          {this.props.children}
        </Text>
      </MyAppText>
    );
  }
}*/









//import { Calendar } from 'react-native-calendars';

/*export const CalendarComponent = () => {
  return (
    <Calendar
      onDayPress={day => {
        console.log('selected day', day);
      }}
      onDayLongPress={day => {
        console.log('selected day', day);
      }}
      onMonthChange={month => {
        console.log('month changed', month);
      }}
      hideExtraDays={true}
      firstDay={1}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
    />
  );
}; */