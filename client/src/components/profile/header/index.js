import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import React from "react";
import styles from "./styles";
import buttonStyles from "../../../styles/buttonStyles";

export default function ProfileHeader({ user }) {
    return (
        <View style={styles.container}>
            <Avatar.Icon size={80} icon={"account"} />
            <Text style={styles.emailText}>{user.email}</Text>
            <View style={styles.counterContainer}>
                <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>0</Text>
                    <Text style={styles.counterLabelText}>Following</Text>
                </View>
                <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>0</Text>
                    <Text style={styles.counterLabelText}>Followers</Text>
                </View>
                <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>0</Text>
                    <Text style={styles.counterLabelText}>Likes</Text>
                </View>
            </View>
            <TouchableOpacity style={buttonStyles.greyOutlinedButton}>
                <Text>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
}
