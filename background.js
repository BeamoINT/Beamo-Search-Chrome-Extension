chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get({searchEngine: 'https://beamosearch.com'}, function(items) {
      chrome.search.set({
        default: true,
        search_url: items.searchEngine
      });
    });
  });  