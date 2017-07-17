window.onload=function(){
	function drag(obj){
		obj.onmousedown=function(ev){
			var ev = ev ||window.event;
			var disX = ev.clientX - obj.offsetLeft;
			var disY = ev.clientY - obj.offsetTop;
		}
	}
}