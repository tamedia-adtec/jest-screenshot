import { JestScreenshotConfiguration } from "./config";
import { AggregatedResult } from "@jest/test-result";
import { Context } from "@jest/reporters";
declare const _default: {
    new (): {
        config: JestScreenshotConfiguration;
        onRunComplete(contexts: Set<Context>, { testResults, numFailedTests }: AggregatedResult): void;
    };
};
export = _default;
