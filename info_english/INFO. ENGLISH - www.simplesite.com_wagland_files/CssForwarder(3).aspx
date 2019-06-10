.magnify_cursor {
	position: relative;
	z-index: 1;
	
	cursor: url(/userpages/images/magnify.cur), pointer;
}
.magnify_cursor_hover {
	box-shadow: 1px 1px 3px #6e6861; 
	-moz-box-shadow: 1px 1px 3px #6e6861; 
	-webkit-box-shadow: 1px 1px 3px #6e6861; 
}
.magnify_cursor_hover_ie {
	background-color: #ddd;
	
	filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=2,MakeShadow=true,ShadowOpacity=0.4);
	-ms-filter: "progid:DXImageTransform.Microsoft.Blur(PixelRadius=2,MakeShadow=true,ShadowOpacity=0.4)";
	zoom: 1;
}
.magnify_watermark_wrapper {
	position: relative;
	height: 24px;
}
.magnify_watermark {
	position: absolute;
	bottom: 0; right: 0; _right: 10px;
	width: 100px; height: 24px;
}
	
	.magnify_watermark_US_logo {
		background: url(/images/pedigreechart/US_logo100_red.png) no-repeat 0 0;
		#background: url(/images/1x1pix_trans.gif);
		#filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/images/pedigreechart/US_logo100_red.png', sizingMethod='scale');
		}
