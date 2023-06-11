import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./AddChat.style";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const AddChat = ({ navigation }) => {
    const [chatName, setChatName] = useState("");

    const createChat = async () => {
        const docRef = await addDoc(collection(db, "chats"), {
            chatName: chatName,
        }).then(() => {
            alert(`Chat ${chatName} has been created!`);
            navigation.goBack();
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.addChatContainer}>
                <Icon name="wechat" type="antdesign" size={24} color="black" style={styles.icon} />
                <TextInput
                    placeholder="Enter a chat name"
                    style={styles.input}
                    value={chatName}
                    onChangeText={(text) => setChatName(text)}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={createChat}>
                <Text style={styles.buttonText}>Add a new chat</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddChat;
