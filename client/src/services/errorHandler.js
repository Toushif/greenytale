const handleError = error => {
    let err = error.message || error.error || error,
        consoleErr = console.error;

    if (!err) {
        err = "Some error occurred. Please try again.";
    }

    consoleErr(err);
}

export default handleError