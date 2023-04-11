$(document).ready(function () {
var theme = getDemoTheme();
var clickToOpen = $('#oppomenureport').jqxMenu('clickToOpen');
// Create a jqxMenu
$("#oppomenureport").jqxMenu({ width: '99.8%', height: '30px', theme: theme, clickToOpen: true });
$("#oppomenureport").css('visibility', 'visible'); 
});