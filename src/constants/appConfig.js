/**
 * Copyright 2017 California Institute of Technology.
 *
 * This source code is licensed under the APACHE 2.0 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Immutable from "immutable";
import * as coreConfig from "_core/constants/appConfig";
import * as appStrings from "_core/constants/appStrings";

// the config as defined by CMC Core
const CORE_CONFIG = Immutable.fromJS(coreConfig);

// this config is defined in `src/config.js` for in ops changes
const OPS_CONFIG = Immutable.fromJS(window.APPLICATION_CONFIG);

// define your overrides for Core config here
const APP_CONFIG = Immutable.fromJS({
    APP_TITLE: "NASA Jet Propulsion Laboratory",
    APP_SUBTITLE: "Mars Looker-Atter Thing",
    APP_VERSION: "1.0",
    URLS : {
        layerConfig: [
            {
                url: "default-data/_core_default-data/capabilities.xml",
                type: "wmts/xml"
            },
            {
                url: "https://trek.nasa.gov/tiles/Mars/EQ/Mars_Viking_MDIM21_ClrMosaic_global_232m/1.0.0/WMTSCapabilities.xml",
                type: "wmts/xml"
            },
            {
                url: "https://trek.nasa.gov/tiles/Mars/EQ/Gale_CTX_BlockAdj_dd/1.0.0/WMTSCapabilities.xml",
                type: "wmts/xml"
            },
            {
                url: "https://trek.nasa.gov/tiles/Mars/EQ/curiosity_hirise_mosaic/1.0.0/WMTSCapabilities.xml",
                type: "wmts/xml"
            },
            {
                url: "https://trek.nasa.gov/tiles/Mars/EQ/JEZ_hirise_soc_006_orthoMosaic_25cm_Eqc_latTs0_lon0_first_dd/1.0.0/WMTSCapabilities.xml",
                type: "wmts/xml"
            },
            {
                url: "default-data/_core_default-data/layers.json",
                type: "json"
            }
        ],
        paletteConfig: "default-data/_core_default-data/palettes.json",
        analyticsEndpoint: "http://localhost:3050/analyticsEndpoint"
    },
    DEFAULT_AVAILABLE_PROJECTIONS : [
        appStrings.PROJECTIONS.latlon
    ],
    GIBS_IMAGERY_RESOLUTIONS : {
        [appStrings.PROJECTIONS.latlon.code]: [
            0.7031250000000001,
            0.35156250000000006,
            0.17578125000000003,
            0.0878906249999999,
            0.04394531250000006,
            0.02197265625000001,
            0.010986328125000005,
            0.0054931640624999905,
            0.0027465820312499952,
            0.001373291015625,
            0.000686645507813,
            0.000343322753906,
            0.000171661376953,
            0.000085830688477,
            0.000042915344238,
            0.000021457672119,
            0.00001072883606
        ],
        [appStrings.PROJECTIONS.webmercator.code]: [
            156543.03392804085,
            78271.51696402043,
            39135.75848201021,
            19567.879241005106,
            9783.939620502553,
            4891.969810251277,
            2445.9849051256383,
            1222.9924525628192,
            611.4962262814096,
            305.7481131407048,
            152.8740565703524,
            76.4370282851762,
            38.2185141425881,
            19.10925707129405
        ],
        [appStrings.PROJECTIONS.northpolar.code]: [8192, 4096, 2048, 1024, 512, 256],
        [appStrings.PROJECTIONS.southpolar.code]: [8192, 4096, 2048, 1024, 512, 256]
    }
});

// define and export the final config
const appConfig = CORE_CONFIG.mergeDeep(APP_CONFIG)
    .mergeDeep(OPS_CONFIG)
    .toJS();
export default appConfig;
