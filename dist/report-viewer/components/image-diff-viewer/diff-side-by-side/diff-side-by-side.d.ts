import * as React from "react";
export interface DiffSliderProps {
    received: string;
    snapshot: string;
    diff: string;
    width: number;
    height: number;
}
export declare class DiffSideBySide extends React.Component<DiffSliderProps> {
    private diffOpacity;
    private handleDiffOpacity;
    render(): JSX.Element;
}
