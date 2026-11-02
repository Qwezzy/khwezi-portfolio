// Single source of truth for conversion settings. Khwezi to confirm each value.
// AUDIT_CAP: number of Quick-Win Audits offered per month. CONFIRM BEFORE MERGE.
export const AUDIT_CAP = 6;
export const AUDIT_PRICE = 'R3,500';
// Booking link. Leave as '' to hide every booking button.
export const BOOKING_URL = 'https://calendly.com/khwezi-flatela/meet-with-khwezi-flatela';
export const WA_NUMBER = '27766311195';
export const EMAIL = 'khwezi@khwezi.online';
const AUDIT_MSG = "Hi Khwezi, I'd like to book the R3,500 Quick-Win Audit. Company: ... Main process to look at: ...";
export const WA = `https://wa.me/${WA_NUMBER}`;
export const WA_AUDIT = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(AUDIT_MSG)}`;
export const MAIL_AUDIT = `mailto:${EMAIL}?subject=${encodeURIComponent('Quick-Win Audit enquiry')}&body=${encodeURIComponent(AUDIT_MSG)}`;
