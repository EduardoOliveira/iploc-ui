import { Location } from "../entities/location";

class LocationCache{
    cache: Map<string, Location>;

    constructor() {
        this.cache = new Map<string, Location>();
    }
    get(key: string) {
        return this.cache.get(key);
    }
    set(key: string, value:Location) {
        this.cache.set(key, value);
    }
    has(key: string) {
        return this.cache.has(key);
    }
    delete(key: string) {
        return this.cache.delete(key);
    }
    clear() {
        this.cache.clear();
    }
}
const locationCache = new LocationCache();

export default locationCache;
