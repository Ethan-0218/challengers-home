import { getDaysInThisWeek } from '@utils/date.utils';
import Font from '../Font/Font';
import * as S from './WeeklyLunchMenu.styles';
import MenuItem from './components/MenuItem/MenuItem';
import { useEffect, useState } from 'react';
import { Meal } from '@types';
import { Supabase } from '@lib/Supabase';
import { isSameDay } from 'date-fns';

const LunchMenu = () => {
  const days = getDaysInThisWeek(new Date());
  const [meals, setMeals] = useState<Meal.Info[]>([]);

  useEffect(() => {
    Supabase.getMealList(days[0], days[days.length - 1]).then(({ meals }) =>
      setMeals(meals),
    );
  }, []);

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
