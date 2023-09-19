import { Marker as LMaker } from "react-leaflet";
import { Access, Location } from "../../entities/access";
import { useContext, useEffect, useState } from "react";
import Pin from "./Pin";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import { SharedStateContext } from "../../contexts/SharedStateContext";

type MakerProps = {
  access?: Access
  location?: Location
}

export default function Marker({ access, location }: MakerProps) {
  const { sharedState, setSharedState } = useContext(SharedStateContext);
  const [isThisSelected, setIsThisSelected] = useState(false);
  const lat = access?.latitude || location?.lat || 0;
  const lon = access?.longitude || location?.lon || 0;
  const id = access?.id || location?.osm_id;

  const pinIcon = <Pin seleced={isThisSelected} access={access} />
  const click = () => {
    setSharedState({mode: 'accesses', selectedAccess: access})
  }
  useEffect(() => {
    setIsThisSelected(access?.id === sharedState?.selectedAccess?.id)
  }, [sharedState])

  return (
    <>
      <LMaker key={id} position={[lat, lon]} eventHandlers={{ click }}
        icon={divIcon({ html: renderToStaticMarkup(pinIcon), iconAnchor: [19, 32], popupAnchor: [0, -32],className:""})} 
      >
      </LMaker>
    </>
  )
}