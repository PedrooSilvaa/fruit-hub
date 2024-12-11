import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "../page/WelcomePage";
import HomeOne from "../page/HomeOne";
import OrderList from "../page/OrderList";
import TrackOrder from "../page/TrackOrder";

export const Router = () =>{
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Welcome" component={TrackOrder}/>
            <Stack.Screen name="Home" component={HomeOne}/>
        </Stack.Navigator>
    )
}

export default Router;