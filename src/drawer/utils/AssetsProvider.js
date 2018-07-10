class AssetsProvider {

  init (map) {
    this._map = map
    return this
  }

  urlFor (asset_file) {
    return this._map[asset_file] || asset_file
  }

}

export default new AssetsProvider()
