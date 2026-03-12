import { View, Text, StyleSheet } from "react-native";

export default function Header(){
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                
                <Text style={styles.delivery}>Entregar Em:</Text>
                <Text style={styles.notificacion}>Notificação☺ </Text>

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
        fontSize:20
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