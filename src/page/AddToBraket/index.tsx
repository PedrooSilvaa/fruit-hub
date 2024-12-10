import { Box, Icon, Image, Text, View } from "@gluestack-ui/themed";
import ButtonBack from "../../components/ButtonBack";
import { Heart, MinusCircle, PlusCircle } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import Button from "../../components/Button";

export default function AddToBraket(){
    return (
        <View backgroundColor="#FFA451" height={'100%'} gap={20}>
            <View paddingTop={64}  paddingHorizontal={24} justifyContent="space-between" height={320} alignItems="center" paddingBottom={24}>
                <View width={'100%'}>
                    <ButtonBack/>
                </View>
                <Image source={require('../../../assets/plate-one.png')} width={176} height={176}/>
            </View>

            <View paddingHorizontal={24} backgroundColor="white" borderTopEndRadius={50} borderTopStartRadius={50} height={"100%"}>
                <View borderBottomColor="#F3F3F3" borderBottomWidth={1} paddingBottom={24}>
                    <Text fontSize={32} fontWeight={'medium'} paddingTop={40}>
                        Quinoa Fruit Salad
                    </Text>
                    <View flexDirection="row" justifyContent="space-between" paddingTop={33} alignItems="center">
                        <View flexDirection="row" alignItems="center" gap={24} >
                            <Icon as={MinusCircle} color="black" size={32}/>
                            <Text fontSize={25}>1</Text>
                            <Icon as={PlusCircle} color="#FFA451" size={32}/>
                        </View>
                        <View flexDirection="row" gap={5} alignItems="center">
                            <Image source={require("../../../assets/coin-black.png")} height={15}/>
                            <Text fontSize={24}>2,000</Text>
                        </View>
                    </View>
                </View>

                <View paddingTop={32} gap={20} borderBottomColor="#F3F3F3" borderBottomWidth={1} paddingBottom={24}>
                    <Text fontSize={20} fontWeight={'medium'} borderBottomColor="#FFA451" width={154} borderBottomWidth={3}>One Pack Contains:</Text>
                    <Text fontSize={16} fontWeight={'medium'}>Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.</Text>
                </View>

                <View paddingTop={24}>
                    <Text fontSize={16}>If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
                    <View flexDirection="row" width={'100%'} justifyContent="space-between" paddingTop={40}>
                        <View backgroundColor="#FFF7F0" borderRadius={50} alignItems="center" justifyContent="center" width={50} height={50}>
                            <Icon as={Heart} color="#FFA451" size={30}/>
                        </View>
                        <Button text="Add to Braket" size="220"/>
                    </View>
                </View>
            </View>
        </View>
    );
}