import * as React from "react";
import { FailedSnapshotInfo } from "../../../reporter-types";
export interface SnapshotProps {
    snapshot: FailedSnapshotInfo;
}
export declare class Snapshot extends React.Component<SnapshotProps> {
    private get snapshot();
    render(): JSX.Element;
}
