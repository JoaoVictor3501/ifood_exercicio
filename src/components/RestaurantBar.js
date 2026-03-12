import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function RestaurantBar(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Promoções com entrega grátis!</Text>
            <TouchableOpacity style={styles.title}>Ver Mais</TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        padding:20,
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between"
        
    },
    title:{
        fontSize:15,
        fontWeight:"bold",
        
    },
});