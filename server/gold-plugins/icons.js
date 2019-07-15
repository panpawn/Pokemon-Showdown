'use strict';

let icons = {};
const fs = require('fs');

function load() {
	fs.readFile('config/icons.json', 'utf8', function (err, file) {
		if (err) return;
		icons = JSON.parse(file);
	});
}
load();

function updateIcons() {
	fs.writeFileSync('config/icons.json', JSON.stringify(icons));

	let newCss = '/* ICONS START */\n';

	for (let name in icons) {
		newCss += generateCSS(name, icons[name]);
	}
	newCss += '/* ICONS END */\n';

	let file = fs.readFileSync('config/custom.css', 'utf8').split('\n');
	if (~file.indexOf('/* ICONS START */')) file.splice(file.indexOf('/* ICONS START */'), (file.indexOf('/* ICONS END */') - file.indexOf('/* ICONS START */')) + 1);
	fs.writeFileSync('config/custom.css', file.join('\n') + newCss);
	Gold.reloadCSS();
}
Gold.updateIcons = updateIcons;

function generateCSS(name, icon) {
	let css = '';
	let rooms = [];
	name = toID(name);
	Rooms.rooms.forEach((curRoom, id) => {
		if (curRoom.id === 'global' || curRoom.type !== 'chat' || curRoom.isPersonal) return;
		if (!isNaN(Number(id.charAt(0)))) return;
		rooms.push('#' + id + '-userlist-user-' + name);
	});
	css = rooms.join(', ');
	css += '{\nbackground: url("' + icon + '") no-repeat right\n}\n';
	return css;
}

exports.commands = {
	customicon: 'icon',
	icon: function (target, room, user) {
		if (!this.can('pban')) return false;
		target = target.split(',');
		for (let u in target) target[u] = target[u].trim();
		if (!target[1]) return this.parse('/help icon');
		if (toID(target[0]).length > 19) return this.errorReply("Usernames are not this long...");
		if (target[1] === 'delete') {
			if (!icons[toID(target[0])]) return this.errorReply('/icon - ' + target[0] + ' does not have an icon.');
			delete icons[toID(target[0])];
			updateIcons();
			this.sendReply("You removed " + target[0] + "'s icon.");
			Rooms('staff').add(user.name + " removed " + target[0] + "'s icon.").update();
			this.privateModCommand("(" + target[0] + "'s icon was removed by " + user.name + ".)");
			if (Users(target[0]) && Users(target[0]).connected) Users(target[0]).popup(user.name + " removed your icon.");
			return;
		}
		if (toID(target[0]) === 'delete') return this.errorReply("Did you mean: /icon " + target[1] + ", delete");
		if (icons[toID(target[0])]) return this.errorReply("This user already has a custom userlist icon.  Do /icon [user], delete and then set their new icon.");
		this.sendReply("|raw|You have given <b><font color=" + Gold.hashColor(Chat.escapeHTML(target[0])) + ">" + Chat.escapeHTML(target[0]) + "</font></b> an icon.");
		Rooms('staff').add('|raw|<b><font color="' + Gold.hashColor(Chat.escapeHTML(target[0])) + '">' + Chat.escapeHTML(target[0]) + '</font> has received an icon from ' + Chat.escapeHTML(user.name) + '.</b>').update();
		this.privateModCommand("(" + target[0] + " has recieved icon: '" + target[1] + "' from " + user.name + ".)");
		icons[toID(target[0])] = target[1];
		updateIcons();
	},
	iconhelp: [
		"Commands Include:",
		"/icon [user], [image url] - Gives [user] an icon of [image url]",
		"/icon [user], delete - Deletes a user's icon",
	],
};
