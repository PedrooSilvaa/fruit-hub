import { Image, ScrollView, Text, View } from "@gluestack-ui/themed";
import ButtonBack from "../../components/ButtonBack";
import ItemRow from "../../components/ItemRow";
import Button from "../../components/Button";

export default function OrderList(){
    return (
        <View paddingTop={70} backgroundColor="#FFA451" height={'100%'} >
            <View paddingHorizontal={24} paddingBottom={40} flexDirection="row" alignItems="center" width={'70%'} justifyContent="space-between">
                <ButtonBack/>
                <Text fontSize={24} color="white">My Basket</Text>
            </View>

            <View backgroundColor="white" flex={1} paddingBottom={40}>
                <ScrollView paddingHorizontal={24} paddingTop={40}>
                    <ItemRow/>
                    <ItemRow/>
                    <ItemRow/>
                    <ItemRow/>
                    <ItemRow/>
                    <ItemRow/>
                    <ItemRow/>
                    <ItemRow/>
                    <ItemRow/>
                    <ItemRow/>
                    <ItemRow/>
                    <ItemRow/>
                </ScrollView>
                <View paddingHorizontal={25} flexDirection="row" justifyContent="space-between">
                    <View>
                        <Text fontSize={16} fontWeight={'medium'}>Total</Text>
                        <View flexDirection="row" alignItems="center" gap={5}>
                            <Image height={16} source={require('../../../assets/coin-black.png')}/>
                            <Text fontSize={24} fontWeight={'medium'}>6,000</Text>
                        </View>
                    </View>
                    <Button text="Checkout" size="200"/>
                </View>
            </View>
        </View>
    );
}