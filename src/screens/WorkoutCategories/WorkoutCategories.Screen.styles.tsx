import { StyleSheet } from "react-native";
import { themes } from "../../util/themes/themes";


export const styles = StyleSheet.create({
  categoriesContainer: {
    paddingTop: 5,
    paddingHorizontal: 5,
 
  },
  categoriesSubContainer: {
 
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    paddingBottom: 10,
  },
  coverImageContainer: {
    height: 275,
    backgroundColor: themes.primary,
    borderRadius: 25,
  },
  categoriesOptionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginVertical: 20,
  },
  categoriesOptionsHeaderHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "black"
  },
  categoriesOptionsHeaderMore: {
    color: themes.primary,
    textDecorationLine: 'underline',
  },
});