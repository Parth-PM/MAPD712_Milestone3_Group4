
 import React from "react";
 import { SafeAreaView, FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
 import { TouchableWithoutFeedback } from "react-native-gesture-handler";
 import { useState, useEffect } from "react";
 
 let ViewPatient = null;
 
 export default ViewPatient = ({ navigation }) => {
 
   const ItemSeparator = () => {
     return <View style={{
       height: 1,
       backgroundColor: "#d68227",
       marginHorizontal: 10
     }}
     />;
   };
 
   const ListEmpty = () => {
     return (
       <View style={{ alignItems: "center" }}>
         <Text style={styles.item}>No data found</Text>
       </View>
     );
   };
 
   const [data, setData] = useState([]);
 
   const fetchData = async () => {
     const resp = await fetch("http://192.168.2.23:8000/patients/:id/tests");
     const data = await resp.json();
     setData(data);
   };
 
   useEffect(() => {
     fetchData();
     const willFocusSubscription = navigation.addListener('focus', () => {
       fetchData();
     });
     return willFocusSubscription;
   }, []);
   
   return (
    <SafeAreaView style={styles.container}>
         <View style={styles.darkBackground}>
             <Text style={styles.logo}>Patient Health Record</Text>
         </View>
         <View style={styles.body}>
            <Text style={styles.labels}>Nurse Name </Text>
            <Text style={styles.labels}>Blood Pressure </Text>
            <Text style={styles.labels}>Respiratory Rate</Text>
            <Text style={styles.labels}>Blood Oxygen</Text>
            <Text style={styles.labels}>Heart Rate</Text>

          </View>
         <FlatList
        data={data}
        renderItem={({ item }) =>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("AddTestDetails")}>
            
         <View style={styles.lightBackground}>
 

<View style={styles.body}>
            <Text style={styles.item}> {item.nurse_name}</Text>
            <Text style={styles.item}> {item.blood_pressure}</Text>
            <Text style={styles.item}> {item.Respiratory_rate}</Text>
            <Text style={styles.item}> {item.blood_oxygen}</Text>
            <Text style={styles.item}> {item.heart_rate}</Text>

</View>

             </View>
          </TouchableWithoutFeedback>}
          
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={ListEmpty}
        
      />
         
           <View style={styles.button}>
         <TouchableOpacity
           onPress={() => navigation.navigate('HomePage')}>
           <Text style={styles.buttonText}>Return Home</Text>         
         </TouchableOpacity>
         </View>
 
     </SafeAreaView>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
   },
   scrollView: {
     marginHorizontal: 10,
   },
   body: {
     marginTop: 10,
     flexDirection: 'row',
   },
   logo: {  
     fontSize: 32,
     color: 'white',
     marginTop:60,
     marginBottom:20,
     marginLeft: 20,
     fontWeight: "bold",
     textAlign: 'center',
   },
   labels: {
     fontSize: 20,
     width: 88,
     margin: 10,
     color: 'white',
     borderRadius: 10,
     backgroundColor: '#2645B1',
     textAlign: 'center',
    },
   item: {
    fontSize: 14,
    width: 88,
    margin: 10,
    paddingBottom: 9,
    paddingTop: 9,
    textAlign: 'center',
    backgroundColor: '#D8E0FF',
   },
   input: {
     height: 40,
     width: 220,
     margin: 10,
     backgroundColor: 'white',
     fontSize: 18,
     padding: 10,
     borderRadius: 10,
   },
   darkBackground: {
     backgroundColor: '#2645B1',
   },
   lightBackground: {
     alignItems: 'center',
     borderRadius: 20,
     margin: 30,
     padding: 20,
   },
   button: {
     backgroundColor: '#2645B1',
     width: 220,
     height: 40,
     marginTop: 20,
     borderRadius: 10,
   },
   buttonText: {
     color: 'white',
     fontSize: 16,
     textAlign: 'center',
     padding: 9,
   },
 });