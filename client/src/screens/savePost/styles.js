import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        padding: 30,
        backgroundColor: "#fff",
    },
    inputText: {
        flex: 1,
        paddingVertical: 20,
        marginRight: 20,
    },
    formContainer: {
        flexDirection: "row",
    },
    mediaPreview: {
        aspectRatio: 9 / 16,
        backgroundColor: "black",
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 20,
    },
    cancelButton: {
        alignItems: "center",
        flex: 1,
        borderColor: "lightgray",
        borderWidth: 1,
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        justifyContent: "center",
        marginRight: 10,
    },
    postButton: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "#ff4040",
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        justifyContent: "center",
        marginRight: 10,
    },
    cancelButtonText: {
        fontWeight: "bold",
        color: "black",
        fontSize: 16,
        marginLeft: 5,
    },
    postButtonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 16,
        marginLeft: 5,
    },
    spacer: {
        flex: 1,
    },
    uploadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default styles;
