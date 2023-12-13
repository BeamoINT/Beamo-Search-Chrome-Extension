document.getElementById('save').onclick = function() {
    var searchEngine = document.getElementById('searchEngine').value;
    chrome.storage.sync.set({searchEngine: searchEngine}, function() {
      console.log('Search engine set to ' + searchEngine);
    });
  };  