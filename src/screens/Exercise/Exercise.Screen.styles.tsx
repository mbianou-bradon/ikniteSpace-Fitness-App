import { StyleSheet } from "react-native";
import { themes } from "../../util/themes/themes";


export const styles = StyleSheet.create({
    exerciseContainer: {
        padding: 10,
        height: "100%",
    },
    exercisePreview: {
        height: 350,
        backgroundColor: themes.primary,
        borderRadius: 10,
    },
    exerciseDescriptionContainer: {
        marginTop: 40,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    exerciseTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    exerciseDescription: {
        fontSize: 20,
        marginVertical: 12,
    },
    exerciseDurationContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    exerciseDuration: {
        fontSize: 75,
        color: themes.seconday,
    },
    closeExerciseViewButtonContainer: {
        borderTopWidth: 2,
        borderColor: "#ccc",
        paddingTop: 10,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection:"row",
    },
    closeExerciseButton: {
        backgroundColor: themes.seconday,
        height: 50,
        width: "45%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"

    },
    closeExerciseButtonStart:{
        backgroundColor: "green",
        height: 50,
        width: "45%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    closeExerciseButtonText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    },
    restTimeContainer: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themes.seconday,
    },
    restTimeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: themes.primary,
    },
    restTimeDuration: {
        fontSize: 75,
        color: themes.primary,
    },
    skipBtnContainer:{
        backgroundColor: themes.primary,
        paddingHorizontal: 35,
        paddingVertical: 8,
        borderWidth: 2,
        borderRadius: 40,
    },
    skipBtnText: {
        fontSize: 18,
        color: "white"
    },
    upnextContainer: {
        borderWidth: 2, 
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: "100%", 
        backgroundColor:themes.primary, 
        height:"40%",
        padding: 10,
    },
    upnextTextContainer: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between",
        marginBottom: 10
    },
    upnextText:{
        color: "white", 
        fontSize:25,
        fontWeight: "bold",
    },
    upnextExercise: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
    upnextExerciseTitle:{
        fontSize: 18,
        fontWeight: "800",
        color: themes.primary,
    },
});