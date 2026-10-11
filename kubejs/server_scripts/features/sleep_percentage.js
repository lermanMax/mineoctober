// Skip the night when 75% of players are sleeping (2025: 138 "zzz?" messages in chat).
ServerEvents.loaded(event => {
    event.server.runCommandSilent('gamerule playersSleepingPercentage 75');
    console.info('[MineOctober] gamerule playersSleepingPercentage = 75');
});
