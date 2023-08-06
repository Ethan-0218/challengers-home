import { createClient } from '@supabase/supabase-js';
import { Database } from './supabase.types';
import { Meal } from '@types';

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
