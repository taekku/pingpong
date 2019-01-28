/** Example file/folder data. */
export const files = [
  {
    name: 'material2',
    type: 'folder',
    children: [
      {
        name: 'src',
        type: 'folder',
        children: [
          {
            name: 'cdk',
            type: 'folder',
            children: [
              { name: 'package.json', type: 'file', url: 'abc' },
              { name: 'BUILD.bazel', type: 'file', url: 'abc' },
            ]
          },
          { name: 'lib', type: 'folder' }
        ]
      }
    ]
  },
  {
    name: 'angular',
    type: 'folder',
    children: [
      {
        name: 'packages',
        type: 'folder',
        children: [
          { name: '.travis.yml', type: 'file', url: 'abc' },
          { name: 'firebase.json', type: 'file', url: 'abc' }
        ]
      },
      { name: 'package.json', type: 'file', url: 'abc' }
    ]
  },
  {
    name: 'angularjs',
    type: 'folder',
    children: [
      { name: 'gulpfile.js', type: 'file', url: 'abc' },
      { name: 'README.md', type: 'file', url: 'abc' }
    ]
  }
];
