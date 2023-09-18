import ToggleObserver from '@lib/ToggleObserver';
import Clickable from '../../../Clickable/Clickable';
import Icon from '../../../Icon/Icon';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.Container>
      <S.Left>
        <Icon name="icon_challengers" size={27} />
      </S.Left>

      <Clickable onClick={ToggleObserver.close}>
        <Icon name="icon_close" size={24} />
      </Clickable>
    </S.Container>
  );
};

export default Header;
