import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import styles from "./RegisterScreen.style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const RegisterScreen = ({ navigation }) => {
    const [registerDetails, setRegisterDetails] = useState({
        fullName: "",
        email: "",
        password: "",
        profilePicUrl: "",
    });

    const register = () => {
        createUserWithEmailAndPassword(auth, registerDetails.email, registerDetails.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                user.updateProfile({
                    displayName: registerDetails.fullName,
                    photoURL: registerDetails.profilePicUrl || "https://i.imgur.com/6VBx3io.png",
                });

                navigation.replace("home");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);

                console.log(errorCode);
            });
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            // headerBackTitle: "Back to Login",
            // headerBackTitleVisible: false,
        });
    }, [navigation]);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <StatusBar style="light" />
            <Text style={styles.title}>Create a Signal account</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    keyboardType="default"
                    onChangeText={(text) =>
                        setRegisterDetails({ ...registerDetails, fullName: text })
                    }
                    value={registerDetails.fullName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={(text) => setRegisterDetails({ ...registerDetails, email: text })}
                    value={registerDetails.email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    keyboardType="default"
                    secureTextEntry
                    onChangeText={(text) =>
                        setRegisterDetails({ ...registerDetails, password: text })
                    }
                    value={registerDetails.password}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Profile Picture URL (optional)"
                    keyboardType="url"
                    onChangeText={(text) =>
                        setRegisterDetails({ ...registerDetails, profilePicUrl: text })
                    }
                    value={registerDetails.profilePicUrl}
                    // onSubmitEditing={register}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={register}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;
