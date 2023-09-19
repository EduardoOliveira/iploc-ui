import { ChakraProvider } from '@chakra-ui/react'
import theme from './utils/theme'
import './index.css'

import Map from './components/map/Map'

import useAccessesStream from './hooks/useAccessesStream'
import { useEffect, useState } from 'react'
import DetailsOverlay from './components/gui/DetailsOverlay/DetailsOverlay'
import HeaderMenu from './components/gui/Header/HeaderMenu'
import Overlay from './components/overlay/Overlay'
import { Status, StatusContext } from './contexts/StatusContext'
import BottomPanel from './components/gui/BottomPanel/BottomPanel'
import { SharedState, SharedStateContext } from './contexts/SharedStateContext'

function App() {

  const { accessesStream, loading, error } = useAccessesStream()
  const [sharedState, setSharedState] = useState<SharedState>({mode: 'accesses', locations: null});
  const [status, setStatus] = useState<Status>({ loading: false, error: null, message: '' });

  useEffect(() => {
    setStatus({ loading, error, message: '' })
  }, [loading, error, setStatus])

  return (
    <>
      <ChakraProvider theme={theme}>
        <StatusContext.Provider value={{ status, setStatus }}>
          <SharedStateContext.Provider value={{ sharedState, setSharedState }}>
            <Overlay>
              <HeaderMenu />
              <DetailsOverlay />
              <BottomPanel accessesStream={accessesStream} />
            </Overlay>
            <Map accessesStream={accessesStream} mode={sharedState.mode} locations={sharedState.locations} selectedAccess={sharedState.selectedAccess}/>
          </SharedStateContext.Provider>
        </StatusContext.Provider>
      </ChakraProvider>
    </>
  )
}

export default App
