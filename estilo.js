import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#e5e5e5"
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    textInput: {
        height: 45,
        width: "95%",
        borderColor: "grey",
        borderWidth: 2,
        paddingLeft: 20

    },
    viewButton: {
        width: "96%",
        margin: 15,
        backgroundColor: "red"
    }
});

export { styles }