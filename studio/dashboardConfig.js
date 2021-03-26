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
                  buildHookId: '605e23c3aed97318ccc96365',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-x14szswx',
                  apiId: '80bffd40-0d17-4d75-8b81-e209eadbe184'
                },
                {
                  buildHookId: '605e23c3b90bb516e5e1a535',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eaa7xc8r',
                  apiId: 'c927b416-1c24-4fb1-8d30-e08af803e086'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/squinteye1/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eaa7xc8r.netlify.app', category: 'apps'}
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
