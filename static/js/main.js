// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.
 
function isRetina() {
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					  (min--moz-device-pixel-ratio: 1.5),\
					  (-o-min-device-pixel-ratio: 3/2),\
					  (min-resolution: 1.5dppx)";
 
	if (window.devicePixelRatio > 1)
		return true;
 
	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
		return true;
 
	return false;
};
 
 
function retina() {
	
	if (!isRetina())
		return;
	
	$("img.2x").map(function(i, image) {
		
		var path = $(image).attr("src");
		
		path = path.replace(".png", "@2x.png");
		path = path.replace(".jpg", "@2x.jpg");
		
		$(image).attr("src", path);
	});
}; 

function animateLogo() {
    var a = document.getElementById("logo");

    //it's important to add an load event listener to the object, as it will load the svg doc asynchronously
    a.addEventListener("load",function(){
        var svgDoc = a.contentDocument; //get the inner DOM of alpha.svg
        var svgRoot  = svgDoc.documentElement;
				
        //now we can query stuff with jquery like this
        //note that we pass in the svgRoot as the context node!
        
        var logoSegment = $(".segment",svgRoot);
        var logoClickArea = $(".clickarea",svgRoot);
                
        logoClickArea.click(function() {
			// logo is clicked
			/* console.log("hah"); */
        })
        
    },false);
}

$(document).ready(function() {
	retina();
	
	animateLogo();
});