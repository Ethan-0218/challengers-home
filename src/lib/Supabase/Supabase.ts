import { createClient } from '@supabase/supabase-js';
import { Database } from './supabase.types';
import { Bookmark, Meal, Schedule } from '@types';
import {
  isBookmarkFolder,
  structBookmarkRow,
  structBookmarkTree,
} from './supabase.utils';

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
