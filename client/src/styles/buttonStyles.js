import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    greyOutlinedButton: {
        borderColor: "lightgray",
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
    }
});

export default buttonStyles;
