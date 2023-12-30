import React, { useState, useContext, useEffect } from "react";
import styles from "./style";
import {Text, View, Image, SafeAreaView, FlatList, RefreshControl, ActivityIndicator } from "react-native";
import Title from "../../components/Title";
import { TouchableOpacity } from "react-native";
import UserRecipeCard from "../../components/User Recipe Card";
import { ScrollView } from "react-native-gesture-handler";
import { AppContext } from "../../context/context";
import axios from "axios";
import { API_BASE_URL } from "../../api/api";


const Profile = ({ navigation }) => {
    const { token, user, clearAuthentication } = useContext(AppContext);
    const [userInfo, setUserInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);



    useEffect(() => {
        fetchUserProfile()
    }, []); 

    const handleRefresh = () => {
        setRefreshing(true);
        fetchUserProfile()
        setRefreshing(false);
    };

    const fetchUserProfile = () => {
        axios.get(`${API_BASE_URL}/api/profile`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then((userResponse) => {
                setUserInfo(userResponse.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching user profile data:', error);
                setIsLoading(false);
            });
    }


    const handleLogout = () => {
        clearAuthentication();
        navigation.reset({
            index: 0,
            routes: [{ name: "Signin" }],
        });
    };

    const handleCardPress = (recipeId) => {
        navigation.navigate("UserRecipeDetail", { recipeId });
    };

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#B1AEAE" />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                }
            >

                <View style={{ display: "flex", flexDirection: "row", marginTop: 60, columnGap: 40, }}>
                    <Title text="My Profile"
                        style={{ marginLeft: 30 }}
                    />
                    <TouchableOpacity onPress={handleLogout}>
                        <Title
                            style={{ marginLeft: 150 }}
                            text="Logout" />
                    </TouchableOpacity>

                </View>
                <View>
                    {userInfo && userInfo.profile_image ? (
                        <Image
                            source={{ uri: `${API_BASE_URL}/${userInfo.profile_image}` }}
                            style={styles.image}
                        />
                    ) : (
                        <Image
                            source={require('../../../assets/avatar.png')}
                            style={styles.image}
                        />
                    )}
                    <Text style={styles.recipe}>Recipes</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                        <Text style={styles.editprofile}>Edit</Text>
                    </TouchableOpacity>
                    <Text style={styles.recipecounter}>{userInfo ? userInfo.total_recipes : 0}</Text>
                    <Title style={styles.username} text={userInfo ? userInfo.name : 'Unknown User'} />
                    <Text style={styles.description}>{userInfo ? userInfo.short_intro : ''}</Text>
                    <Text style={styles.recipetitle}>My Recipes</Text>
                </View>
            </ScrollView>

            <View style={{ flex: 1, marginBottom: 80, marginTop: -380 }}>
                {userInfo && userInfo.recipe_created && userInfo.recipe_created.length > 0 ? (
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={userInfo.recipe_created}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleCardPress(item.id)}>
                                <UserRecipeCard style={{ marginLeft: 30 }} Title={item.title} image={item.featured_image} />
                            </TouchableOpacity>
                        )}
                        numColumns={1}
                    />
                ) : (
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'gray', marginLeft: 24 }}>No recipes created yet.</Text>
                )}
            </View>

        </SafeAreaView>

    )
}

export default React.memo(Profile);