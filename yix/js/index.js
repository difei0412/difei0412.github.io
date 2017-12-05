/*字体的显示隐藏*/
(function(){
    var $serv = $("#serv"),
        $pan = $serv.find(".hhr span"),
        $bi = $pan.find("b"),
        $pi = $pan.find("b i"),
        $em = $pan.find("b em"),
        length = $pan.length,
        height;

    auto();
    function auto(){
        var arr = [];
        $pan.each(function(i){
            arr.push($pan.eq(i).width());
            height = $pan.eq(0).height();
            for (var j = 0; j < length; j++) {
                if (!arr[j])return
            }
            for (var x = 0; x < length; x++) {
                $pan.eq(x).css({"width":arr[x],"height":height});
                $bi.eq(x).css({"position":"absolute","left":-arr[x],"width":arr[x]*2,"height":height});
                $bi.eq(x).show();
                $em.eq(x).css({"width":arr[x]});
                $pi.eq(x).css({"width":0,"height":height});
                (function(x){
                    $bi.eq(x).animate({
                        left: 0
                    },700,"easeInQuart",function(){
                        $pi.eq(x).delay(500).animate({
                            "width":arr[x]
                        },700,"easeInQuart",function(){
                            $bi.eq(x).delay(2000).fadeOut(1500,function(){
                                for (var j = 0; j < length; j++) {
                                    if (!($bi.eq(j).css("display") === "none"))return
                                }
                                auto();
                            });
                        })
                    })
                })(x);

            }

        });
    }

})();
(function(){
    $('.index_don ul li .img-box').hover(function(){
    	$('.index_don ul li .img-box').removeClass('show');
    	$(this).addClass('show');
    },function(){
//  	$(this).removeClass('show');
    	
    	$('.index_don ul li .img-box').removeClass('show');
    	$(this).addClass('show');
//  	$('.index_don ul li .img-box').eq(0).addClass('show');
    	
    })

})();
/*点击显示相应的内容*/
(function(){
    var $tli = $(".index_our_left ul li"),
        $img = $(".index_our_right li"),
        a = 0;
    $img.mouseenter(function(){
        var index = $(this).index();
        if (index !== a){
            $img.eq(a).removeClass("head");
            $tli.eq(a).stop().fadeOut();
            a = index;
            $img.eq(index).addClass("head");
            $tli.eq(index).stop().fadeIn(1000);
        }
    })
})();

(function(){
    var oleft = document.getElementsByClassName("vice")[0].getElementsByClassName("left")[0],
        op = oleft.getElementsByTagName("p"),
        length = op.length,
        arr = ["没看够? 别着急,我们还有 →"]
        oleftTop = oscroll(oleft).top,
        panduan = true,
        scrollT = (document.documentElement.scrollTop || document.body.scrollTop)+document.documentElement.clientHeight;
	    if (document.addEventListener){
	        window.addEventListener("scroll",scroll,false)
	    }else{
	        window.attachEvent("onscroll",scroll);
	    }
	    function scroll(){
	        scrollT = (document.documentElement.scrollTop || document.body.scrollTop)+document.documentElement.clientHeight;
	        if (oleftTop <= scrollT && panduan) {
	            change();
	            remove(window, "scroll", scroll);
	            panduan = false;
	        }
	
	    }
    function change() {
        for (var i = 0; i < length; i++) {
            op[i].index = 0;
            op[i].a = "";
            op[i].innerHTML = "";
            op[i].timer = setInterval(function (i) {
                if (arr[i].length > op[i].index) {
                    op[i].a += arr[i].charAt(op[i].index);
                    op[i].innerHTML = op[i].a + "_";
                    op[i].index++;
                } else {
                    op[i].innerHTML = op[i].innerHTML.slice(0, -1);
                    op[i].innerHTML = "没看够? 别着急,我们还有 →";
                    clearInterval(op[i].timer);
                    for (var i = 0,alength = op.length; i < alength; i++) {
                        if (op[i].innerHTML == ""){
                            return;
                        }else{
                        	setTimeout(change,1500);
                        }
                    }
                    
                }
            }, 150, i);
        }
    }
    function oscroll(obj){
        var json = {
            left: 0,
            top : 0
        };
        while(obj !== document.body){
            json.top += obj.offsetTop;
            json.left = obj.offsetLeft;
            obj = obj.offsetParent;
        }
        return json;
    }
    function remove(obj,name,func){
        if(obj.attachEvent){
            obj.detachEvent("on"+name,func)
        }else{
            obj.removeEventListener(name,func,false)
        }
    }
})();

(function(){
	var ui = $('.index_lian1_1 li').length-5
	i = 0;
	timer = setInterval(function(){
		if(i<ui){
			i++;
			ki = i*-180;
			$('.index_lian1_1').animate({'marginLeft':ki+'px'});
		}else{
			i--;
			ki = i*-180;
			$('.index_lian1_1').animate({'marginLeft':ki+'px'});
			
		}
		
	},1000)
	
	var ni = $('.index_lian2_2 li').length-6
	f = 0;
	timer = setInterval(function(){
		if(f<ni){
			f++;
			ki = f*-180;
			$('.index_lian2_2').animate({'marginLeft':ki+'px'});
		}else{
			f--;
			ki = f*-180;
			$('.index_lian2_2').animate({'marginLeft':ki+'px'});
			
		}
		
	},1000)
	
	
	var ti = $('.index_lian3_3 li').length-5
	k = 0;
	timer = setInterval(function(){
		if(k<ti){
			k++;
			ki = k*-180;
			$('.index_lian3_3').animate({'marginLeft':ki+'px'});
		}else{
			k--;
			ki = k*-180;
			$('.index_lian3_3').animate({'marginLeft':ki+'px'});
			
		}
		
	},1000)
	
	
})();
(function(){
//	$('#diyi').text('5000')
//	var t = 10;
//	Time = setInterval(function(){
//		t+=10;
//		if(t<=5000){
//			$('#diyi').text(t)
//		}else{
//			clearInterval(Time)
//		}
//		
//	},1)
//	$('#dier').text(1000)
//	var l = 10;
//	Ti = setInterval(function(){
//		l+=10;
//		if(l<=1000){
//			$('#dier').text(l)
//		}else{
//			clearInterval(Ti)
//			var l = 10;
//		}
//		
//	},15)
//	$('#disan').text(150)
//	var h = 10;
//	Tim = setInterval(function(){
//		h+=10;
//		if(h<=150){
//			$('#disan').text(h)
//		}else{
//			clearInterval(Tim)
//		}
//		
//	},200)
//	$('#disi').text(5000)
//	var d = 10;
//	ni = setInterval(function(){
//		d+=10;
//		if(d<=5000){
//			$('#disi').text(d)
//		}else{
//			clearInterval(ni)
//		}
//		
//	},1)
})();
(function(){
	$('.top').click(function(){
		$(window).scrollTop(0)
	})
})();
