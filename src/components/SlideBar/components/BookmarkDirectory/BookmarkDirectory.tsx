import { Bookmark } from '@types';
import React, { FC, useState } from 'react';
import * as S from './BookmarkDirectory.styles';
import { Icon } from '@components';
import BookmarkItem from '../BookmarkItem/BookmarkItem';

type Props = {
  item: Bookmark.Directory;
};

const BookmarkDirectory: FC<Props> = ({ item }) => {
  const { emoji, name, bookmarks } = item;

  const [isOpened, setIsOpened] = useState(true);

  return (
    <S.Container>
      <S.Header>
        <Icon name="icon_down" size={22} />
        <S.Emoji>{emoji}</S.Emoji>
        <S.Name>{name}</S.Name>
      </S.Header>
      {isOpened && bookmarks.map((b) => <BookmarkItem item={b} key={b.id} />)}
    </S.Container>
  );
};

export default BookmarkDirectory;
