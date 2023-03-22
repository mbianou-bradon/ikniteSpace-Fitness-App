import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  categoriesContainer: {
    paddingTop: 5,
    paddingHorizontal: 5,
    // marginBottom: 10,
  },
  categoriesSubContainer: {
    // backgroundColor: '#cccfff',
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    paddingBottom: 10,
  },
  coverImageContainer: {
    height: 275,
    backgroundColor: '#ff4f5b',
    borderRadius: 25,
  },
  categoriesOptionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginVertical: 20,

    // backgroundColor: "blue",
  },
  categoriesOptionsHeaderHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "black"
  },
  categoriesOptionsHeaderMore: {
    color: '#ff4f5b',
    textDecorationLine: 'underline',
  },
});