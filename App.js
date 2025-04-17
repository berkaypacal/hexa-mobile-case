import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import AppNavigator from "./src/navigation/AppNavigator";
export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope: require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-ExtraBold": require("./assets/fonts/Manrope-ExtraBold.ttf"),
  });

  if (!fontsLoaded) return null;

  SplashScreen.hideAsync();

  return <AppNavigator />;
}
