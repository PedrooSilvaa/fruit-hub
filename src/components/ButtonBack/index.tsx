import { Icon, Text, View } from "@gluestack-ui/themed";
import { AlignLeft, ArrowLeft, ChevronLeft, MoveLeft } from "lucide-react-native";

export default function ButtonBack(){
    return(
        <View justifyContent="center" alignItems="center" backgroundColor="white" flexDirection="row" width={90} paddingVertical={5} borderRadius={20}>
            <Icon as={ChevronLeft} color="black" size={25}/>
            <Text fontSize={16} fontWeight={'medium'}>Go Back</Text>
        </View>
    )
}