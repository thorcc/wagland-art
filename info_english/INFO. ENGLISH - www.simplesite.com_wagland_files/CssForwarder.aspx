.captcha_button {
    padding-right: 28px;
    height:200px;
}

.captcha_style {
    margin-bottom:20px;
    margin-top:20px;
}

a.StdBtnHvid{
	color: #FFFFFF;
	text-decoration:none;
	font-size: 10px;
}

a.StdBtnHvid:hover{
	color: #FFFFFF;
	text-decoration:none;
	font-size: 10px;	
}

a.StdBtnSort{
	color: #000000;
	text-decoration:none;
	font-size: 10px;	
}

a.StdBtnSort:hover{
	color: #000000;
	text-decoration:none;
	font-size: 10px;	
}

.btn_std * {
	margin: 0px; 
	padding:0px;
}

.btn_fat * {
	margin: 0px; 
	padding:0px;
}

.btn_std {
	text-decoration: none;
	font-size: 10px;
	font-family: Trebuchet MS;
	font-weight: normal;
	text-align: left;
	color: #ffffff;
	cursor:pointer; 
	line-height:17px;
	background:url(/pages/art/standard_knapper/knap.gif);
	background-position:left bottom;
	background-repeat: no-repeat;
	vertical-align:middle;
	display:block;
	text-decoration:none;
	height:18px;
	overflow:hidden;
	width:106px;
}

.btn_std span { 
	background:url(/pages/art/standard_knapper/knap.gif);
	background-position:right bottom;
	background-repeat: no-repeat;
	height:18px;
	margin-left:3px;
	line-height:17px;
	display:block;
}


a.btn_std:hover {color: #ffffff;background-position:left center;}
a.btn_std:hover span {color: #ffffff;background-position:right center;}

a.btn_sel {color: #000000;background-position:left top;}
.btn_sel span  {color: #000000;background-position:right top;}
a.btn_sel:hover {color: #000000;background-position:left top;}
a.btn_sel:hover span {color: #000000;background-position:right top;}

.btn_double { width:233px; }
.btn_medium { width:164px; }
.btn_small { width: 79px; }
.btn_bold span { font-weight: bold; }
.btn_center span { text-align: center; }

.btn_fat {
	background-image: url(/pages/art/standard_knapper/knap_green_fat.gif);
	height:41px;
}

.btn_fat span { 
	background-image: url(/pages/art/standard_knapper/knap_green_fat.gif);
	height:41px;
}

.btn_blue, .btn_blue span { background-image: url(/pages/art/standard_knapper/knap_blue.gif); }
.btn_green, .btn_green span { background-image: url(/pages/art/standard_knapper/knap_green.gif); }
.btn_grey, .btn_grey span { background-image: url(/pages/art/standard_knapper/knap_grey.gif); }
.btn_red, .btn_red span { background-image: url(/pages/art/standard_knapper/knap_red.gif); }

.btn_blue_fat, .btn_blue_fat span { background-image: url(/pages/art/standard_knapper/knap_blue_fat.gif); }
.btn_green_fat, .btn_green_fat span { background-image: url(/pages/art/standard_knapper/knap_green_fat.gif); }
.btn_grey_fat, .btn_grey_fat span { background-image: url(/pages/art/standard_knapper/knap_grey_fat.gif); }
.btn_red_fat, .btn_red_fat span { background-image: url(/pages/art/standard_knapper/knap_red_fat.gif); }


.new_blue_btn {
    background: #3498db;
	border-radius: 4px;
	overflow: hidden;
	box-shadow: 1px 1px 2px #666;
	line-height: 30px;
    font-weight: bold;
	color: #ffffff;
	display: inline-block;
	padding: 0 16px;
	text-decoration: none;
}

/* image upload button's styles */
.upload_image_button {
	width: 100px;
	margin-top: 10px;
	text-align: center; 
}


/* global style for variable width buttons */
button.var_btn_std, 
button.var_btn_std span, 
a.var_btn_std, 
a.var_btn_std span {
	height: 25px;
	background-image: url(/pages/art/var_standard_buttons/blue_button.png); background-repeat: no-repeat;
	color: #fff; font-size: 14px; font-weight: bold; text-decoration: none; line-height: 22px;	
}
button.var_btn_std,
a.var_btn_std {
	display: inline-block;
	padding-right: 20px;
	background-position: right -25px;
	cursor: pointer;
}
button.var_btn_std:hover,
a.var_btn_std:hover {
	background-position: right -75px;
	color: #fff; font-size: 14px; font-weight: bold; text-decoration: none; line-height: 22px;
}
button.var_btn_std_disabled,
button.var_btn_std_disabled:hover
button.var_btn_std[disabled],
a.var_btn_std_disabled, 
a.var_btn_std[disabled],
a.var_btn_std_disabled:hover {
	cursor: default;
	background-position: right -125px;
}
button.var_btn_std span,
a.var_btn_std span {
	display: block;
	padding-left: 18px;
	background-position: left 0;
}
button.var_btn_std:hover span,
a.var_btn_std:hover span {
	background-position: left -50px;
}
button.var_btn_std_disabled span,
button.var_btn_std_disabled:hover span
button.var_btn_std[disabled] span,
a.var_btn_std_disabled span,
a.var_btn_std[disabled] span, 
a.var_btn_std_disabled:hover span {
	background-position: left -100px;
}
* html button.var_btn_std span,
* html a.var_btn_std span {
	display: inline;
	zoom: 1;
}


button.var_btn_blue, button.var_btn_blue span, a.var_btn_blue, a.var_btn_blue span { background-image: url(/pages/art/var_standard_buttons/blue_button.png); }
button.var_btn_black, button.var_btn_black span, a.var_btn_black, a.var_btn_black span { background-image: url(/pages/art/var_standard_buttons/black_button.png); }
button.var_btn_green, button.var_btn_green span, a.var_btn_green, a.var_btn_green span { background-image: url(/pages/art/var_standard_buttons/green_button.png); }
button.var_btn_red, button.var_btn_red span, a.var_btn_red, a.var_btn_red span { background-image: url(/pages/art/var_standard_buttons/red_button.png); }
button.var_btn_yellow, button.var_btn_yellow span, a.var_btn_yellow, a.var_btn_yellow span { background-image: url(/pages/art/var_standard_buttons/yellow_button.png); }
button.var_btn_orange, button.var_btn_orange span, a.var_btn_orange, a.var_btn_orange span { background-image: url(/pages/art/var_standard_buttons/orange_button.png); }


button.var_btn_red-new,
a.var_btn_red-new  {
	padding-right: 12px; 
	background-position: 100% -33px;
	margin-right: 16px; 
}

button.var_btn_red-new span, a.var_btn_red-new span { padding-left: 12px; }
button.var_btn_red-new, button.var_btn_red-new span, a.var_btn_red-new, a.var_btn_red-new span {
	background-image: url(/pages/art/var_standard_buttons/red_button_old.png); 
	height: 30px;
	line-height: 30px;
}
button.var_btn_red-new:hover, a.var_btn_red-new:hover { background-position: 100% -33px; }
button.var_btn_red-new:hover span, a.var_btn_red-new:hover span {  background-position: 0 0; }

button.var_btn_gray, a.var_btn_gray {  }
button.var_btn_gray span, a.var_btn_gray span { padding-left: 12px; }
button.var_btn_gray, 
button.var_btn_gray span,
a.var_btn_gray, 
a.var_btn_gray span {
	background-image: url(/pages/art/var_standard_buttons/gray_button.png);
	color: #393939;
	font-weight: normal;
	font-size: 12px;
}
button.var_btn_gray[disabled], button.var_btn_std_disabled.var_btn_gray, a.var_btn_gray[disabled], a.var_btn_std_disabled.var_btn_gray, a.var_btn_gray.var_btn_std_disabled:hover { cursor: default; }
button.var_btn_gray[disabled] span, button.var_btn_std_disabled.var_btn_gray span, a.var_btn_gray[disabled] span a.var_btn_std_disabled.var_btn_gray span, a.var_btn_gray.var_btn_std_disabled:hover span { color: #888; }


button.var_btn_green_arrow, button.var_btn_green_arrow span, a.var_btn_green_arrow, a.var_btn_green_arrow span { background-image: url(/pages/art/var_standard_buttons/green_arrow_button.png); }
button.var_btn_green_arrow span, a.var_btn_green_arrow span { padding-left: 30px; }
button.var_btn_green_arrow_r, button.var_btn_green_arrow_r span, a.var_btn_green_arrow_r, a.var_btn_green_arrow_r span { background-image: url(/pages/art/var_standard_buttons/green_arrow_button_right.png); }
button.var_btn_small, button.var_btn_small span, a.var_btn_small, a.var_btn_small span { line-height: 20px;}
button.var_btn_small, a.var_btn_small {padding-right: 12px;}
button.var_btn_green_arrow_r, a.var_btn_green_arrow_r { padding-right: 28px; }
button.var_btn_blue_arrow, button.var_btn_blue_arrow span, a.var_btn_blue_arrow, a.var_btn_blue_arrow span { background-image: url(/pages/art/var_standard_buttons/blue_arrow_button.png); }
button.var_btn_blue_arrow span, a.var_btn_blue_arrow span { padding-left: 26px; }

button.var_btn_ghost, button.var_btn_ghost span, a.var_btn_ghost, a.var_btn_ghost span { background-image: url(/pages/art/var_standard_buttons/ghost_button.png); cursor: default; }

button.var_btn_orange, button.var_btn_orange span, a.var_btn_orange, a.var_btn_orange span { background-image: url(/pages/art/var_standard_buttons/orange_button.png); }

.changeInfo_stdbtn_OK {
    margin-left: 16px;
}


