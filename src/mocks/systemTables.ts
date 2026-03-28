export const SYSTEM_TABLES_ITEMS_PER_PAGE = 10;

export const SYSTEM_TABLES_MOCK_DATA = [
  { id: 1,  description: 'جدول المركبات' },
  { id: 2,  description: 'جدول الموظفين' },
  { id: 3,  description: 'جدول الإدارات' },
  { id: 4,  description: 'جدول التأمين' },
  { id: 5,  description: 'جدول المدن' },
  { id: 6,  description: 'جدول السائقين' },
  { id: 7,  description: 'جدول الصيانة' },
  { id: 8,  description: 'جدول التصاريح' },
  { id: 9,  description: 'جدول الشركات' },
  { id: 10, description: 'جدول الطرازات' },
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
