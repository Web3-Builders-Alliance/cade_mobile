import "../global.css";
import {
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { clusterApiUrl } from "@solana/web3.js";
import { useColorScheme } from "@/src/components/useColorScheme";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ConnectionProvider } from "../Utils/ConnectionProvider";
import { AuthorizationProvider } from "../Utils/AuthorizationProvider";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    // ...FontAwesome.font,
  });
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const DEVNET_ENDPOINT = clusterApiUrl("devnet");
  const colorScheme = useColorScheme();

  return (
    <ConnectionProvider
      config={{ commitment: "processed" }}
      endpoint={DEVNET_ENDPOINT}
    >
      <AuthorizationProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <ThemeProvider
              value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
              </Stack>
            </ThemeProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </AuthorizationProvider>
    </ConnectionProvider>
  );
}
