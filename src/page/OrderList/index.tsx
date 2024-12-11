import { Box, CloseIcon, Icon, Image, Input, InputField, ScrollView, Text, View } from "@gluestack-ui/themed";
import ButtonBack from "../../components/ButtonBack";
import ItemRow from "../../components/ItemRow";
import Button from "../../components/Button";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function OrderList(){
    const navigate = useNavigation();
    const [modal, setModal] = useState(false);
    const [modalCard, setModalCard] = useState(false);

    function openCard(){
        setModalCard(true);
        setModal(false)
    }
    return (
        <View paddingTop={70} backgroundColor="#FFA451" height={'100%'} >
            <View paddingHorizontal={24} paddingBottom={40} flexDirection="row" alignItems="center" width={'70%'} justifyContent="space-between">
                <ButtonBack onPress={() => navigate.navigate("Home")}/>
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
                        <TouchableOpacity onPress={() => setModal(true)}>
                            <Box
                              backgroundColor="#FFA451"
                              borderRadius={10}
                              width={200}
                              height={56}
                              alignItems="center"
                              justifyContent="center"
                            >
                                <Text color="white" fontSize={16} fontWeight={"medium"}>checkout</Text>
                            </Box>
                        </TouchableOpacity>
                </View>
            </View>
            <View position="absolute" height={'100%'} width={'100%'} bottom={0} top={0} backgroundColor="rgba(10,23,55,0.5)" display={modal ? "flex" : 'none'}>
                <View height={'50%'} justifyContent="flex-end" alignItems="center" paddingBottom={20}>
                     <TouchableOpacity onPress={() => setModal(false)}>
                        <View  height={50} width={50} opacity={1} backgroundColor="white" borderRadius={'100%'} padding={5}>
                            <Icon as={CloseIcon} color="black"/>
                        </View>
                     </TouchableOpacity>
                </View>
                <View backgroundColor="white" height={'100%'} borderTopEndRadius={60} borderTopStartRadius={50} paddingVertical={60}>
                    <View width={'100%'} alignItems="center" gap={16}>
                        <Text width={'70%'} fontSize={20} fontWeight={'medium'}>Delivery address</Text>
                        <Input width={'70%'} paddingHorizontal={10} borderRadius={10} justifyContent="center" height={56} backgroundColor="#F3F1F1">
                            <InputField
                                placeholder='10th avenue, Lekki, Lagos State'
                                fontSize={20}
                                fontWeight={'regular'}
                            />
                        </Input>
                    </View>

                    <View width={'100%'} alignItems="center" gap={16} paddingTop={24}>
                        <Text width={'70%'} fontSize={20} fontWeight={'medium'}>Number we can call</Text>
                        <Input width={'70%'} paddingHorizontal={10} borderRadius={10} justifyContent="center" height={56} backgroundColor="#F3F1F1">
                            <InputField
                                placeholder='09090605708'
                                fontSize={20}
                                fontWeight={'regular'}
                            />
                        </Input>
                    </View>
                    <View flexDirection="row" justifyContent="space-between" paddingHorizontal={24} paddingTop={40}>
                        <TouchableOpacity onPress={() => navigate.navigate('TrackOrder')}>
                            <Box
                                borderColor="#FFA451"
                                borderWidth={2}
                                borderRadius={10}
                                width={125}
                                height={56}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Text color="#FFA451" fontSize={16} fontWeight={"medium"}>Pay on delivery</Text>
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => openCard()}>
                            <Box
                                borderColor="#FFA451"
                                borderWidth={2}
                                borderRadius={10}
                                width={125}
                                height={56}
                                alignItems="center"
                                justifyContent="center"
                             >
                                <Text color="#FFA451" fontSize={16} fontWeight={"medium"}>Pay with card</Text>
                          </Box>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View position="absolute" height={'100%'} width={'100%'} bottom={0} top={0} backgroundColor="rgba(10,23,55,0.5)"  display={modalCard ? "flex" : 'none'}>
                <View height={'30%'} justifyContent="flex-end" alignItems="center" paddingBottom={20}>
                     <TouchableOpacity onPress={() => setModalCard(false)}>
                        <View  height={50} width={50} opacity={1} backgroundColor="white" borderRadius={'100%'} padding={5}>
                            <Icon as={CloseIcon} color="black"/>
                        </View>
                     </TouchableOpacity>
                </View>
                <View backgroundColor="white" height={'100%'} borderTopEndRadius={60} borderTopStartRadius={50} paddingVertical={60}>
                    <View width={'100%'} alignItems="center" gap={16}>
                        <Text width={'80%'} fontSize={20} fontWeight={'medium'}>Card Holders Name</Text>
                        <Input width={'80%'} paddingHorizontal={10} borderRadius={10} justifyContent="center" height={56} backgroundColor="#F3F1F1">
                            <InputField
                                placeholder='Adolphus Chris'
                                fontSize={20}
                                fontWeight={'regular'}
                            />
                        </Input>
                    </View>

                    <View width={'100%'} alignItems="center" gap={16} paddingTop={24}>
                        <Text width={'80%'} fontSize={20} fontWeight={'medium'}>Card Number</Text>
                        <Input width={'80%'} paddingHorizontal={10} borderRadius={10} justifyContent="center" height={56} backgroundColor="#F3F1F1">
                            <InputField
                                placeholder='1234 5678 9012 1314'
                                fontSize={20}
                                fontWeight={'regular'}
                            />
                        </Input>
                    </View>
                    
                    <View width={'100%'} alignItems="center" gap={16} paddingHorizontal={45} paddingTop={24} flexDirection="row" justifyContent="space-between" >
                    <View gap={16}>
                    <Text fontSize={20} fontWeight={'medium'}>Date</Text>
                        <Input width={'100'} paddingHorizontal={10} borderRadius={10} justifyContent="center" height={56} backgroundColor="#F3F1F1">
                            <InputField
                                placeholder='10/30'
                                fontSize={20}
                                fontWeight={'regular'}
                            />
                        </Input>
                    </View>
                    <View gap={16}>
                    <Text fontSize={20} fontWeight={'medium'}>CCV</Text>
                        <Input width={'100'} paddingHorizontal={10} borderRadius={10} justifyContent="center" height={56} backgroundColor="#F3F1F1">
                            <InputField
                                placeholder='123'
                                fontSize={20}
                                fontWeight={'regular'}
                            />
                        </Input>
                    </View>
                    </View>
                    <View paddingHorizontal={24} height={170} marginTop={60} alignItems="center" backgroundColor="#FFA451" justifyContent="center">
                        <TouchableOpacity onPress={() => navigate.navigate('TrackOrder')}>
                            <Box
                                backgroundColor="white"
                                borderRadius={10}
                                width={125}
                                height={56}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Text color="#FFA451" fontSize={16} fontWeight={"medium"}>Complete Order</Text>
                            </Box>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}