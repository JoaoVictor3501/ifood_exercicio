import Categories from "../src/components/CategoryList";
import Header from "../src/components/Header";
import SeachBar from "../src/components/SeachBar";
import RestaurantBar from "../src/components/RestaurantBar"
import RestaurantList from "../src/components/RestaurantList"
import { ScrollView, StyleSheet, View } from "react-native";
import BottomMenu from "../src/components/BottomMenu"
import Banner from "../src/components/Banner"
import Cupon from "../src/components/Coupon"
export default function HomeScreen() {
  return(
    <View style={styles.container}>
      <ScrollView>
        <Header/>
        <SeachBar/>
        <Categories/>
        <Banner/>
        <RestaurantBar/>
        <RestaurantList/>
        <Cupon/>
        <BottomMenu/>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FFFF",
    
  }
})