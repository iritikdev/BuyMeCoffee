import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/urbanist'
import '@fontsource/poppins/700.css'
import '@fontsource/fira-mono'
import '@fontsource/inter'
const theme = extendTheme({
  fonts: {
    heading: `'Urbanist', sans-serif`,
    body: `'Inter', sans-serif`,
    mono : `'Fira Mono', sans-serif`,
    poppins : `'Poppins', sans-serif`
  },
  fontWeights: {
    normal: 400, // Use the appropriate values for your custom font
    bold: 700,
  },
})

export default theme