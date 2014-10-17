window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
                // font-family 换成你CSS里对应的值
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
                        // 你需要把CSS里的类和转义的content值替换到这里来
			'icon-yes:before' : '&#xe607;',
			'icon-yes-01' : '&#xe608;',
			'icon-person' : '&#xe609;',
			'icon-gift2' : '&#xe60a;',
			'icon-bag' : '&#xe604;',
			'icon-earth' : '&#xe605;',
			'icon-people' : '&#xe606;',
			'icon-database' : '&#xe60b;',
			'icon-list' : '&#xe600;',
			'icon-clipboard' : '&#xe601;',
			'icon-user' : '&#xe602;',
			'icon-board' : '&#xe603;',
			'icon-gift3' : '&#xe610;',
			'icon-chevron-right' : '&#xf054;'

		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};