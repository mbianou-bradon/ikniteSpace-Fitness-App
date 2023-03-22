import { ImageBackground, Text } from "react-native";
import { styles } from "./Discover.Screen.styles";


export default function Discover(){

    return (
        <ImageBackground source={require("../../assets/images/iknite.png")} style={styles.ImageCover} resizeMode={"contain"} imageStyle={{flex:1, padding:10}}>
            <Text style={styles.text}>Coming soon. . .</Text>
        </ImageBackground>
    )
}

