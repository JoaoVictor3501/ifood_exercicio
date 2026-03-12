import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

export default function RestaurantList(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                <Image
                    source={{uri:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"}}
                    style={styles.image}
                />
                  <Text style={styles.title}>Burguer CAVALO</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <Image
                    source={{uri:"https://images.unsplash.com/photo-1594007654729-407eedc4be65"}}
                    style={styles.image}
                />
                <Text style={styles.title}>Pizza</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <Image
                    source={{uri:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c"}}
                    style={styles.image}
                />
                <Text style={styles.title}>Marmitas Fit</Text>

            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:"#f2f2f2",  
    },
    card:{
        backgroundColor:"white",
        padding:20,
        borderRadius:15,
        marginBottom:12,
    },
    title:{
        fontSize:15,
        fontWeight:"bold"
    },
    image:{
    width:"100%",
    height:140,
    borderRadius:10
}
})
