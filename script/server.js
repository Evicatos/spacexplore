/**
 * @author Tom
 */

var dirName = './public'
var connect = require('connect');
connect.createServer(
    connect.static(dirName)
).listen(7777);
