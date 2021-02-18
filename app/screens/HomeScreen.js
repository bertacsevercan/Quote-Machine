import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import ShakeEventExpo from "../config/ShakeEventExpo"
import Api from "../config/Api"

function HomeScreen(props) {
    const [quote, setQuote] = useState("");
    const [isPressed, setIsPressed] = useState(0);
    const [api, setApi] = useState("");

    const getData =  async () => {
        const data = await fetch(Api[api])
        const response = await data.json();
        // switch case here for all the apis
        if (api === "kanye" || api === "swift"){
            setQuote(response.quote);
        }
        else {
            setQuote(response[0]);
        }
        //console.log(response);
    }

    useEffect(() => {
        getData();
       ShakeEventExpo.addListener(() => {
        setIsPressed(isPressed + 1)
        //console.log(isPressed)
      });
      
    }, [isPressed, api]);
    
    return (
        <View style={styles.container}>
            <Button color="red" style={styles.button} title="Click me!" onPress={() => {
                setIsPressed(isPressed + 1)
            }} />
            <Text style={styles.header}>{api}</Text>
            <Text style={styles.text}>{quote}</Text>
            <RNPickerSelect
            style={styles.picker}
            onValueChange={(value) => setApi(value)}
            items={[
                { label: 'Kanye West', value: 'kanye' },
                { label: 'Ron Swanson', value: 'ron' },
                { label: 'Taylor Swift', value: 'swift' },
            ]}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-around"
    },
    text: {
        marginHorizontal: 10
    },
    button : {
        padding: 5,
        backgroundColor: "red",
    },
    picker: {
        backgroundColor: "red",
        color: "red",
        paddingHorizontal: 10

    },
    header: {
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default HomeScreen;

