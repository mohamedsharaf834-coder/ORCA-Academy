// Configuration file for ORCA Academy
export const CONFIG = {
  API_BASE_URL: "https://orca-back-end-production.up.railway.app",
  REGISTER_ENDPOINT: "/register",
  STUDENTS_DATA_PATH: "/data/students.csv",
  
  // Validation rules
  VALIDATION: {
    NAME_MIN_LENGTH: 2,
    PHONE_MIN_LENGTH: 10,
    PHONE_MAX_LENGTH: 15,
  },
  
  // Error messages
  ERRORS: {
    NAME_REQUIRED: "الاسم مطلوب",
    NAME_TOO_SHORT: "الاسم يجب أن يكون أطول من حرفين",
    PHONE_REQUIRED: "رقم الهاتف مطلوب",
    PHONE_INVALID: "رقم الهاتف غير صحيح (10-15 رقم)",
    LOGIN_FAILED: "البيانات المدخلة غير صحيحة ❌",
    NETWORK_ERROR: "خطأ في الاتصال بالإنترنت",
    SERVER_ERROR: "خطأ في الخادم، حاول لاحقاً",
  },
  
  // Success messages
  SUCCESS: {
    LOGIN_SUCCESS: "تم تسجيل الدخول بنجاح ✅",
    SIGNUP_SUCCESS: "تم التسجيل بنجاح! شكراً لك",
  },
};

// Utility functions for validation
export const validateName = (name) => {
  if (!name || name.trim().length === 0) {
    return CONFIG.ERRORS.NAME_REQUIRED;
  }
  if (name.trim().length < CONFIG.VALIDATION.NAME_MIN_LENGTH) {
    return CONFIG.ERRORS.NAME_TOO_SHORT;
  }
  return null;
};

export const validatePhone = (phone) => {
  if (!phone || phone.trim().length === 0) {
    return CONFIG.ERRORS.PHONE_REQUIRED;
  }
  const phoneRegex = /^[0-9+\-\s]+$/;
  const cleanPhone = phone.replace(/[+\-\s]/g, "");
  
  if (cleanPhone.length < CONFIG.VALIDATION.PHONE_MIN_LENGTH || 
      cleanPhone.length > CONFIG.VALIDATION.PHONE_MAX_LENGTH) {
    return CONFIG.ERRORS.PHONE_INVALID;
  }
  if (!phoneRegex.test(phone)) {
    return CONFIG.ERRORS.PHONE_INVALID;
  }
  return null;
};

export const getFullApiUrl = (endpoint) => {
  return `${CONFIG.API_BASE_URL}${endpoint}`;
};
