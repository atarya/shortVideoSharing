import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        paddingHorizontal: 65,
    },
    emailText: {
        padding: 10,
    },
    counterContainer: {
        flexDirection: "row",
        paddingBottom: 20,
    },
    counterItemContainer: {
        flex: 1,
        alignItems: "center",
    },
    counterNumberText: {
        fontWeight: "bold",
        fontSize: 16,
    },
    counterLabelText: {
        fontSize: 12,
        color: "gray",
    }
});

export default styles;
