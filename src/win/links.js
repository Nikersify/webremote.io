$('body').on('click', 'a[data-link]', function(e){
	console.log(this);
	var url = $(this).data('link');
	gui.Shell.openExternal(url);
});