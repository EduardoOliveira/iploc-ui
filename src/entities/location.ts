import type { MultiPolygon } from 'geojson';

export interface Location {
    osmId: number
    lat: number
    lon: number
    importance: number
    addressType: string
    name: string
    displayName: string
    boundingBox: number[]
    geometry: MultiPolygon[]
    matches: string[]
  }