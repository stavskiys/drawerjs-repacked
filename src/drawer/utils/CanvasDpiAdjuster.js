class CanvasDpiAdjuster {
  constructor (canvas, context) {
    this._canvas = canvas
    this._context = context
  }

  update () {
    if (this._devicePixelRatio() !== this._backingStoreRatio()) {
      const ratio = this.ratio()

      console.log('Canvas:', this._canvas)
      const oldWidth = this._canvas.width
      const oldHeight = this._canvas.height

      this._canvas.width = oldWidth * ratio
      this._canvas.height = oldHeight * ratio

      this._canvas.style.width = oldWidth + 'px'
      this._canvas.style.height = oldHeight + 'px'

      console.log(ratio)
      this._context.scale(ratio, ratio)
    }
  }

  ratio () {
    return this._ratio = this._devicePixelRatio() / this._backingStoreRatio()
  }

  _devicePixelRatio () {
    return window.devicePixelRatio || 1
  }

  _backingStoreRatio () {
    return this._context.webkitBackingStorePixelRatio ||
      this._context.mozBackingStorePixelRatio ||
      this._context.msBackingStorePixelRatio ||
      this._context.oBackingStorePixelRatio ||
      this._context.backingStorePixelRatio || 1
  }


}

export default CanvasDpiAdjuster
