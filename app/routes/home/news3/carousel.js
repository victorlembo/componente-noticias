import React from "react";
import {

  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Card } from "react-native-paper";
import styles from "./styles";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const CarouselCard = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
 

  return (
    
      <View style={styles.container}>
        <View style={styles.menu}>
          <View>
            <Text style={styles.news}>Notícias apae</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <TouchableOpacity>
                <Text style={styles.show}>Ver Mais</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Image
                source={require("../../../../images/news/botaoTopo.png")}
                style={{
                  width: 5,
                  height: 9,
                  marginLeft: 8,
                }}
              ></Image>
            </View>
          </View>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} styles={{ flex: 1 }}>
          <View style={styles.cardContainer}>
            <View style={styles.cardDiv}>
              <Card style={styles.card}>
                <Image
                  source={require("../../../../images/news/feijoada.png")}
                  style={styles.image}
                ></Image>
                <Text style={styles.title}>III Feijoada Solidária</Text>
                <Text style={styles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <TouchableOpacity
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <View style={styles.button}>
                    <Image
                      source={require("../../../../images/news/botaoCard.png")}
                      style={{ width: 5, height: 9 }}
                    ></Image>
                  </View>
                </TouchableOpacity>
              </Card>
            </View>
            <View style={styles.cardDiv}>
              <Card style={styles.card}>
                <Image
                  source={require("../../../../images/news/feijoada.png")}
                  style={styles.image}
                ></Image>
                <Text style={styles.title}>III Feijoada Solidária</Text>
                <Text style={styles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <TouchableOpacity
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <View style={styles.button}>
                    <Image
                      source={require("../../../../images/news/botaoCard.png")}
                      style={{ width: 5, height: 9 }}
                    ></Image>
                  </View>
                </TouchableOpacity>
              </Card>
            </View>
          </View>
        </ScrollView>
      </View>
   
  );
};

export default CarouselCard;
