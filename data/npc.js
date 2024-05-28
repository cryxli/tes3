const npcs = [
    // vendors
    {name:'Arnand Liric',loc:'Buckmoth Legion Fort, Interior'},
    {name:'Arrille',loc:"Seyda Neen, Arrille's Tradehouse"},
    {name:'Aunius Autrus',loc:'Sadrith Mora, Wolverine Hall: Imperial Shrine'},
    // Aurane Frernis
    {name:'Chaplain Ogrul',loc:'Gnisis, Fort Darius'},
    {name:'Craetia Jullalian',loc:'Vivec, Guild of Mages'},
    {name:'Dulian',loc:'Buckmoth Legion Fort, Interior'},
    {name:'Eldrilu Dalen',loc:'Vos, Vos Chapel',url:true},
    {name:'Ernand Thierry',loc:'Caldera, Guild of Mages'},
    {name:'Ganalyn Saram',loc:'Vivec, Hlaalu Alchemist'},
    {name:'Guls Llervu',loc:"Ald-ruhn, Guls Llervu's House"},
    {name:"J'Rasha",loc:"Vivec, J'Rasha: Healer"},
    {name:'Llarara Omayn',loc:'Balmora, Temple'},
    {name:'Mehra Drora',loc:'Gnisis, Temple'},
    {name:'Milar Maryon',loc:'Tel Vos, Services Tower'},
    {name:'Pierlette Rostorard',loc:'Sadrith Mora, Pierlette Rostorard: Apothecary'},
    {name:'Relms Gilvilo',loc:'Vivec, Redoran Temple Shrine'},
    {name:'Salen Ravel',loc:'Maar Gan, Shrine'},
    {name:'Sedris Omalen',loc:'Maar Gan, Outpost'},
    {name:'Somutis Vunnis',loc:'Moonmoth Legion Fort, Interior'},
    {name:'Telis Salvani',loc:'Balmora, Temple'},
    {name:'Tivam Sadri',loc:'Holamayan Monastery'},
    {name:'Threvul Serethi',loc:'Sadrith Mora, Thervul Serethi: Healer'},
    {name:'Tusamircil',loc:"Sadrith Mora, Wolverine Hall: Mage's Guild"},
    {name:'Ygfa',loc:'Pelagiad, Fort Pelagiad'},
    {name:'Zanmulk Sammalamus',loc:'Gnisis, Temple'},
    // Telvanni
    {name:'Therana',loc:'Tel Branora, Upper Tower'},
    {name:'Dratha',loc:'Tel Mora, Upper Tower'},
    {name:'Gothren',loc:'Tel Aruhn, Upper Tower'},
    {name:'Neloth',loc:'Sadrith Mora, Tel Naga Upper Tower'},
    {name:'Aryon',loc:"Tel Vos, Aryon's Chambers"},
    {name:'Baladas Demnevanni',loc:'Gnisis, Arvs-Drelen'},
    // Mages
    {name:'Ajira',loc:'Balmora, Guild of Mages'},
    {name:'Ranis Athrys',loc:'Balmora, Guild of Mages'},
    {name:'Edwinna Elbert',loc:'Ald-ruhn, Guild of Mages'},
    {name:"Skink-in-Tree's-Shade",loc:"Sadrith Mora, Wolverine Hall: Mage's Guild"},
    {name:'Trebonius Artorius',loc:'Vivec, Guild of Mages'},
    // Main Quest
    {name:'Caius Cosades',loc:"Balmora, Caius Cosades' House"},
];

$(document).ready(() => {
    window.mw = window.mw||{};
    window.mw.npc = {
        getHtml: (npc) => {
            if (!npc.url) {
                return '<i>' + npc.name + '</i>';
            } else {
                return '<a class="npc" href="' + window.mw.rootBase + '/npc/' + window.mw.createId(npc.name) + '.html">' + npc.name + '</a>';
            }
        }
    };

    $('npc').each((_,elem) => {
        const name = $(elem).text();

        const npc = npcs.filter(npc => npc.name === name)[0];
        const loc = !!npc && $(elem).attr('loc') !== undefined;

        var s = '';
        if (loc) {
            s += window.mw.locHtml(npc.loc);
        } else if (!npc) {
            s += '<i>' + name + '</i>';
        } else {
            s += window.mw.npc.getHtml(npc);
        }
        $(elem).replaceWith(s);
    });
    updateLocations();
});