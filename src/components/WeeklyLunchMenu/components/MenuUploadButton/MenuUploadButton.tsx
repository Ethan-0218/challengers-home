import Font from '../../../Font/Font';
import PopupManager from '../../../PopupManager/PopupManager';
import MenuUploadPopup from '../MenuUploadPopup/MenuUploadPopup';
import * as S from './MenuUploadButton.styles';

const MenuUploadButton = () => {
  const handleClick = () => {
    PopupManager.show({
      Component: <MenuUploadPopup />,
      width: MenuUploadPopup.WIDTH,
      height: MenuUploadPopup.HEIGHT,
    });
  };

  return (
    <S.Container onClick={handleClick}>
      <Font family="Montserrat" size={16} weight={700} color="#333">
        이미지로 업로드
      </Font>
      <Font
        family="Pretendard"
        size={14}
        color="#338192"
        style={{ marginLeft: 4, marginTop: 2, fontStyle: 'italic' }}
      >
        Beta
      </Font>
    </S.Container>
  );
};

export default MenuUploadButton;
