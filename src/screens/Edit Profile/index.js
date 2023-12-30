import React, { useState, useContext } from 'react';
import { ScrollView, View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Title, Avatar } from 'react-native-paper';
import { AppContext } from '../../context/context';
import colors from '../../constants/colors';
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import { API_BASE_URL } from "../../api/api";


const EditProfile = ({ navigation }) => {

    const { token, user, setUser } = useContext(AppContext);
    const [shortIntro, setShortIntro] = useState(user.short_intro || '');
    const [profileImage, setProfileImage] = useState(user.profile_image || null);
    const [tempProfileImage, setTempProfileImage] = useState(null);


    const handleSaveProfile = () => {
        if (shortIntro.trim() === user.short_intro && !tempProfileImage) {
            Alert.alert('Error', 'Please add content or change your short intro.');
            return;
        }

        const formData = new FormData();
        formData.append('short_intro', shortIntro);
        if (tempProfileImage) {
            formData.append('profile_image', {
                uri: tempProfileImage,
                type: 'image/jpeg',
                name: 'profile_image.jpg',
            });
        }

        axios
            .put(`${API_BASE_URL}/api/editprofile`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                Alert.alert('Success', 'Profile updated successfully');
                setUser(response.data);
                if (tempProfileImage) {
                    setProfileImage(tempProfileImage);
                    setTempProfileImage(null);
                }
            })
            .catch((error) => {
                console.error('Error updating user profile:', error);
                Alert.alert('Error', 'Failed to update profile. Please try again.');
            });
    };

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        if (!result.canceled) {
            const selectedAsset = result.assets[0];
            setTempProfileImage(selectedAsset.uri);
        }
    };


    return (
        <ScrollView style={styles.container}>
            <Title style={styles.title}>Edit Profile</Title>
            <View style={styles.avatarContainer}>
                <Avatar.Image
                    source={{ uri: tempProfileImage || `${API_BASE_URL}/${user.profile_image}` }}
                    size={100}
                />
                <Button mode="contained" style={styles.uploadButton} onPress={pickImage}>
                    Upload Photo
                </Button>
            </View>
            <TextInput
                label="Short Intro"
                value={shortIntro}
                onChangeText={(text) => setShortIntro(text)}
                style={styles.input}
                mode="outlined"
                outlineColor="#D9D9D9"
                activeOutlineColor="#129575"
            />

            <Button mode="contained" style={styles.button} onPress={handleSaveProfile}>
                Save Profile
            </Button>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FEFEFE',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.black,
        marginBottom: 20,
        marginTop: 64,
    },
    input: {
        marginBottom: 16,
        backgroundColor: 'transparent',
    },
    button: {
        marginTop: 24,
        backgroundColor: colors.green,
    },
    uploadButton: {
        backgroundColor: colors.green,
        marginTop: 10,
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
});

export default React.memo(EditProfile);
