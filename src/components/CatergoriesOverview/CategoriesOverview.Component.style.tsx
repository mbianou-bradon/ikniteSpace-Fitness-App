import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
   
    categoriesOverviewContainer: {
        flexDirection: "row",
        gap: 10,
        height: 100,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: "#ff4f5b",
        borderWidth: 2,
    },
    categoriesOverviewImageContainer: {
        flex: 1,
        backgroundColor: "#ff4f5b",
        borderRadius: 10
    },
    categoriesOverviewDetailContainer:{
        flex: 3,

    },
    categoriesOverviewTitle: {
        fontSize: 20, 
        fontWeight:"bold", 
        color: "black",
    }
})