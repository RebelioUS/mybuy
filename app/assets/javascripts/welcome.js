// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/


// Progressbar
//= require 'vanila/progressbar'
// Calendar
//= require 'vanila/jquery-ui.multidatespicker'
// Graph builder <!--[if lte IE 8]><script language="javascript" type="text/javascript" src="js/excanvas.min.js"></script><![endif]-->
//= require 'vanila/jquery.flot'
//= require 'vanila/jquery.flot.resize'
// Slider
//= require 'vanila/jquery.slider.bundle'
//= require 'vanila/jquery.slider'
//= require 'vanila/jquery.slider'
// Visual text editor
//= require 'vanila/nicEdit'
// Volume, Balance // BALANCE CONTROLL & VOLUME CONTROL CODE BELOW
//= require 'vanila/knobRot-0.2.2'
// Video Player
//= require 'vanila/video'
// Audio Player // PLAYER CODE BELOW
//= require 'vanila/jquery.jplayer.min'
//= require 'vanila/jplayer.playlist.min'
// Multiselect // CODE BELOW
//= require 'vanila/jquery.chosen.min'
// Scroll Bars // SCROLBARS CODE BELOW
//= require 'vanila/jquery.mousewheel'
//= require 'vanila/jquery.jscrollpane.min'

 // FLOT
 $(function() {
 var graphwidth = $('.widget_graph .inner').width();
 $('.widget_graph .graph').css('height', parseInt(graphwidth/1.7));
 $(window).resize(function() {
 graphwidth = $('.widget_graph .inner').width();
 $('.widget_graph .graph').css('height', parseInt(graphwidth/1.7));
 });

 var d1 = [[0, 9], [1, 23], [1.8, 7], [2.2, 24], [2.8, 18], [4, 36]];
 var graphholder = $("#graph");
 var plot = $.plot(graphholder, [d1], {
 colors: ["#669146", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
 xaxis: {
 min: null,
 max: null
 },
 yaxis: {
 autoscaleMargin: 0.02
 },
 series: {
 lines: {
 show: true,
 lineWidth: 2,
 fill: true,
 fillColor: "rgba(188,176,150,0.3)"
 },
 points: {
 show: true,
 radius: 4,
 lineWidth: 2,
 fillColor: "#f6f3ee"
 }
 },
 grid: {
 hoverable: true,
 clickable: true,
 margin: 12,
 color: "#a09d96",
 borderColor: "#b7ab92"
 }
 });

 function showTooltip(x, y, contents) {
 $("<div id='graph-tooltip'>" + contents + "</div>").css({top: y - 36, left: x - 19}).appendTo("body").fadeIn(200);
 };

 var previousPoint = null;
 $("#graph").on("plothover", function (event, pos, item) {

 if (item) {
 if (previousPoint != item.dataIndex) {

 previousPoint = item.dataIndex;

 $("#graph-tooltip").remove();
 var x = item.datapoint[0].toFixed(2),
 y = item.datapoint[1].toFixed(2);

 showTooltip(item.pageX, item.pageY, '$' + y*100);
 }
 } else {
 $("#graph-tooltip").remove();
 previousPoint = null;
 }
 });
 });
 // \FLOT
 // PLAYER
 //<![CDATA[
 $(document).ready(function(){

 new jPlayerPlaylist({
 jPlayer: "#jquery_jplayer_1",
 cssSelectorAncestor: "#jp_container_1"
 }, [
 {
 title:"<ul><li class='item-artist'>3 Doors Down&#160;&#8211;&#160;</li><li class='item-song'>Superman</li></ul>",
 mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
 oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
 },
 {
 title:"<ul><li class='item-artist'>Daft Punk&#160;&#8211;&#160;</li><li class='item-song'>Get Lucky</li></ul>",
 mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
 oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
 },
 {
 title:"<ul><li class='item-artist'>Justin Timberlake&#160;&#8211;&#160;</li><li class='item-song'>Mirrors</li></ul>",
 mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
 oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
 }
 ], {
 swfPath: "js",
 supplied: "oga, mp3",
 wmode: "window",
 smoothPlayBar: false,
 keyEnabled: false
 });
 });
 //]]>
 // \PLAYER
 // SCROLLBARS
 jQuery(function()
 {
 jQuery('.scrollbar').jScrollPane({
 verticalDragMaxHeight: 55,
 verticalDragMinHeight:55
 });

 jQuery('.scrollbar.style2').jScrollPane({
 verticalDragMaxHeight: 30,
 verticalDragMinHeight:30
 });

 jQuery('.scrollbar.style3').jScrollPane({
 verticalDragMaxHeight: 14,
 verticalDragMinHeight:14
 });

 jQuery('.scrollbar.style4').jScrollPane({
 verticalDragMaxHeight: 55,
 verticalDragMinHeight:55
 });
 });
 // \SCROLLBARS
 // MULTISELECT
 jQuery(document).ready(function() {
 jQuery('#contact_name').chosen({ width: "100%" });
 });
 // \MULTISELECT
 // Balance control
 $(document).ready(function() {
 $('#balance').knobRot({
 'classes': ['balance'],
 'dragVertical': false,
 'frameCount': 51,
 'frameWidth': 87,
 'frameHeight': 87,
 'detent': true,
 'detentThreshold': 2,
 'minimumValue': -50,
 'maximumValue': 50,
 'hideInput': true
 });
 });
 // \Balance control
 // Volume control
 $(document).ready(function() {
 $('#volume').knobRot({
 'classes': ['volume'],
 'dragVertical': false,
 'frameCount': 45,
 'frameWidth': 88,
 'frameHeight': 88,
 'detent': true,
 'detentThreshold': 5,
 'minimumValue': 0,
 'maximumValue': 100,
 'hideInput': true
 });
 });
 // \Volume control
 // Range slider
 jQuery(document).ready(function($) {
 // Price Range Input
 $("#price_range").rangeslider({
 from: 10,
 to: 500,
 limits: false,
 scale: ['10', '500'],
 heterogeneity: ['50/250'],
 step: 10,
 smooth: true,
 dimension: ''
 });
 });
 // \Range slider
 // Progress bar
 $(document).ready(function() {
 $('#progressBar1').anim_progressbar({
 totaltime: 180
 });
 });
 // \Progress bar
 // Widjet calendar
 // <![CDATA[
 jQuery(document).ready(function($) {
 var daysRange = 5;

 function assignCalendar(id){
 $('<div class="calendar" />')
 .insertAfter( $(id) )
 .multiDatesPicker({
 dateFormat: 'yy-mm-dd',
 minDate: new Date(),
 maxDate: '+1y',
 altField: id,
 firstDay: 1,
 showOtherMonths: true
 }).prev().hide();
 }

 assignCalendar('#date_departure');
 });
 // ]]>
 // \Widjet calendar
 // NicEdit
 bkLib.onDomLoaded(function() {
 var myNicEditor = new nicEditor({
 buttonList : [
 'bold',
 'italic',
 'underline',
 'forecolor',
 'left',
 'center',
 'right',
 'justify'
 ]
 });
 myNicEditor.setPanel('edit_buttons');
 myNicEditor.addInstance('styled_message');
 });
 setTimeout(function () {
 var nic_width = $('.nicEdit-panel').width();
 $('.nicEdit-container').css('width', nic_width);
 $('.nicEdit-main').css('width', nic_width-24);
 }, 2000);
 $(window).resize(function() {
 var nic_width = $('.nicEdit-panel').width();
 $('.nicEdit-container').css('width', nic_width);
 $('.nicEdit-main').css('width', nic_width-24);
 });
 // \NicEdit