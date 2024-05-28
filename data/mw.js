window.mw = window.mw || {
    chapterUrl: null,
    isChapterIndex: false,
    rootBase: null,
    dir: null,
    createId: (text) => (text||'').replace(/'/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'_'),
    locHtml: (text) => {
        var title = 'coc ';
        if (text.indexOf(' ') >= 0) {
            title += '\'\'' + text + '\'\'';
        } else {
            title += text;
        }
        return '<tt class="text-danger" title="' + title + '">' + text + '</tt>';
    }
};

const updateLocations = () => {
    $('loc').each((_,elem) => {
        const loc = $(elem).text();
        $(elem).replaceWith(window.mw.locHtml(loc));
    });
};

$(document).ready(() => {
    // determine current page's relative position to root of project
    const base = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
    window.mw.isChapterIndex = '/index.html' === window.location.pathname.substring(window.location.pathname.lastIndexOf('/'));
    window.mw.chapterUrl = base + '/index.html';
    if (base.lastIndexOf('/') >= 0) {
        const dir = base.substring(base.lastIndexOf('/')+1);
        if (['hints','misc','npc','items','skills','main','tribunal','bloodmoon','hlaalu','redoran','telvanni','fighters','mages','thieves'].includes(dir)) {
            window.mw.rootBase = base.substring(0, base.lastIndexOf('/'));
            window.mw.dir = dir;
        } else {
            window.mw.rootBase = base;
            window.mw.dir = '';
        }
    }

    // replace back links
    $('back').each((_,elem) => {
        var s = '<div class="mb-1">';
        if (window.mw.dir !== '') {
            s += '<a href="'+window.mw.rootBase+'/index.html" class="btn btn-outline-secondary btn-sm"><i class="fas fa-chevron-up"></i> index</a> ';
        }
        if (!window.mw.isChapterIndex) {
            s += '<a href="'+window.mw.chapterUrl+'" class="btn btn-outline-secondary btn-sm"><i class="fas fa-chevron-left"></i> back</a>';
        }
        s += '</div>';
        $(elem).replaceWith(s);
    });

    updateLocations();

});
