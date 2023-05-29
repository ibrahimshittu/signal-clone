import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import CustomListItem from "../../components/CustomListItem";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;