import { Box, Text, View } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";



function Button(){
    return(
        <View>
            <TouchableOpacity>
              <Box
                backgroundColor="#FFA451"
                borderRadius={10}
                width={'100%'}
                height={56}
                alignItems="center"
                justifyContent="center"
              >
                <Text color="white" fontSize={16} fontWeight={"medium"}>Start Ordering</Text>
              </Box>
            </TouchableOpacity>
        </View>
    )
}

export default Button;