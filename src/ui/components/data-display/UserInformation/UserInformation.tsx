import React from "react";
import { Avatar } from "react-native-paper";

import * as S from "./UserInformation.style";

export interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description: string;
  darker?: boolean;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
  return (
    <S.UserInformationContainer darker={Boolean(props.darker)}>
      <Avatar.Image source={{ uri: props.picture }} />
      <S.InformationContainer>
        <S.UserName>{props.name}</S.UserName>
        <S.RatingStyled defaultRating={props.rating} />
        <S.UserDescription>{props.description}</S.UserDescription>
      </S.InformationContainer>
    </S.UserInformationContainer>
  );
};

export default UserInformation;
