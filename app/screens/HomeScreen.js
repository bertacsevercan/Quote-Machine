import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Button from "@ant-design/react-native/lib/button";
import WingBlank from "@ant-design/react-native/lib/wing-blank";
import ShakeEventExpo from "../config/ShakeEventExpo";
import WhiteSpace from "@ant-design/react-native/lib/white-space";
import {
  useFonts,
  LobsterTwo_400Regular_Italic,
  Orbitron_400Regular,
} from "@expo-google-fonts/dev";

import Api from "../config/Api";

function HomeScreen(props) {
  const [fontsLoaded] = useFonts({
    LobsterTwo_400Regular_Italic,
    Orbitron_400Regular,
  });
  const [quote, setQuote] = useState({
    quote: "",
    author: "",
  });
  const [isPressed, setIsPressed] = useState(0);
  const [api, setApi] = useState("");

  const getData = async () => {
    const data = await fetch(Api[api]);
    const response = await data.json();
    switch (api) {
      case "kanye":
        setQuote({
          quote: response.quote,
          author: "Kanye West",
        });
        break;
      case "swift":
        setQuote({
          quote: response.quote,
          author: "Taylor Swift",
        });
        break;
      case "ron":
        setQuote({
          quote: response[0],
          author: "Ron Swanson",
        });
        break;
      case "breakingBad":
        setQuote({
          quote: response[0].quote,
          author: response[0].author,
        });
        break;
      case "randomQuotes":
        setQuote({
          quote: response.content,
          author: response.author,
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    api ? getData() : null;
    ShakeEventExpo.addListener(() => {
      setIsPressed(isPressed + 1);
      //console.log(isPressed)
    });
  }, [isPressed, api]);

  if (!fontsLoaded) {
    return <Text>...</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Quote Machine</Text>
        <WingBlank size="lg">
          <Button
            type="primary"
            onPress={() => {
              setIsPressed(isPressed + 1);
            }}
            style={styles.generalText}
          >
            Press to generate a quote!
          </Button>

          <WhiteSpace size="xl" />

          <Text style={styles.generalText}>or shake your phone!</Text>
        </WingBlank>
        <WingBlank size="lg">
          <WhiteSpace size="xl" />
          {api ? (
            <View style={styles.quoteBox}>
              <Text style={styles.text}>
                <Text style={styles.quotationMark}>&#x201C;</Text>
                {quote.quote}
                <Text style={styles.quotationMark}>&#x201D;</Text>
              </Text>
              <Text style={styles.header}>-{quote.author}</Text>
            </View>
          ) : (
            <Text style={styles.text}>Please choose a quote!</Text>
          )}
        </WingBlank>

        <RNPickerSelect
          style={styles.picker}
          onValueChange={(value) => setApi(value)}
          items={[
            { label: "Kanye West", value: "kanye" },
            { label: "Ron Swanson", value: "ron" },
            { label: "Taylor Swift", value: "swift" },
            { label: "Breaking Bad", value: "breakingBad" },
            { label: "Random Quotes", value: "randomQuotes" },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    marginHorizontal: 10,
    alignItems: "flex-start",
    fontFamily: "LobsterTwo_400Regular_Italic",
    fontSize: 16,
  },
  button: {
    padding: 5,
    backgroundColor: "red",
  },
  picker: {
    width: "100%",
    backgroundColor: "red",
    color: "red",
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-end",
    fontFamily: "LobsterTwo_400Regular_Italic",
  },
  quotationMark: {
    fontSize: 25,
    fontWeight: "bold",
  },
  quoteBox: {
    borderColor: "grey",
    borderWidth: 5,
    padding: 10,
  },
  generalText: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 20,
  },
  appName: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Orbitron_400Regular",
  },
});

export default HomeScreen;
