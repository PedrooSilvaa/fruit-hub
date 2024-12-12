import { Image, Text, View } from "@gluestack-ui/themed";
import { Heart } from "lucide-react-native";
import { useState } from "react";
import { PressableProps, TouchableOpacity } from "react-native";

interface BoxColor extends PressableProps{
    color: string;
    img: string 
}

function BoxProductColor( {color, onPress, img} : BoxColor){

    const [like, setLike] = useState(false);

    return(
        <View padding={10} backgroundColor={color} width={152} height={183} justifyContent="center" alignItems="center" borderRadius={16}>
            <View width={'100%'} alignItems="flex-end">
                <TouchableOpacity onPress={() => {like == false ? setLike(true) : setLike(false)}}>
                    <Heart color="#FFA451" fill={like == true ? "#FFA451" : "white"}/>
                </TouchableOpacity>
            </View>
            <View alignItems="center">
                { img == "1" && <Image source={require('../../../assets/plate-one.png')} alt="plate"/>}
                { img == "2" && <Image source={require('../../../assets/plate-two.png')} alt="plate"/>}
                { img == "1" && <Text paddingTop={10} fontSize={16} fontWeight={'medium'}>Honey lime</Text>}
                { img == "2" && <Text paddingTop={10} fontSize={16} fontWeight={'medium'}>Honey combo</Text>}
            </View>
            <View flexDirection="row" alignItems="center" justifyContent="space-between" width={'100%'} paddingTop={10}>
                <View flexDirection="row" gap={5}>
                    <Image source={require('../../../assets/coin.png')} alt="plate"/>
                    <Text fontSize={14} fontWeight={'regular'} color="#F08626">2,000</Text>
                </View>
                <TouchableOpacity onPress={onPress}>
                    <Image source={require('../../../assets/add.png')} alt="plate"/>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default BoxProductColor;