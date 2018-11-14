// Generated by LiveScript 1.3.1
var ret;
ret = {
  name: 'wander-v',
  desc: '',
  edit: {
    accelerate: {
      'default': 0.6,
      type: 'number',
      min: 0,
      max: 1
    },
    offset: {
      'default': 10,
      type: 'number',
      unit: 'px',
      min: 0,
      max: 30
    }
  },
  code: function(config){
    return "patrol(\"ld-wander-v\", config.dur, config.accelerate, config.offset, @(v) {\n  transform: translate(0,v * 1px)\n})";
  }
};
if (typeof module != 'undefined' && module !== null) {
  module.exports = ret;
}