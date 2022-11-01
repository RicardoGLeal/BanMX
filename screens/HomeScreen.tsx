import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text>Hola mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
