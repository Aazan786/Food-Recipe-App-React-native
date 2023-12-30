// AppContext.js
import React, { createContext, useState, useCallback, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [savedRecipes, setSavedRecipes] = useState([]);


  useEffect(() => {
    async function loadUserData() {
      try {
        const storedToken = await SecureStore.getItemAsync('token');
        const storedUser = await AsyncStorage.getItem('user');
        const storedSavedRecipes = await AsyncStorage.getItem('savedRecipes');


        if (storedToken) {
          setToken(storedToken);
          setIsAuthenticated(true);
        }

        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }

        if (storedSavedRecipes) {
          setSavedRecipes(JSON.parse(storedSavedRecipes));
        }

      } catch (error) {
        console.error('Error loading user data:', error);
      }
    }

    loadUserData();
  }, []);

  const saveUserData = useCallback(async () => {
    try {
      if (token) {
        await SecureStore.setItemAsync('token', token);
        setIsAuthenticated(true);
      } else {
        await SecureStore.deleteItemAsync('token');
        setIsAuthenticated(false);
      }

      if (Object.keys(user).length > 0) {
        await AsyncStorage.setItem('user', JSON.stringify(user));
      } else {
        await AsyncStorage.removeItem('user');
      }

      if (savedRecipes.length > 0) {
        await AsyncStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
      } else {
        await AsyncStorage.removeItem('savedRecipes');
      }

    } catch (error) {
      console.error('Error saving user data:', error);
    }
  }, [token, user,  savedRecipes]);

  useEffect(() => {
    saveUserData();
  }, [saveUserData]);

  const updateUserData = useCallback((newUserData) => {
    setUser(newUserData);
  }, []);

  const updateSavedRecipes = useCallback((newSavedRecipes) => {
    setSavedRecipes(newSavedRecipes);
  }, []);

  const clearAuthentication = useCallback(async () => {
    try {
      setToken(null);
      setUser({});
      await SecureStore.deleteItemAsync('token');
      await AsyncStorage.removeItem('user');
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error clearing authentication:', error);
    }
  }, []);

  return (
    <AppContext.Provider value={{
      token,
      setToken,
      user,
      setUser: updateUserData,
      savedRecipes,
      updateSavedRecipes,
      isAuthenticated,
      clearAuthentication,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
