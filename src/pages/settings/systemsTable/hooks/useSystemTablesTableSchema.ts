import { IColumnSchema } from '@/store/slices/tableSlice';
import { useCallback, useMemo } from 'react';
import useTableActionLoading from '@/hooks/useTableActionLoading';
import DeleteIcon from '@/components/atoms/icons/DeleteIcon';
import EditIcon from '@/components/atoms/icons/EditIcon';
import SaveIcon from '@/components/atoms/icons/SaveIcon';

function useSystemTablesTableSchema(): IColumnSchema[] {
  const { withLoading, isLoading, isDisabled } = useTableActionLoading();

  const onSaveHandler = useCallback((row: any) => {
    console.log('save', row);
  }, []);

  const onEditHandler = useCallback((row: any) => {
    console.log('edit', row);
  }, []);

  const onDeleteHandler = useCallback((row: any) => {
    console.log('delete', row);
  }, []);

  return useMemo<IColumnSchema[]>(() => [
    { key: 'description', label: 'الوصف', type: 'text' },
    { key: 'save',   label: 'حفظ',   type: 'action', icon: SaveIcon,   iconClassName: 'text-[#406F59]', loading: isLoading('save'),   disabled: isDisabled('save'),   onClick: withLoading('save',   onSaveHandler) },
    { key: 'edit',   label: 'تعديل', type: 'action', icon: EditIcon,   iconClassName: 'text-[#3B82F6]', loading: isLoading('edit'),   disabled: isDisabled('edit'),   onClick: withLoading('edit',   onEditHandler) },
    { key: 'delete', label: 'حذف',   type: 'action', icon: DeleteIcon, iconClassName: 'text-[#F87171]', loading: isLoading('delete'), disabled: isDisabled('delete'), onClick: withLoading('delete', onDeleteHandler) },
  ], [isLoading, isDisabled, withLoading, onSaveHandler, onEditHandler, onDeleteHandler]);
}

export default useSystemTablesTableSchema;
