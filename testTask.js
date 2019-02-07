var myObj;
function Elem() {
    var div = document.createElement('div');
     div.className = 'wrap';
    var img = document.createElement('img');
    img.src = myObj[i].imageUrl;
    var link = document.createElement('a');
    link.className = 'link';
     link.href = '';
    link.appendChild(img);
    div.appendChild(link);
    demo.appendChild(div);
    link.onclick = function(event) {
        event.preventDefault();     
     }
}
// var backgr = document.createElement('div');
//     backgr.id = 'backgr';
//     div.appendChild(backgr);

var xhttp = new XMLHttpRequest();

    xhttp.open("GET", 'test.json', true);
    xhttp.send();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
       console.log(myObj);
        var demo = document.getElementById("demo");
       for(i=0; i<myObj.length; i+=1) {
            var elem = new Elem();
       }
      
    }

};





