import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import RegisterScreen from "./screens/registerScreen/RegisterScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import { Avatar } from "@rneui/base";
import { Alert, TouchableOpacity, View } from "react-native";
import { auth } from "./firebase";
import { navigationRef, navigate } from "./RootNavigation";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import AddChat from "./screens/addChat/AddChat";
import { signOut } from "firebase/auth";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
    headerStyle: { backgroundColor: "#2C6BED" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
};

export default function App() {
    const signOutUser = () => {
        Alert.alert(
            "Sign Out",
            "Are you sure you want to sign out?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "Yes, sign out",
                    onPress: () => {
                        signOut(auth)
                            .then(() => {
                                navigate("login");
                            })
                            .catch((error) => {
                                alert(error.message);
                            });
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <NavigationContainer
            initialRouteName="home"
            ref={navigationRef}
            screenOptions={{
                headerBackTitleVisible: true,
            }}
        >
            <Stack.Navigator screenOptions={globalScreenOptions}>
                <Stack.Screen
                    name="login"
                    component={LoginScreen}
                    options={{
                        headerShown: false,
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
                        title: "Chats",
                        headerStyle: { backgroundColor: "#fff" },
                        headerTintColor: "#000",
                        headerTitleStyle: { color: "#000" },
                        headerLeft: () => (
                            <View>
                                <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
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
                        headerTitleAlign: "left",
                        headerRight: () => (
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: 80,
                                }}
                            >
                                <TouchableOpacity activeOpacity={0.5}>
                                    <AntDesign name="camerao" size={24} color="#000" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => navigate("addChat")}
                                    activeOpacity={0.5}
                                >
                                    <SimpleLineIcons name="pencil" size={20} color="#000" />
                                </TouchableOpacity>
                            </View>
                        ),
                    }}
                />
                <Stack.Screen
                    name="addChat"
                    component={AddChat}
                    options={{
                        title: "Add a new chat",
                        headerStyle: { backgroundColor: "#fff" },
                        headerTintColor: "#000",
                        headerTitleStyle: { color: "#000" },
                        headerBackTitle: "Chats",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
