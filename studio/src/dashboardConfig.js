export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fd75ba1b28f5129e0e61750',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jpog4tdu',
                  apiId: 'e6000a8f-498c-4ea8-8361-119384af5698'
                },
                {
                  buildHookId: '5fd75ba130106d30e1d716a2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9iypvdzi',
                  apiId: 'b7ddaca0-54dc-4fcb-89bb-c4d2df517125'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/connorward93/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9iypvdzi.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
