import { Image, Text, View } from "@gluestack-ui/themed";
import ButtonBack from "../../components/ButtonBack";
import { useNavigation } from "@react-navigation/native";

export default function TrackOrder(){
    const navigate = useNavigation();
    return(
        <View paddingTop={70} backgroundColor="#FFA451" height={'100%'}>
            <View paddingHorizontal={24} paddingBottom={40} flexDirection="row" alignItems="center" width={'76%'} justifyContent="space-between">
                <ButtonBack onPress={() => navigate.navigate('Home' as never)}/>
                <Text fontSize={24} color="white">Delivery Status</Text>
            </View>

            <View backgroundColor="white" flex={1} paddingBottom={40}  paddingHorizontal={24} alignItems="center">
                <View flexDirection="row" width={'100%'} justifyContent="space-between" alignItems="center" paddingVertical={30}>
                    <View  backgroundColor="#FFFAEB" padding={15} borderRadius={10}>
                        <Image source={require('../../../assets/annotation.png')}/>
                    </View>
                    <Text fontSize={16}>Order Take</Text>
                    <Image source={require('../../../assets/positive.png')}/>
                </View>
                <View flexDirection="row" width={'100%'} justifyContent="space-between" alignItems="center" paddingVertical={30}>
                    <View  backgroundColor="#F1EFF6" padding={15} borderRadius={10}>
                        <Image source={require('../../../assets/clipboard.png')}/>
                    </View>
                    <Text fontSize={16}>Order Is Being Prepared</Text>
                    <Image source={require('../../../assets/positive.png')}/>
                </View>
                <View flexDirection="row" width={'100%'} justifyContent="space-between" alignItems="center" paddingVertical={30}>
                    <View  backgroundColor="#FEF0F0" padding={15} borderRadius={10}>
                        <Image source={require('../../../assets/motoboy.png')}/>
                    </View>
                    <Text fontSize={16}>Order Is Being Delivered</Text>
                    <Image source={require('../../../assets/phone.png')}/>
                </View>
                <Image source={require('../../../assets/map.png')}/>
                <View flexDirection="row" width={'100%'} justifyContent="space-between" alignItems="center" paddingTop={50}>
                    <Image source={require('../../../assets/positive.png')} width={50} height={50}/>
                    <Text>Order Received</Text>
                    <Image source={require('../../../assets/options.png')}/>
                </View>
            </View>
        </View>
    )
}