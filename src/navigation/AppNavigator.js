import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InputScreen from "../screens/InputScreen";
import OutputScreen from "../screens/OutputScreen";
import { StatusBar } from "expo-status-bar";
import CustomHeader from "../components/common/CustomHeader";
import { strings } from "../constants/strings";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator initialRouteName="Input">
        <Stack.Screen
          name="Input"
          component={InputScreen}
          options={{
            header: () => (
              <CustomHeader title={strings.aiLogoHeader} fontSize={17} center />
            ),
          }}
        />
        <Stack.Screen
          name="Output"
          component={OutputScreen}
          options={({ navigation }) => ({
            animation: "slide_from_bottom",
            animationDuration: 400,
            header: () => (
              <CustomHeader
                title={strings.yourDesignHeader}
                fontSize={22}
                onClose={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
