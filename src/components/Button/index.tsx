import { Box, Text, View } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";

interface ButtonProps{
  text: string;
  size: string;
}

function Button( {text, size} : ButtonProps){
    return(
        <View>
            <TouchableOpacity>
              <Box
                backgroundColor="#FFA451"
                borderRadius={10}
                width={size}
                height={56}
                alignItems="center"
                justifyContent="center"
              >
                <Text color="white" fontSize={16} fontWeight={"medium"}>{text}</Text>
              </Box>
            </TouchableOpacity>
        </View>
    )
}

export default Button;