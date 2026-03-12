import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Categories(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.category}>
                <Ionicons name="fast-food" size={16} color="black"/>
                <Text style={styles.text} >Lanches</Text>
                
                </TouchableOpacity>

            <TouchableOpacity style={styles.category}>
            <FontAwesome6 name="pizza-slice" size={16} color="black"/>
                <Text style={styles.text}>Pizzas</Text>
            
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.category}>
                <MaterialCommunityIcons name="food-takeout-box" size={16} color="black"/>
                <Text style={styles.text}>Marmitas</Text>
            
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.category}>
                <FontAwesome5 name="ice-cream" size={16} color="black"/>
                <Text style={styles.text}>Sobremesas</Text>
            
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        justifyContent:"space-between",
        padding:10,
        flexDirection:"row",
    },
    category:{
        backgroundColor:"#C0C0C0",
        paddingVertical:5,
        paddingHorizontal:40,
        borderRadius:20,
        fontSize:15,
        fontWeight:"bold",
        marginRight:20,
        gap:6,
        flexDirection:"row",
        alignItems:"center"
    },
    text:{
        fontSize:15,
        fontWeight:"bold",
    }
})