import { ExecutionArgumentValidator } from "./execution-argument-validator";
import { UeliHelpers } from "../helpers/ueli-helpers";

export class CustomCommandExecutionArgumentValidator implements ExecutionArgumentValidator {
    public isValidForExecution(executionArgument: string): boolean {
        return executionArgument.length > UeliHelpers.customCommandPrefix.length
            && executionArgument.startsWith(UeliHelpers.customCommandPrefix);
    }
}
