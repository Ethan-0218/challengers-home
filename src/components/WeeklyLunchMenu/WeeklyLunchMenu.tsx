import { useWeeklyLunchMenu } from '@queries/useWeeklyLunchMenu';
import { getDaysInThisWeek } from '@utils/date.utils';
import { isSameDay } from 'date-fns';
import Font from '../Font/Font';
import * as S from './WeeklyLunchMenu.styles';
import MenuItem from './components/MenuItem/MenuItem';
import MenuUploadButton from './components/MenuUploadButton/MenuUploadButton';

const LunchMenu = () => {
  const days = getDaysInThisWeek(new Date());
  const { data: meals = [] } = useWeeklyLunchMenu();

  return (
    <S.Container>
      <S.Header>
        <Font
          family="Montserrat"
          size={18}
          weight={700}
          style={{ margin: '4px 0 ' }}
        >
          Lunch
        </Font>
        <MenuUploadButton />
      </S.Header>

      {days.map((d) => (
        <MenuItem
          key={d.toISOString()}
          date={d}
          meal={meals.find((m) => isSameDay(m.serveAt, d))}
        />
      ))}
    </S.Container>
  );
};

export default LunchMenu;
