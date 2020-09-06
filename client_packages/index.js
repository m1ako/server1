/*
//           Проект: Renaissance RP          
//           Сайт: https://myrenaissance.ru/           
//           Мы ВКонтакте: https://vk.com/renaissancerplay          
//           © Копирование клиента запрещено и преследуется пиздюлями!
*/

global.clientsideLoaded = false;

mp.discord.update("Играет на Renaissance RP", "myrenaissance.ru");

mp.events.add('render', () => {
	if(!global.clientsideLoaded) {
		const graphics = mp.game.graphics;
		mp.game.controls.disableAllControlActions(0);
		graphics.drawText(`Загрузка интерфейса`, [0.5, 0.5], { font: 4, color: [255, 255, 255, 255], scale: [0.6, 0.6], outline: true });
		graphics.drawRect(0.5, 0.5, 1, 1, 0,0,0,200);
	}
});


mp.game.streaming.requestIpl("vw_casino_main");

const camerasManager = require("libs/camerasManager.js");
require("libs/attachments.js");
require("libs/fly.js");
require("libs/natives.js");

mp.events.add("playerDeath", (player, reason, killer) => {
    mp.game.graphics.startScreenEffect("DeathFailNeutralIn", 5000, false);
});

