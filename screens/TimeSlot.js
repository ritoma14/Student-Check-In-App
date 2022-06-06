import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { ScreenContainer, StarRating, Row, withTheme } from '@draftbit/ui';
import { IconButton } from 'react-native-paper';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';



//export default withTheme(TimeSlot){
export default class TimeSlot extends Component {
  
 constructor(props) {
   super(props);
 
   this.state = {
     refresh: false,
   };
 }
 
 componentDidMount() {
   // this.makeRemoteRequest();
 }
 
 renderHeader = () => {
   return (

    
          
     <View>
        
         
       <Text style={styles.header}>Student Queue</Text>
         
     </View>
 
     
       
   );
 };
 
 
 renderFooter = () => {
   return (
     <View>
       <Text style={styles.footer}>End</Text>
     </View>
   );
 };
 
 emptyListView = () => {
   return (
     <View>
       <Text>No records found.</Text>
     </View>
   );
 };
 
 renderSeparator = () => {
   return <View style={styles.itemSeparator}></View>;
 };
 
 onItemSelect = item => {
   console.log('item', item);
 };
 
 render() {
   let data = [
     { id: 1, name: 'Chris Sweeney', designation: 'U Start', Advisor: 'Advisor: Angela Mulby' },
     { id: 2, name: 'Ramy Toma', designation: 'Class Scheduling Questions', Advisor: 'Advisor: Dr. Sarah West'},
     { id: 3, name: 'Clark Bilinovich', designation: 'Graduate Academic Questions', Advisor: 'Advisor: Dr. Elise Geither' },
     { id: 4, name: 'Nick Patel', designation: 'Insurance Questions', Advisor: 'Advisor: Dr. Robert Schleper' },
     { id: 5, name: 'John Avery', designation: 'Financial Aid Question', Advisor: 'Advisor: Wael Bahhur' },
     { id: 6, name: 'Harry Thomas', designation: 'Undergraduate Academic Advising Questions', Advisor: 'Advisor: Angela Mulby' },
     { id: 7, name: 'Oliver Brian', designation: 'Class Scheduling Questions', Advisor: 'Advisor: Dr. Anjali Barnick' },
     { id: 8, name: 'Ella Avery', designation: 'Graduate Academic Questions', Advisor: 'Advisor: Caity Grundtisch' },
 
   ];
   return (
    
     <View style={styles.container}>
       <FlatList
       
         data={data}
         extraData={this.state}
         keyExtractor={item => item.id}
         ListHeaderComponent={this.renderHeader}
         ListFooterComponent={this.renderFooter}
         ListEmptyComponent={this.emptyListView}
         ItemSeparatorComponent={this.renderSeparator}
         renderItem={({item}) => {
           return (
             <TouchableOpacity
               onPress={() => {
                 this.onItemSelect(item);
               }}>
               <View style={styles.flatlist}>
                 <Text style={styles.heading2}>{item.name}</Text>
                 <Text style={styles.subheading}>{item.designation}</Text>
                 <Text style={styles.subheading}>{item.Advisor}</Text>
               </View>
             </TouchableOpacity>
           );
         }}
       />
       
     </View>
     
   );
 }
}
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   marginTop: 45,
 },
 header: {
   fontSize: 30,
   paddingVertical: 15,
   fontWeight: 'bold',
   textAlign: 'center',
   backgroundColor: '#DCDCDC',
 },
 arrowLoc:{
    // marginTop:44,
     //marginBottom:24,
     left: -8,
     top: 30,
   },
 footer: {
   fontSize: 30,
   paddingVertical: 15,
   fontWeight: 'bold',
   textAlign: 'center',
   backgroundColor: '#DCDCDC',
 },
 flatlist: {
   paddingVertical: 30,
   paddingHorizontal: 10,
 },
 heading2: {
   fontSize: 18,
 },
 subheading: {
   color: 'grey',
 },
 itemSeparator: {
   backgroundColor: 'green',
   height: 1,
 },
});
