$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var redirectTimeout = null; // Timeout merken

  envelope.click(function () {
    open();
  });

  btn_open.click(function () {
    open();

    // Weiterleitung nach Animation
    redirectTimeout = setTimeout(function () {
      window.location.href = "Page2.html";
    }, 5000);
  });

  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }

  function close() {
    envelope.addClass("close").removeClass("open");

    // Weiterleitung abbrechen
    if (redirectTimeout) {
      clearTimeout(redirectTimeout);
      redirectTimeout = null;
    }
  }
});
