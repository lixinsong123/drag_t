
	function drag(obj){
		obj.onmousedown=function(ev){
			var ev = ev ||window.event;
			var disX = ev.clientX - obj.offsetLeft;
			var disY = ev.clientY - obj.offsetTop;
			document.onmousemove=function(ev){
					var ev = ev||window.event;
					obj.style.left=ev.clientX-disX+"px";
					obj.style.top =ev.clientY-disY+"px";
			}
			document.onmouseup=function(){
				document.onmousemove=document.onmouseup=null;
			}
		}
	}
