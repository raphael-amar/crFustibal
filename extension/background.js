chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.method == "homeurl")
		sendResponse({
			url : localStorage['homeurl']
		});
	else
		sendResponse({});
	// snub them.
}); 