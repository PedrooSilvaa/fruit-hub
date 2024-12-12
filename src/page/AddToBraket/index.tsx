import { Image, Text, View } from "@gluestack-ui/themed";
import ButtonBack from "../../components/ButtonBack";
import { Heart, MinusCircle, PlusCircle } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import { PressableProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

interface AddProps extends PressableProps{

}

export default function AddToBraket({onPress} : AddProps){
    const navigate = useNavigation();
    const [like, setLike] = useState(false);
    const [quant, setquant] = useState(1)

    return (
        <View backgroundColor="#FFA451" height={'100%'} gap={20}>
            <View paddingTop={64}  paddingHorizontal={24} justifyContent="space-between" height={320} alignItems="center" paddingBottom={24}>
                <View width={'100%'}>
                    <ButtonBack onPress={() => navigate.goBack()}/>
                </View>
                <Image source={require('../../../assets/plate-one.png')} width={176} height={176} alt="plate"/>
            </View>

            <View paddingHorizontal={24} backgroundColor="white" borderTopEndRadius={50} borderTopStartRadius={50} height={"100%"}>
                <View borderBottomColor="#F3F3F3" borderBottomWidth={1} paddingBottom={24}>
                    <Text fontSize={32} fontWeight={'medium'} paddingTop={40}>
                        Quinoa Fruit Salad
                    </Text>
                    <View flexDirection="row" justifyContent="space-between" paddingTop={33} alignItems="center">
                        <View flexDirection="row" alignItems="center" gap={24} >
                            <TouchableOpacity onPress={() => {quant <= 0 ? "" : setquant(quant - 1)}}>
                                <MinusCircle color="black" size={32}/>
                            </TouchableOpacity>
                            <Text fontSize={25}>{quant}</Text>
                            <TouchableOpacity onPress={() => {setquant(quant + 1)}}>
                                <PlusCircle color="#FFA451" size={32}/>
                            </TouchableOpacity>
                        </View>
                        <View flexDirection="row" gap={5} alignItems="center">
                            <Image source={require("../../../assets/coin-black.png")} height={15} alt="plate"/>
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
                        <TouchableOpacity onPress={() => {like == false ? setLike(true) : setLike(false)}}>
                            <Heart color="#FFA451" fill={like == true ? "#FFA451" : "white"}/>
                        </TouchableOpacity>
                        </View>
                        <Button text="Add to Braket" size="220" onPress={() => navigate.navigate("OrderList" as never)}/>
                    </View>
                </View>
            </View>
        </View>
    );
}