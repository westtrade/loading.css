// Generated by LiveScript 1.3.1
var http, render, code, config;
http = function(option){
  option == null && (option = {});
  return new Promise(function(res, rej){
    var xhr;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (this.readyState === 4) {
        if (this.status === 200) {
          return res(this.responseText);
        } else {
          return rej(this.statusText);
        }
      }
    };
    xhr.open('GET', option.url);
    return xhr.send();
  });
};
render = function(){
  var xcode;
  xcode = ("config = {\n  dur: " + config.dur + "s\n  accelerate: " + config.accelerate + "\n  cycle: " + config.cycle + "deg\n}\n") + [code.basic, code.base, code.mod].join('\n');
  console.log(xcode);
  return stylus(xcode).set('filename', 'index.css').render(function(e, c){
    if (!render.style) {
      render.style = document.createElement("style");
      render.style.setAttribute('type', 'text/css');
      document.body.appendChild(render.style);
    }
    return render.style.innerHTML = c;
  });
};
code = {};
config = {};
http({
  url: '/basic.styl',
  method: 'GET'
}).then(function(basic){
  code.basic = basic;
  return http({
    url: '/animation/spin/base.styl',
    method: 'GET'
  });
}).then(function(base){
  code.base = base;
  return http({
    url: '/animation/spin/spin.js',
    method: 'GET'
  });
}).then(function(mod){
  var module;
  code.module = mod;
  module = {};
  eval(code.module);
  module = module.exports;
  code.mod = module.code();
  return render();
});
Array.from(document.querySelectorAll('input')).map(function(d, i){
  return d.addEventListener('keyup', function(e){
    var name;
    name = d.getAttribute('data-config');
    config[name] = d.value;
    return render();
  });
});
/*
style = document.createElement("style")
style.setAttribute \type, \text/css
document.body.appendChild style

config = {}
basic = """
  timing-step(rate)
    animation-timing-function: cubic-bezier(rate,0,1 - rate,1)
  timing-speed-down(rate)
    animation-timing-function: cubic-bezier(0,rate,1 - rate,1)
  timing-speed-up(rate)
    animation-timing-function: cubic-bezier(rate,0,1,1 - rate)
"""
data = {}

render = ->
  console.log config
  code = """
  config = {
    dur: #{config.dur}s
    accelerate: #{config.accelerate}
    cycle: #{config.cycle}deg
  }
  """ + data.code
  console.log code
  stylus code
    .set \filename, \index.css
    .render (e,c) ->
      style.innerHTML = c

xhr1 = new XMLHttpRequest!
xhr1.onreadystatechange = ->
  if @readyState == 4 and @status == 200 =>
    base = @responseText
    xhr = new XMLHttpRequest!
    xhr.onreadystatechange = ->
      if @readyState == 4 and @status == 200 =>
        module = {}
        eval(@responseText)
        module = module.exports
        code = module.code!

        data.code = [basic, base, code].join(\\n)

    xhr.open \GET, \/animation/spin/spin.js
    xhr.send!

xhr1.open \GET, \/animation/spin/base.styl
xhr1.send!

Array.from( document.querySelectorAll \input ).map (d,i) ->
  d.addEventListener \keyup, (e) ->
    name = d.getAttribute \data-config
    config[name] = d.value
    render!


*/