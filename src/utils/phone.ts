// Phone number utilities for the practice
// The phone number is set via NEXT_PUBLIC_PHONE_NUMBER environment variable
// and can be dynamically replaced by CallRail

// Get the phone number from environment variable
const getPhoneNumber = (): string => {
  return process.env.NEXT_PUBLIC_PHONE_NUMBER || '(317) 643-9434';
};

// Format phone number for tel: links (remove all non-digits)
export const getPhoneNumberForTel = (): string => {
  return getPhoneNumber().replace(/\D/g, '');
};

// Format phone number for display (formatted with dashes)
export const getPhoneNumberDisplay = (): string => {
  const phoneNumber = getPhoneNumber();
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  
  // Return in format: XXX-XXX-XXXX
  if (digitsOnly.length === 10) {
    return `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
  }
  
  // Return as-is if format is unexpected
  return phoneNumber;
};

// Format phone number for display with parentheses (e.g., (317) 643-9434)
export const getPhoneNumberFormatted = (): string => {
  return getPhoneNumber();
};
