import React, { FC, useEffect, useState } from 'react';
import * as S from './MenuEditor.styles';
import Font from '../../../../../Font/Font';
import { Meal } from '@types';
import { Supabase } from '@lib/Supabase';
import loading_gif from './loading.gif';
import MenuItemEditor from '../../../MenuPopup/MenuEditor/MenuEditor';
import { format } from 'date-fns';
import PopupManager from '../../../../../PopupManager/PopupManager';

type Props = {
  image: File | null;
};
const MenuEditor: FC<Props> = ({ image }) => {
  const [menus, setMenus] = React.useState<Omit<Meal.Info, 'id'>[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    for (const menu of menus) {
      // await Supabase.addMealItem(menu);
    }
  };

  useEffect(() => {
    if (!image) return;
    setIsLoading(true);
    Supabase.parseMenuByImage(image).then((menus) => {
      setIsLoading(false);
      if (menus) setMenus(menus);
    });
  }, [image]);

  if (!image) return <NoImageMessage />;
  if (isLoading) return <Loading />;
  return (
    <S.Container>
      <S.MenuContainer>
        {menus.map((menu, i) => (
          <MenuInput
            key={i}
            menu={menu}
            onChange={(menu) =>
              setMenus((prev) => prev.map((m, j) => (i === j ? menu : m)))
            }
          />
        ))}
      </S.MenuContainer>
      <S.ButtonContainer>
        <S.CancelButton onClick={PopupManager.close}>취소</S.CancelButton>
        <S.SaveButton onClick={handleSave}>저장</S.SaveButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default MenuEditor;

const NoImageMessage = () => (
  <S.MessageContainer>
    <Font family="Pretendard" size={18} color="#333">
      플레이팅 메뉴 이미지를 업로드해주세요
    </Font>
    <Font family="Pretendard" size={14} color="#666" style={{ marginTop: 8 }}>
      플레이팅 홈페이지에서 받은 사진으로 업로드하면
    </Font>
    <Font family="Pretendard" size={14} color="#666">
      더 정확하게 읽을 수 있어요
    </Font>
  </S.MessageContainer>
);

const Loading = () => (
  <S.MessageContainer>
    <S.LoadingImage src={loading_gif} />
  </S.MessageContainer>
);

type MenuInputProps = {
  menu: Omit<Meal.Info, 'id'>;
  onChange: (menu: Omit<Meal.Info, 'id'>) => void;
};
const MenuInput: FC<MenuInputProps> = ({ menu, onChange }) => {
  const handleChangeMainMenus = (main: string[]) => {
    onChange({ ...menu, main });
  };

  const handleChangeSubMenus = (sub: string[]) => {
    onChange({ ...menu, sub });
  };

  return (
    <>
      <Font family="Pretendard" size={24} weight={800} color="#333">
        {format(menu.serveAt, 'M월 d일')}
      </Font>
      <MenuItemEditor
        label="메인 메뉴"
        fontColor="#ff9900"
        menus={menu.main}
        autoFocus
        onChange={handleChangeMainMenus}
      />
      <MenuItemEditor
        label="서브 메뉴"
        fontColor="#4e4e4e"
        menus={menu.sub}
        onChange={handleChangeSubMenus}
      />
    </>
  );
};
