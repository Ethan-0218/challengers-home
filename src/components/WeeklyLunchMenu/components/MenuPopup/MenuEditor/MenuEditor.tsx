import { Font, Icon } from '@components';
import { FC, KeyboardEventHandler, useRef } from 'react';
import * as S from './MenuEditor.styles';

type Props = {
  label: string;
  menus: string[];
  fontColor: string;
  autoFocus?: boolean;
  onChange: (menus: string[]) => void;
};
const MenuEditor: FC<Props> = (props) => {
  const { label, menus, fontColor, autoFocus, onChange } = props;
  const ref = useRef<HTMLInputElement>(null);

  const handlePressEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      const value = ref.current?.value;
      if (!value) return;
      onChange([...menus, value]);
      ref.current!.value = '';
    }
  };

  const handleDelete = (m: string) =>
    onChange(menus.filter((menu) => menu !== m));

  return (
    <S.Container onClick={() => ref.current?.focus()}>
      <Font size={18} weight={600}>
        {label}
      </Font>
      <S.InputContainer>
        {menus.map((m) => (
          <S.MenuContainer
            key={m}
            color={fontColor}
            onClick={() => handleDelete(m)}
          >
            <Font size={14} weight={600} color={fontColor}>
              {m}
            </Font>
            <Icon name="icon_close" size={14} />
          </S.MenuContainer>
        ))}
        <S.Input
          ref={ref}
          autoFocus={autoFocus}
          placeholder="메뉴를 입력하고 Enter를 눌러주세요"
          onKeyDown={handlePressEnter}
        />
      </S.InputContainer>
    </S.Container>
  );
};

export default MenuEditor;
