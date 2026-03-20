export const TRANSPORT_CITIES_ITEMS_PER_PAGE = 10;

export const TRANSPORT_CITIES_MOCK_DATA = [
  { id: 1,  fromToCity: 'الرياض → جدة',          duration: '٩ أيام' },
  { id: 2,  fromToCity: 'الرياض → مكة المكرمة',  duration: '١٠ أيام' },
  { id: 3,  fromToCity: 'الرياض → المدينة المنورة', duration: '١١ أيام' },
  { id: 4,  fromToCity: 'الرياض → حائل',          duration: '٥ أيام' },
  { id: 5,  fromToCity: 'جدة → أبها',             duration: '٧ أيام' },
  { id: 6,  fromToCity: 'جدة → الطائف',           duration: '٣ أيام' },
  { id: 7,  fromToCity: 'جدة → تبوك',             duration: '١٢ أيام' },
  { id: 8,  fromToCity: 'الدمام → الرياض',        duration: '٦ أيام' },
  { id: 9,  fromToCity: 'الدمام → الأحساء',       duration: '٢ أيام' },
  { id: 10, fromToCity: 'مكة المكرمة → المدينة المنورة', duration: '٤ أيام' },
  { id: 11, fromToCity: 'أبها → نجران',           duration: '٣ أيام' },
  { id: 12, fromToCity: 'تبوك → حائل',            duration: '٨ أيام' },
  { id: 13, fromToCity: 'الرياض → القصيم',        duration: '٤ أيام' },
  { id: 14, fromToCity: 'الجوف → تبوك',           duration: '٦ أيام' },
  { id: 15, fromToCity: 'جازان → أبها',           duration: '٥ أيام' },
];

export const fetchTransportCitiesData = (
  page: number,
  perPage: number,
): Promise<{ data: any[]; total: number }> =>
  new Promise((resolve) =>
    setTimeout(() => {
      const all = TRANSPORT_CITIES_MOCK_DATA;
      resolve({
        data: all.slice((page - 1) * perPage, page * perPage),
        total: all.length,
      });
    }, 600),
  );
