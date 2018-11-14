// Generated by LiveScript 1.3.1
var ret;
ret = {
  name: 'smash',
  desc: '',
  edit: {
    dur: {
      'default': 1.0
    },
    iterations: {
      'default': 4,
      type: 'number',
      min: 0,
      max: 50
    },
    offset: {
      'default': 30,
      type: 'number',
      unit: 'deg',
      min: -360,
      max: 360,
      step: 1
    },
    ratio: {
      'default': 0,
      type: 'number',
      min: 0,
      max: 1,
      step: 0.1
    },
    delay: {
      'default': 40,
      type: 'number',
      min: 0,
      max: 100,
      step: 0.1
    }
  },
  code: function(config){
    return "rubber(\"ld-smash\", config.dur, config.iterations, config.offset, config.ratio, config.delay, @(v) {\n  transform: rotate(v);\n})";
  }
};
if (typeof module != 'undefined' && module !== null) {
  module.exports = ret;
}