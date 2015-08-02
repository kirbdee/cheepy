/**
 * Created by kirbdee on 7/30/15.
 */
chrome.webRequest.onBeforeRequest.addListener(
  function(req) {
    //Catch URL and attach code
    var url = document.createElement('a');
    url.href = req.url;

    switch(url.hostname){
      case 'www.amazon.com':
        if( url.search.length > 0 && url.search.indexOf(affCodes.amazon) == -1){
          url.search+='&'+affCodes.amazon;
        }
        break;
      case 'www.bestbuy.com':
        if( url.search.length > 0 && url.search.indexOf(affCodes.bestbuy) == -1){
          url.search+='&'+affCodes.bestbuy;
        }
        break;
      case 'www.walmart.com':
        if( url.search.length > 0 && url.search.indexOf(affCodes.walmart) == -1){
          url.search+='&'+affCodes.walmart;
        }
        break;
    }

    return {redirectUrl: url.href}
  },{
    urls: domains,
    types: ["main_frame"]
  },
  ["blocking"]
);

