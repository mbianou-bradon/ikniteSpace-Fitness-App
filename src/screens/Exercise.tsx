import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CategoriesStackParams } from "../../App";


export default function Exercise(){

    const navigation = useNavigation<NativeStackNavigationProp<CategoriesStackParams>>()

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
                    <Pressable style={styles.closeExerciseButton} onPress={()=> navigation.goBack()}>
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