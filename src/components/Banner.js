import {View, Image, StyleSheet, TouchableOpacity} from "react-native";

export default function Banner (){
   

    return(
        <View style={styles.container}>
            <TouchableOpacity >
                  <Image
                source={{uri:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c"}}
                style={styles.banner}
            />
            </TouchableOpacity>
          
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:16
    },
    banner:{
        width:"100%",
        height:160,
        borderRadius:12
    }
})