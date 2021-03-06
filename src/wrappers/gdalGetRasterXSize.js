export default function (GDALGetRasterXSize, errorHandling) {
    return function (datasetPtr) {
        let result = GDALGetRasterXSize(datasetPtr);

        let errorType = errorHandling.CPLGetLastErrorType();

        // Check for errors; clean up and throw if error is detected
        if (errorType === errorHandling.CPLErr.CEFailure ||
                errorType === errorHandling.CPLErr.CEFatal) {
            let message = errorHandling.CPLGetLastErrorMsg();

            throw new Error(message);
        } else {
            return result;
        }
    };
}
