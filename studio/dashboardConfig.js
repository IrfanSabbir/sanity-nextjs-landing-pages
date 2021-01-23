export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600bd69bad07d417b9cebfe6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-d3tuea8r',
                  apiId: 'e72424f3-30dd-4916-b951-fd04235b462a'
                },
                {
                  buildHookId: '600bd69bdf37f0faaf75772f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fqytcxh7',
                  apiId: 'e125db3c-80d8-4ac8-8f45-5c9cab74e9c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/IrfanSabbir/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fqytcxh7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
