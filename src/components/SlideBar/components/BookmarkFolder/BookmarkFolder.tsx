import { Bookmark } from '@types';
import React, { FC, useState } from 'react';
import * as S from './BookmarkFolder.styles';
import { Icon } from '@components';
import BookmarkItem from '../BookmarkItem/BookmarkItem';

type Props = {
  folder: Bookmark.Folder;
};

const BookmarkFolder: FC<Props> = ({ folder }) => {
  const { emoji, title, children } = folder;

  const [isOpened, setIsOpened] = useState(false);

  const handleClickHeader = () => setIsOpened((v) => !v);

  return (
    <S.Container>
      <S.Header onClick={handleClickHeader}>
        <Icon name={`icon_${isOpened ? 'up' : 'down'}`} size={22} />
        <S.Emoji>{emoji}</S.Emoji>
        <S.Name>{title}</S.Name>
      </S.Header>
      {isOpened && (
        <S.ListContainer>
          {children?.map((item) => {
            if (item.type === 'Folder')
              return <BookmarkFolder key={item.id} folder={item} />;
            return <BookmarkItem key={item.id} item={item} />;
          })}
        </S.ListContainer>
      )}
    </S.Container>
  );
};

export default BookmarkFolder;
