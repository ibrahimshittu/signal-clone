import {
    View,
    Text,
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import styles from "./LoginScreen.style";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const LoginScreen = ({ navigation }) => {
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // const uid = user.uid;
                console.log(user);
                navigation.replace("home");
            }
        });

        return unsubscribe;
    }, []);

    const login = () => {
        signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigation.replace("home");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <StatusBar style="light" />
            <Image
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png",
                }}
                resizeMode="cover"
                style={styles.logo}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    style={styles.input}
                    value={loginDetails.email}
                    onChangeText={(text) => setLoginDetails({ ...loginDetails, email: text })}
                />
                <TextInput
                    placeholder="Password"
                    keyboardType="default"
                    secureTextEntry
                    style={styles.input}
                    value={loginDetails.password}
                    onChangeText={(text) => setLoginDetails({ ...loginDetails, password: text })}
                />
                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        {
                            backgroundColor: "#FFF",
                            borderWidth: 1,
                            borderColor: "#2C6BED",
                            marginTop: 10,
                            marginBottom: 20,
                        },
                    ]}
                    onPress={() => navigation.navigate("register")}
                >
                    <Text style={[styles.buttonText, { color: "#2C6BED" }]}>
                        Create a new account
                    </Text>
                </TouchableOpacity>
            </View>
            {/* <View style={{ height: 100 }} /> */}
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
