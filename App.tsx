import {
  View, Text, Image, StyleSheet, TouchableOpacity,
  SafeAreaView, StatusBar,
} from "react-native";

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <View>
          <Image />
          <Text>McDonald's</Text>
        </View>
        <View>
          <Text>Seja Bem-Vindo</Text>
          <Text>Escolha como prefere aproveitar sua refeição. Estamos aqui para
            oferecer praticidade e sabor em cada detalhe!
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <View>
              <MaterialCommunityIcons
              name="hamburger"
              />
            </View>
            <View>
              <Text>Para comer aqui!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Feather name="shopping-bag"/>
            </View>
          </TouchableOpacity>
          <View>
            <Text>Para levar!</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  SafeArea: {

  },
  container: {

  },
  header: {

  },
  logo: {

  },
  brandName: {

  },
  title: {

  },
  subtitle: {

  },
  cardsRow: {

  },
  card: {

  },
  iconCircle: {

  },
  cardLabelPill: {

  },
  cardLabel: {

  },
});