global.global.natives = {};

global.natives.SET_BLIP_SPRITE = (blip, sprite) => mp.game.invoke("0xDF735600A4696DAF", blip, sprite); // SET_BLIP_SPRITE
global.natives.SET_BLIP_ALPHA = (blip, a) => mp.game.invoke("0x45FF974EEE1C8734", blip, a); // SET_BLIP_ALPHA
global.natives.SET_BLIP_COLOUR = (blip, c) => mp.game.invoke("0x03D7FB09E75D6B7E", blip, c); // SET_BLIP_COLOUR
global.natives.SET_BLIP_ROTATION = (blip, r) => mp.game.invoke("0xF87683CDF73C3F6E", blip, r); // SET_BLIP_ROTATION
global.natives.SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT = (toggle) => mp.game.invoke("0xB98236CAAECEF897", toggle); // SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT
global.natives.GET_FIRST_BLIP_INFO_ID = (i) => mp.game.invoke("0x1BEDE233E6CD2A1F", i); // GET_FIRST_BLIP_INFO_ID
global.natives.GET_NEXT_BLIP_INFO_ID = (i) => mp.game.invoke("0x14F96AA50D6FBEA7", i); // GET_NEXT_BLIP_INFO_ID
global.natives.DOES_BLIP_EXIST = (blip) => mp.game.invoke("0xA6DB27D19ECBB7DA", blip); // DOES_BLIP_EXIST
global.natives.GET_BLIP_INFO_ID_ITERATOR  = () => mp.game.invoke("0x186E5D252FA50E7D"); 
global.natives.GET_BLIP_INFO_ID_TYPE  = (blip) => mp.game.invoke("0xBE9B0959FFD0779B", blip); 
global.natives.GET_PLAYER_RADIO_STATION_INDEX  = () => mp.game.invoke("0xE8AF77C4C06ADC93"); 
global.natives.SET_FRONTEND_RADIO_ACTIVE  = (active) => mp.game.invoke("0xF7F26C6E9CC9EBB8", active); 
global.natives.SET_RADIO_TO_STATION_INDEX  = (index) => mp.game.invoke("0xA619B168B8A8570F", index); 
