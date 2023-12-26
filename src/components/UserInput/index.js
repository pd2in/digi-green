import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, Text, StyleSheet} from "react-native";
import LogoOnly from "../LogoOnly";
import EyePassword from "../EyePassword";

function Index({label,type,value,onChange,onPress}) {

    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
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
                    placeholder="Enter Username"
                    placeholderTextColor="#aaa"
                    style={styles.textInputBasic}
                    onChangeText={onChange}
                    value={value}
                />
            }

            {type === 'Password' &&
                <View style={styles.container}>
                    <TextInput
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                        placeholder="Enter Password"
                        placeholderTextColor="#aaa"
                    />
                    <EyePassword
                        type={showPassword  ? 'eye-off' : 'eye'}
                        style={styles.icon}
                        onPress={toggleShowPassword}
                    />
                </View>
            }
        </View>
    );
}

export default Index;

const styles = StyleSheet.create({
    textInputBasic: {
        marginTop: 1,
        fontFamily: 'Poppins-Medium',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f3f3',
        borderRadius: 8,
        paddingHorizontal: 14,
        height: 49,
        fontSize: 16,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f3f3',
        borderRadius: 8,
        paddingHorizontal: 14,
    },
    input: {
        flex: 1,
        color: '#333',
        paddingVertical: 10,
        paddingRight: 10,
        fontSize: 16,
        height: 49,
        fontFamily: 'Poppins-Medium',
    },
    icon: {
        marginLeft: 10,
    },
    heading: {
        alignItems: 'center',
        fontSize: 20,
        color: 'green',
        marginBottom: 20,
    },
})