import React from 'react';
import * as S from './MenuUploadPopup.styles';
import MenuImage from './components/MenuImage/MenuImage';
import MenuEditor from './components/MenuEditor/MenuEditor';

const MenuUploadPopup = () => {
  const [image, setImage] = React.useState<File | null>(null);

  return (
    <S.Container onClick={(e) => e.stopPropagation()}>
      <MenuImage image={image} setImage={setImage} />
      <MenuEditor image={image} />
    </S.Container>
  );
};

export default MenuUploadPopup;
MenuUploadPopup.WIDTH = S.WIDTH;
MenuUploadPopup.HEIGHT = S.HEIGHT;
