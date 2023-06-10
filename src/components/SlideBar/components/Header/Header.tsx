import React from 'react';
import * as S from './Header.styles';
import Icon from '../../../Icon/Icon';
import Clickable from '../../../Clickable/Clickable';
import ToggleObserver from '../../../../lib/ToggleObserver';

const Header = () => {
  const handleClickModify = () => {
    alert('수정하기');
  };

  const handleClickShare = () => {
    alert('공유하기');
  };

  return (
    <S.Container>
      <S.Left>
        <S.Profile src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_org.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90" />
        <Clickable onClick={handleClickModify}>
          <Icon name="icon_pencil" size={24} />
        </Clickable>
        <Clickable onClick={handleClickShare}>
          <Icon name="icon_share" size={24} />
        </Clickable>
      </S.Left>

      <Clickable onClick={ToggleObserver.close}>
        <Icon name="icon_close" size={24} />
      </Clickable>
    </S.Container>
  );
};

export default Header;
