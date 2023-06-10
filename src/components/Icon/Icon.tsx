import React, { FC } from 'react';
import icon_close from './icons/icon_close.svg';
import icon_down from './icons/icon_down.svg';
import icon_eye_closed from './icons/icon_eye_closed.svg';
import icon_eye from './icons/icon_eye.svg';
import icon_folder_simple from './icons/icon_folder_simple.svg';
import icon_list from './icons/icon_list.svg';
import icon_menu from './icons/icon_menu.svg';
import icon_minus from './icons/icon_minus.svg';
import icon_note from './icons/icon_note.svg';
import icon_pencil from './icons/icon_pencil.svg';
import icon_plus from './icons/icon_plus.svg';
import icon_search from './icons/icon_search.svg';
import icon_share from './icons/icon_share.svg';
import icon_smile_face from './icons/icon_smile_face.svg';
import icon_star_filled from './icons/icon_star_filled.svg';
import icon_star_stroke from './icons/icon_star_stroke.svg';
import icon_users from './icons/icon_users.svg';

type Props = {
  name: keyof typeof ICONS;
  size: number;
};

const Icon: FC<Props> = ({ name, size }) => {
  const icon = ICONS[name];

  if (!icon) return <>no icon</>;
  return <img style={{ width: size, height: size }} src={icon} />;
};

export default Icon;

const ICONS = {
  icon_close,
  icon_down,
  icon_eye_closed,
  icon_eye,
  icon_folder_simple,
  icon_list,
  icon_menu,
  icon_minus,
  icon_note,
  icon_pencil,
  icon_plus,
  icon_search,
  icon_share,
  icon_smile_face,
  icon_star_filled,
  icon_star_stroke,
  icon_users,
} as const;
