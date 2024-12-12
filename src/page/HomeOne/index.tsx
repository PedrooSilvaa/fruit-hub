
import { Input, InputField, InputIcon, InputSlot, ScrollView, Text, VStack, View } from "@gluestack-ui/themed";
import { Filter, Menu, Search, ShoppingBag, ShoppingBagIcon } from "lucide-react-native";
import BoxProduct from "../../components/BoxProduct";
import BoxProductColor from "../../components/BoxProductColor";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


function HomeOne(){

    const navigate = useNavigation();

    return(
        <ScrollView backgroundColor="#F3F4F9" height={'100%'} paddingTop={60} paddingHorizontal={24}>
            <View height={100}  display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection="row">
                <Menu color="black" size={40}/>
            <TouchableOpacity onPress={() => navigate.navigate("OrderList" as never)}>  
                <VStack justifyContent="center" alignItems="center">
                    <ShoppingBag color="#FFA451" size={40}/>
                    <Text>My Basket</Text>
                </VStack>
            </TouchableOpacity>
            </View>

            <View>
                <Text fontWeight={"bold"} fontSize={20} width={250}>
                    <Text fontWeight={"normal"}>Hello Tony</Text>, What fruit salad combo do you want today?
                </Text>
            </View>

            <View paddingTop={24} flexDirection="row" width={'100%'} alignItems="center" justifyContent="space-between">
                <Input paddingHorizontal={10} borderRadius={10} gap={10} alignItems="center" flexDirection="row" height={56} backgroundColor="#F3F1F1">
                    <InputSlot height={30}>
                        <InputIcon>
                            <Search color="black"/>
                        </InputIcon>
                    </InputSlot>
                    <InputField
                        placeholder="Search for fruit salad combos"
                        fontSize={20}
                        fontWeight={'regular'}
                    />
                </Input>
                <Filter color="black" size={40}/>
            </View>

            <View paddingTop={40}>
                <View>
                    <Text fontSize={24} fontWeight={'medium'} color="#27214D">Recommended Combo</Text>
                </View>

                <View paddingTop={24} flexDirection="row" flexWrap="wrap" gap={23} justifyContent="center">
                    <BoxProduct onPress={() => navigate.navigate("AddToBraket" as never)} img="1"/>
                    <BoxProduct onPress={() => navigate.navigate("AddToBraket" as never)} img="2"/>
                </View>
            </View>

            <View paddingTop={48}>
                <View flexDirection="row" width={'100%'} justifyContent="space-between" alignItems="center">
                    <Text color="#27214D" fontSize={24} borderBottomWidth={5} borderBottomColor="#FFA451" borderBottomEndRadius={'100%'}>Hottest</Text>
                    <Text color="#938DB5" fontWeight={'medium'} fontSize={16}>Popular</Text>
                    <Text color="#938DB5" fontWeight={'medium'} fontSize={16}>New Combo</Text>
                    <Text color="#938DB5" fontWeight={'medium'} fontSize={16}>Top</Text>
                </View>
                <ScrollView horizontal>
                    <View flexDirection="row" gap={10} width={'100%'} paddingTop={24}>
                        <BoxProductColor color="#FFFAEB" onPress={() => navigate.navigate("AddToBraket" as never)} img="1"/>
                        <BoxProductColor color="#FEF0F0" onPress={() => navigate.navigate("AddToBraket" as never)} img="2"/>
                        <BoxProductColor color="#FFFAEB" onPress={() => navigate.navigate("AddToBraket" as never)} img="1"/>
                        <BoxProductColor color="#FEF0F0" onPress={() => navigate.navigate("AddToBraket" as never)} img="2"/>
                    </View>
                </ScrollView>
            </View>

        </ScrollView>
    );

}

export default HomeOne;