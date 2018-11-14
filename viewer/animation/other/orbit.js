// Generated by LiveScript 1.3.1
var ret;
ret = {
  name: 'orbit',
  desc: '',
  edit: {
    radius: {
      'default': 60,
      type: 'number',
      unit: '%',
      min: 0,
      max: 1000
    }
  },
  code: function(config){
    return "@keyframes ld-orbit\n  for i in (0..8)\n    r = 360deg * i * 0.125\n    a = 3.1415926 * 2 * i * 0.125\n    x = math(a, 'sin') * config.radius\n    y = -1 * math(a, 'cos') * config.radius\n    {i * 12.5%}\n      transform: translate(x,y) rotate(r)\n.ld-orbit\n  animation: ld-orbit config.dur linear infinite\n";
  }
};
if (typeof module != 'undefined' && module !== null) {
  module.exports = ret;
}