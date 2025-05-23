import * as S from './styles';

type DeleteModalProps = {
  title?: string;
  message?: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
};

export const DeleteModal = ({
  title = 'Excluir item',
  message = 'Tem certeza que deseja excluir este item?',
  isOpen,
  onClose,
  onConfirm,
  confirmText = 'Excluir',
  cancelText = 'Cancelar',
}: DeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <S.Overlay>
      <S.Content>
        <h2>{title}</h2>
        <p>{message}</p>
        <S.Actions>
          <button onClick={onClose}>{cancelText}</button>
          <button onClick={onConfirm}>{confirmText}</button>
        </S.Actions>
      </S.Content>
    </S.Overlay>
  );
};
