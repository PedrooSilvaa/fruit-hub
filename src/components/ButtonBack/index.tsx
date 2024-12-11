import { Icon, Text, View } from "@gluestack-ui/themed";
import { AlignLeft, ArrowLeft, ChevronLeft, MoveLeft } from "lucide-react-native";
import { PressableProps } from "react-native";
import { TouchableOpacity } from "react-native";

interface ButtonBackProps extends PressableProps{

}

export default function ButtonBack({onPress} : ButtonBackProps){
    return(
        <TouchableOpacity onPress={onPress}>  
            <View justifyContent="center" alignItems="center" backgroundColor="white" flexDirection="row" width={90} paddingVertical={5} borderRadius={20}>
                <Icon as={ChevronLeft} color="black" size={25}/>
                <Text fontSize={16} fontWeight={'medium'}>Go Back</Text>
            </View>
        </TouchableOpacity>
    )
}