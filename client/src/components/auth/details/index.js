import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import styles from "./style";

export default function AuthDetails({ authPage, setDetailsPage }) {
    const [emai, setEmai] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setDetailsPage(false)}>
                <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
                onChange={(text) => setEmai(text)}
                style={styles.textInput}
                placeholder="Email"
            />
            <TextInput
                onChange={(text) => setPassword(text)}
                style={styles.textInput}
                placeholder="Password"
            />
            <TouchableOpacity
                style={styles.button}>
                <Text style={styles.buttonText}>{authPage == 0 ? "Sign In" : "Sign Up"}</Text>
            </TouchableOpacity>

        </View>
    );
}
