import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    KeyboardTypeOptions,
} from "react-native";

import palette from "../palette";
import { MarginPaddingPropTypes } from "../types";

export type banInputPropTypes = {
    type?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    placeholder?: string;
    onChange?: (value?: any) => any;
    value?: string;
    containerStyle?: MarginPaddingPropTypes;
    testID? : string;
    autoCapitalize?: "none" | "sentences" | "words" | "characters"
};

const BanInput = ({ type, secureTextEntry, autoCapitalize, placeholder, onChange, value, containerStyle, testID }: banInputPropTypes) => {
    if (onChange !== undefined && value === undefined) {
        console.warn(
            "Cannot set a callback change function without a value prop."
        );
    }

    const [defaultValue, setDefaultValue] = React.useState("");

    return (
        <SafeAreaView>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
                style={{
                    ...banInputStyle,
                    ...containerStyle
                }}
                textAlign={'center'}
                onChangeText={
                    onChange
                        ? onChange
                        : (value) => setDefaultValue(value)
                }
                value={value !== undefined ? value : defaultValue}
                
                placeholder={placeholder}
                placeholderTextColor={palette.labelText}
                keyboardType={type}
                testID={testID}
                // error={true}
            />
        </SafeAreaView>
    );
}

export const AtreviInputSize = {
    width: 200,
    height: 43,
}

export const banInputStyle = {
    borderRadius: 14,
    backgroundColor: palette.inputBackground, 
}

BanInput.defaultProps = {
    containerStyle: {
        margin: 12,
        padding: 10,
        ...AtreviInputSize,
    },
}

export default BanInput;
