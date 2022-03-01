module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../../src/components/{{dashCase name}}/index.tsx',
        templateFile: './index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../../src/components/{{dashCase name}}/styles.ts',
        templateFile: './styles.ts.hbs',
      },
      // {
      //   type: 'add',
      //   path: '../src/components/{{dashCase name}}/stories.tsx',
      //   templateFile: 'templates/stories.tsx.hbs',
      // },
      {
        type: 'add',
        path: '../../../src/components/{{dashCase name}}/{{dashCase name}}.test.tsx',
        templateFile: './test.tsx.hbs',
      },
    ],
  })
}
