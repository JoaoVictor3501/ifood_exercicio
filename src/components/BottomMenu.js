import {View, TouchableOpacity, StyleSheet,} from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';

export default function BottomMenu(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <FontAwesome5 name="home" size={24} color="black" />
                Início</TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <FontAwesome name="search" size={24} color="black" />
                Buscar
                </TouchableOpacity>

            <TouchableOpacity    style={styles.item}>
                <FontAwesome5 name="clipboard-list" size={24} color="black" />
                Pedidos
            </TouchableOpacity >
            
            <TouchableOpacity    style={styles.item}>
                <Octicons name="people" size={24} color="black" />
                Perfil
                </TouchableOpacity  >
        
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"white",
        padding:15,
        borderTopWidth:1,
        borderColor:"#ddd"
    },
    item:{
        fontSize:15,
        fontWeight:"bold",
        alignItems:"center"
    }
})