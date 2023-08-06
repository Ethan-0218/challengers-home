import { getDayLabel } from '@utils/date.utils';
import { format, isToday } from 'date-fns';
import { FC } from 'react';
import Font from '../../../Font/Font';
import * as S from './MenuItem.styles';

type Props = {
  date: Date;
};
const MenuItem: FC<Props> = ({ date }) => {
  const active = isToday(date);

  return (
    <S.Container active={active}>
      <S.DayBox>
        <Font
          size={16}
          color={active ? '#f90' : '#4e4e4e'}
          weight={active ? 700 : 600}
          family="Montserrat"
        >
          {format(date, 'dd')}
        </Font>
        <Font
          size={16}
          color={active ? '#f90' : '#4e4e4e'}
          weight={active ? 700 : 600}
          family="Montserrat"
        >
          {getDayLabel(date)}
        </Font>
      </S.DayBox>

      <S.Divider />

      <S.MenuBox>
        <Font size={14} weight={500} color="#5a5a5a">
          메인메뉴 메인메뉴
        </Font>
        <Font size={14} weight={500} color="#878787">
          그냥메뉴 그냥메뉴 그냥메뉴
        </Font>
      </S.MenuBox>
    </S.Container>
  );
};

export default MenuItem;
