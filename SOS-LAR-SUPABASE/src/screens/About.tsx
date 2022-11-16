import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Layout, Text } from "react-native-rapi-ui";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
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
        <Text>This is the About tab</Text>
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
