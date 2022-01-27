import React, { useState } from "react";
import { ScrollView } from "react-native";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import TextInput from "ui/components/inputs/TextInput/TextInput";
import { TextInputMask } from "react-native-masked-text";
import Button from "ui/components/inputs/Button/Button";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import {
  ErrorText,
  FormContainer,
  ResponseContainer,
  TextContainer,
} from "@styles/pages/encontar-diarista.style";
import { useTheme } from "@emotion/react";
import useIndex from "data/hooks/pages/useIndex.page";

const EncontrarDiaristas: React.FC = () => {
  const { colors } = useTheme();
  const {
    cep,
    setCep,
    cepValido,
    searchProfessionals,
    error,
    diarist,
    searched,
    loading,
    diaristRemainder,
  } = useIndex();

  return (
    <ScrollView>
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua região"
        }
      />
      <FormContainer>
        <TextInputMask
          value={cep}
          onChangeText={setCep}
          type={"custom"}
          options={{
            mask: "99.999-999",
          }}
          customTextInput={TextInput}
          customTextInputProps={{
            label: "Digite seu CEP",
          }}
        />

        {error ? <ErrorText>{error}</ErrorText> : null}

        <Button
          mode={"contained"}
          style={{ marginTop: 32 }}
          color={colors.accent}
          disabled={!cepValido || loading}
          onPress={() => searchProfessionals(cep)}
          loading={loading}
        >
          Buscar
        </Button>
      </FormContainer>

      {searched &&
        (diarist.length > 0 ? (
          <ResponseContainer>
            {diarist.map((item, index) => (
              <UserInformation
                name={item.nome_completo}
                rating={item.reputacao || 0}
                picture={item.foto_usuario || ""}
                description={item.cidade}
                darker={index % 2 === 1}
              />
            ))}
            {diaristRemainder > 0 && (
              <TextContainer>
                ...e mais {diaristRemainder}{" "}
                {diaristRemainder > 1
                  ? "profissionais atendem "
                  : "profissional atende "}
                ao seu endereço.
              </TextContainer>
            )}
            <Button mode={"contained"} color={colors.accent}>
              Contratar um Profissional
            </Button>
          </ResponseContainer>
        ) : (
          <TextContainer>
            Ainda não temos nenhuma diarista disponível em sua região :(
          </TextContainer>
        ))}
    </ScrollView>
  );
};

export default EncontrarDiaristas;
