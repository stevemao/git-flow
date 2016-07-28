module.exports = function() {
    return {
        getUrl: function() {
            return window.location.url + '/domain';
        },
        sayHello: function(name) {
            console.log('say hello to ' + name);
        },
        replaceText: function(name) {
          return name.replace('wrong', 'correct');
        }
    }
};
