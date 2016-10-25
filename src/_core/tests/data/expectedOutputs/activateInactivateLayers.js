import moment from 'moment';

export const ACTIVE_LAYERS = {
    "data": {
        "facilities_kml": {
            "isChangingPosition": false,
            "timeFormat": "YYYY-MM-DD",
            "max": 0,
            "isDisabled": false,
            "wmtsOptions": { "matrixSet": "", "requestEncoding": "", "tileFunction": "", "urlFunction": "", "extents": [], "urlFunctions": {}, "tileFunctions": {}, "url": "", "projection": "", "layer": "", "tileGrid": { "origin": [], "resolutions": [], "matrixIds": [], "tileSize": 256 }, "format": "" },
            "opacity": 1,
            "urlFunctions": {},
            "time": moment(new Date()).subtract(3, "d").startOf('d').format("YYYY-MM-DD"),
            "url": "default-data/facilities.kml",
            "metadata": { "platform": "", "spatialResolution": "", "dateRange": "", "description": "" },
            "units": "",
            "thumbnailImage": "https://unsplash.it/700/400?image=1025",
            "isActive": true,
            "min": 0,
            "fromJson": true,
            "updateParameters": { "time": false },
            "isChangingOpacity": false,
            "isDefault": false,
            "title": "Facilities - KML",
            "handleAs": "vector_kml",
            "type": "data",
            "id": "facilities_kml",
            "palette": { "name": "", "url": "", "handleAs": "", "min": 0, "max": 0 },
            "clusterVector": false
        },
        "us_state_outline_topojson": {
            "isChangingPosition": false,
            "timeFormat": "YYYY-MM-DD",
            "max": 0,
            "isDisabled": false,
            "wmtsOptions": { "matrixSet": "", "requestEncoding": "", "tileFunction": "", "urlFunction": "", "extents": [], "urlFunctions": {}, "tileFunctions": {}, "url": "", "projection": "", "layer": "", "tileGrid": { "origin": [], "resolutions": [], "matrixIds": [], "tileSize": 256 }, "format": "" },
            "opacity": 1,
            "urlFunctions": {},
            "time": moment(new Date()).subtract(3, "d").startOf('d').format("YYYY-MM-DD"),
            "url": "default-data/ne_10m_us_states.topojson",
            "metadata": { "platform": "", "spatialResolution": "", "dateRange": "", "description": "" },
            "units": "",
            "thumbnailImage": "https://unsplash.it/700/400?image=1025",
            "isActive": false,
            "min": 0,
            "fromJson": true,
            "updateParameters": { "time": false },
            "isChangingOpacity": false,
            "isDefault": false,
            "title": "US State Outline - TopoJSON",
            "handleAs": "vector_topojson",
            "type": "data",
            "id": "us_state_outline_topojson",
            "palette": { "name": "", "url": "", "handleAs": "", "min": 0, "max": 0 },
            "clusterVector": false
        },
        "GHRSST_L4_G1SST_Sea_Surface_Temperature": {
            "isChangingPosition": false,
            "timeFormat": "YYYY-MM-DD",
            "max": 32,
            "isDisabled": false,
            "wmtsOptions": { "matrixSet": "1km", "requestEncoding": "REST", "tileFunction": "", "urlFunction": "", "extents": [-180, -90, 180, 90], "urlFunctions": { "openlayers": "kvpTimeParam", "cesium": "kvpTimeParam" }, "tileFunctions": {}, "url": "http://gibs.earthdata.nasa.gov/wmts/epsg4326/best/GHRSST_L4_G1SST_Sea_Surface_Temperature/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png", "projection": "EPSG:4326", "layer": "GHRSST_L4_G1SST_Sea_Surface_Temperature", "tileGrid": { "origin": [-180, 90], "resolutions": [0.5624999999999999, 0.2812500000000001, 0.140625, 0.0703125, 0.035156250000000014, 0.017578125, 0.008789062499999998], "matrixIds": ["0", "1", "2", "3", "4", "5", "6"], "tileSize": 512, "minZoom": 0, "maxZoom": 6 }, "format": "image/png" },
            "opacity": 1,
            "urlFunctions": {},
            "time": moment(new Date()).subtract(3, "d").startOf('d').format("YYYY-MM-DD"),
            "url": "",
            "metadata": { "platform": "MODIS, Terra", "spatialResolution": "25km x 25km spatial resolution", "dateRange": "2012 – Present", "description": "The Advanced Microwave Scanning Radiometer 2 (AMSR2) was launched on 18 May 2012, onboard the Global Change Observation Mission satellite developed by the Japan Aerospace Exploration Agency (JAXA)." },
            "units": "˚C",
            "thumbnailImage": "http://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?layer=GHRSST_L4_G1SST_Sea_Surface_Temperature&tilematrixset=1km&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix=2&TileCol=0&TileRow=1&TIME=2015-05-20",
            "isActive": true,
            "min": 2,
            "fromJson": true,
            "updateParameters": { "time": true },
            "isChangingOpacity": false,
            "isDefault": true,
            "title": "Sea Surface Temperature",
            "handleAs": "GIBS",
            "type": "data",
            "id": "GHRSST_L4_G1SST_Sea_Surface_Temperature",
            "palette": { "name": "GHRSST_L4_Sea_Surface_Temperature", "url": "", "handleAs": "json-relative", "min": 0, "max": 0 },
            "clusterVector": false
        }
    },
    "reference": {
        "Reference_Labels": {
            "isChangingPosition": false,
            "timeFormat": "YYYY-MM-DD",
            "max": 0,
            "isDisabled": false,
            "wmtsOptions": { "matrixSet": "250m", "requestEncoding": "REST", "tileFunction": "", "urlFunction": "", "extents": [-180, -90, 180, 90], "urlFunctions": {}, "tileFunctions": {}, "url": "http://gibs.earthdata.nasa.gov/wmts/epsg4326/best/Reference_Labels/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png", "projection": "EPSG:4326", "layer": "Reference_Labels", "tileGrid": { "origin": [-180, 90], "resolutions": [0.5624999999999999, 0.2812500000000001, 0.140625, 0.0703125, 0.035156250000000014, 0.017578125, 0.008789062499999998, 0.004394531249999999, 0.002197265625], "matrixIds": ["0", "1", "2", "3", "4", "5", "6", "7", "8"], "tileSize": 512, "minZoom": 0, "maxZoom": 8 }, "format": "image/png" },
            "opacity": 1,
            "urlFunctions": {},
            "time": moment(new Date()).subtract(3, "d").startOf('d').format("YYYY-MM-DD"),
            "url": "",
            "metadata": { "platform": "", "spatialResolution": "", "dateRange": "", "description": "" },
            "units": "",
            "thumbnailImage": "https://unsplash.it/700/400?image=1025",
            "isActive": false,
            "min": 0,
            "fromJson": true,
            "updateParameters": { "time": true },
            "isChangingOpacity": false,
            "isDefault": false,
            "title": "Reference Labels",
            "handleAs": "GIBS",
            "type": "reference",
            "id": "Reference_Labels",
            "palette": { "name": "", "url": "", "handleAs": "", "min": 0, "max": 0 },
            "clusterVector": false
        }
    },
    "basemap": {
        "BlueMarble_ShadedRelief_Bathymetry": {
            "isChangingPosition": false,
            "timeFormat": "YYYY-MM-DD",
            "max": 0,
            "isDisabled": false,
            "wmtsOptions": { "matrixSet": "500m", "requestEncoding": "REST", "tileFunction": "", "urlFunction": "", "extents": [-180, -90, 180, 90], "urlFunctions": {}, "tileFunctions": {}, "url": "http://gibs.earthdata.nasa.gov/wmts/epsg4326/best/BlueMarble_ShadedRelief_Bathymetry/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg", "projection": "EPSG:4326", "layer": "BlueMarble_ShadedRelief_Bathymetry", "tileGrid": { "origin": [-180, 90], "resolutions": [0.5624999999999999, 0.2812500000000001, 0.140625, 0.0703125, 0.035156250000000014, 0.017578125, 0.008789062499999998, 0.004394531249999999], "matrixIds": ["0", "1", "2", "3", "4", "5", "6", "7"], "tileSize": 512, "minZoom": 0, "maxZoom": 7 }, "format": "image/jpeg" },
            "opacity": 1,
            "urlFunctions": {},
            "time": moment(new Date()).subtract(3, "d").startOf('d').format("YYYY-MM-DD"),
            "url": "",
            "metadata": { "platform": "", "spatialResolution": "", "dateRange": "", "description": "" },
            "units": "",
            "thumbnailImage": "http://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?layer=BlueMarble_ShadedRelief_Bathymetry&tilematrixset=500m&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/jpeg&TileMatrix=2&TileCol=1&TileRow=1&TIME=2016-05-22",
            "isActive": false,
            "min": 0,
            "fromJson": true,
            "updateParameters": { "time": true },
            "isChangingOpacity": false,
            "isDefault": false,
            "title": "GIBS Blue Marble, Shaded Relief w/Bathymetry",
            "handleAs": "GIBS",
            "type": "basemap",
            "id": "BlueMarble_ShadedRelief_Bathymetry",
            "palette": { "name": "", "url": "", "handleAs": "", "min": 0, "max": 0 },
            "clusterVector": false
        },
        "ESRI_World_Imagery": {
            "isChangingPosition": false,
            "timeFormat": "YYYY-MM-DD",
            "max": 0,
            "isDisabled": false,
            "wmtsOptions": { "matrixSet": "", "requestEncoding": "", "tileFunction": "", "urlFunction": "", "extents": [], "urlFunctions": { "openlayers": "esriCustom512" }, "tileFunctions": { "openlayers": "catsTile" }, "url": "http://services.arcgisonline.com/arcgis/rest/services/ESRI_Imagery_World_2D/MapServer/tile/{z}/{y}/{x}", "projection": "EPSG:4326", "layer": "ESRI_World_Imagery", "tileGrid": { "origin": [], "resolutions": [], "matrixIds": [], "tileSize": 512, "minZoom": 1, "maxZoom": 16 }, "format": "" },
            "opacity": 1,
            "urlFunctions": {},
            "time": moment(new Date()).subtract(3, "d").startOf('d').format("YYYY-MM-DD"),
            "url": "",
            "metadata": { "platform": "", "spatialResolution": "", "dateRange": "", "description": "" },
            "units": "",
            "thumbnailImage": "http://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?layer=BlueMarble_ShadedRelief_Bathymetry&tilematrixset=500m&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/jpeg&TileMatrix=2&TileCol=1&TileRow=1&TIME=2016-05-22",
            "isActive": false,
            "min": 0,
            "fromJson": true,
            "updateParameters": { "time": true },
            "isChangingOpacity": false,
            "isDefault": true,
            "title": "ESRI High Resolution World Imagery",
            "handleAs": "xyz",
            "type": "basemap",
            "id": "ESRI_World_Imagery",
            "palette": { "name": "", "url": "", "handleAs": "", "min": 0, "max": 0 },
            "clusterVector": false
        }
    }
};

export const INACTIVE_LAYERS = {
    "data": {
        "facilities_kml": {
            "isChangingPosition": false,
            "timeFormat": "YYYY-MM-DD",
            "max": 0,
            "isDisabled": false,
            "wmtsOptions": { "matrixSet": "", "requestEncoding": "", "tileFunction": "", "urlFunction": "", "extents": [], "urlFunctions": {}, "tileFunctions": {}, "url": "", "projection": "", "layer": "", "tileGrid": { "origin": [], "resolutions": [], "matrixIds": [], "tileSize": 256 }, "format": "" },
            "opacity": 1,
            "urlFunctions": {},
            "time": moment(new Date()).subtract(3, "d").startOf('d').format("YYYY-MM-DD"),
            "url": "default-data/facilities.kml",
            "metadata": { "platform": "", "spatialResolution": "", "dateRange": "", "description": "" },
            "units": "",
            "thumbnailImage": "https://unsplash.it/700/400?image=1025",
            "isActive": false,
            "min": 0,
            "fromJson": true,
            "updateParameters": { "time": false },
            "isChangingOpacity": false,
            "isDefault": false,
            "title": "Facilities - KML",
            "handleAs": "vector_kml",
            "type": "data",
            "id": "facilities_kml",
            "palette": { "name": "", "url": "", "handleAs": "", "min": 0, "max": 0 },
            "clusterVector": false
        },
        "us_state_outline_topojson": {
            "isChangingPosition": false,
            "timeFormat": "YYYY-MM-DD",
            "max": 0,
            "isDisabled": false,
            "wmtsOptions": { "matrixSet": "", "requestEncoding": "", "tileFunction": "", "urlFunction": "", "extents": [], "urlFunctions": {}, "tileFunctions": {}, "url": "", "projection": "", "layer": "", "tileGrid": { "origin": [], "resolutions": [], "matrixIds": [], "tileSize": 256 }, "format": "" },
            "opacity": 1,
            "urlFunctions": {},
            "time": moment(new Date()).subtract(3, "d").startOf('d').format("YYYY-MM-DD"),
            "url": "default-data/ne_10m_us_states.topojson",
            "metadata": { "platform": "", "spatialResolution": "", "dateRange": "", "description": "" },
            "units": "",
            "thumbnailImage": "https://unsplash.it/700/400?image=1025",
            "isActive": false,
            "min": 0,
            "fromJson": true,
            "updateParameters": { "time": false },
            "isChangingOpacity": false,
            "isDefault": false,
            "title": "US State Outline - TopoJSON",
            "handleAs": "vector_topojson",
            "type": "data",
            "id": "us_state_outline_topojson",
            "palette": { "name": "", "url": "", "handleAs": "", "min": 0, "max": 0 },
            "clusterVector": false
        },
        "GHRSST_L4_G1SST_Sea_Surface_Temperature": {
            "isChangingPosition": false,
            "timeFormat": "YYYY-MM-DD",
            "max": 32,
            "isDisabled": false,
            "wmtsOptions": { "matrixSet": "1km", "requestEncoding": "REST", "tileFunction": "", "urlFunction": "", "extents": [-180, -90, 180, 90], "urlFunctions": { "openlayers": "kvpTimeParam", "cesium": "kvpTimeParam" }, "tileFunctions": {}, "url": "http://gibs.earthdata.nasa.gov/wmts/epsg4326/best/GHRSST_L4_G1SST_Sea_Surface_Temperature/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png", "projection": "EPSG:4326", "layer": "GHRSST_L4_G1SST_Sea_Surface_Temperature", "tileGrid": { "origin": [-180, 90], "resolutions": [0.5624999999999999, 0.2812500000000001, 0.140625, 0.0703125, 0.035156250000000014, 0.017578125, 0.008789062499999998], "matrixIds": ["0", "1", "2", "3", "4", "5", "6"], "tileSize": 512, "minZoom": 0, "maxZoom": 6 }, "format": "image/png" },
            "opacity": 1,
            "urlFunctions": {},
            "time": moment(new Date()).subtract(3, "d").startOf('d').format("YYYY-MM-DD"),
            "url": "",
            "metadata": { "platform": "MODIS, Terra", "spatialResolution": "25km x 25km spatial resolution", "dateRange": "2012 – Present", "description": "The Advanced Microwave Scanning Radiometer 2 (AMSR2) was launched on 18 May 2012, onboard the Global Change Observation Mission satellite developed by the Japan Aerospace Exploration Agency (JAXA)." },
            "units": "˚C",
            "thumbnailImage": "http://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?layer=GHRSST_L4_G1SST_Sea_Surface_Temperature&tilematrixset=1km&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix=2&TileCol=0&TileRow=1&TIME=2015-05-20",
            "isActive": true,
            "min": 2,
            "fromJson": true,
            "updateParameters": { "time": true },
            "isChangingOpacity": false,
            "isDefault": true,
            "title": "Sea Surface Temperature",
            "handleAs": "GIBS",
            "type": "data",
            "id": "GHRSST_L4_G1SST_Sea_Surface_Temperature",
            "palette": { "name": "GHRSST_L4_Sea_Surface_Temperature", "url": "", "handleAs": "json-relative", "min": 0, "max": 0 },
            "clusterVector": false
        }
    },
    "reference": {
        "Reference_Labels": {
            "isChangingPosition": false,
            "timeFormat": "YYYY-MM-DD",
            "max": 0,
            "isDisabled": false,
            "wmtsOptions": { "matrixSet": "250m", "requestEncoding": "REST", "tileFunction": "", "urlFunction": "", "extents": [-180, -90, 180, 90], "urlFunctions": {}, "tileFunctions": {}, "url": "http://gibs.earthdata.nasa.gov/wmts/epsg4326/best/Reference_Labels/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png", "projection": "EPSG:4326", "layer": "Reference_Labels", "tileGrid": { "origin": [-180, 90], "resolutions": [0.5624999999999999, 0.2812500000000001, 0.140625, 0.0703125, 0.035156250000000014, 0.017578125, 0.008789062499999998, 0.004394531249999999, 0.002197265625], "matrixIds": ["0", "1", "2", "3", "4", "5", "6", "7", "8"], "tileSize": 512, "minZoom": 0, "maxZoom": 8 }, "format": "image/png" },
            "opacity": 1,
            "urlFunctions": {},
            "time": moment(new Date()).subtract(3, "d").startOf('d').format("YYYY-MM-DD"),
            "url": "",
            "metadata": { "platform": "", "spatialResolution": "", "dateRange": "", "description": "" },
            "units": "",
            "thumbnailImage": "https://unsplash.it/700/400?image=1025",
            "isActive": false,
            "min": 0,
            "fromJson": true,
            "updateParameters": { "time": true },
            "isChangingOpacity": false,
            "isDefault": false,
            "title": "Reference Labels",
            "handleAs": "GIBS",
            "type": "reference",
            "id": "Reference_Labels",
            "palette": { "name": "", "url": "", "handleAs": "", "min": 0, "max": 0 },
            "clusterVector": false
        }
    },
    "basemap": {
        "BlueMarble_ShadedRelief_Bathymetry": {
            "isChangingPosition": false,
            "timeFormat": "YYYY-MM-DD",
            "max": 0,
            "isDisabled": false,
            "wmtsOptions": { "matrixSet": "500m", "requestEncoding": "REST", "tileFunction": "", "urlFunction": "", "extents": [-180, -90, 180, 90], "urlFunctions": {}, "tileFunctions": {}, "url": "http://gibs.earthdata.nasa.gov/wmts/epsg4326/best/BlueMarble_ShadedRelief_Bathymetry/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg", "projection": "EPSG:4326", "layer": "BlueMarble_ShadedRelief_Bathymetry", "tileGrid": { "origin": [-180, 90], "resolutions": [0.5624999999999999, 0.2812500000000001, 0.140625, 0.0703125, 0.035156250000000014, 0.017578125, 0.008789062499999998, 0.004394531249999999], "matrixIds": ["0", "1", "2", "3", "4", "5", "6", "7"], "tileSize": 512, "minZoom": 0, "maxZoom": 7 }, "format": "image/jpeg" },
            "opacity": 1,
            "urlFunctions": {},
            "time": moment(new Date()).subtract(3, "d").startOf('d').format("YYYY-MM-DD"),
            "url": "",
            "metadata": { "platform": "", "spatialResolution": "", "dateRange": "", "description": "" },
            "units": "",
            "thumbnailImage": "http://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?layer=BlueMarble_ShadedRelief_Bathymetry&tilematrixset=500m&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/jpeg&TileMatrix=2&TileCol=1&TileRow=1&TIME=2016-05-22",
            "isActive": false,
            "min": 0,
            "fromJson": true,
            "updateParameters": { "time": true },
            "isChangingOpacity": false,
            "isDefault": false,
            "title": "GIBS Blue Marble, Shaded Relief w/Bathymetry",
            "handleAs": "GIBS",
            "type": "basemap",
            "id": "BlueMarble_ShadedRelief_Bathymetry",
            "palette": { "name": "", "url": "", "handleAs": "", "min": 0, "max": 0 },
            "clusterVector": false
        },
        "ESRI_World_Imagery": {
            "isChangingPosition": false,
            "timeFormat": "YYYY-MM-DD",
            "max": 0,
            "isDisabled": false,
            "wmtsOptions": { "matrixSet": "", "requestEncoding": "", "tileFunction": "", "urlFunction": "", "extents": [], "urlFunctions": { "openlayers": "esriCustom512" }, "tileFunctions": { "openlayers": "catsTile" }, "url": "http://services.arcgisonline.com/arcgis/rest/services/ESRI_Imagery_World_2D/MapServer/tile/{z}/{y}/{x}", "projection": "EPSG:4326", "layer": "ESRI_World_Imagery", "tileGrid": { "origin": [], "resolutions": [], "matrixIds": [], "tileSize": 512, "minZoom": 1, "maxZoom": 16 }, "format": "" },
            "opacity": 1,
            "urlFunctions": {},
            "time": moment(new Date()).subtract(3, "d").startOf('d').format("YYYY-MM-DD"),
            "url": "",
            "metadata": { "platform": "", "spatialResolution": "", "dateRange": "", "description": "" },
            "units": "",
            "thumbnailImage": "http://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?layer=BlueMarble_ShadedRelief_Bathymetry&tilematrixset=500m&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/jpeg&TileMatrix=2&TileCol=1&TileRow=1&TIME=2016-05-22",
            "isActive": false,
            "min": 0,
            "fromJson": true,
            "updateParameters": { "time": true },
            "isChangingOpacity": false,
            "isDefault": true,
            "title": "ESRI High Resolution World Imagery",
            "handleAs": "xyz",
            "type": "basemap",
            "id": "ESRI_World_Imagery",
            "palette": { "name": "", "url": "", "handleAs": "", "min": 0, "max": 0 },
            "clusterVector": false
        }
    }
};