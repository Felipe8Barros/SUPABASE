import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
  TextInput,
  Button, Section, 
  SectionContent,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, StyleSheet } from "react-native";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "SecondScreen">) {
  const { isDarkmode, setTheme } = useTheme();
  const [text, setText] = useState('');
  const [servico, setServico] = useState('');
  const [valor, setvalor] = useState('');
  return (
    <Layout>
      <TopNav
        middleContent="Second Screen"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
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
        <Section style={{ marginTop: 20 }}>
          <SectionContent>
        <Text style={{marginBottom: 10}}></Text>
        <TextInput
          placeholder="Serviço Prestado ?"
          value={text}
          onChangeText={(val) => setText(val)}
        />
        <Text style={{marginBottom: 10}}></Text>
        <TextInput
          placeholder="...  ?"
          value={text}
          onChangeText={(val) => setText(val)}
        />
        <Text style={{marginBottom: 10}}></Text>
        <TextInput
          placeholder="...  ?"
          value={text}
          onChangeText={(val) => setText(val)}
        />
        <Button text="Tap me" status="info" onPress={() => console.log('Button Tapped')} />
        {/* This text using ubuntu font */}
        {/*<Text fontWeight="bold">This is the second screen</Text>*/}
        </SectionContent>
        </Section>
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
