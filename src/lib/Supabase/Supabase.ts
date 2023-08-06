import { createClient } from '@supabase/supabase-js';
import { Database } from './supabase.types';
import { Meal, Schedule } from '@types';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY || '';

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export const getMealList = async (
  startDate: Date,
  endDate: Date,
): Promise<{ meals: Meal.Info[] }> => {
  const { data } = await supabase
    .from('meal_menu')
    .select('*')
    .gte('serve_at', startDate.toISOString())
    .lte('serve_at', endDate.toISOString());
  const meals: Meal.Info[] = (data || []).map((d) => ({
    type: d.type as Meal.Type,
    main: d.main?.split(',') || [],
    sub: d.sub?.split(',') || [],
    serveAt: new Date(d.serve_at),
  }));
  return { meals };
};

export const getScheduleList = async (
  startAt: Date,
  endAt: Date,
): Promise<{ schedules: Schedule.Info[] }> => {
  const { data } = await supabase
    .from('schedule')
    .select('*')
    .gte('start_at', startAt.toISOString())
    .lte('start_at', endAt.toISOString());
  const schedules: Schedule.Info[] = (data || []).map((d) => ({
    id: d.id,
    title: d.title,
    description: d.description,
    startAt: new Date(d.start_at),
    endAt: new Date(d.end_at),
    type: d.type as Schedule.Type,
  }));
  return { schedules };
};
