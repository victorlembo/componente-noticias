import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

import styles from "./styles";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const News = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 20 }}>
        <View>
          <View style={styles.menu}>
            {/* View pai menu */}

            <View>
              {/* View 'Noticias APAE' */}
              <Text style={styles.news}>Noticias apae</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginRight: 23.3
              }}
            >
              {/* View 'Ver Mais e Botao >' */}

              <View>
                {/* View Ver mais */}
                <TouchableOpacity>
                  <Text style={styles.show}>Ver mais</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  marginLeft: 8,
                }}
              >
                {/* View Botao > */}
                <Image
                  source={require("../../../../images/news/botaoTopo.png")}
                  style={{
                    width: 5,
                    height: 9,
                  }}
                ></Image>
              </View>
            </View>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            styles={{ flex: 1 }}
          >
            <View
              style={{
                flexDirection: "row",
               
              }}
            >
              {/* View Pai Cards > */}
              <View style={styles.card}>
                {/* View Card > */}
                <View>
                  {/* View pai imagem > */}
                  {/* View imagem > */}
                  <Image
                    source={require("../../../../images/news/feijoada.png")}
                    style={styles.image}
                  ></Image>
                </View>

                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  {/* View pai textos > */}
                  <View>
                    <Text style={styles.title}>
                      III Feijoada Solidária{/* View Titulo > */}
                    </Text>
                  </View>

                  <View>
                    <Text style={styles.paragraph}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      {/* View Titulo > */}
                    </Text>
                  </View>

                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* View pai Botao > */}
                    <View>
                      <TouchableOpacity style={styles.button}>
                        <Image
                          source={require("../../../../images/news/botaoCard.png")}
                          style={{ width: 5, height: 9 }}
                        ></Image>

                        {/* View Botao > */}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                {/* View Card > */}
                <View>
                  {/* View pai imagem > */}
                  {/* View imagem > */}
                  <Image
                    source={require("../../../../images/news/feijoada.png")}
                    style={styles.image}
                  ></Image>
                </View>

                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  {/* View pai textos > */}
                  <View>
                    <Text style={styles.title}>
                      III Feijoada Solidária{/* View Titulo > */}
                    </Text>
                  </View>

                  <View>
                    <Text style={styles.paragraph}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      {/* View Titulo > */}
                    </Text>
                  </View>

                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* View pai Botao > */}
                    <View>
                      <TouchableOpacity style={styles.button}>
                        <Image
                          source={require("../../../../images/news/botaoCard.png")}
                          style={{ width: 5, height: 9 }}
                        ></Image>

                        {/* View Botao > */}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default News;
