import React from 'react';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.Container>
      <S.Left>
        <S.Profile src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_org.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90" />
        <S.Nicname>IU</S.Nicname>
      </S.Left>
    </S.Container>
  );
};

export default Header;
