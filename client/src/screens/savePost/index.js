import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions";

export default function SavePostScreen(props) {
    const navigation = useNavigation();
    const [description, setdescription] = useState("");
    const [requestRunning, setRequestRunning] = useState(false);

    const dispatch = useDispatch();
    const handleSavePost = () => {
        setRequestRunning(true);
        dispatch(createPost(description, props.route.params.source))
            .then(() => {
                navigation.dispatch(StackActions.popToTop());
            })
            .catch(() => {
                setRequestRunning(false);
            });
    };

    if (requestRunning) {
        return (
            <View style={styles.uploadingContainer}>
                <ActivityIndicator color="red" size="large" />
            </View>
        );
    }

    return (
        <View style={styles.constainer}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Describe your video"
                    onChangeText={(text) => setdescription(text)}
                    multiline
                    maxLength={150}
                />
                <Image
                    source={{ uri: props.route.params.source }}
                    style={styles.mediaPreview}
                />
            </View>
            <View style={styles.spacer}></View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={styles.cancelButton}
                >
                    <Feather name="x" size={24} color="black" />
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        handleSavePost();
                    }}
                    style={styles.postButton}
                >
                    <Feather name="corner-left-up" size={24} color="white" />
                    <Text style={styles.postButtonText}>Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
