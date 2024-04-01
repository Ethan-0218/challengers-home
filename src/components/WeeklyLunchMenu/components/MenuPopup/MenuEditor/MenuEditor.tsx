import { Font, Icon } from '@components';
import { FC, KeyboardEventHandler, createRef, useMemo, useRef } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const refs = useMemo(
    () =>
      Array.from({ length: menus.length }).map(() =>
        createRef<HTMLSpanElement>(),
      ),
    [menus.length],
  );

  const handlePressEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      const value = inputRef.current?.value;
      if (!value) return;
      onChange([...menus, value]);
      inputRef.current!.value = '';
    }
  };

  const handleDelete = (m: string) =>
    onChange(menus.filter((menu) => menu !== m));

  const handleChangeMenu = (menu: string, i: number) => {
    onChange(menus.map((m, j) => (i === j ? menu : m)));
  };

  const handleKeyDown = (e: any, i: number) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      handleChangeMenu(e.target.innerText, i);
      if (i < menus.length - 1) {
        refs[i + 1].current?.focus();
      } else {
        inputRef.current?.focus();
      }
    }
  };

  return (
    <S.Container>
      <Font size={18} weight={600}>
        {label}
      </Font>
      <S.InputContainer>
        {menus.map((m, i) => (
          <S.MenuContainer key={m} color={fontColor}>
            <Font
              ref={refs[i]}
              contentEditable
              size={14}
              weight={600}
              color={fontColor}
              onKeyDown={(e: any) => handleKeyDown(e, i)}
              onBlur={(e: any) => handleChangeMenu(e.target.innerText, i)}
            >
              {m}
            </Font>
            <S.MenuRemoveButton onClick={() => handleDelete(m)}>
              <Icon name="icon_close" size={14} />
            </S.MenuRemoveButton>
          </S.MenuContainer>
        ))}
        <S.Input
          ref={inputRef}
          autoFocus={autoFocus}
          placeholder="메뉴를 입력하고 Enter를 눌러주세요"
          onKeyDown={handlePressEnter}
        />
      </S.InputContainer>
    </S.Container>
  );
};

export default MenuEditor;
