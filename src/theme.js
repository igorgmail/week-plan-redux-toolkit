import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'
// console.log("▶ ⇛ mode:", mode());

const theme = extendTheme({

  semanticTokens: {
    colors: {
      navBarBg: {
        _light: '#52796f',
        _dark: '#334c46'
      },
      taskListBg: {
        _light: '#FFFFFF',
        _dark: '#505050',
      },
      drawerUserBg: {
        _light: '#eceeef',
        _dark: '#2D3748'
      },
      tabsFont: {
        _light: "green",
        _dark: 'red'
      }
    },
  },

  styles: {

    global: (props) => ({
      html: {
        fontSize: 'sm',
        lineHeight: 'tall',
        height: '100%'
      },
      body: {
        backgroundColor: props.colorMode === 'dark' ? '#393939' : '#F5F5F5',
      },
      // Если назначить класс элементу
      '.taskListBlock': {
        // backgroundColor: props.colorMode === 'dark' ? '#393939' : '#FFFFFF',
        backgroundColor: props.colorMode === 'dark' ? '#505050' : '#FFFFFF',
      }
    }),

  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },

  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },

  colors: {
    light: {
      taskDoneBg: '#cce1dc',
      task_active: '#adb4b9',
      navBar: '#52796f',
      fontMenu: 'black',
      '--tabs-color': 'white'
    },
    dark: {
      taskDoneBg: '#78a297',
      task_active: '#bfc5c9',
      navBar: '#334c46',
      fontMenu: 'white',

    },


    custom: {
      // Использую
      // фон выполненной задачи
      taskDoneBg: '#cce1dc',
      // Button form
      cancelBg: '#e6838b', //'#f4a261',
      confirmBg: '#2a9d8f',
      // Кнопки menu
      task_all: '#457b9d',
      task_todo: '#e07a5f',
      task_done: '#009999',//'#6c757d',
      // Неизвестно
      red: "#e6838b",

      blue: "#2b6cb0",

    },
  }
});

export default theme