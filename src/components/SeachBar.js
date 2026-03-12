import {View, TextInput, StyleSheet } from "react-native";

export default function SeachBar(){
    return(
        <View style={styles.container}>
            <TextInput
            placeholder="Buscar no IFOOD CADM"
            style={styles.input}
            
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:15
    },
    input:{
        fontSize:15,
        backgroundColor:"#f2f2f2",
        padding:12,
        borderRadius:10,
    }
});