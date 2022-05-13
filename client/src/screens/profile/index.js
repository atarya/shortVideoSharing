import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { useSelector } from "react-redux";
import ProfileNavBar from "../../components/profile/navBar";
import ProfileHeader from "../../components/profile/header";

export default function ProfileScreen() {
    const currentUser = useSelector((state) => state.auth.currentUser);
    console.log;
    return (
        <View style={styles.container}>
            <ProfileNavBar user={currentUser} />
            <ProfileHeader user={currentUser} />
        </View>
    );
}
