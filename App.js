import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import RegisterScreen from "./screens/registerScreen/RegisterScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
    headerStyle: { backgroundColor: "#2C6BED" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
};

export default function App() {
    return (
        <NavigationContainer initialRouteName="Home">
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
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
