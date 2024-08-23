"use strict";

document.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "keyR":
      replay();
      break;
    case "KeyT":
      changeTheme();
      break;
  }
});
