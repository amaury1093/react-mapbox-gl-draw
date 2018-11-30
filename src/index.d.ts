import * as React from 'react';
import * as PropTypes from 'prop-types';
import { MapboxDraw } from "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw";
export declare class MapBoxPropTypes {
    boxSelect: PropTypes.Requireable<boolean>;
    clickBuffer: PropTypes.Requireable<number>;
    controls: PropTypes.Requireable<PropTypes.InferProps<{
        point: PropTypes.Requireable<boolean>;
        line_string: PropTypes.Requireable<boolean>;
        polygon: PropTypes.Requireable<boolean>;
        trash: PropTypes.Requireable<boolean>;
        combine_features: PropTypes.Requireable<boolean>;
        uncombine_features: PropTypes.Requireable<boolean>;
    }>>;
    default_mode: PropTypes.Requireable<string>;
    displayControlsDefault: PropTypes.Requireable<boolean>;
    keybindings: PropTypes.Requireable<boolean>;
    modes: PropTypes.Requireable<object>;
    position: PropTypes.Requireable<string>;
    onDrawActionable: PropTypes.Requireable<(...args: any[]) => any>;
    onDrawCombine: PropTypes.Requireable<(...args: any[]) => any>;
    onDrawCreate: PropTypes.Requireable<(...args: any[]) => any>;
    onDrawDelete: PropTypes.Requireable<(...args: any[]) => any>;
    onDrawModeChange: PropTypes.Requireable<(...args: any[]) => any>;
    onDrawRender: PropTypes.Requireable<(...args: any[]) => any>;
    onDrawSelectionChange: PropTypes.Requireable<(...args: any[]) => any>;
    onDrawUncombine: PropTypes.Requireable<(...args: any[]) => any>;
    onDrawUpdate: PropTypes.Requireable<(...args: any[]) => any>;
    touchBuffer: PropTypes.Requireable<number>;
    touchEnabled: PropTypes.Requireable<boolean>;
    styles: PropTypes.Requireable<(object | null)[]>;
}
export default class DrawControl extends React.Component {
    static contextTypes: {
        map: PropTypes.Validator<object>;
    };
    static defaultProps: {
        onDrawActionable: () => void;
        onDrawCombine: () => void;
        onDrawCreate: () => void;
        onDrawDelete: () => void;
        onDrawModeChange: () => void;
        onDrawRender: () => void;
        onDrawSelectionChange: () => void;
        onDrawUncombine: () => void;
        onDrawUpdate: () => void;
        position: string;
    };
    static propTypes: MapBoxPropTypes;
    draw?: MapboxDraw;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): null;
}
