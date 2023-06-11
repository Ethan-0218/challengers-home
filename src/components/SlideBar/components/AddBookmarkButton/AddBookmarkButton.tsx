import { CreateBookmarkPopup, Font } from '@components';
import * as S from './AddBookmarkButton.styles';

const AddBookmarkButton = () => {
  return (
    <S.Container>
      <S.ButtonContainer onClick={CreateBookmarkPopup.show}>
        <Font size={14} color="#ffffff">
          북마크 추가
        </Font>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default AddBookmarkButton;
