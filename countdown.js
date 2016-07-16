var weddingDate = new Date('2017-05-20T21:00:00.000Z');

function countdown(){
	return Math.floor((weddingDate - (new Date())) / 86400000);
}

var countDown_el = document.getElementById('countdown');
countDown_el.innerHTML = countdown();