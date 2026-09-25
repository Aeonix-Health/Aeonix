var TURNSTILE_SITE_KEY = '0x4AAAAAAELRvX9scbJjzRxR';

var CONTACT_API_URL = 'https://devswissapi.alleshealth.com/contact/contactUsAeonix';

function submitContactInquiry(payload) {
  return fetch(CONTACT_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(function (res) {
    return res.json().catch(function () { return {}; }).then(function (data) {
      return { ok: res.ok, data: data };
    });
  });
}
