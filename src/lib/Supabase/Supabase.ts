import { createClient } from '@supabase/supabase-js';
import { Bookmark, MainMessage, Meal, Schedule } from '@types';
import { startOfDay } from 'date-fns';
import { Database } from './supabase.types';
import {
  isBookmarkFolder,
  structBookmarkRow,
  structBookmarkTree,
} from './supabase.utils';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

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
    id: d.id,
    type: d.type as Meal.Type,
    main: d.main?.split(',') || [],
    sub: d.sub?.split(',') || [],
    serveAt: new Date(d.serve_at),
  }));
  return { meals };
};

export const addMealItem = async (
  meal: Pick<Meal.Info, 'main' | 'sub' | 'serveAt'>,
) => {
  const { error } = await supabase.from('meal_menu').insert({
    type: 'LUNCH',
    main: meal.main.join(','),
    sub: meal.sub.join(','),
    serve_at: meal.serveAt.toISOString(),
  });
  return !error;
};

export const editMealItem = async (meal: Meal.Info) => {
  const { error } = await supabase
    .from('meal_menu')
    .update({
      type: 'LUNCH',
      main: meal.main.join(','),
      sub: meal.sub.join(','),
    })
    .eq('id', meal.id);
  return !error;
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

export const addSchedule = async (schedule: Omit<Schedule.Info, 'id'>) => {
  const { error } = await supabase.from('schedule').insert({
    title: schedule.title,
    description: schedule.description,
    start_at: schedule.startAt.toISOString(),
    end_at: schedule.endAt.toISOString(),
    type: schedule.type,
  });

  return !error;
};

export const editSchedule = async (
  id: number,
  schedule: Partial<Omit<Schedule.Info, 'id'>>,
) => {
  const { error } = await supabase
    .from('schedule')
    .update({
      title: schedule.title,
      description: schedule.description,
      start_at: schedule.startAt?.toISOString(),
      end_at: schedule.endAt?.toISOString(),
      type: schedule.type,
    })
    .eq('id', id);

  return !error;
};

export const deleteSchedule = async (id: number) => {
  const { error } = await supabase.from('schedule').delete().eq('id', id);
  return error ? null : id;
};

export const getBookmarkList = async (): Promise<Bookmark.Folder[]> => {
  const { data } = await supabase.from('bookmark').select(`*`);
  return data ? structBookmarkTree(data) : [];
};

export const getBookmarkFolderList = async (): Promise<Bookmark.Folder[]> => {
  const { data } = await supabase
    .from('bookmark')
    .select(`*`)
    .eq('type', 'folder');
  return (data || []).map(structBookmarkRow).filter(isBookmarkFolder);
};

export const addBookmark = async (
  bookmark: Omit<Bookmark.Item, 'id' | 'type'>,
  folderId: string,
) => {
  const { title, url, description } = bookmark;
  const { error } = await supabase.from('bookmark').insert({
    title,
    type: 'item',
    parent_id: Number(folderId),
    value: url,
    description,
  });
  return !error;
};

export const addBookmarkFolder = async (
  folder: Pick<Bookmark.Folder, 'title' | 'emoji'>,
) => {
  const { error } = await supabase.from('bookmark').insert({
    title: folder.title,
    type: 'folder',
    value: folder.emoji,
  });
  return !error;
};

export const getMainMessage = async (): Promise<MainMessage.Info | null> => {
  const { data } = await supabase
    .from('main_message')
    .select('*')
    .order('id', { ascending: false })
    .limit(1);
  const m = data && data[0];
  if (!m) return null;
  return {
    id: m.id,
    createdAt: new Date(m.created_at),
    text: m.text,
    userId: m.user_id,
  };
};

export const addMainMessage = async (m: Pick<MainMessage.Info, 'text'>) => {
  const { error } = await supabase.from('main_message').insert({
    text: m.text,
  });
  return !error;
};

export const parseMenuByImage = async (imageFile: File): Promise<Meal.Info[]|null> => {
  const {data, error} = await supabase.functions.invoke('menu-detect', {
    method: 'POST',
    body: imageFile
  })

  if (error) {
    console.error(error)
    return null
  }

  return data.menus.map((m: any):Omit<Meal.Info, 'id'> => {
    const date = Number(m.date.split('-')[2])
    const serveAt = new Date()
    serveAt.setDate(date)
    
    return {
      type: 'LUNCH',
      main: m.mainMenu,
      sub: m.subMenu,
      serveAt: startOfDay(serveAt) 
    }
  })
}