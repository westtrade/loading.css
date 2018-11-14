// Generated by LiveScript 1.3.1
var ret;
ret = {
  name: 'vortex-out',
  desc: '',
  edit: {
    dur: {
      'default': 2
    },
    accelerate: {
      'default': 0.4,
      type: 'number',
      min: 0,
      max: 1
    },
    rotate: {
      'default': 5,
      type: 'number',
      min: 0,
      max: 20
    },
    zoom: {
      'default': 0,
      type: 'number',
      min: 0,
      max: 10
    }
  },
  code: function(config){
    return "@keyframes ld-vortex-out\n  0%\n    transform: rotate(360deg * config.rotate) scale(config.zoom)\n    opacity: 0\n  60%\n    transform: rotate(0deg) scale(1)\n    opacity: 1\n  100%\n    opacity: 0\n\n.ld-vortex-out\n  animation: ld-vortex-out config.dur infinite\n  timing-speed-up(config.accelerate)";
  }
};
if (typeof module != 'undefined' && module !== null) {
  module.exports = ret;
}