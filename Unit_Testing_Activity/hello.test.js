var utils = require('course-utilities');
var Greet = utils.load('./hello.js', 'Greet');

describe('test greet()', function(){
    it('should be called', function(){
        expect(Greet('Eva')).toBe("Hello, Eva");
    });
});