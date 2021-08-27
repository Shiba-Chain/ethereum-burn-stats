import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { Dict } from "@chakra-ui/utils"
import { layoutConfig } from "./layoutConfig"

const secondaryColor = (props: Dict<any>) => mode('#a9a9a9', '#4e4e4e')(props)
const backgroundColor = (props: Dict<any>) => mode('white', 'rgb(30, 30, 30)')(props)
const borderColor = (props: Dict<any>) => mode('#eeeeee', '#292929')(props)

const theme = extendTheme({
  config: {
    initialColorMode: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('white', '#333')(props),
        color: mode('rgb(51, 51, 51)', 'rgb(242, 242, 242)')(props)
      }
    })
  },
  colors: {
    brand: {
      orange: 'rgb(221, 107, 32)'
    },
  },
  components: {
    Divider: {
      baseStyle: (props: any) => ({
        opacity: 0.15,
        borderColor: mode('blackAlpha.500', 'whiteAlpha.500')(props),
      })
    },
    Tooltip: {
      baseStyle: {
        rounded: "lg",
        bg: "#333",
        color: "#fff",
        p: 4,
        fontSize: 12,
      },
    },
    Link: {
      baseStyle: {
        color: "brand.orange",
      },
      variants: {
        alpha: (props: any) => ({
          color: mode('blackAlpha.500', 'whiteAlpha.500')(props),
        })
      }
    },
    Card: {
      baseStyle: (props: any) => ({
        display: "flex",
        flexDirection: "column",
        px: 4,
        py: 3,
        rounded: "md",
        bg: backgroundColor(props),
        boxShadow: mode("rgb(0 0 0 / 7%) 0px 14px 66px, rgb(0 0 0 / 3%) 0px 10px 17px, rgb(0 0 0 / 5%) 0px 4px 7px;",
          "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.4) 0px 15px 40px;")(props),
        gridGap: layoutConfig.miniGap
      }),
      variants: {
        popup: {
          bg: "#333",
          color: "#fff",
          p: 4,
          rounded: "lg",
          fontSize: 12,
        }
      }
    },
    TablePlus: {
      variants: {
        sticky: {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      },
      defaultProps: {
        variant: "sticky",
      },
    },
    TdPlus: {
      baseStyle: (props: any) => ({
        pt: 3,
        pb: 3,
        pr: 4,
        pl: 4,
        borderColor: borderColor(props),
      }),
      variants: {
        brandSecondary: (props: any) => ({
          color: secondaryColor(props),
        })
      }
    },
    ThPlus: {
      baseStyle: (props: any) => ({
        position: "sticky",
        top: -5,
        bg: backgroundColor(props),
        color: secondaryColor(props),
        borderColor: borderColor(props),
        zIndex: 5,
        textAlign: "right",
        paddingTop: 5,
        _notFirst: {
          paddingLeft: 0,
        }
      })
    },
    Box: {
      variants: {
        brandSecondary: (props: any) => ({
          color: secondaryColor(props)
        })
      }
    },
    Text: {
      variants: {
        brandSecondary: (props: any) => ({
          color: secondaryColor(props)
        })
      }
    }
  },
})

export default theme
