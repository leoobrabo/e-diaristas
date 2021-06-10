import React from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./UserInformation.style";

const UserInformation = (props) => {
  return (
    <UserInformationContainer>
      <AvatarStyled />
      <UserName>Leonardo</UserName>
      <RatingStyled />
      <UserDescription />
    </UserInformationContainer>
  );
};

export default UserInformation;
