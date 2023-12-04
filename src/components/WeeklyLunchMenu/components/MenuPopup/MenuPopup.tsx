import { Meal } from '@types';
import { format } from 'date-fns';
import { useState } from 'react';
import MenuEditor from './MenuEditor/MenuEditor';
import * as S from './MenuPopup.styles';
import { Font, PopupManager } from '@components';
import { addMealItem, editMealItem } from '@lib/Supabase/Supabase';
import { useWeeklyLunchMenu } from '@queries/useWeeklyLunchMenu';

type Props = { defaultMeal?: Meal.Info; serveAt: Date };
const MenuPopup = (props: Props) => {
  const { defaultMeal, serveAt } = props;
  const { refetch } = useWeeklyLunchMenu();

  const [meal, setMeal] = useState<Pick<Meal.Info, 'main' | 'sub'>>(
    defaultMeal || {
      main: [],
      sub: [],
    },
  );

  const isCreate = !defaultMeal;

  const handleChangeMainMenus = (menus: string[]) =>
    setMeal((m) => ({ ...m, main: menus }));

  const handleChangeSubMenus = (menus: string[]) =>
    setMeal((m) => ({ ...m, sub: menus }));

  const handleCancel = () => PopupManager.close();

  const handleSave = async () => {
    if (isCreate) await addMealItem({ ...meal, serveAt });
    else await editMealItem({ ...defaultMeal, ...meal });
    refetch();
    PopupManager.close();
  };

  return (
    <S.Container>
      <S.PopupContainer onClick={(e) => e.stopPropagation()}>
        <Font size={20} weight={700} color="#111">
          [{format(serveAt, 'M월 d일')}] 메뉴 {isCreate ? '추가' : '수정'}
        </Font>

        <S.EditorContainer>
          <MenuEditor
            label="메인 메뉴"
            fontColor="#ff9900"
            menus={meal.main}
            autoFocus
            onChange={handleChangeMainMenus}
          />
          <MenuEditor
            label="서브 메뉴"
            fontColor="#4e4e4e"
            menus={meal.sub}
            onChange={handleChangeSubMenus}
          />
        </S.EditorContainer>

        <S.ButtonContainer>
          <S.CancelButton onClick={handleCancel}>
            <Font size={16} weight={600} color="#222">
              취소
            </Font>
          </S.CancelButton>
          <S.SaveButton onClick={handleSave}>
            <Font size={16} weight={600} color="#fff">
              완료
            </Font>
          </S.SaveButton>
        </S.ButtonContainer>
      </S.PopupContainer>
    </S.Container>
  );
};

export default MenuPopup;
MenuPopup.WIDTH = S.WIDTH;
MenuPopup.HEIGHT = S.HEIGHT;
