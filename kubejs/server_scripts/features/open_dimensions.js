// Limina (Dimension Access Control): по умолчанию Верхний мир, Незер и Энд закрыты для перехода.
// При каждом запуске сервера открываем Верхний мир и Незер. Энд остается закрытым до охоты на дракона: /portal end true
ServerEvents.loaded(event => {
    event.server.runCommandSilent('portal overworld true');
    event.server.runCommandSilent('portal nether true');
    console.info('[MineOctober] Limina: overworld and nether portals opened (end stays closed)');
});