export const VEHICLE_MODELS_ITEMS_PER_PAGE = 10;

export const VEHICLE_MODELS_MOCK_DATA = [
  { id: 1,  vehicleName: 'KIA',        vehicleModel: 'Sportage' },
  { id: 2,  vehicleName: 'Toyota',     vehicleModel: 'Camry' },
  { id: 3,  vehicleName: 'Honda',      vehicleModel: 'Civic' },
  { id: 4,  vehicleName: 'Ford',       vehicleModel: 'Mustang' },
  { id: 5,  vehicleName: 'BMW',        vehicleModel: 'X5' },
  { id: 6,  vehicleName: 'Mercedes',   vehicleModel: 'C-Class' },
  { id: 7,  vehicleName: 'Hyundai',    vehicleModel: 'Tucson' },
  { id: 8,  vehicleName: 'Nissan',     vehicleModel: 'Altima' },
  { id: 9,  vehicleName: 'Chevrolet',  vehicleModel: 'Malibu' },
  { id: 10, vehicleName: 'Audi',       vehicleModel: 'Q7' },
];

export const fetchVehicleModelsData = (
  page: number,
  perPage: number,
): Promise<{ data: any[]; total: number }> =>
  new Promise((resolve) =>
    setTimeout(() => {
      const all = VEHICLE_MODELS_MOCK_DATA;
      resolve({
        data: all.slice((page - 1) * perPage, page * perPage),
        total: all.length,
      });
    }, 600),
  );
