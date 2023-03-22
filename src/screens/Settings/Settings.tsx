import { ImageBackground, StyleSheet, Text } from "react-native";
import { styles } from "./Setings.Screen.styles";


export default function Settings(){

    return (
        <ImageBackground source={require("../assets/images/iknite.png")} style={styles.ImageCover} resizeMode={"contain"} imageStyle={{flex:1, padding:10}}>
            <Text style={styles.text}>Coming soon. . .</Text>
        </ImageBackground>
    )
}

