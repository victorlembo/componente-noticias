import { StyleSheet } from "react-native";
import { normalize } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFAFF",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  news: {
    fontFamily: "Montserrat_400Regular",
    fontWeight: "500",
    fontSize: normalize(11),
    lineHeight: 14,
    color: "#302A4B",
    textTransform: "uppercase",
  },
  show: {
    fontFamily: "Montserrat_400Regular",
    display: "flex",
    textDecorationLine: "underline",
    alignItems: "center",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: normalize(10),
    lineHeight: 12,
    color: "#776ABC",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: 183,
    height: 199,
    marginRight: 20,
  },
  image: {
    width: 163,
    height: 105,
    borderRadius: 20,
    marginTop: 6,
    marginBottom: 7,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    display: "flex",
    fontSize: normalize(10),
    lineHeight: 12,
    color: "#686579",
    fontWeight: "600",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  paragraph: {
    fontFamily: "Montserrat_400Regular",
    fontSize: normalize(9),
    lineHeight: 11,
    color: "#686579",
    fontWeight: "400",
    fontStyle: "normal",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 28,
    height: 28,
    backgroundColor: "#776ABC",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default styles;
