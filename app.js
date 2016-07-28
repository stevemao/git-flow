//test
module.exports = function() {
  return {
    start: function() {
      console.log('start application!');
      return true;
    },
    calculate: function() {
      var A = 1;
      var B = 2;

      var total = A + B;

      return (total === 3) ? 'is correct' : 'is incorrect, please do something';
    },
    end: function() {
      console.log('end application');
      return true;
    },
    trackProgress: function() {
      var count = 0;
      setTimeout(function() {
        console.log('setTimeout');
      }, 1000);

      return count;

    },
    continue: function() {
      console.log('continue method! fix typo');
    }
  }
};
