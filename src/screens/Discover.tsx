import { ImageBackground, StyleSheet, Text } from "react-native";


export default function Discover(){

    return (
        <ImageBackground source={require("../assets/images/iknite.png")} style={styles.ImageCover} resizeMode={"contain"} imageStyle={{flex:1, padding:10}}>
            <Text style={styles.text}>Coming soon. . .</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: "bold"
    },
    ImageCover: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        paddingTop: 20,
        
        
    }
})