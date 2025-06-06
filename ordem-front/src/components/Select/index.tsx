import * as S from './styles';
import { Control, Controller } from 'react-hook-form';

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOptions[];
  label?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;

  isLoading?: boolean;
  placeholder?: string;
  onInputChange?: (value: string) => void;
  isMulti?: boolean;
  defaultValue?: SelectOptions;
};

export function Select({
  options,
  label,
  name,
  control,
  isLoading,
  placeholder,
  onInputChange,
  isMulti = false,
  defaultValue,
}: SelectProps) {
  return (
    <S.Wrapper>
      {!!label && <S.Label>{label}</S.Label>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <S.StyledSelect
            {...field}
            options={options}
            classNamePrefix="select"
            className="custom"
            isLoading={isLoading}
            placeholder={placeholder}
            onInputChange={onInputChange}
            isMulti={isMulti}
            defaultValue={defaultValue}
          />
        )}
      />
    </S.Wrapper>
  );
}
