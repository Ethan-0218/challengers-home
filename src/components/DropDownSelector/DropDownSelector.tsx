import { Font, Icon } from '@components';
import { useState } from 'react';
import * as S from './DropDownSelector.styles';

type Props<T> = {
  options: T[];
  selectedOption?: T;
  label: string;
  keyExtractor: (option: T) => string;
  printSelectedOption: (option: T) => string;
  printOptionItem: (option: T) => string;
  onSelect: (option: T) => void;
};

const DropDownSelector = <T extends any>(props: Props<T>) => {
  const {
    options,
    selectedOption,
    label,
    printSelectedOption,
    keyExtractor,
    printOptionItem,
    onSelect,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((v) => !v);

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputContainer onClick={handleClick}>
        <Font size={16} color={selectedOption ? '#111111' : '#878787'}>
          {selectedOption
            ? `${printSelectedOption(selectedOption)}`
            : '폴더를 선택해주세요'}
        </Font>

        <Icon name="icon_down" size={24} />

        {isOpen && (
          <DropDownList
            options={options}
            onSelect={onSelect}
            keyExtractor={keyExtractor}
            printOptionItem={printOptionItem}
          />
        )}
      </S.InputContainer>
    </S.Container>
  );
};

export default DropDownSelector;

type DropDownListProps<T> = {
  options: T[];
  onSelect: (option: T) => void;
  keyExtractor: (option: T) => string;
  printOptionItem: (option: T) => string;
};
const DropDownList = <T extends any>(props: DropDownListProps<T>) => {
  const { options, onSelect, keyExtractor, printOptionItem } = props;
  return (
    <S.ListContainer>
      {options.map((o) => (
        <S.ListItem key={keyExtractor(o)} onClick={() => onSelect(o)}>
          {printOptionItem(o)}
        </S.ListItem>
      ))}
    </S.ListContainer>
  );
};
