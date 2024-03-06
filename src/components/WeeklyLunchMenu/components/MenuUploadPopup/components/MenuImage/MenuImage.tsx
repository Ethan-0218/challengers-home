import React, { FC, useState } from 'react';
import Font from '../../../../../Font/Font';
import * as S from './MenuImage.styles';

type Props = {
  image: File | null;
  setImage: (image: File | null) => void;
};
const MenuImage: FC<Props> = ({ image, setImage }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [imageDataUrl, setImageDataUrl] = useState<any>();

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e?.target?.result) return;
      setImageDataUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <S.Container onClick={(e) => e.stopPropagation()}>
      {image ? (
        <S.Image
          src={imageDataUrl || 'https://via.placeholder.com/380x550'}
          alt="menu"
          onClick={handleClick}
        />
      ) : (
        <S.Button onClick={handleClick}>
          <Font family="Pretendard" size={16} color="#fff">
            이미지 업로드
          </Font>
        </S.Button>
      )}
      <input
        ref={inputRef}
        style={{ display: 'none' }}
        type="file"
        accept="image/jpeg"
        onChange={handleChangeFile}
      />
    </S.Container>
  );
};

export default MenuImage;
