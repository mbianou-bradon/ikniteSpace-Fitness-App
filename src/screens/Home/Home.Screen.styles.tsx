import { StyleSheet } from "react-native";
import { themes } from "../../util/themes/themes";


export const styles = StyleSheet.create({
    headerStyles: {
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themes.primary,
        paddingTop: 8,
        
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
})