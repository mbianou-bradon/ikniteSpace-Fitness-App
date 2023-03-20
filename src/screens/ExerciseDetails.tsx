import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { CategoriesStackParams } from "../../App";
import { exerciseData } from "../data/exerciseData";


export default function ExerciseDetails({ route }:any){

    const {exerciseTitle} = route.params

    const exerciseInfo = exerciseData.filter(
    exercise => exercise.title === exerciseTitle
  )[0];

  const exerciseDesc = exerciseInfo.desc


    const navigation = useNavigation<NativeStackNavigationProp<CategoriesStackParams>>()

    return (
        <View style={styles.exerciseContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
           
                <View style={styles.exercisePreview}>

                </View>
                <View style={styles.exerciseDescriptionContainer}>
                    <Text style={styles.exerciseTitle}>{exerciseInfo.title}</Text>
                    {
                        exerciseDesc.map((desc, index) => <Text style={styles.exerciseDescription}>{desc}</Text>)
                    }
                    
                </View>
                 
            </ScrollView>
            <View>
                <View></View>

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
        marginVertical: 20,
    },
    exerciseTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black"
    },
    exerciseDescription: {
        fontSize: 16,
        marginVertical: 12,
    },
    closeExerciseViewButtonContainer: {
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    closeExerciseButton: {
        backgroundColor: "#27244e",
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


// Exercise Detail screen gives a detail explanation about an exercise. 
//You can't really do anything with this screen, It's just purely presentational.