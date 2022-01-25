import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import { NavigationTheme } from "ui/themes/app-theme";
import Index from "pages";
import EncontrarDiaristas from "pages/encontrar-diarista";
import Logo from "@assets/img/logos/e-diaristas-logo.png";

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name={"Index"}
          component={Index}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{
                  width: 150,
                  height: 50,
                  resizeMode: "contain",
                }}
                source={Logo}
              />
            ),
          }}
        />
      </Stack.Navigator>

      <Stack.Screen
        name={"EncontrarDiaristas"}
        component={EncontrarDiaristas}
        options={{
          title: "Encontrar Diaristas",
        }}
      />
    </NavigationContainer>
  );
};

export default Routes;