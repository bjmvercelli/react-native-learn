import React, { useState } from "react"
import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"

const SignIn = () => {

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>

      <TextInput style={styles.input} onChangeText={(value) => setText(value)} />

      <Text>
        Voce digitou: {text}
      </Text>
    </View>
  )
}

export { SignIn }