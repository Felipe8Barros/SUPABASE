import React from "react";
import { View, Image, ImageBackground, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "../initSupabase";
import {
  Layout,
  Button,
  Section,
  SectionContent,
} from "react-native-rapi-ui";
import { MainHomeParamList } from "../types/navigation";

export default function ({
  navigation,
}: NativeStackScreenProps<MainHomeParamList, "HomeAuth">) {
  return (
    <Layout>
        <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        >
        <ImageBackground 
                style={styles.wallpapers} 
                source={require('../../assets/images/fundo.png')}>
        <Image
        resizeMode="contain"
        style={{
            height: 220,
            width: 220,
              }}
        source={require("../../assets/images/logoBranco.png")}
        />
            <Button
              text={"     Start     "}
              onPress={() => {
                navigation.navigate("Login");
                }}
              style={{
                marginTop: 120,
                
              }}
            />
            
        </ImageBackground>
    </View>
</Layout>
);
}

const styles = StyleSheet.create({
    
    wallpapers: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
    },
      
  })