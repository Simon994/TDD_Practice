import imageChooser from '../imageChooser'

describe('imageChooser', () => {
  it('returns image file named cat.jpg based on an input of cat', () => {
    const expected = 'cat.jpg'
    const actual = imageChooser('cat')
    expect(actual).toEqual(expected)
  })

  it('returns image file named dog.jpg based on an input of dog', () => {
    const expected = 'dog.jpg'
    const actual = imageChooser('dog')
    expect(actual).toEqual(expected)
  })

  it('returns default image if no input is given', () => {
    const expected = 'default.jpg'
    const actual = imageChooser('')
    expect(actual).toEqual(expected)
  })

})