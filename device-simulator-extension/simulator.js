document.addEventListener("DOMContentLoaded", () => {
  const widthInput = document.getElementById("width-input");
  const heightInput = document.getElementById("height-input");
  const presetSelect = document.getElementById("preset-select");
  const urlInput = document.getElementById("url-input");
  const targetFrame = document.getElementById("target-frame");
  const deviceContainer = document.getElementById("device-container");
  const metricText = document.getElementById("metric-text");
  const rotateBtn = document.getElementById("rotate-btn");

  function updateFrameSize() {
    const w = widthInput.value || 400;
    const h = heightInput.value || 500;
    deviceContainer.style.width = `${w}px`;
    deviceContainer.style.height = `${h}px`;
    metricText.innerText = `${w} x ${h}`;
  }

  presetSelect.addEventListener("change", (e) => {
    const val = e.target.value;
    if (val === "iphone") { widthInput.value = 393; heightInput.value = 852; }
    else if (val === "ipad") { widthInput.value = 820; heightInput.value = 1180; }
    else if (val === "desktop") { widthInput.value = 1280; heightInput.value = 800; }
    else { widthInput.value = 666; heightInput.value = 815; }
    updateFrameSize();
  });

  rotateBtn.addEventListener("click", () => {
    const w = widthInput.value;
    widthInput.value = heightInput.value;
    heightInput.value = w;
    updateFrameSize();
  });

  widthInput.addEventListener("input", updateFrameSize);
  heightInput.addEventListener("input", updateFrameSize);

  urlInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      let url = urlInput.value.trim();
      if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
        urlInput.value = url;
      }
      targetFrame.src = url;
    }
  });

  // Pick up the URL the toolbar-click was on, passed in by background.js
  const params = new URLSearchParams(window.location.search);
  const initialSrc = params.get("src");
  if (initialSrc) {
    urlInput.value = initialSrc;
    targetFrame.src = initialSrc;
  }

  updateFrameSize();
});
