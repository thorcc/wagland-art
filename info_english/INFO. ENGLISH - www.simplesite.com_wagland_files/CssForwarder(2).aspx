.user_menu_container {
	width:169px; padding:10px 0;
	overflow: hidden;
}
.user_menu_container ul {
	width: 169px;
	margin: 0; padding: 0;
	list-style-type: none;
}
.user_menu_container ul li {
	margin-bottom:1px; 
	background:url(/userPages/images/common/menu/squared/menu_item_background.png) left top no-repeat;
	font-size:0; line-height:0;
}
.user_menu_container ul li.selected,
.user_menu_container ul li.menu_selected_opened_item {
	background:url(/userPages/images/common/menu/squared/menu_selected_item_background.png) left top no-repeat;
}
.user_menu_container ul li div {
	height:28px; 
}
.user_menu_container ul li a {
	display:table; padding-left:24px; padding-right:17px;
	width:128px; height:28px; 
	font-size:11px; color:#fff; text-decoration:none; line-height:14px;
	outline-style:none;
}
.user_menu_container ul li .text_holder {
	display:table-cell;
	vertical-align:middle;
}
.user_menu_container ul li .text_holder span {
	display:block; width:128px; overflow:hidden; 
	word-wrap:break-word;
}


.user_menu_container ul li ul {
	display:block;
	margin-bottom:0px;
}
.user_menu_container ul li ul li {
	background:url(/userPages/images/common/menu/squared/submenu_item_background.png) left top no-repeat;
}
.user_menu_container ul li ul li.selected,
.user_menu_container ul li ul li.submenu_selected_single_item,
.user_menu_container ul li ul li.submenu_selected_first_item,
.user_menu_container ul li ul li.submenu_selected_last_item,
.user_menu_container ul li ul li.submenu_selected_latest_item,
.user_menu_container ul li ul li.submenu_selected_single_latest_item {
	background:url(/userPages/images/common/menu/squared/submenu_selected_item_background.png) left top no-repeat;
}
.user_menu_container ul li ul li div {
	margin-left:10px;
}
.user_menu_container ul li ul li a {
	width:128px; padding-right:7px;
}


.user_menu_container .closed {
	background:url(/userPages/images/common/menu/squared/arrow_collapsed.gif) 155px center no-repeat;
}
.user_menu_container .opened {
	background:url(/userPages/images/common/menu/squared/arrow_expanded.gif) 155px center no-repeat;
}


/* counter styles for classic menu */
.counter_container {
	margin: 20px 5px 0;
	background: url(/userPages/images/common/counter/counter_bg_squared.png) no-repeat 0 0;
}
.counter_container .counter_header {
	padding: 5px;
}
.counter_container .counter_header h3 {
	font-size: 11px; font-weight: normal; color: #fff;
	text-align: center; line-height: 12px;
}
.counter_container .counter_content {
	height: 22px;
	padding: 0 0 5px 12px;
}
.counter_container .counter_content img {
	float: left;
	margin-right: 2px;
}
