import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 30
    },
    textInput: {
        borderColor: "lightgrey",
        borderBottomWidth: 1,
        borderStyle: "solid",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20
    },
    button: {
        marginTop: 80,
        borderColor: "lightgrey",
        borderWidth: 1,
        borderStyle: "solid",
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "red"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    }
})

export default styles;