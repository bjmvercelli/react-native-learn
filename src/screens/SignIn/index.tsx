import React from "react"
import { Image, Text, View, StatusBar } from "react-native"
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles"
import illustrationImg from '../../assets/illustration.png';

const SignIn = () => {


  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={"light-content"} 
        backgroundColor="transparent" 
        translucent
      />

      <Image source={illustrationImg} style={styles.image} resizeMode="stretch"/>

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}
          suas jogatinas {'\n'} 
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7}/>
      </View>
    </View>
  )
}

export { SignIn }