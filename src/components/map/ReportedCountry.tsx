
import type { GeoJsonObject } from 'geojson';
import { GeoJSON } from 'react-leaflet/GeoJSON'
import useLocationsByCountryCode from '../../hooks/useLocationsByCountryCode';
import { ReportSummary } from '../../entities/access';
import { Tooltip } from 'react-leaflet';
import { ReportCategories } from "../../utils/consts";

export default function ReportedCountry({ summary }: { summary: ReportSummary }) {
    const redOptions = { color: 'red' }
    const { location } = useLocationsByCountryCode(summary.countryCode);
    
    return (
        <>
            {location?.geometry?.map((geometry: GeoJsonObject, j: number) => {
                return (
                    <GeoJSON pathOptions={redOptions} key={j} data={geometry} >
                        <Tooltip>
                            <span>{summary.totalReports} reports</span>
                            <br />
                            {summary.categories.map((category, index) => {
                                return (
                                    <div key={index}>{ReportCategories[category]?.label}</div>
                                )
                            })}
                        </Tooltip>
                    </GeoJSON>
                );
            })}
        </>
    )
}