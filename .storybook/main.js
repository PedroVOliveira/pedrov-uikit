module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-material-ui'
  ],
  babel: async (options) => ({
    ...options
    // any extra options you want to set
  })
}
