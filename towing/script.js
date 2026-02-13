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
