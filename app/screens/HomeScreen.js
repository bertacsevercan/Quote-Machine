import React, { useState, useEffect } from "react";
import { View, Text, Share, Vibration, Image, StatusBar, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import WingBlank from "@ant-design/react-native/lib/wing-blank";
import ShakeEventExpo from "../config/ShakeEventExpo";
import WhiteSpace from "@ant-design/react-native/lib/white-space";
import ActivityIndicator from "@ant-design/react-native/lib/activity-indicator";
import {
  useFonts,
  LobsterTwo_400Regular_Italic,
  Orbitron_400Regular,
} from "@expo-google-fonts/dev";

import getData from "../services/getData";
import styles from "../config/styles";
import Api from "../config/Api";
import AppButton from "../components/AppButton";

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
  const [api, setApi] = useState();

  useEffect(() => {
    api ? getData(Api, api, setQuote) : null;
    ShakeEventExpo.addListener(() => {
      setIsPressed(isPressed + 1);
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
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../../assets/logo.png")}
        />
       
        <View /* style={styles.picker} */>
          <RNPickerSelect
          style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
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
                  {!!quote.quote && (
                    <Text style={styles.quotationMark}>&#x201C;</Text>
                  )}
                  {quote.quote}
                  {!quote.quote ?  <View  style={styles.spinner}>
                  <ActivityIndicator size="large" /* animating={!quote.quote}  *//>
                  </View> : null}
                  {!!quote.quote && (
                    <Text style={styles.quotationMark}>&#x201D;</Text>
                  )}
                </Text>
                {!!quote.author && (
                  <Text style={styles.header}>-{quote.author}</Text>
                )}
              </View>
              <AppButton
                color="orange"
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
          <AppButton
            color="orange"
            title="Press to generate a quote!"
            onPress={() => {
              setIsPressed(isPressed + 1);
            }}
            border
          />

          <WhiteSpace size="sm" />

          <Text style={styles.generalText}>or shake your phone &#128075; </Text>
        </WingBlank>
      </View>
    );
  }
}


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default HomeScreen;

