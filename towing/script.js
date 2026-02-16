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
const floatingLocate = document.getElementById("floatingLocate");

// WhatsApp number with country code, no +
const WHATSAPP_NUMBER = "918552911911";

floatingLocate?.addEventListener("click", () => {
  if (!navigator.geolocation) {
    alert("Location not supported on this device.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const accuracy = Math.round(pos.coords.accuracy || 0);

      const mapsLink = `https://maps.google.com/?q=${lat},${lng}`;
      const msg = encodeURIComponent(
        `I need towing. My live location: ${mapsLink}\nAccuracy: ~${accuracy}m`
      );

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    },
    (err) => {
      if (err.code === 1) alert("Permission denied. Please allow location access.");
      else if (err.code === 2) alert("Location unavailable. Turn on GPS and try again.");
      else alert("Location request timed out. Please try again.");
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
  );
});
