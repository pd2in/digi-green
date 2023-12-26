import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, Text, StyleSheet} from "react-native";
import LogoOnly from "../LogoOnly";

function Index({label,type,value,onChange,onPress}) {

    const [isPasswordSecure, setIsPasswordSecure] = useState(true);

    const toggleShowPassword = () => {
        setIsPasswordSecure(!isPasswordSecure);
    };

    return (
        <View>
            {label && (
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>
                    {label}
                </Text>
            )}

            {type === 'Basic' &&
                <TextInput
                    style={styles.textInputBasic}
                    onChangeText={onChange}
                    value={value}
                />
            }

            {type === 'Password' &&
                <TextInput
                    secureTextEntry={isPasswordSecure}
                    style={styles.textInputBasic}
                    onChangeText={onChange}
                    value={value}
                    right={
                        <TextInput.State
                            name={() => <MaterialCommunityIcons name={isPasswordSecure ? "eye-off" : "eye"} size={28} color={COLORS.black} />}
                            onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }}
                        />
                    }
                />
            }
        </View>
    );
}

export default Index;

const styles = StyleSheet.create({
    textInputBasic: {
        marginTop: 1,
        fontFamily: 'Poppins-Medium',
        borderWidth: 2,
        height: 49,
        borderRadius: 12,
        paddingHorizontal: 15,
        backgroundColor: 'white',
    },
})