import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import RegisterScreen from "./screens/registerScreen/RegisterScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import { Avatar } from "@rneui/base";
import { TouchableOpacity, View } from "react-native";
import { auth } from "./firebase";
import { navigationRef, navigate } from "./RootNavigation";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
    headerStyle: { backgroundColor: "#2C6BED" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
};

export default function App() {
    return (
        <NavigationContainer initialRouteName="Home" ref={navigationRef}>
            <Stack.Navigator screenOptions={globalScreenOptions}>
                <Stack.Screen
                    name="login"
                    component={LoginScreen}
                    options={{
                        title: "Welcome back to Signal!",
                    }}
                />
                <Stack.Screen
                    name="register"
                    component={RegisterScreen}
                    options={{
                        title: "Create a new account",
                        headerBackTitle: "Back to Login",
                    }}
                />
                <Stack.Screen
                    name="home"
                    component={HomeScreen}
                    options={{
                        handleBackVisible: false,
                        title: "Signal",
                        headerStyle: { backgroundColor: "#fff" },
                        headerTintColor: "#000",
                        headerTitleStyle: { color: "#000" },
                        headerLeft: () => (
                            <View>
                                <TouchableOpacity
                                    onPress={() =>
                                        auth.signOut().then(() => {
                                            navigate.replace("login", {});
                                        })
                                    }
                                    activeOpacity={0.5}
                                >
                                    <Avatar
                                        rounded
                                        source={{
                                            uri:
                                                auth?.currentUser?.photoURL ??
                                                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png",
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
