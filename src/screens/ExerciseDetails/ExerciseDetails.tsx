import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { CategoriesStackParams } from "../../../App";
import { exerciseData } from "../../data/exerciseData";
import { styles } from "./ExerciseDetails.Screen.styles";


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



// Exercise Detail screen gives a detail explanation about an exercise. 
//You can't really do anything with this screen, It's just purely presentational.