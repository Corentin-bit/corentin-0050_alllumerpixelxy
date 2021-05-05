let Pixel_X = 0
let Pixel_Y = 0
basic.forever(function () {
    led.plot(Pixel_X, Pixel_Y)
    basic.pause(200)
    led.unplot(Pixel_X, Pixel_Y)
    Pixel_X += 1
    if (Pixel_X > 4) {
        Pixel_X = 0
        Pixel_Y += 1
    }
    if (Pixel_Y > 4) {
        Pixel_Y = 0
    }
})
