import { Bookmark } from '@types';
import React, { FC } from 'react';
import * as S from './BookmarkItem.styles';
import { getFaviconUrl } from '@utils/common.utils';

type Props = {
  item: Bookmark.Item;
};

const BookmarkItem: FC<Props> = ({ item }) => {
  const { name, url, description } = item;

  const favicon = getFaviconUrl(url);

  const handleClick = () => {
    alert('go to ' + url);
  };

  return (
    <S.Container>
      <S.ItemContainer onClick={handleClick} title={description}>
        <S.Favicon src={favicon} />
        <S.Name>{name}</S.Name>
      </S.ItemContainer>
    </S.Container>
  );
};

export default BookmarkItem;
