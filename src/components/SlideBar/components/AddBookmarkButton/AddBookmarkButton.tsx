import { CreateBookmarkPopup, Font, Icon } from '@components';
import { useBookmarkStore } from '@store/bookmark.store';
import * as S from './AddBookmarkButton.styles';

const AddBookmarkButton = () => {
  const folders = useBookmarkStore((s) => s.bookmarks);
  return (
    <S.Container>
      <S.ButtonContainer onClick={() => CreateBookmarkPopup.show({ folders })}>
        <Icon name="icon_plus" size={17} color="white" />
        <Font size={14} color="#ffffff">
          북마크 추가
        </Font>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default AddBookmarkButton;
