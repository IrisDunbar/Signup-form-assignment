import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingTop: 50,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 15,
    marginBottom: 10,
    backgroundColor: "white",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    marginLeft: 5,
  },
  button: {
    backgroundColor: "#1b51e4",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  hover: {
    backgroundColor: "#0731a4",
  },
  backLink: {
    marginTop: 10,
    alignItems: "center",
  },
  backLinkText: {
    color: "#007AFF",
    fontSize: 16,
  },
  confirmationContainer: {
    width: 300,
    height: 200,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 30,
    padding: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  confirmationPage: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 100,
  },
});
