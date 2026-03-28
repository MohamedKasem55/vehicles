import { useCallback, useState } from 'react';

function useTableActionLoading() {
  const [loadingCell, setLoadingCell] = useState<{ key: string; id: any } | null>(null);

  const withLoading = useCallback((key: string, handler: (row: any) => void) => (row: any) => {
    setLoadingCell({ key, id: row.id });
    setTimeout(() => {
      handler(row);
      setLoadingCell(null);
    }, 1500);
  }, []);

  const isLoading = useCallback(
    (key: string) => (item: any) => loadingCell?.key === key && loadingCell?.id === item.id,
    [loadingCell],
  );

  const isDisabled = useCallback(
    (key: string) => (item: any) =>
      loadingCell !== null && !(loadingCell.key === key && loadingCell.id === item.id),
    [loadingCell],
  );

  return { withLoading, isLoading, isDisabled };
}

export default useTableActionLoading;
