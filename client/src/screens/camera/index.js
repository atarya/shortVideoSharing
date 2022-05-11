import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { Audio } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useIsFocused } from "@react-navigation/core";
import styles from "./styles";

export default function CameraScreen() {
    const [hasCameraPermissions, setHasCameraPermissions] = useState(false);
    const [hasAudioPermissions, setHasAudioPermissions] = useState(false);
    const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false);

    const [galleryItems, setGalleryItems] = useState([]);

    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [cameraFlash, setCameraFlash] = useState(Camera.Constants.FlashMode.off);
    const [isCameraReady, setIsCameraReady] = useState(false);

    const [cameraRef, setCameraRef] = useState(null);

    const isFocused = useIsFocused();

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

    const recordVideo = async () => {
        if (cameraRef) {
            try {
                const options = { maxDuration: 60, quality: Camera.Constants.VideoQuality["720p"] };
                const videoRecordPromise = await cameraRef.recordAsync(options);
                if (videoRecordPromise) {
                    const data = await videoRecordPromise;
                    const source = data.uri
                }
            } catch (error) {
                console.warn(error);
            }
        }
    }
    const stopVideo = async () => {
        if (cameraRef) {
            cameraRef.stopRecording();
        }
    }



    if (
        !hasCameraPermissions ||
        !hasAudioPermissions ||
        !hasGalleryPermissions
    ) {
        return <View></View>;
    } else {
        return (
            <View style={styles.container}>
                {isFocused ?
                    <Camera
                        ref={ref => setCameraRef(ref)}
                        style={styles.camera}
                        ratio={"16:9"}
                        type={cameraType}
                        flashMode={cameraFlash}
                        onCameraReady={() => setIsCameraReady(true)}
                    />
                    : null}

                <View style={styles.bottomBarContainer}>
                    <View style={styles.recordButtonContainer}>
                        <TouchableOpacity
                            disabled={!isCameraReady}
                            onLongPress={() => recordVideo()}
                            onPressOut={() => stopVideo()}
                            style={styles.recordButton}
                        />
                    </View>
                </View>

            </View>
        );
    }
}
