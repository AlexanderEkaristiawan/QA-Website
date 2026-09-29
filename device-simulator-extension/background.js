// Opens the simulator in its own window instead of a toolbar "default_popup",
// because Chrome hard-caps default_popup size at ~800x600 and cannot exceed it.
// A window created with chrome.windows.create has no such limit.
chrome.action.onClicked.addListener((tab) => {
  let srcUrl = "https://example.com";
  if (tab && tab.url && /^https?:\/\//i.test(tab.url)) {
    srcUrl = tab.url;
  }

  const simulatorUrl =
    chrome.runtime.getURL("simulator.html") + "?src=" + encodeURIComponent(srcUrl);

  chrome.windows.create({
    url: simulatorUrl,
    type: "popup",
    width: 1040,
    height: 720
  });
});
