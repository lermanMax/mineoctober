// Sophisticated Storage 1.6+ lists its chests only in c:chests, not in c:chests/wooden.
// Our recipes (backpack, storage controller/input/output, chest <- wooden chest) use #c:chests/wooden
// and the vanilla chest recipe is removed, so without this the backpack cannot be crafted at all.
ServerEvents.tags('item', event => {
    event.add('c:chests/wooden', 'sophisticatedstorage:chest');
});
