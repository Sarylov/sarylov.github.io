let drowUpBtn = () => {
  let btn = document.createElement("a");
  btn.setAttribute("href", "#top");
  btn.className = "up-btn btnStyleNone topLink";
  btn.innerHTML = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="70px" height="70px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Iconly/Two-tone/Arrow - Up 2</title>
      <g id="Iconly/Two-tone/Arrow---Up-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
          <g id="Arrow---Up-2" transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) translate(5.000000, 8.500000)" stroke="#000000" stroke-width="1.5">
              <polyline id="Stroke-1" points="14 0 7 7 0 0"></polyline>
          </g>
      </g>
  </svg>`;
  document.querySelector("body").append(btn);
};

export default drowUpBtn;
