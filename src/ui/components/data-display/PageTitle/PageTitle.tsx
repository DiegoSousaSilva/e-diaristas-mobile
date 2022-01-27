import React from "react";

import * as S from "./PageTitle.style";

export interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <S.PageTitleContainer>
      <S.PageTitleStyled>{title}</S.PageTitleStyled>
      <S.PageSubtitleStyled>{subtitle}</S.PageSubtitleStyled>
    </S.PageTitleContainer>
  );
};

export default PageTitle;
