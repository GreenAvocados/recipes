// import * as bootstrap from "bootstrap";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
// import "@fortawesome/fontawesome-free/css/all.css";

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "@fortawesome/fontawesome-free/css/all.css";
import "./offcanvas.css";
import Holder from "holderjs";

$(() => {
  "use strict";

  $('[data-toggle="offcanvas"]').on("click", function () {
    $(".offcanvas-collapse").toggleClass("open");
  });
});

Holder.addTheme("thumb", {
  bg: "#55595c",
  fg: "#eceeef",
  text: "Thumbnail",
});

// alert("Thanks for visiting!");
