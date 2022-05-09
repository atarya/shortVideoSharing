import { View, Text } from "react-native";
import React, { useState } from "react";
import AuthMenu from "../../components/auth/menu";
import AuthDetails from "../../components/auth/details";
import styles from "../../components/auth/menu/style";

export default function AuthScreen() {
    const [authPage, setAuthPage] = useState(0);
    const [detailsPage, setDetailsPage] = useState(false);
    return (
        <View style={styles.container}>
            {detailsPage ? (
                <AuthDetails
                    detailsPage={detailsPage}
                    setDetailsPage={setDetailsPage}
                    authPage={authPage}
                />
            ) : (
                <AuthMenu
                    authPage={authPage}
                    setAuthPage={setAuthPage}
                    detailsPage={detailsPage}
                    setDetailsPage={setDetailsPage}
                />
            )}
        </View>
    );
}
