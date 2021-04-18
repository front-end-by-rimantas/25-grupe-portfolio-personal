 const headerData = {
     logo: {
         imgPath: './img/',
         link: '#',
         logo: 'logo.png',
         alt: 'logo',
     },
     nav: [
         {
             type: 'link',
             href: '#',
             text: 'Home',
         },
         {
            type: 'link',
            href: '#',
            text: 'About',
        },
        {
            type: 'link',
            href: '#',
            text: 'Services',
        },
        {
            type: 'link',
            href: '#',
            text: 'Portfolio',
        },
        {
            type: 'link',
            href: '#',
            text: 'Pricing',
        },
        {
            type: 'link',
            href: '#',
            text: 'Blog',
            submenu: [
                {type: 'link', href: '#', text: 'Blog home'},
                {type: 'link', href: '#', text: 'Blog single'}
            ],
            submenuDirection:'bottom'
        },
        {
            type: 'link',
            href: '#',
            text: 'Pages',
            submenu: [
                {type: 'link', href: '#', text: 'Elements'},
                {type: 'link', href: '#', text: 'Level 2'},
                {submenuLevel2: [
                    {type: 'link', href: '#', text: 'Item one'},
                    {type: 'link', href: '#', text: 'Item two'}
                ], 
                submenuLevel2Direction: 'left'
                }
            ],
            submenuDirection:'bottom'
        },
        {
            type: 'link',
            href: '#',
            text: 'Contact',
        },
     ],

 }

 export { headerData}