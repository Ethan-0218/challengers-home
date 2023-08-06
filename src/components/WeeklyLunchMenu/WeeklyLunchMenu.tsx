import { getDaysInThisWeek } from '@utils/date.utils';
import Font from '../Font/Font';
import * as S from './WeeklyLunchMenu.styles';
import MenuItem from './components/MenuItem/MenuItem';

const LunchMenu = () => {
  const days = getDaysInThisWeek(new Date());

  return (
    <S.Container>
      <Font
        family="Montserrat"
        size={18}
        weight={700}
        style={{ margin: '4px 0 ' }}
      >
        Lunch
      </Font>
      {days.map((d) => (
        <MenuItem key={d.toISOString()} date={d} />
      ))}
    </S.Container>
  );
};

export default LunchMenu;
