import { Image, Text, View } from "@gluestack-ui/themed";

export default function ItemRow(){
    return(
        <View flexDirection="row" gap={16} borderBottomColor="#F4F4F4" borderBottomWidth={2} paddingBottom={16} paddingTop={10}>
            <View padding={10} backgroundColor="#FFFAEB" borderRadius={10}>
                <Image source={require('../../../assets/plate-three.png')} alt="plate"/>
            </View>
            <View justifyContent="space-between" alignItems="center" flexDirection="row" width={'76%'} >
                <View>
                    <Text>Quinoa fruit salad</Text>
                    <Text>2packs</Text>
                </View>
                <View flexDirection="row" alignItems="center" gap={5}>
                    <Image source={require('../../../assets/coin-black.png')} alt="plate"/>
                    <Text>20,000</Text>
                </View>
            </View>
        </View>
    );
}