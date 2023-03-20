import { workoutCategoriesType } from "../../dataTypes"
import { exerciseData } from "./exerciseData"

export const workoutCategoriesData: workoutCategoriesType[] = [
    {
        id: "1",
        name: "LEG EXERCISE",
        workoutDesc: "Boost the strength of your legs and increase your productives",
        exercise: exerciseData.filter(exer => exer.category === "LEG"),
    },
    {
        id: "2",
        name: "CHEST EXERCISE",
        workoutDesc: "Boost the strength of your legs and increase your productives",
        exercise: exerciseData.filter(exer => exer.category === "CHEST"),
    },
    {
        id: "3",
        name: "ABDOMEN EXERCISE",
        workoutDesc: "Boost the strength of your legs and increase your productives",
        exercise: exerciseData.filter(exer => exer.category === "ABDOMEN"),
    },
]