import ToggleObserver from '@lib/ToggleObserver';
import Clickable from '../../../Clickable/Clickable';
import Icon from '../../../Icon/Icon';
import * as S from './Header.styles';

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
        <Icon name="icon_challengers" size={27} />
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
