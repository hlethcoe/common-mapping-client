import * as AppActions from '_core/actions/AppActions';
import { createStore } from 'redux';
import { expect } from 'chai';
import rootReducer from '_core/reducers';
import { mapState, layerModel, paletteModel } from '_core/reducers/models/map';
import { asyncState } from '_core/reducers/models/async';
import { helpState } from '_core/reducers/models/help';
import { shareState } from '_core/reducers/models/share';
import { settingsState } from '_core/reducers/models/settings';
import { dateSliderState } from '_core/reducers/models/dateSlider';
import { analyticsState } from '_core/reducers/models/analytics';
import { viewState } from '_core/reducers/models/view';
import { layerInfoState } from '_core/reducers/models/layerInfo';
import TestUtil from '_core/tests/TestUtil';

const initialState = {
    map: mapState,
    view: viewState,
    asyncronous: asyncState,
    help: helpState,
    settings: settingsState,
    share: shareState,
    dateSlider: dateSliderState,
    analytics: analyticsState,
    layerInfo: layerInfoState
};

describe('Store - Settings', function() {
    it('opens settings.', function() {
        const store = createStore(rootReducer, initialState);

        const actions = [
            AppActions.openSettings()
        ];
        actions.forEach(action => store.dispatch(action));

        const state = store.getState();
        const actual = {...state };

        const expected = {...initialState };
        expected.settings = expected.settings.set("isOpen", true);

        TestUtil.compareFullStates(actual, expected);
    });
    it('closes settings.', function() {
        const store = createStore(rootReducer, initialState);

        const actions = [
            AppActions.closeSettings()
        ];
        actions.forEach(action => store.dispatch(action));

        const state = store.getState();
        const actual = {...state };

        const expected = {...initialState };
        expected.settings = expected.settings.set("isOpen", false);

        TestUtil.compareFullStates(actual, expected);
    });

    it('opens and closes settings.', function() {
        const store = createStore(rootReducer, initialState);

        const actions = [
            AppActions.openSettings(),
            AppActions.closeSettings()
        ];
        actions.forEach(action => store.dispatch(action));

        const state = store.getState();
        const actual = {...state };

        const expected = {...initialState };
        expected.settings = expected.settings.set("isOpen", false);

        TestUtil.compareFullStates(actual, expected);
    });
});
