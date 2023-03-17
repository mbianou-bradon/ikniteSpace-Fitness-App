import { Pressable, StyleSheet, Text, View } from "react-native";


export default function Exercise(){

    return(
        <View style={styles.exerciseContainer}>
            <View>
           
                <View style={styles.exercisePreview}>

                </View>
                <View style={styles.exerciseDescriptionContainer}>
                    <Text style={styles.exerciseTitle}>Title</Text>
                    <Text style={styles.exerciseDescription}>Description</Text>
                </View>
                 
            </View>
            <View>
                <View></View>

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
        marginVertical: 20,
    },
    exerciseTitle: {
        fontSize: 25,
        fontWeight: "bold",
    },
    exerciseDescription: {
        fontSize: 20,
        marginVertical: 12,
    },
    closeExerciseViewButtonContainer: {
        marginVertical: 10,
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