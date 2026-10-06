(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    root.NileGateI18nCore = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  // UI labels only. No database records or operational transformations.
  const en = {
    "common.language": "Language",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.add": "Add",
    "common.search": "Search",
    "common.reset": "Reset",
    "common.refresh": "Refresh",
    "common.download": "Download",
    "common.loading": "Loading...",
    "common.noData": "No data to display",
    "common.select": "Select",
    "common.all": "All",
    "common.previous": "Previous",
    "common.next": "Next",
    "common.notes": "Notes",
    "common.customer": "Customer",
    "common.customerCode": "Customer Code",
    "common.customerName": "Customer Name",
    "common.supplier": "Supplier",
    "common.employee": "Employee",
    "common.waybill": "Waybill",
    "common.receipt": "Receipt",
    "common.receiptId": "Receipt ID",
    "common.cartonCode": "Carton Code",
    "common.containerNumber": "Container Number",
    "common.date": "Date",
    "common.status": "Status",
    "common.category": "Category",
    "common.classification": "Classification",
    "common.packageType": "Package Type",
    "common.unit": "Unit",
    "common.items": "Items",
    "common.quantity": "Quantity",
    "common.dimensions": "Dimensions",
    "common.packages": "Packages",
    "common.cbm": "CBM",
    "common.arabicDescription": "Arabic Description",
    "common.englishDescription": "English Description",
    "common.total": "Total",
    "nav.receiving": "Receiving",
    "nav.receipts": "Receipts",
    "nav.customerPacking": "Customer Packing",
    "nav.warehouseList": "Warehouse List",
    "nav.containerLoading": "Container Loading",
    "nav.containerArchive": "Container Archive",
    "nav.referenceData": "Reference Data",
    "status.PENDING_APPROVAL": "Pending Approval",
    "status.APPROVED": "Approved",
    "status.ARCHIVED": "Archived",
    "status.CLOSED": "Closed",
    "category.Clothing": "Clothing",
    "category.Items": "Items",
    "category.ShoesLeather": "Shoes & Leather",
    "category.Machines": "Machines",
    "classification.Brand": "Brand",
    "classification.Normal": "Normal",
    "classification.Gray": "Gray",
    "packageType.CARTON": "Carton",
    "packageType.SACK": "Sack",
    "packageType.PALLET": "Pallet",
    "packageType.SINGLE": "Single",
    "test.title": "Language Foundation Test",
    "test.description": "Only interface labels change when you switch language.",
    "test.inputLabel": "Temporary test note",
    "test.inputPlaceholder": "Type a note, then change language",
    "test.direction": "Direction",
    "test.confirmation": "Language foundation is working",
    "test.rowCount": "Showing {count} rows"
  };

  const ar = {
    "common.language": "اللغة",
    "common.save": "حفظ",
    "common.cancel": "إلغاء",
    "common.edit": "تعديل",
    "common.delete": "حذف",
    "common.add": "إضافة",
    "common.search": "بحث",
    "common.reset": "إعادة ضبط",
    "common.refresh": "تحديث",
    "common.download": "تنزيل",
    "common.loading": "جارٍ التحميل...",
    "common.noData": "لا توجد بيانات للعرض",
    "common.select": "اختيار",
    "common.all": "الكل",
    "common.previous": "السابق",
    "common.next": "التالي",
    "common.notes": "ملاحظات",
    "common.customer": "العميل",
    "common.customerCode": "كود العميل",
    "common.customerName": "اسم العميل",
    "common.supplier": "المورد",
    "common.employee": "الموظف",
    "common.waybill": "رقم البوليصة",
    "common.receipt": "الاستلامة",
    "common.receiptId": "رقم الاستلامة",
    "common.cartonCode": "كود الطرد",
    "common.containerNumber": "رقم الحاوية",
    "common.date": "التاريخ",
    "common.status": "الحالة",
    "common.category": "فئة البضاعة",
    "common.classification": "التصنيف",
    "common.packageType": "نوع الطرد",
    "common.unit": "الوحدة",
    "common.items": "الأصناف",
    "common.quantity": "الكمية",
    "common.dimensions": "الأبعاد",
    "common.packages": "الطرود",
    "common.cbm": "CBM",
    "common.arabicDescription": "وصف الصنف بالعربية",
    "common.englishDescription": "وصف الصنف بالإنجليزية",
    "common.total": "الإجمالي",
    "nav.receiving": "الاستلام",
    "nav.receipts": "الاستلامات",
    "nav.customerPacking": "باكينج العملاء",
    "nav.warehouseList": "قائمة المخزن",
    "nav.containerLoading": "تحميل الحاويات",
    "nav.containerArchive": "أرشيف الحاويات",
    "nav.referenceData": "البيانات الأساسية",
    "status.PENDING_APPROVAL": "في انتظار الاعتماد",
    "status.APPROVED": "معتمدة",
    "status.ARCHIVED": "مؤرشفة",
    "status.CLOSED": "مغلقة",
    "category.Clothing": "ملابس",
    "category.Items": "أصناف",
    "category.ShoesLeather": "أحذية وشنط جلد",
    "category.Machines": "ماكينات",
    "classification.Brand": "براند",
    "classification.Normal": "عادي",
    "classification.Gray": "رمادي",
    "packageType.CARTON": "كرتونة",
    "packageType.SACK": "شوال",
    "packageType.PALLET": "بالتة",
    "packageType.SINGLE": "مفرد",
    "test.title": "اختبار أساس تغيير اللغة",
    "test.description": "تتغير نصوص الواجهة فقط عند اختيار اللغة.",
    "test.inputLabel": "ملاحظة مؤقتة للاختبار",
    "test.inputPlaceholder": "اكتب ملاحظة ثم غيّر اللغة",
    "test.direction": "الاتجاه",
    "test.confirmation": "أساس تغيير اللغة يعمل",
    "test.rowCount": "عرض {count} صفوف"
  };

  const own = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
  const dictionaries = Object.freeze({
    en: Object.freeze(en),
    ar: Object.freeze(ar)
  });

  function normalizeLang(lang) {
    return lang === "ar" ? "ar" : "en";
  }

  function t(lang, key, params) {
    const name = String(key || "");
    const dictionary = dictionaries[normalizeLang(lang)];
    const text = own(dictionary, name) ? dictionary[name]
      : own(en, name) ? en[name] : name;
    return text.replace(/\{([A-Za-z0-9_]+)\}/g, function (token, param) {
      return params && own(params, param) ? String(params[param]) : token;
    });
  }

  function translations(lang, scopes) {
    const dictionary = dictionaries[normalizeLang(lang)];
    if (!Array.isArray(scopes) || scopes.length === 0) {
      return Object.assign({}, dictionary);
    }
    const prefixes = ["common"].concat(scopes).map(String);
    const selected = {};
    Object.keys(dictionary).forEach(function (key) {
      if (prefixes.some(function (scope) { return key.startsWith(scope + "."); })) {
        selected[key] = dictionary[key];
      }
    });
    return selected;
  }

  return Object.freeze({
    version: "1.0.0",
    dictionaries: dictionaries,
    normalizeLang: normalizeLang,
    t: t,
    translations: translations,
    isRTL: function (lang) { return normalizeLang(lang) === "ar"; },
    direction: function (lang) { return normalizeLang(lang) === "ar" ? "rtl" : "ltr"; },
    textAlign: function (lang) { return normalizeLang(lang) === "ar" ? "right" : "left"; },
    widgetAlign: function (lang) { return normalizeLang(lang) === "ar" ? "RIGHT" : "LEFT"; }
  });
});

