import { useState, useEffect } from "react";
import { View, Alert, ImageBackground, StyleSheet } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Layout, Text, Button, TextInput, Section, SectionContent, Avatar } from "react-native-rapi-ui";
import { supabase } from "../initSupabase";
import { Session } from '@supabase/supabase-js'

export default function Account({ session }: { session: Session }) {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');

  useEffect(() => {
    if (session) getProfile()
  }, [session])
  
  async function getProfile() {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      let { data, error, status } = await supabase
      .from('profiles')
      .select(`name, number, city, district`)
      .eq('id', session?.user.id)
      .single()
    if (error && status !== 406) {
      throw error
    }
    if (data) {
      setName(data.name)
      setNumber(data.number)
      setCity(data.city)
      setDistrict(data.district)
    }
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert(error.message)
    }
  } finally {
    setLoading(false)
  }
}
async function updateProfile({
  name,
  number,
  city,
  district,
}: {
  name: string
  number: string
  city: string
  district: string
}) {
  try {
    setLoading(true)
    if (!session?.user) throw new Error('No user on the session!')

    const updates = {
      id: session?.user.id,
      updated_at: new Date(),
      name,
      number,
      city,
      district,
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) {
      throw error
    }
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert(error.message)
    }
  } finally {
    setLoading(false)
  }
}

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
        <Text><h2>Perfil</h2></Text>
        <Section style={{ marginTop: 20 }}>
          <SectionContent>
            <div className="form-widget">
              <Avatar 
              source={{ uri: 'https://st2.depositphotos.com/4164031/6914/i/950/depositphotos_69145633-stock-photo-flag-of-brazil.jpg' }}
              size="xl"
              shape="round"
              />
            </div>
        <Text style={{marginBottom: 10}}></Text>
        <TextInput 
        placeholder="Email..." 
        value={session?.user?.email} />
        <Text style={{marginBottom: 10}}></Text>
        <TextInput
          placeholder="Nome..."
          value={name || ''}
          onChangeText={(text) => setName(text)}
        />
        <Text style={{marginBottom: 10}}></Text>
        
        <TextInput
          placeholder="Telefone..."
          value={number || ''}
          onChangeText={(text) => setNumber(text)}
        />
        <Text style={{marginBottom: 10}}></Text>
        <TextInput
          placeholder="Cidade..."
          value={city || ''}
          onChangeText={(text) => setCity(text)}
        />
        <Text style={{marginBottom: 10}}></Text>
        <TextInput
          placeholder="Bairro..."
          value={district || ''}
          onChangeText={(text) => setDistrict(text)}
        />
        <Button
              text="Update"
              onPress={() => updateProfile({ name, number, city, district })
            }
              style={{
                marginTop: 10,
              }}
            />
        <Button 
              status="danger"
              text="Logout"
              onPress={async () => {
                const { error } = await supabase.auth.signOut();
                if (!error) {
                  alert("Signed out!");
                }
                if (error) {
                  alert(error.message);
                }
              }}
              style={{
                marginTop: 10,
              }}
            />
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
