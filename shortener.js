function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    callback(url);
  });
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function(){
  getCurrentTabUrl(function(url) {
    renderStatus('Shortening url ' + url);

    if(url.indexOf("?utm") >= 0 || url.indexOf("?ref") >= 0 || url.indexOf("?imm") >= 0) {
      var shortUrl = url.substring(0, url.indexOf("?utm")) || url.substring(0, url.indexOf("?ref")) || url.substring(0, url.indexOf("?imm"));
      renderStatus('Redirecting...');
      chrome.tabs.update({ url: shortUrl });
    }
    else {
      renderStatus('URL does not need to be shortened.');
    }
  });
});
