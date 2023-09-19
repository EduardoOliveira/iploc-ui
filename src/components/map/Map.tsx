import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from 'react-leaflet-cluster'
import Marker from "./Marker";

import { Access, ReportSummary } from "../../entities/access";
import { Location } from "../../entities/location";
import ReportedCountry from "./ReportedCountry";

type MapProps = {
    accessesStream: Map<string, Access>,
    locations: Location[] | null,
    selectedAccess?: Access,
    mode: 'accesses' | 'reports'
}

export default function Map({ accessesStream, mode, selectedAccess }: MapProps) {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true}>

            <TileLayer
                attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mode === 'accesses' &&
                <MarkerClusterGroup
                    chunkedLoading
                >
                    {[...accessesStream.values()].map((access: Access) => (
                        <Marker key={access.id} access={access} />
                    ))}
                </MarkerClusterGroup>}
            {mode === 'reports' &&
                <>
                    {Object.values(selectedAccess?.abuseIPDBData?.reportSummary).map((summary: ReportSummary) =>
                        <ReportedCountry key={summary.countryCode} summary={summary} />
                    )}
                    <Marker access={selectedAccess} />
                </>}
        </MapContainer>
    )
}