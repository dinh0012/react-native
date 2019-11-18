import * as React from 'react';
import {Text, View, StyleSheet, StatusBar, TextInput} from "react-native";
import {NavigationScreenProp} from "react-navigation";

interface Props {
    navigation: any
};
const HomeScreen = (props: Props) => {
    const { navigate } = props.navigation;
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const _emailInput = React.useRef(null);
    const _nameInput = React.useRef(null);

    const _next = () => {

        _emailInput.current && _emailInput.current.focus();
    };

    const _submit = () => {
        alert(`Welcome, ${name}! Confirmation email has been sent to ${email}`);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={name => setName(name)}
                ref={ref => {_nameInput.current = ref}}
                placeholder="Full Name"
                autoFocus={true}
                autoCapitalize="words"
                autoCorrect={true}
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={_next}
                blurOnSubmit={false}
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={email => setEmail(email)}
                ref={ref => {_emailInput.current = ref}}
                placeholder="email@example.com"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="send"
                onSubmitEditing={_submit}
                blurOnSubmit={true}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    header: {
        paddingTop: 20,
        padding: 20,
        backgroundColor: '#336699',
    },
    description: {
        fontSize: 14,
        color: 'white',
    },
    input: {
        margin: 20,
        marginBottom: 0,
        height: 34,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderColor: '#ccc',
        borderWidth: 1,
        fontSize: 16,
    },
});
export default HomeScreen;
