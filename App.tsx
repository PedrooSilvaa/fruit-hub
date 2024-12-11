
import { ScrollView, View } from "@gluestack-ui/themed";
import HomeOne from "./src/page/HomeOne";
import AddToBraket from "./src/page/AddToBraket";
import WelcomePage from "./src/page/WelcomePage";
import OrderList from "./src/page/OrderList";
import TrackOrder from "./src/page/TrackOrder";
import Router from "./src/router";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <View style={{flex:1}}>
        <NavigationContainer>
            <Router/>
        </NavigationContainer>
    </View>
  );
}


