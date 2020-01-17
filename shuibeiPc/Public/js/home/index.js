$(document).ready(function() {
	$(".mp_speakers_item").height($(".mp_speakers_item").width()), $(".modal_gif").height($(".modal_gif").width()), plyr
		.setup();
	var e = "",
		t = "",
		o = new Custombox.modal({
			content: {
				effect: "fadein",
				target: "#modal"
			}
		}),
		a = new Custombox.modal({
			content: {
				effect: "fadein",
				target: "#index_modal"
			}
		}),
		n = new Custombox.modal({
			content: {
				effect: "fadein",
				target: "#login_modal"
			}
		}),
		s = new Custombox.modal({
			content: {
				effect: "fadein",
				target: "#v_modal"
			}
		});
	new Custombox.modal({
		content: {
			effect: "fadein",
			target: "#join_modal"
		}
	});
	document.addEventListener("custombox:overlay:complete", function() {
		var o = $(e);
		if ($("#modal div , #modal p , #v_modal div , #v_modal p").css("color", "#fff"), $(e + " .modal_close").css(
				"left", o.width() + o.offset().left + 30), "#index_modal" == e) {
			new Swiper(".swiper-container", {
				autoplay: {
					delay: 2e3,
					stopOnLastSlide: !1,
					disableOnInteraction: !0
				},
				loop: !0,
				grabCursor: !0,
				navigation: {
					nextEl: ".modal-swiper-button-next",
					prevEl: ".modal-swiper-button-prev"
				}
			})
		} else "#login_modal" == e && $(".login_m_img").attr("src", t)
	}), $(".w_btn").on("click", function() {
		s.open(), e = "#v_modal"
	}), $(".l_m_btn").on("click", function() {
		n.open(), e = "#login_modal", t = $(this).data("img")
	}), $(".ps_close").on("click", function() {
		$(".ps_modal").fadeOut()
	});
	new Vue({
		el: "#join_modal",
		data: {
			name: "",
			type: "机构合作",
			company: "",
			tel: "",
			mark: "",
			is_sub: !1
		},
		mounted: function() {},
		methods: {
			joinSubmit: function() {
				var e = this;
				if (!e.is_sub) {
					e.is_sub = !0;
					var t = {
						name: e.name.trim(),
						tel: e.tel.trim(),
						mark: e.mark.trim(),
						company: e.company.trim(),
						type: e.type,
						token: $("#token").val(),
						timestape: $("#timestape").val()
					};
					$.post("/2018/ajax/joinSubmit", t, function(t) {
						0 == t.status ? (alert("信息提交成功！我们将在五个工作日内给予消息反馈。"), Custombox.modal.close()) : alert(t.message), e.is_sub = !
							1
					})
				}
			}
		}
	}), new Vue({
		el: "#v_modal",
		data: {
			name: "",
			tel: "",
			is_v_sub: !1
		},
		mounted: function() {},
		methods: {
			vSubmit: function() {
				var e = this;
				if (!e.is_v_sub) {
					e.is_v_sub = !0;
					var t = {
						name: e.name.trim(),
						tel: e.tel.trim(),
						token: $("#token").val(),
						timestape: $("#timestape").val()
					};
					if ("" == t.name) return void alert("请输入完整信息");
					$.post("/2018/ajax/vSubmit", t, function(t) {
						0 == t.status ? (alert("信息提交成功！我们将在五个工作日内给予消息反馈。"), e.name = "", e.tel = "") : alert(t.message), e.is_v_sub = !
							1
					})
				}
			}
		}
	}), new Vue({
		el: "#mp_speakers",
		data: {
			items: []
		},
		mounted: function() {},
		methods: {
			getSpeakers: function(t) {
				var a = this;
				a.items = [];
				var n = {
					guid: t,
					token: $("#token").val(),
					timestape: $("#timestape").val()
				};
				$.post("/2018/ajax/getSpeakers", n, function(t) {
					if (0 == t.status) {
						a.items = t.data;
						"en-us" == $("#lang").val() && (a.items.name_html = a.items.name_html_en, a.items.job = a.items.job_en, a.items
							.company = a.items.company_en, a.items.introduce = a.items.introduce_en), o.open(), e = "#modal"
					}
				})
			}
		}
	}), new Vue({
		el: "#index_page_main",
		data: {
			items: []
		},
		mounted: function() {},
		methods: {
			getIndexModal: function(t) {
				var o = this,
					n = {
						mid: t,
						token: $("#token").val(),
						timestape: $("#timestape").val()
					};
				$.post("/2018/ajax/getModal", n, function(t) {
					if (0 == t.status) {
						var n = $("#lang").val();
						o.items = t.data, "en-us" == n && (o.items.name = o.items.name_en, o.items.title = o.items.title_en, o.items
							.info = o.items.info_en), a.open(), e = "#index_modal"
					}
				})
			}
		}
	});
	$(".h_btn").on("click", function() {
		$(this).html("<br/>"), $(".h_text").animate({
			height: "200px"
		})
	}), $("#sub_btn").on("click", function() {
		var e = {
			tel: $("#tel").val().trim(),
			password: $("#psd").val().trim(),
			token: $("#token").val(),
			timestape: $("#timestape").val()
		};
		$.post("/2018/ajax/login", e, function(e) {
			0 == e.status ? location.reload() : alert(e.message)
		})
	});
	var c = $.superscrollorama({
		triggerAtCenter: !1,
		playoutAnimations: !0
	});
	$(".park_info").on("click", function() {
		var e = $(this),
			t = e.data("show");
		t && ($(".park_info").removeClass("park_info_active").css("color", "#fff"), e.addClass("park_info_active").css(
			"color", "#0F9891"), $(".park_tab_active").fadeOut(100, function() {
			$(".park_tab_active").removeClass("park_tab_active"), $(t).fadeIn().addClass("park_tab_active")
		}))
	}), $(".master_info").on("click", function() {
		var e = $(this),
			t = e.data("show");
		$(".master_info").removeClass("master_info_active").css("color", "#fff"), e.addClass("master_info_active").css(
			"color", "#E44C53"), $(".master_tab_active").fadeOut(100, function() {
			$(".master_tab_active").removeClass("master_tab_active"), $(t).fadeIn().addClass("master_tab_active")
		})
	}), $(".a_load_btn").on("click", function() {
		var e = $(this),
			t = e.data("show");
		$(".a_load_btn").removeClass("a_load_active").css("color", "#000"), e.addClass("a_load_active").css("color",
			"#000"), $(".a_tab_active").fadeOut(100, function() {
			$(".a_tab_active").removeClass("a_tab_active"), $(t).fadeIn().addClass("a_tab_active")
		})
	}), $(".counter").countUp({
		delay: 5,
		time: 1e3
	}), $(".menu_a").on("click", function() {
		var e = $(this).data("href");
		$("html,body").animate({
			scrollTop: $(e).offset().top - 200
		}, $(this).data("s"))
	}), $("body , a , .p_change , div").css("color", "#fff"), c.addTween(100, TweenMax.to($("#page-header"), .2, {
		css: {
			opacity: 0
		}
	}));
	var i = $("#index_page_main .mp_content").offset().top;
	c.addTween(i, TweenMax.to($("html"), .2, {
		css: {
			backgroundColor: "#0e4b76"
		}
	})),
	c.addTween(i - 700, TweenMax.to($("#index_page_main .mp_content .content_title"), .2, {
		css: {
			bottom: "0px",
			opacity: 1
		}
	})), c.addTween(i - 500, TweenMax.to($("#index_page_main .mp_content .content_text"), .2, {
		css: {
			bottom: "0px",
			opacity: 1
		}
	})), c.addTween($("#index_page_main .mp_content").offset().top - 300, TweenMax.to($(".mp_module"), .2, {
		css: {
			bottom: "0px",
			opacity: 1
		}
	})), c.addTween(i - 500, TweenMax.to($("#menu_li_8 a"), .2, {
		css: {
			color: "#0068B2"
		}
	}));
	var _ = $("#mp_speakers").offset().top - 500;
	c.addTween(_, TweenMax.to($("html"), .2, {
		css: {
			backgroundColor: "#0c476d !important"
		}
	})), c.addTween(_, TweenMax.to($(
		"#menu_ul a , .p_change,#mp_speakers .content_title,#master_class .content_title , .gt_black, .mp_speakers_title"
	), .2, {
		css: {
			color: "fff"
		}
	})), c.addTween(_, TweenMax.to($("#white_logo"), .2, {
		css: {
			opacity: 0
		}
	})), c.addTween(_, TweenMax.to($("#black_logo"), .2, {
		css: {
			opacity: 1
		}
	})), c.addTween(_, TweenMax.to($("#menu_li_2 a"), .2, {
		css: {
			color: "#fff"
		}
	})), c.addTween(_, TweenMax.to($(".mp_speakers_info p"), .2, {
		css: {
			color: "#fff"
		}
	})), c.addTween(_ - 200, TweenMax.to($("#mp_speakers .content_title"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween($("#mp_speakers_1").offset().top - 800, TweenMax.to($("#mp_speakers_1"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween($("#mp_speakers_2").offset().top - 800, TweenMax.to($("#mp_speakers_2"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween($("#mp_speakers_3").offset().top - 800, TweenMax.to($("#mp_speakers_3"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween($("#mp_speakers_4").offset().top - 800, TweenMax.to($("#mp_speakers_4"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween($("#mp_speakers_5").offset().top - 800, TweenMax.to($("#mp_speakers_5"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween($("#mp_speakers_6").offset().top - 800, TweenMax.to($("#mp_speakers_6"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	}));
	var d = $("#master_class").offset().top - 500;
	c.addTween(d, TweenMax.to($("html"), .2, {
		css: {
			backgroundColor: "#c8502f"
		}
	})), c.addTween(d, TweenMax.to($("a , .p_change , .mp_speakers_info p, .gt_black , #master_class .content_title"),
		.2, {
			css: {
				color: "#fff"
			}
		})), c.addTween(d, TweenMax.to($("#white_logo"), .2, {
		css: {
			opacity: 1
		}
	})), c.addTween(d, TweenMax.to($("#black_logo"), .2, {
		css: {
			opacity: 0
		}
	})), c.addTween(d, TweenMax.to($("#menu_li_3 a"), .2, {
		css: {
			color: "#fff"
		}
	})), c.addTween(d, TweenMax.to($(".schedule_line"), .2, {
		css: {
//			backgroundColor: "#fff"
		}
	})), c.addTween(d - 200, TweenMax.to($("#master_class .content_title"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(d, TweenMax.to($("#master_class .content_text"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(d + 200, TweenMax.to($(".master_content_left"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(d + 250, TweenMax.to($(".master_content_right"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	}));
	var l = $("#mind_park").offset().top - 500;
	 c.addTween(l, TweenMax.to($("html"), .2, {
		css: {
			backgroundColor: "#2b91a1"
		}
	})),
	c.addTween(l, TweenMax.to($("#menu_ul li a , #mind_park .content_title"), .2, {
		css: {
			color: "#fff"
		}
	})), c.addTween(l, TweenMax.to($("#menu_li_4 a"), .2, {
		css: {
			color: "#fff"
		}
	})), c.addTween(l - 300, TweenMax.to($("#mind_park .content_title"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(l - 200, TweenMax.to($("#mind_park .content_text"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(l + 200, TweenMax.to($(".park_content_left"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(l + 250, TweenMax.to($(".park_content_right"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	}));
	var m = $("#schedule").offset().top - 500;
	c.addTween(m, TweenMax.to($(".current a"), .2, {
		css: {
			color: "#fff"
		}
	})), c.addTween(m, TweenMax.to($("html"), .2, {
		css: {
			backgroundColor: "#0c476d"
		}
	})), c.addTween(m, TweenMax.to($("#menu_ul a , .p_change, .content_title, .gt_black, p, #schedule_info_table"), .2, {
		css: {
			color: "#fff"
		}
	})), c.addTween(m, TweenMax.to($("#white_logo"), .2, {
		css: {
			opacity: 0
		}
	})), c.addTween(m, TweenMax.to($("#black_logo"), .2, {
		css: {
			opacity: 1
		}
	})), c.addTween(m, TweenMax.to($("#menu_li_2 a"), .2, {
		css: {
			color: "red"
		}
	})), c.addTween(m - 200, TweenMax.to($("#schedule .content_title"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(m + 100, TweenMax.to($("#schedule_table"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	}));
	var p = $("#footer").offset().top - 500,
		r = ($(".footer_sign").offset().top, $(".footer_content_3").offset().top - 500);
	c.addTween(p, TweenMax.to($("html"), .2, {
		css: {
			backgroundColor: "#2b91a1"
		}
	})), c.addTween(p, TweenMax.to($(".j_l_title"), .2, {
		css: {
			color: "#000"
		}
	})), c.addTween(p, TweenMax.to($(
		"a , .p_change, .gt_black, .footer_content_1 .content_title , .footer_content_3 , .footer_content_3 .content_title , .footer_content_2 .content_title, .footer_content_1 .content_text , .footer_content_3 .content_text , .footer_content_2 .content_text , .address_title , #schedule_info_table, .join_content p , .join_content .content_title , .join_content .content_text , #join"
	), .2, {
		css: {
			color: "#fff !important"
		}
	})), c.addTween(p, TweenMax.to($(".ticket_body , .ticket_body p , .ticket_body div , .ticket_body a , .a_load_btn"),
		.2, {
			css: {
				color: "#000"
			}
		})), c.addTween(p, TweenMax.to($("#white_logo"), .2, {
		css: {
			opacity: 1
		}
	})), c.addTween(p, TweenMax.to($("#black_logo"), .2, {
		css: {
			opacity: 0
		}
	})), c.addTween(p, TweenMax.to($(".schedule_line"), .2, {
		css: {
//			backgroundColor: "#fff"
		}
	})), c.addTween(p - 200, TweenMax.to($(".address_title"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(p - 200, TweenMax.to($(".footer_address"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(p + 100, TweenMax.to($(".footer_map"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween($("#join").offset().top - 500, TweenMax.to($("#menu_li_6 a"), .2, {
		css: {
			color: "#fff"
		}
	})), c.addTween(r + 100, TweenMax.to($(".footer_content_3 .content_title"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(r + 200, TweenMax.to($(".footer_content_3 .content_text"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(r + 300, TweenMax.to($(".footer_content_3 .content_web"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(r + 450, TweenMax.to($(".footer_content_1 .content_title"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(r + 600, TweenMax.to($(".footer_content_1 .content_text"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(r + 700, TweenMax.to($(".footer_content_1 .content_web"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(r - 500, TweenMax.to($("#menu_li_8 a"), .2, {
		css: {
			color: "yellow"
		}
	})), c.addTween(r + 900, TweenMax.to($(".footer_content_2 .content_title"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(r + 1e3, TweenMax.to($(".footer_content_2 .content_text"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(r + 1200, TweenMax.to($(".footer_content_2 .content_web"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	}));
	var zjy = $("#GUIDE").offset().top - 500;
	 c.addTween(zjy, TweenMax.to($("html"), .2, {
		css: {
			backgroundColor: "#295f44 !important"
		}
	})),
	c.addTween(zjy, TweenMax.to($("#menu_ul li a , #GUIDE .content_title"), .2, {
		css: {
			color: "#fff"
		}
	})), c.addTween(zjy, TweenMax.to($("#menu_li_7 a"), .2, {
		css: {
			color: "#fff"
		}
	})), c.addTween(zjy - 300, TweenMax.to($("#GUIDE .content_title"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(zjy - 200, TweenMax.to($("#GUIDE .content_text"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(zjy + 200, TweenMax.to($(".park_content_left"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(zjy + 250, TweenMax.to($(".park_content_right"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	}));
	var media = $("#media").offset().top - 500;
	 c.addTween(media, TweenMax.to($("html"), .2, {
		css: {
			// backgroundColor: "none"
		}
	})),
	c.addTween(media, TweenMax.to($("#menu_ul li a , #GUIDE .content_title"), .2, {
		css: {
			color: "#fff"
		}
	})), c.addTween(media, TweenMax.to($("#menu_li_8 a"), .2, {
		css: {
			color: "#fff"
		}
	})), c.addTween(media - 300, TweenMax.to($("#GUIDE .content_title"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(media - 200, TweenMax.to($("#GUIDE .content_text"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(media + 200, TweenMax.to($(".park_content_left"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	})), c.addTween(media + 250, TweenMax.to($(".park_content_right"), .2, {
		css: {
			opacity: 1,
			bottom: "0px"
		}
	}));
	var news = $("#news").offset().top - 500;
	 c.addTween(media, TweenMax.to($("html"), .2, {
		css: {
			// backgroundColor: "none"
		}
	})),
	c.addTween(news, TweenMax.to($("#menu_ul li a , #news .content_title"), .2, {
		css: {
			color: "#fff"
		}
	})), c.addTween(news, TweenMax.to($("#menu_li_8 a"), .2, {
		css: {
			color: "#fff"
		}
	})), c.addTween(news - 300, TweenMax.to($("#news .content_text"), .2, {
		css: {
			opacity: 1,
		}
	})), c.addTween(news - 200, TweenMax.to($("#news .content_text"), .2, {
		css: {
			opacity: 1,
		}
	}))
	new Swiper(".master_swiper .swiper-container", {
		autoplay: {
			delay: 2e3,
			stopOnLastSlide: !1,
			disableOnInteraction: !0
		},
		loop: !0,
		grabCursor: !0,
		navigation: {
			nextEl: ".master_swiper .modal-swiper-button-next",
			prevEl: ".master_swiper .modal-swiper-button-prev"
		}
	});
	
	$(window).scrollTop() > 1e3 && (window.location.href = "/")
	
});
