export * from "../_core/constants/appStrings";


export const PROJECTIONS = {
    northpolar: {
        code: "EPSG:3413",
        proj4Def:
            "+proj=stere +lat_0=90 +lat_ts=70 +lon_0=-45 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
        extent: [-4194304, -4194304, 4194304, 4194304],
        aliases: ["northpolar", "urn:ogc:def:crs:EPSG::3413"]
    },
    southpolar: {
        code: "EPSG:3031",
        proj4Def:
            "+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
        extent: [-4194304, -4194304, 4194304, 4194304],
        aliases: ["southpolar", "urn:ogc:def:crs:EPSG::3031"]
    },
    webmercator: {
        code: "EPSG:3857",
        proj4Def:
            "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",
        extent: [-20026376.39, -20048966.1, 20026376.39, 20048966.1],
        aliases: [
            "webmercator",
            "EPSG:102100",
            "EPSG:102113",
            "EPSG:900913",
            "urn:ogc:def:crs:EPSG:6.18:3:3857",
            "urn:ogc:def:crs:EPSG::3857",
            "http://www.opengis.net/gml/srs/epsg.xml#3857"
        ]
    },
    latlon: {
        code: "EPSG:104905",
        proj4Def: "+proj=longlat +a=3396190 +rf=169.894447223612 +no_defs +type=crs",
        extent: [-180, -90, 180, 90],
        aliases: [
            "marslatlon",
            "latlon",
            "urn:ogc:def:crs:EPSG::104905"
        ]
    }
};
