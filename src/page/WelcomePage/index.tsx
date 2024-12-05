import { Image, Input, InputField, Text, View } from "@gluestack-ui/themed";
import Button from "../../components/Button";

function WelcomePage(){

    return(
        <View height={'100%'} display="flex" alignItems="center">
            <View backgroundColor="#FFA451" width={"100%"} height={'60%'} display="flex" alignItems="center" justifyContent="flex-end" paddingBottom={50}>
                <Image source={require('../../../assets/fruit-two.png')}/>
            </View>
            <View height={"40%"} display="flex" alignItems="center" justifyContent="flex-start" paddingTop={40} width={'100%'} gap={42}>
                <View gap={15} width={'80%'}>
                    <Text fontSize={20} fontWeight={"medium"} color="#27214D">What is your firstname?</Text>
                    <Input paddingHorizontal={10} borderRadius={10} justifyContent="center" height={56} backgroundColor="#F3F1F1">
                        <InputField
                            placeholder='Tony'
                            fontSize={20}
                            fontWeight={'regular'}
                        />
                    </Input>
                </View>
                <View width={"80%"}>
                    <Button></Button>
                </View>
            </View>
        </View>
    )

}


export default WelcomePage;