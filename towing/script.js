document.addEventListener("DOMContentLoaded", () => {
  const sticky = document.getElementById("stickyCall");

  // show sticky after load
  setTimeout(() => {
    sticky.style.bottom = "0";
  }, 300);

  // send log ping on click
  document.querySelectorAll('a[href^="tel:"]').forEach(btn => {
    btn.addEventListener("click", () => {
      fetch("?call=1", { method: "GET", keepalive: true });
    });
  });
});
function sendLocationToWhatsApp() {

  if (!navigator.geolocation) {
    alert("Location not supported on this device.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function (position) {

      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const mapsLink = `https://maps.google.com/?q=${lat},${lng}`;

      const message =
        `🚗 I need towing assistance.\n` +
        `📍 My location:\n${mapsLink}`;

      const whatsappURL =
        `https://wa.me/918552911911?text=${encodeURIComponent(message)}`;

      window.location.href = whatsappURL;
    },

    function () {
      alert("Unable to get location. Please enable GPS.");
    },

    /* ✅ THIS PART MAKES IT FAST */
    {
      enableHighAccuracy: false,   // don't wait for GPS satellite
      timeout: 4000,               // max wait = 4 seconds
      maximumAge: 60000            // reuse recent location (1 min)
    }
  );
}
