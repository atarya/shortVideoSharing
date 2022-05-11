import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { Audio } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

export default function CameraScreen() {
    const [hasCameraPermissions, setHasCameraPermissions] = useState(false);
    const [hasAudioPermissions, setHasAudioPermissions] = useState(false);
    const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false);

    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestPermissionsAsync();
            setHasCameraPermissions(cameraStatus.status == "granted");

            const audioStatus = await Audio.requestPermissionsAsync();
            setHasAudioPermissions(audioStatus.status == "granted");

            const galleryStatus =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermissions(galleryStatus.status == "granted");

            if (galleryStatus.status == "granted") {
                const userGalleryMedia = await MediaLibrary.getAssetsAsync({
                    sortBy: ["creationTime"],
                    mediaType: ["video"],
                });
                setGalleryItems(userGalleryMedia);
            }
        })();
    }, []);

    if (
        !hasCameraPermissions ||
        !hasAudioPermissions ||
        !hasGalleryPermissions
    ) {
        return <View></View>;
    }

    return (
        <View style={{ margin: 30 }}>
            <Text>CameraScreen</Text>
        </View>
    );
}
