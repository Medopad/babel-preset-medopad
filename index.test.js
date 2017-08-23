const should = require('should')

const preset = require('./')

describe('Medopad\'s Babel preset', () => {
  it('should have property `presets`', () => {
    should(preset).have.property('presets')
  })

  it('should have property `plugins`', () => {
    should(preset).have.property('plugins')
  })

  it('should have all required presets listed', () => {
    should(preset.presets.length).equal(1)
  })

  it('should have all required plugins listed', () => {
    should(preset.plugins.length).equal(4)
  })
})
