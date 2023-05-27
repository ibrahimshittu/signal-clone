import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        backgroundColor: "white",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#2C6BED",
        marginBottom: 40,
    },
    inputContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "white",
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#2C6BED",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;
