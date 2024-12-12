
import { View } from "@gluestack-ui/themed";
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


