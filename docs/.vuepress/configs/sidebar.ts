import type { SidebarConfig } from "@vuepress/theme-default"


export const sidebar: SidebarConfig = {
    '/start': [
        {
            text: '开始',
            link: '/start/',
        }
    ],
    '/function': [
        {
            text: '🍥概览',
            link: '/function',
        },
        {
            text: '🛠️管理功能',
            collapsible: true,
            children: [
                '/function/admin/plugin_manager.md',
                '/function/admin/task_manager.md',
                '/function/admin/load_balance.md',
                '/function/admin/invite_request.md',
                '/function/admin/user_interaction.md',
                '/function/admin/group_manager.md',
                '/function/admin/group_action.md',
            ]
        },
        {
            text: '☯️东方相关',
            collapsible: true,
            children: [
                '/function/touhou/touhou_quiz.md',
                '/function/touhou/touhou_grass.md',
                '/function/touhou/touhou_news.md',
                '/function/touhou/random_touhou.md',
                '/function/touhou/touhou_doujin.md',
            ]
        },
        {
            text: '🎨图片功能',
            collapsible: true,
            children: [
                '/function/img/pixiv_plugin.md',
                '/function/img/img_search.md',
                '/function/img/img_meme.md',
                '/function/img/img_recognition.md',
                '/function/img/img_deeper.md',
                '/function/img/img_editor.md',
                '/function/img/safebooru.md',
                '/function/img/pic_to_url.md',
            ]
        },
        {
            text: '🔍查询数据',
            collapsible: true,
            children: [
                '/function/query/bilibili.md',
                '/function/query/earthquake.md',
                '/function/query/garbage.md',
                '/function/query/github.md',
                '/function/query/hypixel.md',
                '/function/query/maps.md',
                '/function/query/minecraft.md',
                '/function/query/patchyvideo.md',
                '/function/query/shadowverse.md',
                '/function/query/weibo.md',
                '/function/query/wiki.md',
                '/function/query/ygo.md'
            ]
        },
        {
            text: '🌐实用功能',
            collapsible: true,
            children: [
                '/function/useful/60s.md',
                '/function/useful/chemical.md',
                '/function/useful/countdown.md',
                '/function/useful/dice.md',
                '/function/useful/everyday_en.md',
                '/function/useful/math.md',
                '/function/useful/music.md',
                '/function/useful/ncm_plugin.md',
                '/function/useful/run_code.md',
                '/function/useful/schedule_reminder.md',
                '/function/useful/search.md',
                '/function/useful/translate.md',
                '/function/useful/wantwords.md',
                '/function/useful/weather.md',
                '/function/useful/shortof.md',
                '/function/useful/useful.md',
            ]
        },
        {
            text: "🎈娱乐功能",
            collapsible: true,
            children: [
                '/function/play/fantasy.md',
                '/function/play/asoul.md',
                '/function/play/char_reverse.md',
                '/function/play/drama_generator.md',
                '/function/play/help_choose.md',
                '/function/play/hitokoto.md',
                '/function/play/minesweeper.md',
                '/function/play/poem_writer.md',
                '/function/play/remake.md',
                '/function/play/saying.md',
                '/function/play/shindanmaker.md',
                '/function/play/today_luck.md',
                '/function/play/voice.md',
                '/function/play/tarot.md',
            ]
        },
    ],
    '/function/autodoc.html': [
        {
            text: 'autodoc',
            link: '/function/autodoc.html',
        }
    ],
    '/FAQ': [
        {
            text: 'FAQ',
            link: '/FAQ/',
        }
    ],
    '/about': [
        {
            text: '关于',
            collapsible: false,
            children: [
                '/about/',
                '/about/instructions.html',
            ]
        },
        {
            text: '贡献指南',
            collapsible: false,
            children: [
                '/about/contribute/docs.html'
            ]
        },
        {
            text: '术语表',
            collapsible: false,
            link: '/about/glossary.html',
        },
    ],
}