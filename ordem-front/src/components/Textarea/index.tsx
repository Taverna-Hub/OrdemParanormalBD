import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import * as S from './styles';

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  disabled?: boolean;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ label, error, name, disabled = false, onInputChange, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onInputChange) onInputChange(event.target.value);
      if (props.onChange) props.onChange(event);
    };

    return (
      <S.Wrapper disabled={disabled} error={!!error}>
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.TextareaWrapper>
          <S.Textarea
            disabled={disabled}
            ref={ref}
            onChange={handleChange}
            name={name}
            {...(label ? { id: name } : {})}
            {...props}
          />
        </S.TextareaWrapper>
        {!!error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    );
  },
);
