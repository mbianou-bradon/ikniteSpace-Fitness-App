import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  categoriesMainContainer: {
    paddingTop: 5,
    paddingHorizontal: 5,
    height: '100%',
  },
  categoriesContainer: {
    // backgroundColor: '#cccfff',
    backgroundColor: 'white',
    // padding: 20,
    borderRadius: 10,
    paddingBottom: 10,
  },
  categoriesSubContainer: {
    // backgroundColor: '#cccfff',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingBottm: 20,
    paddingTop: 10,
    borderRadius: 10,
    paddingBottom: 10,
    marginTop: 20,
  },
  coverImageContainer: {
    height: 150,
    backgroundColor: '#ff4f5b',
    borderRadius: 10,
  },
  categoriesOptionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 20,
    marginBottom: 15,
  },
  categoriesOptionsHeaderHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  categoriesOptionsHeaderMore: {
    color: '#ff4f5b',
    textDecorationLine: 'underline',
  },
  startExerciseButtonContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startExerciseButton: {
    backgroundColor: '#27244e',
    height: 50,
    width: '65%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startExerciseButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});