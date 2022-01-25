import React from "react";
import { View, Text } from "react-native";
import Button from "ui/components/inputs/Button/Button";

// import { Container } from './styles';

const Index: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button mode={"contained"} onPress={() => {}}>
        Encontrar Diaristas
      </Button>
    </View>
  );
};

export default Index;
