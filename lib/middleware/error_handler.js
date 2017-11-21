var Messages = require("../constants/messages");
var util = require("util");

function getFailedResponse(err) {
    var error_message;
    var http_code = err.httpCode || err.status || 500;

    if (http_code === 500) {
        if (global.showExceptionToClient) {
            error_message = err.error_message || err.message || util.format("%o", err);
        } else {
            error_message = Messages.INTERNAL_ERROR;
        }
    } else {
        error_message = err.error_message || err.message;
    }
    if (error_message.constructor.toString().indexOf("Array") === -1) {
        var temp_message = error_message;
        error_message = [];
        error_message.push(temp_message);
    }

    return {
        meta: {
            code: http_code,
            message: error_message
        }
    };
}

module.exports = function errorHandler(err, req, res, next) {
    var failed_response = getFailedResponse(err);
    global.Logger.error(err);
    res.send(failed_response.meta.code, failed_response);
}
