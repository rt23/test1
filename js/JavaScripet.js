//banner
function banner(){
	var oW = 0;
	var oBanner = document.getElementById("banner");
	var oUl = oBanner.getElementsByTagName('ul')[0];
	var aLis= oUl.children;
	
	oW = document.documentElement.clientWidth || document.body.clientWidth ;
	oUl.style.left  = -(aLis[0].offsetWidth - oW)/2+'px'
	window.onresize=function(){
		oW = document.documentElement.clientWidth || document.body.clientWidth;
		oUl.style.left  = -(aLis[0].offsetWidth - oW)/2+'px';
		oBanner.style.width = oW+'px';
	}	
};
 banner()
 
 //banner图轮播
 	function b(){
			var oBanner = document.getElementById('banner')
			var oPic = document.getElementById('pic');
			var aLis = oPic.children;
			var oBtn = document.getElementById('btn');
			var oLeft = aLis[0].offsetWidth;
			var aA = oBtn.children;
			var Num ='';
			
			var timer = null;
			
			oPic.style.width = aLis[0].offsetWidth*aLis.length+'px';
			
			var i=0;
			aLis[i].style.display='block';
			
			function play(){
				var e=i;			
				i<aLis.length-1?i++:i=0;
				aLis[e].style.display = 'none';
				aA[e].className = '';
				aLis[i].style.display = 'block';
				aA[i].className = 'active';
				
			}
			var timer = setInterval(play,2000)
			
			oBanner.onmouseover=function(){
				clearInterval(timer);				
			}
			oBanner.onmouseout=function(){
				timer=setInterval(play,2000)
			}
			for (var f=0;f<aA.length;f++) {
				aA[f].index = f;
				aA[f].onclick =function(){
					i = this.index;
					for (var f=0;f<aA.length;f++){
						aA[f].className = '';
						aLis[f].style.display = 'none'
					}
					//Num = this.index;
					aA[this.index].className = 'active';
					aLis[this.index].style.display = 'block';
				};
			}
		};
		b();
 
 //无缝轮播
function a(){
			var oView = document.getElementById("view");
			var oImg = document.getElementById('apic');
			var aList =oImg.getElementsByTagName('li');
			var oBtnLeft = document.getElementById("btn_left");
			var oBtnRight = document.getElementById("btn_right");
			
			var timer = null;
			var Num = 3;
			
			
			oImg.innerHTML+=oImg.innerHTML;
			oImg.style.width=aList[0].offsetWidth*aList.length+'px';
			
			timer=setInterval(function(){
		if(oImg.offsetLeft==-(oImg.offsetWidth/2)){
			oImg.style.left=0;
		}
		else if(oImg.offsetLeft>0){
					oImg.style.left=-(oImg.offsetWidth/2)+'px';
				}
				oImg.style.left=oImg.offsetLeft+Num+'px';
		
	},30)
			oBtnLeft.onclick=function(){
				Num=-3;	
			};
	
			oBtnRight.onclick=function(){
				Num=3;		
			};
	
			oImg.onmouseover=function(){
				clearInterval(timer);
			};
			oImg.onmouseout=function(){
				timer=setInterval(function(){
					if(oImg.offsetLeft==-(oImg.offsetWidth/2)){
						oImg.style.left=0;
					}else if(oImg.offsetLeft>0){
						oImg.style.left=-(oImg.offsetWidth/2)+'px';
					}
					oImg.style.left=oImg.offsetLeft+Num+'px';
				},30)
			}
		}
			a();
			