import { Bookmark } from '@types';
import React, { FC, useState } from 'react';
import * as S from './BookmarkItem.styles';
import { getFaviconUrl } from '@utils/common.utils';

type Props = {
  item: Bookmark.Item;
};

const BookmarkItem: FC<Props> = ({ item }) => {
  const { title, url, description } = item;
  const [index, setIndex] = useState(0);

  const favicon = getFaviconUrl(url)[index];

  const handleClick = () => {
    window.location.href = url;
  };

  if (!item.url.startsWith('http')) return <></>;
  return (
    <S.Container>
      <S.ItemContainer onClick={handleClick} title={description}>
        {favicon && (
          <S.Favicon src={favicon} onError={() => setIndex((i) => i + 1)} />
        )}
        <S.Name>{title}</S.Name>
      </S.ItemContainer>
    </S.Container>
  );
};

export default BookmarkItem;
