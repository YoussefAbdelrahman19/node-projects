const createError = (status, message) => {
    let err = new Error();
    err.status = status || 500;
    err.message = message || "Something went wrong!";

    return err;

}
export default createError;