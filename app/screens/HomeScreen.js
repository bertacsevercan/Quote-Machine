import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

function HomeScreen(props) {
    const [quote, setQuote] = useState("");
    const [isPressed, setIsPressed] = useState(0);
    
    const getData =  async () => {
        const data = await fetch("https://api.kanye.rest")
        const response = await data.json();
        setQuote(response.quote);
        console.log(response);
    }

    useEffect(() => {
       getData()
      
    }, [isPressed]);
    
    return (
        <View style={styles.container}>
            <Button color="red" style={styles.button} title="Click me!" onPress={() => (
                setIsPressed(isPressed + 1)
            )} />
            <Text style={styles.text}>{quote}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        marginHorizontal: 10
    },
    button : {
        padding: 5,
        backgroundColor: "red",
    }
})

export default HomeScreen;

