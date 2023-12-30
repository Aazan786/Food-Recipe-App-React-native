import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Splash from './src/screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import MyTab from './src/Navigation/MyTab';
import { Pressable } from 'react-native';
import Search from './src/screens/Search';
import SingleCuisins from './src/screens/Single Cuisins';
import RecipeDetail from './src/screens/Recipe Detail';
import ForgotPassword from './src/screens/Forgot password';
import SendEmail from './src/screens/Send Email';
import NewPassword from './src/screens/New Password';
import EditProfile from './src/screens/Edit Profile';
import UserRecipeDetail from './src/screens/User Recipe Detail';
import AppProvider from './src/context/context';



const Stack = createStackNavigator();



export default function App() {
  return (
    <AppProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Signin' component={Signin} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='SendEmail' component={SendEmail}/>
        <Stack.Screen name='NewPassword' component={NewPassword}/>
        <Stack.Screen name='EditProfile' component={EditProfile}/>
        <Stack.Screen name='Home' component={MyTab} />
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='SingleCuisins' component={SingleCuisins}/>
        <Stack.Screen name='RecipeDetail' component={RecipeDetail}/>
        <Stack.Screen name='UserRecipeDetail' component={UserRecipeDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  back: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
