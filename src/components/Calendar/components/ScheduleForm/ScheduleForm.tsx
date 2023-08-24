import { Schedule } from '@types';
import {
  FORM_HEIGHT,
  FORM_WIDTH,
  OPTION_LABEL_LIST,
  OPTION_LIST,
} from './ScheduleForm.constants';
import * as S from './ScheduleForm.styles';
import TextInput from '../../../TextInput/TextInput';
import { useState } from 'react';
import { endOfDay, format, startOfDay } from 'date-fns';
import Font from '../../../Font/Font';
import DropDownSelector from '../../../DropDownSelector/DropDownSelector';
import { useScheduleList } from '@queries/useScheduleList';
import { getFirstAndLastDayInCalanderMonth } from '@utils/date.utils';
import { useCalendarStore } from '@store/calendar.store';
import { Supabase } from '@lib/Supabase';
import PopupManager from '../../../PopupManager/PopupManager';

type Props = ({ mode: 'add' } | { mode: 'edit'; schedule: Schedule.Info }) & {
  date: Date;
};

const ScheduleForm = (props: Props) => {
  const currentMonth = useCalendarStore((s) => s.currentMonth);
  const { firstDay, lastDay } = getFirstAndLastDayInCalanderMonth(currentMonth);
  const { refetch } = useScheduleList({
    startAt: firstDay,
    endAt: lastDay,
  });

  const [form, setForm] = useState<Omit<Schedule.Info, 'id'>>(
    getInitialForm(props),
  );

  const handleSave = async () => {
    if (props.mode === 'add') {
      if (await Supabase.addSchedule(form)) {
        refetch();
        PopupManager.close();
      }
      return;
    }

    if (props.mode === 'edit') {
      if (await Supabase.editSchedule(props.schedule.id, form)) {
        refetch();
        PopupManager.close();
      }
    }
  };

  return (
    <S.Container onClick={(e) => e.stopPropagation()}>
      <Font size={20}>{format(props.date, 'M월 d일')}</Font>
      <S.InputContainer>
        <TextInput
          label="제목"
          value={form.title}
          onChangeText={(v) => setForm((f) => ({ ...f, title: v }))}
        />
        <TextInput
          label="설명"
          value={form.description || ''}
          onChangeText={(v) => setForm((f) => ({ ...f, description: v }))}
        />
        <DropDownSelector
          label="타입"
          options={OPTION_LIST}
          selectedOption={form.type}
          keyExtractor={(o) => o}
          printSelectedOption={(o) => OPTION_LABEL_LIST[o]}
          printOptionItem={(o) => OPTION_LABEL_LIST[o]}
          onSelect={(o) => setForm((f) => ({ ...f, type: o }))}
        />
      </S.InputContainer>

      <S.Row>
        <S.CancelButton onClick={PopupManager.close}>취소</S.CancelButton>
        <S.SaveButton onClick={handleSave}>저장</S.SaveButton>
      </S.Row>
    </S.Container>
  );
};

const getInitialForm = (props: Props): Omit<Schedule.Info, 'id'> => {
  if (props.mode === 'add') {
    return {
      type: 'MEETING',
      title: '',
      description: null,
      startAt: startOfDay(props.date),
      endAt: endOfDay(props.date),
    };
  }
  return props.schedule;
};

export default ScheduleForm;
ScheduleForm.WIDTH = FORM_WIDTH;
ScheduleForm.HEIGHT = FORM_HEIGHT;
