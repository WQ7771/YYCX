var imgIndex = 1;
var img = document.querySelectorAll('.banner img');
var imgLength = img.length;
setInterval(function(){
	if(imgIndex == imgLength ) {
		imgIndex = 0;
	}
	for(var i = 0;i<  imgLength;i++) {
		if(imgIndex == i) {
			img[i].classList.add('on')
		}else {
			img[i].classList.remove('on')
		}
	}
	imgIndex++;
},2000);