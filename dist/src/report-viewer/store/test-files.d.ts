import { FileReport } from "../../reporter-types";
export declare class StoreTestFiles {
    activeFileName: string;
    selectFile(file: FileReport): void;
    get activeFile(): FileReport;
    isActive(file: FileReport): boolean;
}
