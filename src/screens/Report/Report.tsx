import { ImageBackground, Text } from "react-native";
import { styles } from "./Report.Screen.styles";


export default function Report(){

    return (
        <ImageBackground source={require("../../assets/images/iknite.png")} style={styles.ImageCover} resizeMode={"contain"} imageStyle={{flex:1, padding:10}}>
            <Text style={styles.text}>Coming soon. . .</Text>
        </ImageBackground>
    )
}
