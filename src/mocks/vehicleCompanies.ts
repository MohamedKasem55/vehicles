export const VEHICLE_COMPANIES_ITEMS_PER_PAGE = 10;

export const VEHICLE_COMPANIES_MOCK_DATA = [
  { id: 1,  vehicleArName: 'فورد',          vehicleEnName: 'Ford' },
  { id: 2,  vehicleArName: 'جي إم سي',      vehicleEnName: 'GMC' },
  { id: 3,  vehicleArName: 'مرسيدس',        vehicleEnName: 'Mercedes-Benz' },
  { id: 4,  vehicleArName: 'تويوتا',        vehicleEnName: 'Toyota' },
  { id: 5,  vehicleArName: 'شيفروليه',      vehicleEnName: 'Chevrolet' },
  { id: 6,  vehicleArName: 'دودج',          vehicleEnName: 'Dodge' },
  { id: 7,  vehicleArName: 'لاند روفر',     vehicleEnName: 'Land Rover' },
  { id: 8,  vehicleArName: 'ميتسوبيشي',    vehicleEnName: 'Mitsubishi' },
  { id: 9,  vehicleArName: 'نيسان',         vehicleEnName: 'Nissan' },
  { id: 10, vehicleArName: 'بي إم دبليو',   vehicleEnName: 'BMW' },
];

export const fetchVehicleCompaniesData = (
  page: number,
  perPage: number,
): Promise<{ data: any[]; total: number }> =>
  new Promise((resolve) =>
    setTimeout(() => {
      const all = VEHICLE_COMPANIES_MOCK_DATA;
      resolve({
        data: all.slice((page - 1) * perPage, page * perPage),
        total: all.length,
      });
    }, 600),
  );
