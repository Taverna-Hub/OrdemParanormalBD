import { useState, useRef, useEffect } from 'react';
import * as S from './styles';
import { FiCheck, FiChevronDown } from 'react-icons/fi';

interface StatusSelectorProps {
  initialStatus?: string;
  onStatusChange?: (statusId: string) => void;
}

const statusOptions = [
  { id: 'Aberta', label: 'Aberta', color: 'oklch(66.6% 0.179 58.318)' },
  { id: 'Arquivada', label: 'Arquivada', color: 'oklch(57.7% 0.245 27.325)' },
  { id: 'Concluida', label: 'Concluída', color: 'oklch(62.7% 0.194 149.214)' },
];

export function StatusSelector({
  initialStatus = 'Aberta',
  onStatusChange,
}: StatusSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(
    statusOptions.find((option) => option.id === initialStatus) ||
      statusOptions[0],
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleStatusChange = (status: (typeof statusOptions)[0]) => {
    setSelectedStatus(status);
    setIsOpen(false);
    if (onStatusChange) {
      onStatusChange(status.id);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.StatusContainer ref={dropdownRef}>
      <S.StatusBadge
        bgColor={selectedStatus.color}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selectedStatus.label}
        <FiChevronDown size={16} />
      </S.StatusBadge>

      <S.DropdownMenu isOpen={isOpen}>
        {statusOptions.map((status) => (
          <S.OptionItem
            key={status.id}
            isActive={selectedStatus.id === status.id}
            onClick={() => handleStatusChange(status)}
          >
            <S.ColorDot $color={status.color} />
            <S.OptionLabel>{status.label}</S.OptionLabel>
            {selectedStatus.id === status.id && <FiCheck size={16} />}
          </S.OptionItem>
        ))}
      </S.DropdownMenu>
    </S.StatusContainer>
  );
}
