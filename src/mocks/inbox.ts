import { IColumnSchema } from "@/store/slices/tableSlice"

export const INBOX_ITEMS_PER_PAGE = 5

const MOCK_DATA: Record<string, any[]> = {
    outgoing: [
        { id: 1,  orderNumber: 'ORD-0001', serviceName: 'خدمة التسجيل',  requester: 'أحمد محمد',      requestDate: '2024-01-15', details: 'طلب تسجيل جديد',          decision: 'COMPLETED', decisionDate: '2024-01-20' },
        { id: 2,  orderNumber: 'ORD-0002', serviceName: 'خدمة التوثيق',  requester: 'سارة علي',       requestDate: '2024-02-10', details: 'طلب توثيق مستندات',       decision: 'REJECTED',  decisionDate: '2024-02-15' },
        { id: 3,  orderNumber: 'ORD-0003', serviceName: 'خدمة الترخيص',  requester: 'محمد خالد',      requestDate: '2024-03-05', details: 'طلب ترخيص تجاري',         decision: 'PENDING',   decisionDate: '—' },
        { id: 4,  orderNumber: 'ORD-0004', serviceName: 'خدمة النقل',    requester: 'فاطمة حسن',      requestDate: '2024-03-08', details: 'طلب نقل ملكية مركبة',     decision: 'COMPLETED', decisionDate: '2024-03-14' },
        { id: 5,  orderNumber: 'ORD-0005', serviceName: 'خدمة الفحص',    requester: 'علي عمر',        requestDate: '2024-03-12', details: 'طلب فحص دوري',             decision: 'PENDING',   decisionDate: '—' },
        { id: 6,  orderNumber: 'ORD-0006', serviceName: 'خدمة الإلغاء',  requester: 'خالد إبراهيم',   requestDate: '2024-03-20', details: 'طلب إلغاء تسجيل',         decision: 'REJECTED',  decisionDate: '2024-03-25' },
        { id: 7,  orderNumber: 'ORD-0007', serviceName: 'خدمة التجديد',  requester: 'نورة سالم',      requestDate: '2024-04-01', details: 'طلب تجديد رخصة',           decision: 'COMPLETED', decisionDate: '2024-04-06' },
        { id: 8,  orderNumber: 'ORD-0008', serviceName: 'خدمة التسجيل',  requester: 'عمر يوسف',       requestDate: '2024-04-05', details: 'طلب تسجيل مركبة جديدة',   decision: 'PENDING',   decisionDate: '—' },
        { id: 9,  orderNumber: 'ORD-0009', serviceName: 'خدمة التوثيق',  requester: 'ريم ناصر',       requestDate: '2024-04-10', details: 'طلب توثيق عقد بيع',        decision: 'COMPLETED', decisionDate: '2024-04-15' },
        { id: 10, orderNumber: 'ORD-0010', serviceName: 'خدمة الترخيص',  requester: 'بدر العتيبي',    requestDate: '2024-04-12', details: 'طلب ترخيص تجاري جديد',    decision: 'REJECTED',  decisionDate: '2024-04-18' },
        { id: 11, orderNumber: 'ORD-0011', serviceName: 'خدمة الفحص',    requester: 'منى الغامدي',    requestDate: '2024-04-15', details: 'طلب فحص فني شامل',         decision: 'PENDING',   decisionDate: '—' },
        { id: 12, orderNumber: 'ORD-0012', serviceName: 'خدمة النقل',    requester: 'سلطان الدوسري',  requestDate: '2024-04-18', details: 'طلب نقل لوحة مركبة',      decision: 'COMPLETED', decisionDate: '2024-04-22' },
        { id: 13, orderNumber: 'ORD-0013', serviceName: 'خدمة التجديد',  requester: 'هند المطيري',    requestDate: '2024-04-20', details: 'طلب تجديد تسجيل سنوي',    decision: 'PENDING',   decisionDate: '—' },
        { id: 14, orderNumber: 'ORD-0014', serviceName: 'خدمة الإلغاء',  requester: 'فيصل الحربي',    requestDate: '2024-04-22', details: 'طلب إلغاء رخصة قيادة',    decision: 'REJECTED',  decisionDate: '2024-04-27' },
        { id: 15, orderNumber: 'ORD-0015', serviceName: 'خدمة التسجيل',  requester: 'لطيفة القحطاني', requestDate: '2024-04-25', details: 'طلب تسجيل مركبة ثقيلة',  decision: 'COMPLETED', decisionDate: '2024-04-30' },
        { id: 16, orderNumber: 'ORD-0016', serviceName: 'خدمة التوثيق',  requester: 'ماجد الشمري',    requestDate: '2024-05-01', details: 'طلب توثيق إفادة',          decision: 'PENDING',   decisionDate: '—' },
        { id: 17, orderNumber: 'ORD-0017', serviceName: 'خدمة الفحص',    requester: 'عبير الزهراني',  requestDate: '2024-05-03', details: 'طلب فحص ما قبل البيع',    decision: 'COMPLETED', decisionDate: '2024-05-08' },
        { id: 18, orderNumber: 'ORD-0018', serviceName: 'خدمة الترخيص',  requester: 'وليد الرشيدي',   requestDate: '2024-05-05', details: 'طلب تجديد ترخيص',          decision: 'REJECTED',  decisionDate: '2024-05-10' },
        { id: 19, orderNumber: 'ORD-0019', serviceName: 'خدمة النقل',    requester: 'أسماء الجهني',   requestDate: '2024-05-07', details: 'طلب نقل ملكية بالورثة',   decision: 'PENDING',   decisionDate: '—' },
        { id: 20, orderNumber: 'ORD-0020', serviceName: 'خدمة التجديد',  requester: 'تركي السبيعي',   requestDate: '2024-05-10', details: 'طلب تجديد رخصة سنوية',    decision: 'COMPLETED', decisionDate: '2024-05-15' },
    ],
    incoming: [
        { id: 21, orderNumber: 'ORD-0021', serviceName: 'خدمة التسجيل',  requester: 'نواف العنزي',    requestDate: '2024-01-18', details: 'طلب تسجيل دراجة نارية',   decision: 'PENDING',   decisionDate: '—' },
        { id: 22, orderNumber: 'ORD-0022', serviceName: 'خدمة الفحص',    requester: 'شيماء البقمي',   requestDate: '2024-02-05', details: 'طلب فحص ميكانيكي',         decision: 'COMPLETED', decisionDate: '2024-02-10' },
        { id: 23, orderNumber: 'ORD-0023', serviceName: 'خدمة النقل',    requester: 'عادل الحمدان',   requestDate: '2024-02-20', details: 'طلب نقل ملكية شركة',       decision: 'REJECTED',  decisionDate: '2024-02-25' },
        { id: 24, orderNumber: 'ORD-0024', serviceName: 'خدمة التوثيق',  requester: 'غادة المالكي',   requestDate: '2024-03-02', details: 'طلب توثيق وكالة',          decision: 'COMPLETED', decisionDate: '2024-03-07' },
        { id: 25, orderNumber: 'ORD-0025', serviceName: 'خدمة الترخيص',  requester: 'حمد الصالح',     requestDate: '2024-03-15', details: 'طلب ترخيص مؤقت',           decision: 'PENDING',   decisionDate: '—' },
        { id: 26, orderNumber: 'ORD-0026', serviceName: 'خدمة الإلغاء',  requester: 'رانيا العمر',    requestDate: '2024-03-22', details: 'طلب إلغاء تأمين',          decision: 'REJECTED',  decisionDate: '2024-03-28' },
        { id: 27, orderNumber: 'ORD-0027', serviceName: 'خدمة التجديد',  requester: 'صالح الدهمش',    requestDate: '2024-04-03', details: 'طلب تجديد بطاقة مركبة',   decision: 'COMPLETED', decisionDate: '2024-04-08' },
        { id: 28, orderNumber: 'ORD-0028', serviceName: 'خدمة التسجيل',  requester: 'ديما الخالدي',   requestDate: '2024-04-07', details: 'طلب تسجيل مركبة كهربائية', decision: 'PENDING',   decisionDate: '—' },
        { id: 29, orderNumber: 'ORD-0029', serviceName: 'خدمة الفحص',    requester: 'يوسف الغريب',    requestDate: '2024-04-14', details: 'طلب فحص هيكل مركبة',      decision: 'COMPLETED', decisionDate: '2024-04-19' },
        { id: 30, orderNumber: 'ORD-0030', serviceName: 'خدمة النقل',    requester: 'سمر الحازمي',    requestDate: '2024-04-17', details: 'طلب نقل لوحة مميزة',      decision: 'REJECTED',  decisionDate: '2024-04-23' },
        { id: 31, orderNumber: 'ORD-0031', serviceName: 'خدمة التوثيق',  requester: 'أنس الطريف',     requestDate: '2024-04-21', details: 'طلب توثيق محضر حادث',     decision: 'PENDING',   decisionDate: '—' },
        { id: 32, orderNumber: 'ORD-0032', serviceName: 'خدمة الترخيص',  requester: 'جواهر السهلي',   requestDate: '2024-04-24', details: 'طلب ترخيص استيراد',        decision: 'COMPLETED', decisionDate: '2024-04-29' },
        { id: 33, orderNumber: 'ORD-0033', serviceName: 'خدمة التجديد',  requester: 'مشاري القرني',   requestDate: '2024-04-26', details: 'طلب تجديد لوحة مركبة',    decision: 'PENDING',   decisionDate: '—' },
        { id: 34, orderNumber: 'ORD-0034', serviceName: 'خدمة الإلغاء',  requester: 'بثينة الأحمدي',  requestDate: '2024-04-29', details: 'طلب إلغاء قيد مركبة',     decision: 'REJECTED',  decisionDate: '2024-05-04' },
        { id: 35, orderNumber: 'ORD-0035', serviceName: 'خدمة التسجيل',  requester: 'زياد الرويلي',   requestDate: '2024-05-02', details: 'طلب تسجيل مقطورة',         decision: 'COMPLETED', decisionDate: '2024-05-07' },
        { id: 36, orderNumber: 'ORD-0036', serviceName: 'خدمة الفحص',    requester: 'هيفاء الشهري',   requestDate: '2024-05-04', details: 'طلب فحص عداد مركبة',      decision: 'PENDING',   decisionDate: '—' },
        { id: 37, orderNumber: 'ORD-0037', serviceName: 'خدمة النقل',    requester: 'عبدالله الجاسر', requestDate: '2024-05-06', details: 'طلب نقل ملكية بالهبة',    decision: 'COMPLETED', decisionDate: '2024-05-11' },
        { id: 38, orderNumber: 'ORD-0038', serviceName: 'خدمة التوثيق',  requester: 'ليلى الفيفي',    requestDate: '2024-05-08', details: 'طلب توثيق عقد إيجار',     decision: 'REJECTED',  decisionDate: '2024-05-13' },
        { id: 39, orderNumber: 'ORD-0039', serviceName: 'خدمة الترخيص',  requester: 'راشد المطرفي',   requestDate: '2024-05-09', details: 'طلب ترخيص تصدير',          decision: 'PENDING',   decisionDate: '—' },
        { id: 40, orderNumber: 'ORD-0040', serviceName: 'خدمة التجديد',  requester: 'نجود الصقير',    requestDate: '2024-05-11', details: 'طلب تجديد تسجيل مركبة',   decision: 'COMPLETED', decisionDate: '2024-05-16' },
    ],
}

export const fetchInboxData = (tabId: string, page: number, perPage: number): Promise<{ data: any[], total: number }> =>
    new Promise((resolve) =>
        setTimeout(() => {
            const all = MOCK_DATA[tabId] ?? []
            resolve({ data: all.slice((page - 1) * perPage, page * perPage), total: all.length })
        }, 600)
    )

export const INBOX_SCHEMA :IColumnSchema[]= [
    { key: 'orderNumber',  label: 'رقم الطلب',              type: 'text',   cellCustomStyle: 'font-mono font-normal text-[10.2px] leading-4 tracking-normal align-middle' },
    { key: 'serviceName',  label: 'اسم الخدمة',             type: 'text',   cellCustomStyle: 'font-inter font-medium text-[11.9px] leading-5 tracking-normal align-middle' },
    { key: 'requester',    label: 'مقدم الطلب',             type: 'text' },
    { key: 'requestDate',  label: 'تاريخ الطلب',            type: 'text' },
    { key: 'details',      label: 'التفاصيل',               type: 'text' },
    { key: 'decision',     label: 'القرار المتخذ',          type: 'status', cellStatusKey: 'decision' },
    { key: 'decisionDate', label: 'تاريخ اتخاذ القرار',     type: 'text' },
    { key: 'edit',         label: 'تعديل',                  type: 'action', onClick: (row: any) => alert(`تعديل: ${row.requester}`) },
    { key: 'view',         label: 'عرض',                    type: 'action', onClick: (row: any) => alert(`عرض: ${row.requester}`) },
]
