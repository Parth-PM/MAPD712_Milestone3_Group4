/**
 * MAPD712 - milestone3 

 * Khushboo Kodwani    301273818
 * Parth Maru          301209761


 */import { StatusBar } from 'expo-status-bar';
 import { StyleSheet, Text, View } from 'react-native';

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 
 
 import HomePage from './app/HomePage';
 import LoginPage from './app/LoginPage';
 import ViewPatient from './app/ViewPatient';
 import AddPatient from './app/AddPatient';
 import ViewAllPatient from './app/ViewAllPatient';
 import AddTestRecord from './app/AddTestRecord';
 import ViewTestRecord from './app/ViewTestRecord';

 const MyStack = createNativeStackNavigator();
 
 
 export default function App() {
   return (
       <NavigationContainer>
         <MyStack.Navigator>
           <MyStack.Screen name="LoginPage" component={LoginPage} options={{
             headerShown: false
           }}/>
           <MyStack.Screen name="HomePage" component={HomePage} options={{
             headerShown: false
           }}/>
         
           <MyStack.Screen name="AddPatient" component={AddPatient}/>
           <MyStack.Screen name="ViewPatient" component={ViewPatient}/>
           <MyStack.Screen name="ViewAllPatient" component={ViewAllPatient}/>
           <MyStack.Screen name="AddTestRecord" component={AddTestRecord}/>
           <MyStack.Screen name="ViewTestRecord" component={ViewTestRecord}/>

         </MyStack.Navigator>
       </NavigationContainer>
     );
   }
   
 
 
 