
import { Icon, Image, Input, InputField, InputIcon, InputSlot, MenuIcon, ScrollView, Text, VStack, View } from "@gluestack-ui/themed";
import { Filter, FilterIcon, FilterX, FilterXIcon, Menu, Search, ShoppingBag, ShoppingBagIcon } from "lucide-react-native";
import BoxProduct from "../../components/BoxProduct";


function HomeOne(){

    return(
        <ScrollView backgroundColor="pink" height={'100%'} paddingTop={60} paddingHorizontal={24}>
            <View height={100}  display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection="row">
                <Icon as={Menu} color="black" size={40}/>
                <VStack justifyContent="center" alignItems="center">
                    <Icon as={ShoppingBag} color="#FFA451" size={40}/>
                    <Text>My Basket</Text>
                </VStack>
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
                            <Icon as={Search} color="black"/>
                        </InputIcon>
                    </InputSlot>
                    <InputField
                        placeholder="Search for fruit salad combos"
                        fontSize={20}
                        fontWeight={'regular'}
                    />
                </Input>
                <Icon as={Filter} color="black" size={40}/>
            </View>

            <View paddingTop={40}>
                <View>
                    <Text fontSize={24} fontWeight={'medium'} color="#27214D">Recommended Combo</Text>
                </View>

                <View paddingTop={24} flexDirection="row" flexWrap="wrap" gap={23} justifyContent="center">
                    <BoxProduct/>
                    <BoxProduct/>
                </View>

            </View>

        </ScrollView>
    );

}

export default HomeOne;