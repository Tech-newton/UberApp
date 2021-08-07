import React from 'react'
import { StyleSheet, Text, View, StatusBar} from 'react-native'

const MapScreen = () => {
    return (
        <View style={styles.safeArea}>
            <Text>Map screen</Text>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    safeArea:{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
})
