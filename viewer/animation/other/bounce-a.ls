ret = do
  name: \bounce-a
  desc: ''
  edit: do
    dur: default: 2
    offset_x: default: 15, type: \number, unit: \px, min: 0, max: 1000
    offset_y: default: 25, type: \number, unit: \px, min: 0, max: 3000
    offset_bottom: default: 25, type: \number, unit: \px, min: 0, max: 3000
    zoom_min: default: 0.7, type: \number, min: 0, max: 1
    zoom_max: default: 1.1, type: \number, min: 1, max: 2

  code: (config) ->  
    """
    @keyframes ld-bounce-a
      for i in (0..3)
        dx = 1 - math( 1 - i, 'abs' )
        sgn = math( i - 1.5, 'sign')
        {   0% + i * 25%}
          transform: translate((dx + sgn * 1) * config.offset_x, config.offset_bottom) scaleY(config.zoom_min)
        { 3.0% + i * 25%}
          transform: translate((dx + sgn * 1) * config.offset_x, 0) scaleY(config.zoom_max)
        { 4.2% + i * 25%}
          transform: translate((dx + sgn * 0.84) * config.offset_x, -0.55 * config.offset_y) scaleY(config.zoom_max)
        { 8.4% + i * 25%}
          transform: translate((dx + sgn * 0.67) * config.offset_x, -0.88 * config.offset_y) scaleY(config.zoom_max)
        {12.5% + i * 25%}
          transform: translate((dx + sgn * 0.5) * config.offset_x, -1 * config.offset_y) scaleY(config.zoom_max)
        {16.7% + i * 25%}
          transform: translate((dx + sgn * 0.34) * config.offset_x, -0.88 * config.offset_y) scaleY(config.zoom_max)
        {20.9% + i * 25%}
          transform: translate((dx + sgn * 0.17) * config.offset_x, -0.55 * config.offset_y) scaleY(config.zoom_max)
        {22.0% + i * 25%}
          transform: translate((dx + sgn * 0) * config.offset_x, 0) scaleY(config.zoom_max)
      100%
        transform: translate(-1 * config.offset_x, config.offset_bottom) scaleY(config.zoom_min)

    .ld-bounce-a
      animation: ld-bounce-a config.dur infinite linear
    """

if module? => module.exports = ret
