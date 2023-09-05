import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({

  styles: {
    global: (props) => ({
      'html, body': {
        fontSize: 'sm',
        backgroundColor: props.colorMode === 'dark' ? '#393939' : 'white',
        lineHeight: 'tall',
      },
    }),
  },

  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
  colors: {
    light: {
      taskDoneBg: '#cce1dc',
      task_active: '#adb4b9',
      navBar: '#52796f'
    },
    dark: {
      taskDoneBg: '#78a297',
      task_active: '#bfc5c9',
      navBar: '#334c46'
    },

    custom: {

      // Использую
      // фон выполненной задачи
      taskDoneBg: '#cce1dc',
      // Кнопки menu
      task_all: '#457b9d',
      task_todo: '#e07a5f',
      task_done: '#009999',//'#6c757d',
      // Неизвестно
      // task_active_light: '#adb4b9',
      // task_add: '#6c757d',
      red: {
        100: "#FFA69E",
      },
      blue: {
        100: "#AED9E0",
      },
      green: {
        100: "#B8F2E6",
      },
      yellow: {
        // 100: "#FAF3DD",
        100: "#c69f2f",
      },
      grey: {
        100: "#5E6472",
      },

    },
  }
});

// В компоненте задаем
// backgroundColor={'custom.red.100'}

// // 1. import `extendTheme` function
// import { extendTheme } from '@chakra-ui/react'

// // 2. Add your color mode config
// const config = {
//   initialColorMode: 'light',
//   useSystemColorMode: false,
// }

// // 3. extend the theme
// const theme = extendTheme({ config })

// colors: {
//   custom: {
//     red: {
//       100: "#b008a0",
//       // ...
//       900: "#1a202c",
//     }

//   },
// }
export default theme