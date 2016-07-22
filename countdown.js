var weddingDate = new Date('2017-05-20T21:00:00.000Z');
var countDown_el = document.getElementById('countdown');
countDown_el.innerHTML = Math.floor((weddingDate - (new Date())) / 86400000);
