export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dde746e0e713ee834f958af',
                  title: 'Sanity Studio',
                  name: 'Creating-a-blog-with-Sanity-io-Netlify-and-Gatsby-studio',
                  apiId: 'b8ea808b-3140-4d42-a702-82ec3ce66733'
                },
                {
                  buildHookId: '5dde746ece144cddac008611',
                  title: 'Blog Website',
                  name: 'Creating-a-blog-with-Sanity-io-Netlify-and-Gatsby',
                  apiId: '5de49e27-e5a0-4c48-9709-dac34d9e3f14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dexter-stpierre/Creating-a-blog-with-Sanity-io-Netlify-and-Gatsby',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Creating-a-blog-with-Sanity-io-Netlify-and-Gatsby.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
