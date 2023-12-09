import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Home from '../screens/Home'
import Favourite from '../screens/Favourite'
import CreateRecipe from '../screens/CreateRecipe'
import Cusisins from '../screens/Cuisins'
import Profile from '../screens/Profile'
import colors from '../constants/colors';



const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            height: 77,
            borderRadius: 100,
            top: -40,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow,
            overflow: 'hidden'

        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: "#129575",
            overflow: 'hidden'
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

function MyTab({ navigation }) {

    return (
        <Tab.Navigator
            screenOptions=
            {{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    elevation: 0,
                    height: 80,
                    backgroundColor: colors.white,
                    // ...styles.shadow,
                    shadowColor: '#DBEBE7',
                    shadowOpacity: 12,
                    shadowRadius: 10
                }

            }}
        >
            <Tab.Screen name="Home1" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: '10' }}>
                        <Image
                            source={require('../../assets/Home.png')}
                            resizeMode='contain'
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? "#129575" : '#DBEBE7',
                            }}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Favourite" component={Favourite} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: '10' }}>
                        <Image
                            source={require('../../assets/love.png')}
                            resizeMode='contain'
                            style={{
                                width: 26,
                                height: 26,
                                tintColor: focused ? "#129575" : '#DBEBE7',
                            }}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="CreateRecipe" component={CreateRecipe} options={{
                tabBarStyle: { display: "none" },
                tabBarIcon: ({ focused }) => (

                    <Image
                        source={require('../../assets/plus.png')}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: "#fff",
                        }}
                    />

                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }} />

            <Tab.Screen name="Cuisins" component={Cusisins} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: '10' }}>
                        <Image
                            source={require('../../assets/pin.png')}
                            resizeMode='contain'
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? "#129575" : '#DBEBE7',
                            }}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: '10' }}>
                        <Image
                            source={require('../../assets/user.png')}
                            resizeMode='contain'
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? "#129575" : '#DBEBE7',
                            }}
                        />
                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#129575',
        shadowOffset: {
            width: 50,
            height: 50
        },
        shadowOpacity: 4,
        shadowRadius: 3.5,
        elevation: 5,
    }
})

export default MyTab