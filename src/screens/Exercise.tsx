import { Pressable, StyleSheet, Text, View } from "react-native";


export default function Exercise(){

    return(
        <View style={styles.exerciseContainer}>
            <View>
                <View style={styles.exercisePreview}>

                </View>                 
            </View>
            <View>
                <View style={styles.exerciseDescriptionContainer}>
                    <Text style={styles.exerciseTitle}>Title</Text>
        
                </View>
                <View style={styles.exerciseDurationContainer}>
                    <Text style={styles.exerciseDuration}>00:30</Text>
        
                </View>

            </View>
            <View>

                <View style={styles.closeExerciseViewButtonContainer}>
                    <Pressable style={styles.closeExerciseButton}>
                        <View>
                            <Text style={styles.closeExerciseButtonText}>Close</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    exerciseContainer: {
        padding: 10,
        height: "100%",
    },
    exercisePreview: {
        height: 350,
        backgroundColor: "pink",
        borderRadius: 10,
    },
    exerciseDescriptionContainer: {
        marginVertical: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    exerciseTitle: {
        fontSize: 25,
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
        color: "black",
    },
    closeExerciseViewButtonContainer: {
        borderTopWidth: 2,
        borderColor: "#ccc",
        paddingTop: 10,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    closeExerciseButton: {
        backgroundColor: "blue",
        height: 50,
        width: "65%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"

    },
    closeExerciseButtonText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    }
});