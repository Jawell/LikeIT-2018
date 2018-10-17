import ReactPixel from 'react-facebook-pixel';

export function fbPixel() {
  const advancedMatching = { em: 'fullbestzaporizhzhya@googlegroups.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
  const options = {
    autoConfig: true, 	// set pixel's autoConfig
    debug: false, 		// enable logs
  };
  ReactPixel.init('1162222507267531', advancedMatching, options);
  ReactPixel.pageView();
}