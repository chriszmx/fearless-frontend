const payloadCookie = await cookieStore.get('jwt_access_payload');
console.log(payloadCookie);
if (payloadCookie) {
  const encodedPayload = (payloadCookie.value);
  const decodePayload = atob(encodedPayload);
  const payload = JSON.parse(decodePayload);
  console.log(payload);
  const permissions = payload.user.perms;
  const events = (permissions.includes("events.add_conference"));
  if (events) {
    let remove = document.querySelector('d-none');
    remove.classList.remove('d-none');
  }
  const location = (permissions.includes("events.add_location"));
  if (location) {
    let remove = document.querySelector('d-none');
    remove.classList.remove('d-none');
  }
}
