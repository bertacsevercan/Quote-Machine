import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Share,
  Vibration,
  Image,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import ShakeEventExpo from "../config/ShakeEventExpo";
import getData from "../services/getData";
import { styles, pickerSelectStyles } from "../config/styles";
import Api from "../config/Api";
import AppButton from "../components/AppButton";

function HomeScreen() {
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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../../assets/logo.png")}
      />

      <View>
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

      {api ? (
        <View style={styles.quoteBoxWrapper}>
          <ScrollView style={styles.quoteBox}>
            <Text style={styles.text}>
              {!!quote.quote && (
                <Text style={styles.quotationMark}>&#x201C;</Text>
              )}
              {quote.quote}
              {!quote.quote ? (
                <View style={styles.spinner}>
                  <ActivityIndicator size="large" color="gray" />
                </View>
              ) : null}
              {!!quote.quote && (
                <Text style={styles.quotationMark}>&#x201D;</Text>
              )}
            </Text>
            {!!quote.author && (
              <Text style={styles.header}>-{quote.author}</Text>
            )}
          </ScrollView>
          <AppButton
            style={styles.shareButton}
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
      <View>
        <AppButton
          disabled={api ? false : true}
          color="orange"
          title="Press to generate a quote!"
          onPress={() => {
            setIsPressed(isPressed + 1);
          }}
          border
        />

        <Text style={styles.generalText}>or shake your device &#128075; </Text>
      </View>
    </View>
  );
}

export default HomeScreen;
