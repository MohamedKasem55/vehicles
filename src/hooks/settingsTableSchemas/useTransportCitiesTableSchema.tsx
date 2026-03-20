import { IColumnSchema } from '@/store/slices/tableSlice';
import { initializeTable, setLoading, setTableData } from '@/store/slices/tableSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React, { useCallback, useEffect } from 'react';
import DeleteIcon from '@/components/atoms/icons/DeleteIcon';
import EditIcon from '@/components/atoms/icons/EditIcon';
import SaveIcon from '@/components/atoms/icons/SaveIcon';
import {
  fetchTransportCitiesData,
  TRANSPORT_CITIES_ITEMS_PER_PAGE,
} from '@/mocks/transportCities';

function useTransportCitiesTableSchema(): IColumnSchema[] {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector((state) => state.table);

  useEffect(() => {
    dispatch(initializeTable({ itemsPerPage: TRANSPORT_CITIES_ITEMS_PER_PAGE, totalItems: 0 }));
  }, []);

  useEffect(() => {
    dispatch(setLoading(true));
    fetchTransportCitiesData(currentPage, TRANSPORT_CITIES_ITEMS_PER_PAGE).then(({ data, total }) => {
      dispatch(setTableData(data));
      dispatch(initializeTable({ itemsPerPage: TRANSPORT_CITIES_ITEMS_PER_PAGE, totalItems: total }));
      dispatch(setLoading(false));
    });
  }, [currentPage]);

  const onSaveHandler = useCallback((row: any) => {
    console.log('save', row);
  }, []);

  const onEditHandler = useCallback((row: any) => {
    console.log('edit', row);
  }, []);

  const onDeleteHandler = useCallback((row: any) => {
    console.log('delete', row);
  }, []);

  return [
    {
      key: 'fromToCity',
      label: 'من-مدينة_الي_مدينة',
      type: 'text',
    },
    {
      key: 'duration',
      label: 'مدة التبعية',
      type: 'text',
    },
    {
      key: 'save',
      label: 'حفظ',
      type: 'action',
      icon: <SaveIcon />,
      onClick: onSaveHandler,
    },
    {
      key: 'edit',
      label: 'تعديل',
      type: 'action',
      icon: <EditIcon />,
      onClick: onEditHandler,
    },
    {
      key: 'delete',
      label: 'حذف',
      type: 'action',
      icon: <DeleteIcon />,
      onClick: onDeleteHandler,
    },
  ];
}

export default useTransportCitiesTableSchema;
