"use strict";

document.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "KeyR":
      replay();
      break;
    case "KeyT":
      changeTheme();
      break;
  }
});
