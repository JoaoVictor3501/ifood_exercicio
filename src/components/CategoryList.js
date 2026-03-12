import { StyleSheet, Text, View } from "react-native";

export default function Categories(){
    return(
        <View style={styles.container}>
            <Text style={styles.category}>Lanches </Text>
            <Text style={styles.category}>Pizzas</Text>
            <Text style={styles.category}>Marmitas</Text>
            <Text style={styles.category}>Sobremesas</Text>

        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        justifyContent:"space-between",
        padding:16,
        flexDirection:"row",
    },
    category:{
        fontSize:15,
        fontWeight:"bold"
    }
})