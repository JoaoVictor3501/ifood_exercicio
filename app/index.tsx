import Categories from "../src/components/CategoryList";
import Header from "../src/components/Header";
import SeachBar from "../src/components/SeachBar";

import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return(
    <View style={style.container}>
      <Header/>
      <SeachBar/>
      <Categories/>
    </View>
  );
};

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#000000",
    
  }
})