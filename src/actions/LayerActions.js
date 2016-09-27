import fetch from 'isomorphic-fetch';
import { URLS } from '../constants/appConfig';
import * as types from '../constants/actionTypes';
import * as mapStrings from '../constants/mapStrings';
import * as appStrings from '../constants/appStrings';
import * as AlertActions from './AlertActions';

export function openLayerInfo(layer) {
    return { type: types.OPEN_LAYER_INFO, layer };
}

export function closeLayerInfo() {
    return { type: types.CLOSE_LAYER_INFO };
}

export function setLayerMenuOpen(open) {
    return { type: types.SET_LAYER_MENU_OPEN, open };
}

export function setLayerActive(layer, active) {
    return { type: types.SET_LAYER_ACTIVE, layer, active };
}

export function setLayerDisabled(layer, disabled) {
    return { type: types.SET_LAYER_DISABLED, layer, disabled };
}

export function setLayerOpacity(layer, opacity) {
    return { type: types.SET_LAYER_OPACITY, layer, opacity };
}

export function startChangingLayerOpacity(layer) {
    return { type: types.START_CHANGING_OPACITY, layer };
}

export function stopChangingLayerOpacity(layer) {
    return { type: types.STOP_CHANGING_OPACITY, layer };
}

export function startChangingLayerPosition(layer) {
    return { type: types.START_CHANGING_POSITION, layer };
}

export function stopChangingLayerPosition(layer) {
    return { type: types.STOP_CHANGING_POSITION, layer };
}

export function changeLayerPalette(layer, palette) {
    return { type: types.SET_LAYER_PALETTE, layer, palette };
}

export function moveLayerToTop(layer) {
    return { type: types.MOVE_LAYER_TO_TOP, layer };
}

export function moveLayerToBottom(layer) {
    return { type: types.MOVE_LAYER_TO_BOTTOM, layer };
}

export function moveLayerUp(layer) {
    return { type: types.MOVE_LAYER_UP, layer };
}

export function moveLayerDown(layer) {
    return { type: types.MOVE_LAYER_DOWN, layer };
}

export function activateDefaultLayers() {
    return { type: types.ACTIVATE_DEFAULT_LAYERS };
}

export function loadInitialData(callback = null) {
    return (dispatch) => {
        // Set flag that initial layer data has begun loading
        dispatch(initialDataLoading());
        // Fetch all initial layer data
        return Promise.all([
            dispatch(loadLayerData()),
            dispatch(loadPaletteData())
        ]).then(() => {
            // Set flag that initial layer data has finished loading
            dispatch(initialDataLoaded());
            if (typeof callback === "function") {
                callback.call(this);
            }
        }).catch((err) => {
            console.warn("Error in LayerActions.loadInitialData:", err);
            dispatch(initialDataLoaded());
            dispatch(AlertActions.addAlert({
                title: appStrings.ALERTS.INITIAL_DATA_LOAD_FAILED.title,
                body: appStrings.ALERTS.INITIAL_DATA_LOAD_FAILED.formatString,
                severity: appStrings.ALERTS.INITIAL_DATA_LOAD_FAILED.severity,
                time: new Date()
            }));
            if (typeof callback === "function") {
                callback.call(this);
            }
        });
    };
}

export function loadPaletteData() {
    return (dispatch) => {
        let url = URLS.paletteConfig;
        dispatch(paletteDataLoading());
        return fetch(url).then((response) => {
            return response.json();
        }).then((resp) => {
            dispatch(ingestLayerPalettes(resp));
            dispatch(paletteDataLoaded());
        }).catch((err) => {
            console.warn("Error in LayerActions.loadPaletteData:", err);
            throw err;
        });
    };
}


export function loadLayerData() {
    return (dispatch) => {
        dispatch(layerDataLoading());
        return Promise.all(URLS.layerConfig.map((el) => {
            return dispatch(loadSingleLayerSource(el));
        })).then(() => {
            dispatch(mergeLayers());
            dispatch(layerDataLoaded());
        }).catch((err) => {
            console.warn("Error in LayerActions.loadLayerData:", err);
            throw err;
        });
    };
}
export function loadSingleLayerSource(options) {
    return (dispatch) => {
        let url = options.url;
        let type = options.type;
        return fetch(url).then((response) => {
            if (type === mapStrings.LAYER_CONFIG_JSON) {
                return response.json();
            } else if (type === mapStrings.LAYER_CONFIG_WMTS_XML) {
                return response.text();
            } else {
                return response;
            }
        }).then((resp) => {
            dispatch(ingestLayerConfig(resp, options));
        }).catch((err) => {
            console.warn("Error in LayerActions.loadSingleLayerSource:", err);
            throw err;
        });
    };
}


// async action helpers

function initialDataLoading() {
    return { type: types.INITIAL_DATA_LOADING };
}

function initialDataLoaded() {
    return { type: types.INITIAL_DATA_LOADED };
}

function paletteDataLoading() {
    return { type: types.PALETTE_DATA_LOADING };
}

function paletteDataLoaded() {
    return { type: types.PALETTE_DATA_LOADED };
}

function layerDataLoading() {
    return { type: types.LAYER_DATA_LOADING };
}

function layerDataLoaded() {
    return { type: types.LAYER_DATA_LOADED };
}

function ingestLayerConfig(config, options) {
    return { type: types.INGEST_LAYER_CONFIG, config, options };
}

function mergeLayers() {
    return { type: types.MERGE_LAYERS };
}

function ingestLayerPalettes(paletteConfig) {
    return { type: types.INGEST_LAYER_PALETTES, paletteConfig };
}
