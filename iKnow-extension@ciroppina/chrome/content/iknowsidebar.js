var dreadddata = '';
function dreAddData() {

var req = new XMLHttpRequest();
	dreadddata = 
 'http://95.110.198.219:9001/DREADDDATA? HTTP/1.0\n'
+'Content-Length: 10000\n\n'
+'#DREREFERENCE '+ document.getElementById("drereference").value+'\n'
+'#DREFIELD SUMMARY="' + document.getElementById("terms").value+ '"\n'
+'#DREDATE ' + document.getElementById("dredate").value+ '\n'
+'#DRETITLE ' + document.getElementById("dretitle").value+ '\n'
+'#DREFIELD TITOLO="' + document.getElementById("dretitle").value+ '"\n'
+'#DRECONTENT \n' + document.getElementById("drecontent").value+ '\n'
+'#DRETYPE text\n'
+'#DREDBNAME ' + document.getElementById("dredatabases").value+ '\n'
+ drefields
+'#DREENDDOC\n'
+'#DREENDDATANOOP\n\n';
   
    window.alert(dreadddata);
   req.open('POST', 'http://95.110.198.219:9001/DREADDDATA?', false);
	//debug: window.alert('open passed');
   req.send(dreadddata);
	//debug: window.alert('send passed');
   
   if(req.status == 200)  alert('Indexing code: '+req.responseText);
   if(req.status != 200)  alert('Problems occurred, ask iKnow staff');
   //debug: alert('Sending... data to knowledgebase');
   dreadddata = '';
}

var drefields = '';
function dreAddField() {
	drefields += '#DREFIELD ' 
	+ document.getElementById("drefields").value
	+ '="' + document.getElementById("drefield").value + '"\n';
	//debug: window.alert(drefields);
}
function removeAllDREFields() {
	drefields = ''; 
	//debug: window.alert(drefields);
}