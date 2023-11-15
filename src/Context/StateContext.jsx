import { createContext, useEffect, useMemo, useState } from "react"
import { useMediaQuery } from "react-responsive";

export const StateContext = createContext()
const StateContextProvider = ({children}) => {

  const tablet = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const [isTablet, setIsTablet] = useState(tablet?true:false)

 

  const [isSideOpen, setIsSideOpen] = useState(true);


const states = JSON.parse(localStorage.getItem('states'))

const [theme, setTheme] = useState('light')
useEffect(() => {
states?.theme? setTheme(states.theme): setTheme('light')
}, [])

    const [sideBar, setSideBar] = useState(true)
    const [setting, setSetting] = useState(false)


    const [ver, setVer] = useState(states?.ver)
    const [hor, setHor] = useState(states?.hor)
    const [tCol, setTCol] = useState(states?.tCol)
    const [semi, setSemi] = useState(states?.semi)


    const [lightTheme, setLightTheme] = useState(states?.lightTheme)
    const [darkTheme, setDarkTheme] = useState(states?.darkTheme)

    const [fluid, setFluid] = useState(states?.fluid)
    const [boxed, setBoxed] = useState(states?.boxed)


    const [fixed, setFixed] = useState(states?.fixed)
    const [scrollable, setScrollable] = useState(states?.scrollable)

    
    const [lightTop, setLightTop] = useState(states?.lightTop)
    const [darkTop, setDarkTop] = useState(states?.darkTop)

    const [sizeDefault, setSizeDefault] = useState(states?.sizeDefault)
    const [compact, setCompact] = useState(states?.compact)
    const [smallIcon, setSmallIcon] = useState(states?.smallIcon)
    const [smallHover, setSmallHover] = useState(states?.smallHover)


    const [viewDefault, setViewDefault] = useState(states?.viewDefault)
    const [detached, setDetached] = useState(states?.detached)

    const [sideLight, setSideLight] = useState(states?.sideLight)
    const [sideDark, setSideDark] = useState(states?.sideDark)
    const [sideGradient, setSideGradient] = useState(states?.sideGradient)

    const [img, setImg] = useState(states?.img)
    const [img1, setImg1] = useState(states?.img1)
    const [img2, setImg2] = useState(states?.img2)
    const [img3, setImg3] = useState(states?.img3)
    const [img4, setImg4] = useState(states?.img4)

    const [disabled, setDisabled] = useState(states?.disabled)
    const [enabled, setEnabled] = useState(states?.enabled)

    let LsStates = {theme,ver,hor,tCol,semi,lightTheme,darkTheme,fluid,boxed,fixed,boxed,fixed,scrollable,lightTop,darkTop,sizeDefault,compact,smallIcon,smallHover,viewDefault,detached,sideLight,sideDark,sideGradient,img,img1,img2,img3,img4,disabled,enabled}


    useEffect(() => {


      tablet? setIsTablet(true): setIsTablet(false)
    }, [tablet])

    useEffect(() => {
      !isTablet&&(
        setVer(true),setHor(false), setTCol(false), setSemi(false), setFluid(true), setBoxed(false),setSizeDefault(true), setCompact(false),setSmallHover(false), setSmallIcon(false)
      )
    }, [isTablet])



    useMemo(() => {
      localStorage.setItem('states',JSON.stringify( LsStates))

    }, [])



    useEffect(() => {

  localStorage.setItem('states',JSON.stringify( LsStates))
}, [LsStates]) 






    const data = {isSideOpen, setIsSideOpen,theme, setTheme,sideBar, setSideBar,setting, setSetting,ver, setVer,hor, setHor,tCol, setTCol,semi, setSemi,lightTheme, setLightTheme,darkTheme, setDarkTheme,fluid, setFluid,boxed, setBoxed,fixed, setFixed,scrollable, setScrollable,lightTop, setLightTop,darkTop, setDarkTop,sizeDefault, setSizeDefault,compact, setCompact,smallIcon, setSmallIcon,smallHover, setSmallHover,viewDefault, setViewDefault,detached, setDetached,sideLight, setSideLight,sideDark, setSideDark,sideGradient, setSideGradient,img, setImg,img1, setImg1,img2, setImg2,img3, setImg3,img4, setImg4,disabled, setDisabled,enabled, setEnabled}

  return (
    <StateContext.Provider value={data}>{children}</StateContext.Provider>
  )
}

export default StateContextProvider
