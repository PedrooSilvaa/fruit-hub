import { Icon, Image, Text, View } from "@gluestack-ui/themed";
import { Heart } from "lucide-react-native";

interface BoxColor{
    color: string;
}

function BoxProductColor( {color} : BoxColor){

    return(
        <View padding={10} backgroundColor={color} width={152} height={183} justifyContent="center" alignItems="center" borderRadius={16}>
            <View width={'100%'} alignItems="flex-end">
                <Icon as={Heart} color="#FFA451"/>
            </View>
            <View alignItems="center">
                <Image source={require('../../../assets/plate-two.png')} />
                <Text fontSize={16} fontWeight={'medium'}>Honey lime combo</Text>
            </View>
            <View flexDirection="row" alignItems="center" justifyContent="space-between" width={'100%'} paddingTop={10}>
                <View flexDirection="row" gap={5}>
                    <Image source={require('../../../assets/coin.png')}/>
                    <Text fontSize={14} fontWeight={'regular'} color="#F08626">2,000</Text>
                </View>
                <Image source={require('../../../assets/add.png')}/>
            </View>
        </View>
    )

}

export default BoxProductColor;