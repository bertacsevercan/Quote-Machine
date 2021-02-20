import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Button from '@ant-design/react-native/lib/button';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import ShakeEventExpo from "../config/ShakeEventExpo"
import WhiteSpace from '@ant-design/react-native/lib/white-space';

import Api from "../config/Api"

function HomeScreen(props) {
    const [quote, setQuote] = useState({
        quote : "",
        author : "",
    });
    const [isPressed, setIsPressed] = useState(0);
    const [api, setApi] = useState("");
    
    const getData =  async () => {
        const data = await fetch(Api[api])
        const response = await data.json();
        switch (api) {
            case "kanye":
                setQuote({
                    quote : response.quote,
                    author: "Kanye West"
                });
                break;
            case "swift":
                setQuote({
                    quote : response.quote,
                    author: "Taylor Swift"
                });
                break;
            case "ron":
                setQuote({
                    quote : response[0],
                    author : "Ron Swanson"
                });
                break;
            case "breakingBad":
                setQuote({
                    quote : response[0].quote,
                    author : response[0].author
                });
                break;
            case "randomQuotes":
            setQuote({
                quote : response.content,
                author : response.author
            });
            break;
            default:
                break;
            
        }
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
            <WingBlank size="lg">
            <Text style={styles.header}>{quote.author}</Text>
            <WhiteSpace size="xl" />

            <Text style={styles.text} >{quote.quote}</Text>
           
            </WingBlank>

            <WingBlank size="lg">
            <Button type="primary" onPress={() => {
                setIsPressed(isPressed + 1)
            }} >Press to generate quote!</Button>

            <WhiteSpace size="xl"/>

            <Text >or shake your phone!</Text>
            </WingBlank>

            <WingBlank>
            <RNPickerSelect
            style={styles.picker}
            onValueChange={(value) => setApi(value)}
            items={[
                { label: 'Kanye West', value: 'kanye' },
                { label: 'Ron Swanson', value: 'ron' },
                { label: 'Taylor Swift', value: 'swift' },
                {label: 'Breaking Bad', value: 'breakingBad'},
                {label: 'Random Quotes', value: "randomQuotes"}
            ]}
        />
            </WingBlank>
          
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

