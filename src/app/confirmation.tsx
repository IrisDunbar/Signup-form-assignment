import { styles } from "@/constants/styles";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { name } = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.confirmationPage}>
      <View style={styles.confirmationContainer}>
        <Text style={styles.title}>Account created for {name}!</Text>
      </View>
    </SafeAreaView>
  );
}
