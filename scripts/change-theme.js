"use strict";

function changeTheme() {
  let attr = "data-dark";

  if (document.body.hasAttribute(attr)) {
    document.body.removeAttribute(attr);
  } else {
    document.body.setAttribute(attr, "");
  }
}
