import React from 'react';
import * as S from './MenuUploadButton.styles';
import Font from '../../../Font/Font';
import { Supabase } from '@lib/Supabase';

const MenuUploadButton = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const menus = await Supabase.parseMenuByImage(file);
    console.log(menus);
    inputRef.current!.value = '';
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
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </S.Container>
  );
};

export default MenuUploadButton;
