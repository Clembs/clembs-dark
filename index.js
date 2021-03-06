const vars = require('./variables.json');

const colors = {
  name: 'clembs-dark',
  type: 'dark',
  colors: {
    // the background of the editor
    'editor.background': vars.lighterdarkpurple,
    // general editor text
    'editor.foreground': vars.text,
    // color of the activity bar badge (accent color)
    'activityBarBadge.background': vars.brightpurple,
    // background of the activity bar
    'activityBar.background': vars.lighterdarkpurple,
    // text of the sidebar
    'sideBarTitle.foreground': vars.text,
    // background of the sidebar
    'sideBar.background': vars.darkpurple,
    // the small sections in the taskbar
    'sideBarSectionHeader.background': vars.darkpurple,
    // the small sections' text
    'sideBarSectionHeader.foreground': vars.text,
    // text selection in the editor
    'editor.selectionBackground': vars.lighterdarkpurple,
    // background of the files
    'list.activeSelectionBackground': vars.lighterdarkpurple,

    'list.inactiveSelectionBackground': vars.lighterdarkpurple,
    
    focusBorder: vars.lighterdarkpurple,

    //selected tab
    'tab.activeBackground': vars.lighterdarkpurple,
    //inactive tab
    'tab.inactiveBackground': vars.darkpurple,
    // the tab seperators
    'tab.border': vars.darkpurple,
    'titleBar.activeBackground': vars.darkpurple,
    'editorGroupHeader.tabsBackground': vars.darkpurple,
  },
  tokenColors: [
    // Text Styling
    // {
    //   name: 'Bold',
    //   scope: ['variable', 'support.class.error', 'support.type.primitive'],
    //   settings: {
    //     fontStyle: 'bold',
    //   },
    // },
    
    {
      name: 'Error Class',
      scope: ['support.class.error'],
      settings: {
        foreground: vars.red,
      },
    },
    {
      // 
    },
    {
      name: "Storage, try...catch..., 'throw' and 'new'",
      scope: [
        'storage',
        'keyword.control.trycatch',
        'keyword.operator.new',
        'keyword.control.conditional',
        'keyword.control.export',
        'keyword.control.default',
        'keyword.control.flow',
        'meta.block',
        'keyword.control.import',
        'keyword.control.from',
      ],
      settings: {
        foreground: vars.pink,
      },
    },
    {
      name: 'Numbers',
      scope: ['constant.numeric.decimal'],
      settings: {
        foreground: vars.turquoise,
      }
    },
    {
      name: 'Variables',
      scope: ['variable', 'punctuation.definition'],
      settings: {
        foreground: vars.text,
      },
    },
    {
      // SCSS Variables
      name: 'SCSS Variables',
      scope: ['variable.scss'],
      settings: {
        foreground: vars.orange,
      }
    },
    {
      name: 'Other Variable Properties',
      scope: ['variable.other.property'],
      settings: {
        foreground: vars.text,
      },
    },
    {
      name: 'TypeScript Interfaces',
      scope: ['meta.interface'],
      settings: {
        foreground: vars.blue,
      }
    },
    {
      name: 'HTML Tags',
      scope: ['entity.name.tag'],
      settings: {
        foreground: vars.green,
      }
    },
    {
      name: 'Functions',
      scope: ['entity.name.function', 'support.function'],
      settings: {
        foreground: vars.orange,
      },
    },
    {
      name: 'Support Constant',
      scope: ['support.constant'],
      settings: {
        foreground: vars.pinkred,
      },
    },
    {
      name: 'SCSS names',
      scope: ['support.type.vendored.property-name.css'],
      settings: {
        foreground: vars.orange,
      }
    },
    {
      name: 'TypeScript types',
      scope: ['meta.return.type'],
      settings: {
        foreground: vars.pinkred,
        fontStyle: 'italic',
      },
    },
    {
      name: 'other TypeScript types?',
      scope: ['entity.name.type'],
      settings: {
        foreground: vars.blue,
      }
    },
    {
      name: '=, :, ++, -- and ||',
      scope: [
        'keyword.operator.logical',
        'keyword.operator.or',
        'keyword.operator.increment',
        'keyword.operator.decrement',
        'keyword.operator.assignment',
        'keyword.operator.type.annotation'
      ],
      settings: {
        foreground: vars.brightpurple,
      },
    },
    {
      name: 'if, return, else, etc',
      scope: [
        'keyword.control.flow',
       'keyword.control.conditional'
      ],
      settings: {
        foreground: vars.brightpurple,
      }
    },
    {
      name: 'HTML Attributes',
      scope: ['entity.other.attribute-name'],
      settings: {
        foreground: vars.pink,
      }
    },
    {
      // yarn.lock
      name: 'Yarn Packages',
      scope: ['entity.name.tag.yarn'],
      settings: {
        foreground: vars.green,
      }
    },
    {
      name: ';',
      scope: [
        'punctuation.terminator',
      ],
      settings: {
        foreground: vars.darkgrey,
      }
    },
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: vars.darkgrey,
        fontStyle: 'italic',
      },
    },
    {
      name: 'module.exports',
      scope: ['support.type.object.module'],
      settings: {
        foreground: vars.green,
      },
    },
    {
      name: 'keys',
      scope: [
        'string.key',
        'support.type.property-name',
        'meta.object-literal.key',
        'string.quoted.double'
      ],
      settings: {
        foreground: vars.green,
      },
    },
    {
      name: 'values',
      scope: ['string', 'constant'],
      settings: {
        foreground: vars.green,
      },
    },
  ],
}

const { writeFileSync } = require('fs');
const { contributes } = require('./package.json');

writeFileSync(contributes.themes[0].path,
JSON.stringify(colors, null, 2), { encoding: 'utf8' });

console.clear();
console.log("\x1b[32m%s\x1b[0m",'???', 'Saved changes and reloaded theme!');

