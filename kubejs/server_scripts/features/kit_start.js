// priority: 10

PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('starting_items')) {
        
        event.player.stages.add('starting_items');
        
        event.player.give('mineoctober:tin_sword');
        event.player.give('ftbquests:book');
        event.player.give('8x mineoctober:pumpkin_cookie');
        event.player.give('minecraft:leather_helmet');
        event.player.give('minecraft:leather_chestplate');
        event.player.give('minecraft:leather_leggings');
        event.player.give('minecraft:leather_boots');
        event.player.give('minecraft:shield');
    };
});