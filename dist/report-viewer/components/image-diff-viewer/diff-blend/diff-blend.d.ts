import * as React from "react";
export interface DiffSliderProps {
    received: string;
    snapshot: string;
    diff: string;
    width: number;
    height: number;
}
export declare class DiffBlend extends React.Component<DiffSliderProps> {
    private diffOpacity;
    private blendOpacity;
    private handleDiffOpacity;
    private handleBlendOpacity;
    render(): JSX.Element;
}
