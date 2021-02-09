
/*btn_trans*/
$(document).ready(function(){
	$(".btn_trans").click(function(){
		$(".Dash_body").toggleClass("trans");
		$(".dash_aside").toggleClass("trans");
		$(".header_in .logo").toggleClass("trans");
		$(".left_name").toggleClass("trans");
		$(".left_menu").toggleClass("trans");
		$(".top_line").toggleClass("trans");
		$(".map_content").toggleClass("trans");
		$(".share_content").toggleClass("trans");
	})
});


/*left_menu*/
$( document ).ready(function() {
	$('.selb_link').click(function(){
		if(!$(this).hasClass('contact'))
			$(this).removeClass('contact');
			$(this).toggleClass('contact');
			$(this).next(".add_menu").slideToggle().siblings(".add_menu:visible").slideToggle();
	});	
});

/*left menu open*/
$(function() {
    var url = window.location;
    var element = $('.add_menu a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
	}).addClass('backcc').parent().parent().addClass('active').parent();
	
    if (element.is('.left_menu > li')) {
        element.addClass('active');
    }
});



/*toggle button*/
$(function(){
	$(".btn_togg").click(function(){
		$(this).closest(".btbox").toggleClass("on").siblings().removeClass("on");
	});
});


/*실시간관제 리스트click*/
$(document).ready(function(){
	$(".list_conts").click(function(){
		if ($(".td_check").hasClass("on_check")){
			$(".td_check").removeClass("on_check");
			$(this).parents(".td_check").toggleClass("on_check");
		} else {
			$(this).parents(".td_check").toggleClass("on_check");
		}		
	});
});


/*코인버튼라인*/
$(document).ready(function(){
	$(".btn_filt").click(function(){
		if($(".filt_box").hasClass("slct")){
			$(".filt_box").removeClass("slct");
			$(this).parents(".filt_box").toggleClass("slct");
		} else {
			$(this).parents(".filt_box").toggleClass("slct");
		}
	});
})


/*가운데 마커*/
$(document).ready(function(){
	/*$(".img_navi").click(function(){
		if($(".mark_contents").css("display") == "none"){
			$(".mark_contents").addClass("on");
		}
	});*/

	$(".img_navi").click(function(){
		$(".mark_contents").toggleClass("on");
	});

	$(".mark_top .cancel").click(function(){
		$(".mark_contents").removeClass("on");
	});
});

/*오늘쪽리스트와 마커*/
function rst_mint()
{
	$(".img_navi").css('display', 'none');
	$(".navi_mint").css('display', 'block');
}
function rst_pink()
{
	$(".img_navi").css('display', 'none');
	$(".navi_pink").css('display', 'block');
}
function rst_blue()
{
	$(".img_navi").css('display', 'none');
	$(".navi_blue").css('display', 'block');
}
function rst_gray()
{
	$(".img_navi").css('display', 'none');
	$(".navi_gray").css('display', 'block');
}
function rst_yellow()
{
	$(".img_navi").css('display', 'none');
	$(".navi_yellow").css('display', 'block');
}
function rst_red()
{
	$(".img_navi").css('display', 'none');
	$(".navi_red").css('display', 'block');
}


/*관제오른쪽,밑에 리스트 토글*/
$(document).ready(function(){
	$(".btn_go").click(function(){
		$(this).parents(".current_show").toggleClass("show");
	})

	$(".btn_click").click(function(){
		$(this).parents(".show_wrap").toggleClass("con");
	});
})

/*dashboard 탭차트*/
function tab1()
{
	$(".tab_chart2").css('display', 'none');
	$(".tab_chart1").css('display', 'block');
	$(".tabt2").removeClass('on');
	$(".tabt1").addClass('on');
}
function tab2()
{
	$(".tab_chart1").css('display', 'none');
	$(".tab_chart2").css('display', 'block');
	$(".tabt1").removeClass('on');
	$(".tabt2").addClass('on');
}


/*운행개요*/
$(document).ready(function(){
	$(".drive_table1 tbody tr td").click(function(){
		$(".driving_view").addClass("see");

		if($(".drive_table1 tbody tr").hasClass("select")){
			$(".drive_table1 tbody tr").removeClass("select");
			$(this).parents(".drive_table1 tbody tr").addClass("select");
		} else {
			$(this).parents(".drive_table1 tbody tr").addClass("select");
		}
	});
})

$(document).ready(function(){
	$(".drive_table2 tbody tr td").click(function(){
		if($(".drive_table2 tbody tr").hasClass("select")){
			$(".drive_table2 tbody tr").removeClass("select");
			$(this).parents(".drive_table2 tbody tr").addClass("select");
		} else {
			$(this).parents(".drive_table2 tbody tr").addClass("select");
		}
	});
})


function navtab1()
{
	$(".navi_chart02").css('display','none');
	$(".navi_chart01").css('display','block');
	$(".navbt2").removeClass('on');
	$(".navbt1").addClass('on');
}
function navtab2()
{
	$(".navi_chart01").css('display','none');
	$(".navi_chart02").css('display','block');
	$(".navbt1").removeClass('on');
	$(".navbt2").addClass('on');
}


/*인사관리 탭*/
function mnge1()
{
	$(".manage_conts").css('display','none');
	$(".maconts1").css('display','block');
	$(".tab_btn").removeClass('on');
	$(".mgbtn1").addClass('on');
}
function mnge2()
{
	$(".manage_conts").css('display','none');
	$(".maconts2").css('display','block');
	$(".tab_btn").removeClass('on');
	$(".mgbtn2").addClass('on');
}
function mnge3()
{
	$(".manage_conts").css('display','none');
	$(".maconts3").css('display','block');
	$(".tab_btn").removeClass('on');
	$(".mgbtn3").addClass('on');
}
function mnge4()
{
	$(".manage_conts").css('display','none');
	$(".maconts4").css('display','block');
	$(".tab_btn").removeClass('on');
	$(".mgbtn4").addClass('on');
}
function mnge5()
{
	$(".manage_conts").css('display','none');
	$(".maconts5").css('display','block');
	$(".tab_btn").removeClass('on');
	$(".mgbtn5").addClass('on');
}
function mnge6()
{
	$(".manage_conts").css('display','none');
	$(".maconts6").css('display','block');
	$(".tab_btn").removeClass('on');
	$(".mgbtn6").addClass('on');
}function mnge7()
{
	$(".manage_conts").css('display','none');
	$(".maconts7").css('display','block');
	$(".tab_btn").removeClass('on');
	$(".mgbtn7").addClass('on');
}


/*오른쪽 테이블 클릭*/
$(document).ready(function(){
	$(".right_table tbody tr td").click(function(){
		if($(".right_table tbody tr").hasClass("did")){
			$(".right_table tbody tr").removeClass("did");
			$(this).parents(".right_table tbody tr").addClass("did");
		}else{
			$(this).parents(".right_table tbody tr").addClass("did");
		}
	});
})



/*관리 검색결과없음 클릭*/
$(document).ready(function(){
	$(".gray_table .no_result").click(function(){
		alert("데이터가 없습니다.");
	})
})

/*관리모달 버튼보이기*/
$(document).ready(function(){
	$(".btn_step").click(function(){
		if($(".bt_enroll").css("display") == "none"){
			$(".bt_repair").hide();
			$(".bt_enroll").show();
		}
	})

	$(".rep_tr").click(function(){
		if($(".bt_repair").css("display") == "none"){
			$(".bt_enroll").hide();
			$(".bt_repair").show();
		}
	});
})


/*dropdown*/
$(document).ready(function(){
	$(".dropdown-toggle").dropdown();
});


/*tooltip*/
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	
	$('.btn-ex1').tooltip({title: "링크이동 버튼입니다.", container: ".parent"});

	$('.btn-ex2').tooltip({title: "<h1><strong>HTML</strong> inside <code>the</code> <em>tooltip</em></h1>", html: true, placement: "bottom"}); 
});

$(document).ready(function(){
	$('.bt-op-top').tooltip({title: "Hellow", placement: "top"}); 
	$('.bt-op-bottom').tooltip({title: "Hellow", placement: "bottom"}); 
	$('.bt-op-left').tooltip({title: "Hellow", placement: "left"});
	$('.bt-op-right').tooltip({title: "Hellow", placement: "right"});
});

$(document).ready(function(){
	$(".bt-op-show").click(function(){
	  $("[data-toggle='tooltip_op']").tooltip('show');
	});
	$(".bt-op-hide").click(function(){
	  $("[data-toggle='tooltip_op']").tooltip('hide');
	});
	$(".bt-op-toggle").click(function(){
	  $("[data-toggle='tooltip_op']").tooltip('toggle');
	});
	$(".bt-op-dis").click(function(){
	  $("[data-toggle='tooltip_op']").tooltip('dispose');
	});
});
