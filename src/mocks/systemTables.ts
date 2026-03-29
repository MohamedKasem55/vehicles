export const SYSTEM_TABLES_ITEMS_PER_PAGE = 10;

export const SYSTEM_TABLES_MOCK_DATA = [
  { id: 1,  description: 'أحمر'   },
  { id: 2,  description: 'أصفر'   },
  { id: 3,  description: 'أخضر'   },
];

export const fetchSystemTablesData = (
  page: number,
  perPage: number,
): Promise<{ data: any[]; total: number }> =>
  new Promise((resolve) =>
    setTimeout(() => {
      const all = SYSTEM_TABLES_MOCK_DATA;
      resolve({
        data: all.slice((page - 1) * perPage, page * perPage),
        total: all.length,
      });
    }, 600),
  );
