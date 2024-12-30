// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { IconButton } from 'react-native-paper';
// import { HomeScreen, AlertScreen, ReportScreen } from '../screens/mobile';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// // Stack navigator for Home tab to handle nested navigation
// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="HomeMain" 
//         component={HomeScreen}
//         options={{ headerTitle: 'Protection Dashboard' }}
//       />
//       {/* Add other screens that should be accessible from Home */}
//     </Stack.Navigator>
//   );
// };

// // Stack navigator for Alerts
// const AlertStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="AlertsMain" 
//         component={AlertScreen}
//         options={{ headerTitle: 'Active Alerts' }}
//       />
//     </Stack.Navigator>
//   );
// };

// // Stack navigator for Reports
// const ReportStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="ReportMain" 
//         component={ReportScreen}
//         options={{ headerTitle: 'Report Scam' }}
//       />
//     </Stack.Navigator>
//   );
// };

// export const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = 'home';
//             } else if (route.name === 'Alerts') {
//               iconName = 'bell';
//             } else if (route.name === 'Report') {
//               iconName = 'alert-circle';
//             }

//             return <IconButton icon={iconName} size={size} color={color} />;
//           },
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeStack} />
//         <Tab.Screen name="Alerts" component={AlertStack} />
//         <Tab.Screen name="Report" component={ReportStack} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };
