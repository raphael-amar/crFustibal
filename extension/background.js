// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

setTimeout(function() {
	var icDIV = document.createElement('div');
	icDIV.setAttribute("style", "position:fixed; z-index:100000; top:0; right:0; width:64px; height:64px; ");
	document.body.appendChild(icDIV);
	icDIV.innerHTML = '<svg style="position:relative; fill:#111; stroke:#fff; stroke-width:.5px; opacity:.8;"> <g transform="scale(2 2)"><path d="M27.812,16l-3.062-3.062V5.625h-2.625v4.688L16,4.188L4.188,16L7,15.933v11.942h17.875V16H27.812zM16,26.167h-5.833v-7H16V26.167zM21.667,23.167h-3.833v-4.042h3.833V23.167z"></path></g></svg>';
	icDIV.onclick = function() {
		window.location = 'http://fustibal.bype.org';
	};
}, 1000);
