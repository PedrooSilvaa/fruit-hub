import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "../page/WelcomePage";
import HomeOne from "../page/HomeOne";
import OrderList from "../page/OrderList";
import TrackOrder from "../page/TrackOrder";
import AddToBraket from "../page/AddToBraket";

export const Router = () =>{
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Welcome" component={WelcomePage}/>
            <Stack.Screen name="Home" component={HomeOne}/>
            <Stack.Screen name="AddToBraket" component={AddToBraket}/>
            <Stack.Screen name="OrderList" component={OrderList}/>
            <Stack.Screen name="TrackOrder" component={TrackOrder}/>
        </Stack.Navigator>
    )
}

export default Router;