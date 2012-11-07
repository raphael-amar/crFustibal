/**
 *    rrCintamani
 *    multi touch rss reader
 *
 *
 *    Copyright (c) 2011, David Olivari
 *    All rights reserved.
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *    RSS Code extract from : Chad Udell http://visualrinse.com/2008/09/24/how-to-build-a-simple-rss-reader-with-jquery/
 */

define([], function() {

	/**
	 * Ajax proxy access
	 * @param url distant server data source url
	 * @param mime expected mime type
	 */
	function XHRProxified(url, mime) {
		// hosted internet php proxy
		return 'http://www.bype.org/proxy.php?mimeType=' + mime + '&url=' + escape(url);
	}

	/**
	 * URL shortening and QRCode generation with private url shortener service
	 * @param longUrl url to shorten
	 * @param target img element to manipulate
	 */
	function shortenUrl(longUrl, imgElt) {
		$.get("http://b1p.eu/yourls-api.php", {
			"format" : "simple",
			"signature" : '5921e52aec',
			"action" : 'shorturl',
			"url" : longUrl
		}, function(response) {
			imgElt.setAttribute('src', response + '.qr');
			$(imgElt).fadeIn(1000).delay(10000).fadeOut(500);
		}, "text");
	}

	/**
	 * @param panel the target DOM element for feed content
	 * @param url rss feed url
	 */
	return {
		getRssFeed : function(panel, url) {
			//clear the content in the div for the next feed.
			panel.empty();

			/* use the JQuery get to grab the URL from the selected item, put the results in to an
			 * argument for parsing in the inline function called when the feed retrieval is complete
			 * Added the proxy prefix path
			 */
			$.get(XHRProxified(url, 'application/xml;charset=UTF-8'), function(d) {

				// Hide the panel waiting for http loading
				panel.parent().hide();
				//find each 'item' in the file and parse it
				$(d).find('item').each(function() {

					//name the current found item this for this particular loop run
					var $item = $(this);
					// grab the post title
					var title = $item.find('title').text();
					// grab the post's URL

					var description = $item.find('description').text().replace("<![CDATA[", "").replace("]]>", "");
					var img = " ";
					try {
						var content = $item.children('content\\:encoded').text();
						var contentNorm = $(content.replace("<![CDATA[", "").replace("]]>", ""));
						var imgElt = contentNorm.find('img')[0];
						// Get the first image in the content
						if (imgElt) {
							imgElt.setAttribute('class', '');
							imgElt.setAttribute('class', 'feedImg');
							img = imgElt.outerHTML;
							// Doesn't work with firefox :-() for CORS reason
						}
					} catch(err) {
						console.log("pb with img search" + err);
					}

					var pubDate = $item.find('pubDate').text();
					var aDiv = $(document.createElement("div")).addClass('entry');
					$(document.createElement("h2")).addClass('postTitle').append(title).appendTo(aDiv);
					//$(document.createElement("em")).addClass('date').append(pubDate).appendTo(aDiv);
					aDiv.append(img);
					$(document.createElement("p")).addClass('description').append(description).appendTo(aDiv);

					$(document.createElement("hr")).appendTo(aDiv);
					//put that feed content on the screen!
					panel.append(aDiv);
				});
				// panel populate and filled make an animation to the default width
				panel.parent().show();
			});

		}
	};
});
