$(document).ready(function(){
	var gui = require('nw.gui');
	var contextMenu = new gui.Menu();

	contextMenu.append(new gui.MenuItem({
		label: 'Open Developer Tools',
		click: function(){
			gui.Window.get().showDevTools();
		}
	}));

	$('body').on('mousedown', function(e){
		if(e.button == 2){
			contextMenu.popup(e.offsetX, e.offsetY);
		}
	});
});