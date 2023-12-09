import React from "react";
import styles from "./style";
import { ImageBackground, Text, View, Image, SafeAreaView, FlatList } from "react-native";
import Buttons from "../../components/Buttons";
import Title from "../../components/Title";
import colors from "../../constants/colors";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import UserRecipeCard from "../../components/User Recipe Card";
import { ScrollView } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 60, columnGap: 40, }}>
                <Title text="My Profile"
                    style={{ marginLeft: 30 }}
                />
                <TouchableOpacity>
                    <Title
                        style={{ marginLeft: 150 }}
                        text="Logout" />
                </TouchableOpacity>

            </View>

            <View>
                <Image style={styles.image} source={{ uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg' }} />
                <Text style={styles.recipe}>Recipe</Text>
                <TouchableOpacity>
                    <Text
                        style={styles.editprofile}>
                    </Text>
                </TouchableOpacity>
                <Text style={styles.recipecounter}>4</Text>
                <Title
                    style={styles.username}
                    text="Azan Mehbobb"
                />
                <Text style={styles.description}>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum dolore eu.</Text>
                <Text style={styles.recipetitle}>Recipes</Text>
            </View>




            <View style={{flex:1, marginBottom:80}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={['Traditional spare ribs baked', 'spice roasted chicken with flavored rice', 'Traditional spare ribs baked', 'spice roasted chicken with flavored rice']}
                    keyExtractor={item => String(item)}

                    renderItem={({ item }) => (

                        <TouchableOpacity onPress={() => handleCardPress(item)}>
                            <UserRecipeCard
                                style={{ marginLeft: 30 }}
                                Title={item}
                            />
                        </TouchableOpacity>
                    )}
                    numColumns={1}


                />
            </View>



        </SafeAreaView>

    )
}

export default React.memo(Profile);