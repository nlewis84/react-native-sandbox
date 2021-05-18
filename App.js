import React, { Component } from "react";
import { Image, Platform, Text, StyleSheet, View } from "react-native";
export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image
                            style={styles.cardImage}
                            source={require("./lake.jpg")}
                        />
                    </View>
                    <View>
                        <Text style={styles.cardName}>John Doe</Text>
                    </View>
                    <View style={styles.cardOccupationContainer}>
                        <Text style={styles.cardOccupation}>
                            ReactNative Developer
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.cardDescription}>
                            John is a really great JavaScript developer. He
                            loves using JS to build React Native applications
                            for iOS and Android.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const profileCardColor = "dodgerblue";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    cardContainer: {
        alignItems: "center",
        borderColor: "black",
        borderWidth: 3,
        borderStyle: "solid",
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.6,
                shadowRadius: 10,
            },
            android: {
                elevation: 15,
            },
        }),
    },
    cardImageContainer: {
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: "black",
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 2,
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.6,
                shadowRadius: 10,
            },
            android: {
                elevation: 15,
            },
        }),
    },
    cardImage: {
        width: 110,
        height: 110,
        borderRadius: 55,
    },
    cardName: {
        color: "white",
        fontSize: 24,
        marginTop: 30,
        fontWeight: 700,
        textShadowColor: "black",
        textShadowOffset: {
            height: 2,
            width: 2,
        },
        textShadowRadius: 3,
    },
    cardOccupationContainer: {
        borderColor: "black",
        borderBottomWidth: 3,
    },
    cardOccupation: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 700,
    },
    cardDescription: {
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10,
        fontStyle: "italic",
    },
});
