import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform, Button, Share, Vibration } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import WingBlank from "@ant-design/react-native/lib/wing-blank";
import ShakeEventExpo from "../config/ShakeEventExpo";
import WhiteSpace from "@ant-design/react-native/lib/white-space";
import {
  useFonts,
  LobsterTwo_400Regular_Italic,
  Orbitron_400Regular,
} from "@expo-google-fonts/dev";

import Api from "../config/Api";

function HomeScreen() {
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
      Vibration.vibrate(100);
    });
  }, [isPressed, api]);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `_❝ ${quote.quote} ❞_\n \n*-${quote.author}*`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  if (!fontsLoaded) {
    return <Text>...</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Quote Machine</Text>
        <View style={styles.picker}>
          <RNPickerSelect
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
        <WingBlank size="sm">
         
         {api ? (
           <View>
             <View style={styles.quoteBox}>
               <Text style={styles.text}>
                 <Text style={styles.quotationMark}>&#x201C;</Text>
                 {quote.quote}
                 <Text style={styles.quotationMark}>&#x201D;</Text>
               </Text>
               <Text style={styles.header}>-{quote.author}</Text>
             </View>
             <Button
               color="orange"
               style={styles.button}
               disabled={quote.quote ? false : true}
               onPress={onShare}
               title="Share &#128640;"
             />
           </View>
         ) : (
           <Text style={styles.generalText}>
             Please choose an option &#128070;
           </Text>
         )}
       </WingBlank>

        <WingBlank size="lg">
          <Button
            color="orange"
            title="Press to generate a quote!"
            onPress={() => {
              Vibration.vibrate(50)
              setIsPressed(isPressed + 1);
            }}
            style={[styles.generalText, styles.button]}
          />

          <WhiteSpace size="sm" />

          <Text style={styles.generalText}>or shake your phone &#128075; </Text>
        </WingBlank>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    marginHorizontal: 10,
    alignItems: "flex-start",
    fontFamily: "LobsterTwo_400Regular_Italic",
    fontSize: 16,
    color: "black",
  },
  button: {
    padding: 15,
  },
  picker: {
    backgroundColor: "orange",
    padding: 20,
    borderRadius: 25,
    width: Platform.OS === "android" ? "100%" : null,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-end",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "black",
  },
  quotationMark: {
    fontSize: 25,
    fontWeight: "bold",
  },
  quoteBox: {
    borderColor: "grey",
    borderWidth: 5,
    padding: 10,
    marginLeft: 10,
    marginRight : 10,
    marginBottom: 20,
    backgroundColor: "lightgrey",
    borderRadius: 10,
   

  },
  generalText: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 20,
    color: "white",
    alignSelf: "center",
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Orbitron_400Regular",
    color: "white",
  },
});

export default HomeScreen;
