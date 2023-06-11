import { SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CustomListItem from "../../components/CustomListItem";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";

const HomeScreen = () => {
    const [allChats, setAllChats] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "chats"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setAllChats(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });

        return unsubscribe;
    }, []);

    return (
        <SafeAreaView>
            <ScrollView style={{ height: "100%", backgroundColor: "white " }}>
                {allChats.map(({ id, data: { chatName } }) => (
                    <CustomListItem key={id} id={id} chatName={chatName} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
