import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        aspectRatio: 9 / 16,
        backgroundColor: "black",
    },
    bottomBarContainer: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        marginBottom: 30,
    },
    recordButtonContainer: {
        flex: 1,
        marginHorizontal: 30,
    },
    recordButton: {
        borderWidth: 8,
        borderColor: "#EB5353",
        backgroundColor: "#ff4040",
        borderRadius: 100,
        height: 70,
        width: 70,
        alignSelf: "center",
    },
    galleryButton: {
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 10,
        overflow: "hidden",
        width: 50,
        height: 50,
        alignItems: "center",
    },
    galleryButtonImage: {
        width: "100%",
        height: "100%",
    },
    sideBarContainer: {
        top: 60,
        right: 0,
        marginHorizontal: 20,
        position: "absolute",
    },
    iconText: {
        color: "white",
        fontSize: 12,
        marginTop: 5,
        fontWeight: "bold",
    },
    sideBarButton: {
        alignItems: "center",
        marginBottom: 25,

    }
});

export default styles;
