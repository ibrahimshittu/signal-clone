import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri: "https://i.imgur.com/6VBx3io.png",
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 800 }}>Chat One</ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    lorem ipsum bibiugwcvduiohidcyfguigtulfdfffgughiouhgiouh
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};

export default CustomListItem;

const styles = StyleSheet.create({});
