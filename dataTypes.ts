export interface exerciseType {
    title: string,
    imagePreview: string,
    category: string,
    desc: string[],
    focusArea: string[],
    restTime: number,
    duration: number,
};

export interface workoutCategoriesType {
    id: string,
    name: string,
    workoutDesc: string,
    exercise: exerciseType[],
}