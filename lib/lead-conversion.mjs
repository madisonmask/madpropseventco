const conversionDestination = "AW-18543370947/-4dECMHUq64dEMPFlYpF";
const recordedSubmissions = new Set();

// Call only after the contact API confirms delivery acceptance. No inquiry data
// or invented revenue value is sent to Google. Measurement must never prevent
// the visitor from seeing a successful submission.
export function recordLeadConversion(submissionId) {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const id = submissionId === undefined
      ? (window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`)
      : submissionId;
    if (!id || recordedSubmissions.has(id)) return false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("event", "conversion", {
      send_to: conversionDestination,
      transaction_id: id,
    });
    recordedSubmissions.add(id);
    return true;
  } catch {
    return false;
  }
}
