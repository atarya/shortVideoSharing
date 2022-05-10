import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import styles from "./style";
import { useDispatch } from "react-redux";
import { login, register } from "../../../redux/actions/auth";

export default function AuthDetails({ authPage, setDetailsPage }) {
    const [email, setEmail] = useState("default");
    const [password, setPassword] = useState("default");

    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(login(email, password))
            .then(() => {
                console.log("Login success");
            })
            .catch(() => {
                console.log("Login failed");
            });
    };
    const handleRegister = () => {
        dispatch(register(email, password))
            .then(() => {
                console.log("Register success");
            })
            .catch((err) => {
                console.log(
                    "Register failed",
                );
            });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setDetailsPage(false)}>
                <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
                onChangeText={(text) => {
                    setEmail(text);
                }}
                style={styles.textInput}
                placeholder="Email"
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                style={styles.textInput}
                secureTextEntry
                placeholder="Password"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    authPage == 0 ? handleLogin() : handleRegister()
                }
            >
                <Text style={styles.buttonText}>
                    {authPage == 0 ? "Sign In" : "Sign Up"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
