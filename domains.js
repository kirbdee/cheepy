/**
 * Created by kirbdee on 7/30/15.
 */

/** Domains Can be dyamically generated possibly, not sure though about how it would work asyncrounously
 * We can add a promise in the background JS to apply the listener once we get the proper variables
 *
 * @type {string[]}
 */

var domains = [
  "*://*.amazon.com/*",
  "*://*.bestbuy.com/*",
  "*://*.walmart.com/*"
];

var affCodes = {
  "amazon" : "tag=cfaddb9f21-20",
  "bestbuy" : "LID=123QWE",
  "walmart" : "WMC=123QWE"
}
