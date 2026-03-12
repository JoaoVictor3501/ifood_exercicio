import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header(){
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                
                <Text style={styles.delivery}>Entregar Em:</Text>
                <TouchableOpacity style={styles.notificacion}>
                                        <Ionicons name="notifications" size={24} color="black" />
                </TouchableOpacity>

            </View>

            <Text style={styles.adress}>Rua XXXXXX Número XXX</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        height:80,
        justifyContent: "center",
        padding:20,
    },
    notificacion:{
        fontSize:20,
        
    },
    adress:{
        marginTop:5,
        color:"gray"
    },
    delivery:{
        fontSize:15,
        fontWeight:"bold",
    },
    topRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
});