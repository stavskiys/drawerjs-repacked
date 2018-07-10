import viewport from 'jquery.documentsize'

class SizeAdjuster {
  constructor (imageW, imageH, debug = false) {
    this._imageW = imageW
    this._imageH = imageH
    this._debug = debug

    this._debug_info('Image original sizes: ', this._imageW, ' x ', this._imageH)

    this._debug_info('Screen viewport(original): ', $.windowWidth( "visual" ), ' x ', $.windowHeight( "visual" ))

    // -40 it is body margin
    this._screenW = $.windowWidth( "visual" )  - 40
    this._screenH = $.windowHeight( "visual" ) - 40

    this._debug_info('Screen sizes: ', this._imageW, ' x ', this._imageH)

    this.width  = this._imageW
    this.height = this._imageH

    this._calc()
  }

  getImageSizes () {
    return {
      width: this.width,
      height: this.height
    }
  }

  getEditorSizes () {
    return {
      width: this.width,
      height: this.height
    }
  }

  _calc () {
    let factorWidth  = this._imageW / this._screenW
    let factorHeight = this._imageH / this._screenH

    this._debug_info('FactorsWidth: ', factorWidth)
    this._debug_info('FactorHeight: ', factorHeight)

    let factor = Math.max(factorWidth, factorHeight)
    this._debug_info('Max factor: ', factor)

    if (factor > 1) {
      factor = factor
      this.width  = Math.floor(this._imageW / factor)
      this.height = Math.floor(this._imageH / factor)
      // fabricImage.scaleToWidth(newImageWith)
      // fabricImage.scaleToHeight(newImageHeight)
    }

    this._debug_info('Calculated sizes: ', this.width, ' x ', this.height)
  }

  _debug_info (msg, ...args) {
    if (!this._debug) { return }

    console.log(msg, args.join(''))
  }
}

export default SizeAdjuster
