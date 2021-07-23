import React from 'react';
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';
import DiscordImg from '../../assets/discord.png'

type Props = TouchableOpacityProps & {
  title: string;
}

const ButtonIcon = ({ title, ...rest }: Props) => { //Pegamos o resto das propriedades
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export { ButtonIcon };