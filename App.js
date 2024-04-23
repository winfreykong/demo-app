// import { StatusBar } from 'expo-status-bar';
// import { 
//   Dimensions,
//   StyleSheet, 
//   Text, 
//   View, 
//   SafeAreaView, 
//   Image, 
//   TouchableNativeFeedback, 
//   Button, 
//   Alert, 
//   Platform, 
//   StatusBar} from 'react-native';

// export default function App() {
//   console.log("App executed!")
//   // console.log(require("./assets/favicon.png"))
  
//   // const handlePress = () => console.log("Text expanded")
//   return (
//     // <SafeAreaView style={[styles.container, styles.topContainer]}>
//     //   {/* <Text>
//     //     Hello World!
//     //   </Text>
//     //   <TouchableNativeFeedback onPress={() => console.log("Image Tapped")}>
//     //     <View style={{width:200, height:70, backgroundColor:"lightblue"}}>

//     //     </View>
//     //   </TouchableNativeFeedback> */}

//     //   {/* <Button
//     //   title="Click me" 
//     //   onPress={() => Alert.alert("My title", "Button clicked", 
//     //   // for Alert.alert
//     //   [{text: "Yes", onPress: () => console.log("Yes")},
//     //   {text: "No", onPress: () => console.log("No")}]

//     //   // for Alert.prompt
//     //   // (text) => console.log(text)
//     //     )}/>       */}

    
//     // </SafeAreaView>

//     <View style={{
//       backgroundColor: '#fff',
//       flex: 1,
//       flexDirection: "row",
//       justifyContent: "center", // across main axis
//       alignItems: "center", // across secondary axis (within each line if wrap is enabled)
//       alignContent: "center", // across secondary axis (useful when there is wrapping)
//       // flexWrap: "wrap",
//       // width: '100%',
//       // height: '30%'
//     }}>

//       <View style={{
//         backgroundColor: 'gold',
//         // flex: -1,
//         width: 100,
//         height: 100,
//         // alignSelf: "flex-start",
//         }} />
      
//       <View style={{
//         backgroundColor: 'lightblue',
//         // flex: 1
//         width: 100,
//         height: 100,
//         }} />
      
//       <View style={{
//         backgroundColor: 'tomato',
//         // flex: 1
//         width: 100,
//         height: 100
//         }} />
      
//       {/* <View style={{
//         backgroundColor: 'lightgreen',
//         // flex: 1
//         width: 100,
//         height: 100
//         }} />
      
//       <View style={{
//         backgroundColor: 'grey',
//         // flex: 1
//         width: 100,
//         height: 100
//         }} /> */}

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // justifyContent: "center",
//     // alignItems: "center",
//     // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
//   }
// });

import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
    return <ViewImageScreen />;
}