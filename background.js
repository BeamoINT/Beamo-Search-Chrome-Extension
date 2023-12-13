chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ searchEngine: 'https://beamosearch.com/results.html?q=%s' });
  });
  
  chrome.runtime.onStartup.addListener(() => {
    chrome.storage.sync.get({ searchEngine: 'https://beamosearch.com/results.html?q=%s' }, function (items) {
      chrome.search.set({
        default: true,
        search_url: items.searchEngine
      });
    });
  });  