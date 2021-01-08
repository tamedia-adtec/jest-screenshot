import * as React from "react";
export interface DiffSliderProps {
    received: string;
    snapshot: string;
    diff: string;
    width: number;
    height: number;
}
export declare class DiffSlider extends React.Component<DiffSliderProps> {
    private ui;
    private dragging;
    private sliderX;
    private diffOpacity;
    private container;
    private imageReceived;
    private imageSnapshot;
    private imageDiff;
    private initialize;
    private get aspectRatio();
    private handleDragStart;
    private handleDragStop;
    private handleDrag;
    private slide;
    private refContainer;
    private refImageReceived;
    private refImageSnapshot;
    private refImageDiff;
    private adjustSizes;
    private handleDiffOpacity;
    render(): JSX.Element;
}
