export const GTM_ID = 'GTM-W98WXF4D';

export function pushEvent(eventName, data) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...data });
}

export function captureUtms() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utms = {};
  params.forEach((value, key) => {
    if (key.startsWith('utm_')) utms[key] = value;
  });

  if (Object.keys(utms).length > 0) {
    sessionStorage.setItem('cj_utms', JSON.stringify(utms));
    return utms;
  }

  try {
    return JSON.parse(sessionStorage.getItem('cj_utms') || '{}');
  } catch {
    return {};
  }
}
