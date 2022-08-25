import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";

import News from "./app/routes/home/news/index";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <News></News>
      </View>

      <StatusBar />
    </SafeAreaView>
  );
}
