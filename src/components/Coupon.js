import { Text, StyleSheet,TouchableOpacity, View, Image } from "react-native";

export default function Coupon(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                 <Text style={styles.title}>Cupons do IFOOD CADM!</Text>

                <TouchableOpacity>
                    <Text style={styles.title}> Ver mais cupons aqui!</Text>
                </TouchableOpacity>
            </View>

              <TouchableOpacity style={styles.card}>
                <Image
                    source={{uri:"https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56"}}
                    style={styles.image}
                />
                <Text style={styles.title}>Sushi  #30%IFOODCADM</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.card}>
                <Image
                    source={{uri:"https://images.unsplash.com/photo-1669283709393-c0ed0521fa89?w=800"}}
                    style={styles.image}
                />
                <Text style={styles.title}>Macarrão Bolado #50%IFOODCADM</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
               <Image 
                source={{uri:"https://images.unsplash.com/photo-1702728117204-9f178761b2dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"}}
                style={styles.image}
                />
                <Text style={styles.title}>Pudim BOLADÃO #70%IFOODCADM</Text>
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
       padding:16
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:16
    },
    title:{
        fontSize:15,
        fontWeight:"bold"
    },
    card:{
    backgroundColor:"white",
    borderRadius:12,
    marginBottom:15,
    overflow:"hidden"
    },
    image:{
    width:"100%",
    height:140
    },
    
})
