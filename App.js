import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

const staticData = ["iOS", "Android", "Kotlin", "Boom", "Mobile", "Dev"];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            height: 300,
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {staticData.map((item) => {
            return (
              <View
                style={{
                  width: 100,
                  margin: 12,
                  padding: 8,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#6daf6e",
                }}
              >
                <Text
                  style={{ color: "#fdfdfd", flexShrink: 1, flexWrap: "wrap" }}
                >
                  {item}
                </Text>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
