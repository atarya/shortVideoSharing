import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

export default function ProfileNavBar({ user }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Feather name="search" size={23} color="black" />
            </TouchableOpacity>
            <Text style={styles.text}>{user.email.split("@")[0]}</Text>
            {/* <Text style={styles.text}>{user.desplayName}</Text> */}
            <TouchableOpacity>
                <Feather name="menu" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}
