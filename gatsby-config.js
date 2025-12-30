module.exports = {
  siteMetadata: {
    title: 'Yash Gadodia',
    author: { name: 'Yash Gadodia' },
    pathPrefix: '/',
    siteUrl: 'https://yashgadodia.com',
    description:
      'Product builder working on operational software. Founding PM at Voltade. Based in Singapore.',
    feedUrl: 'https://yashgadodia.com/rss.xml',
    logo: 'https://yashgadodia.com/logo.png',
  },
  plugins: [
    // ===================================================================================
    // Meta
    // ===================================================================================
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
            allMarkdownRemark(
              filter: { frontmatter: { template: { eq: "post" } } }
            ) {
              nodes {
                fields {
                  slug
                }
                frontmatter {
                  date
                }
              }
            }
          }
        `,
        resolveSiteUrl: () => 'https://yashgadodia.com',
        resolvePages: ({ allSitePage: { nodes: allPages }, allMarkdownRemark: { nodes: allPosts } }) => {
          const postsByPath = allPosts.reduce((acc, post) => {
            acc[post.fields.slug] = post;
            return acc;
          }, {});

          return allPages.map((page) => {
            const post = postsByPath[page.path];
            return {
              ...page,
              lastmod: post?.frontmatter?.date,
            };
          });
        },
        serialize: ({ path, lastmod }) => ({
          url: path,
          lastmod: lastmod,
          changefreq: path === '/' ? 'weekly' : 'monthly',
          priority: path === '/' ? 1.0 : path.includes('/blog') || path.includes('/projects') ? 0.8 : 0.6,
        }),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Yash Gadodia',
        short_name: 'Yash Gadodia',
        description:
          'Product builder working on operational software. Founding PM at Voltade. Based in Singapore.',
        start_url: '/',
        background_color: 'white',
        // theme_color: '#959af8',
        display: 'minimal-ui',
        icon: `static/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [
                    { 'content:encoded': edge.node.html },
                    { author: 'pirsquare.yash@gmail.com' },
                  ],
                })
              })
            },
            query: `
              {
              allMarkdownRemark(
                limit: 30
                sort: {frontmatter: {date: DESC}}
                filter: {frontmatter: {template: {eq: "post"}}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      template
                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: 'yashgadodia.com | RSS Feed',
          },
        ],
      },
    },

    // ===================================================================================
    // Images, styles, and static
    // ===================================================================================

    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          // placeholder: `dominantColor`,
          backgroundColor: `transparent`,
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-plugin-image',

    // ===================================================================================
    // Markdown
    // ===================================================================================

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: 'transparent',
              maxWidth: 590,
            },
          },
          'gatsby-remark-autolink-headers',
          // 'gatsby-remark-prismjs-copy-button',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '>',
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: true,
              },
            },
          },
        ],
      },
    },

    // ===================================================================================
    // Search
    // ===================================================================================

    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        engineOptions: {
          encode: 'icase',
          tokenize: 'forward',
          async: false,
        },
        query: `
          {
            allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" } } }) {
              nodes {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  tags
                  slug
                  categories
                  date(formatString: "MMMM DD, YYYY")
                }
                rawMarkdownBody
              }
            }
          }
        `,
        ref: 'id',
        index: ['title', 'tags'],
        store: ['id', 'slug', 'title', 'tags', 'categories', 'date'],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map((node) => ({
            id: node.id,
            slug: node.fields?.slug || (node.frontmatter.slug ? `/${node.frontmatter.slug}/` : '/'),
            title: node.frontmatter.title,
            body: node.rawMarkdownBody,
            tags: node.frontmatter.tags,
            categories: node.frontmatter.categories,
            date: node.frontmatter.date,
          })),
      },
    },
  ],
}
