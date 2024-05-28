const spells = [
    // fire damage
    {name:'Fireball',id:'fireball',cost:5},
    {name:'Fire Bite',id:'fire bite',cost:6},
    {name:'Cruel Firebloom',id:'cruel firebloom',cost:7},
    {name:'Greater Fireball',id:'Fireball_large',cost:10},
    {name:'Fire Storm',id:'fire storm',cost:23},
    {name:"God's Fire",id:"god's fire",cost:135},
    // levitate
    {name:'Great Levitate',id:'great levitate',cost:30},
    {name:'Levitate',id:'levitate',cost:45},
    {name:'Wild Levitate',id:'wild levitate',cost:115},
    // mark & recall
    {name:'Mark',id:'mark',cost:18},
    {name:'Recall',id:'recall',cost:18},

    {name:'Paralysis',id:'paralysis',cost:10},
];

$(document).ready(() => {
    $('spell').each((_,elem) => {
        const nameOrId = $(elem).text();
        const showName = $(elem).attr('noname') === undefined;
        const showId = !showName || $(elem).attr('id') !== undefined;

        const spell = spells.filter(i => i.name === nameOrId || i.id === nameOrId)[0];
        if (spell) {
            var s = '';
            if (showName) {
                s += '<b>' + spell.name + '</b>';
            }
            if (showId) {
                s += ' (<tt class="text-danger">' + spell.id + '</tt>)';
            }
            $(elem).replaceWith(s.trim());
        } else {
            console.log('Unknown spell: ' + nameOrId);
        }
    })

});