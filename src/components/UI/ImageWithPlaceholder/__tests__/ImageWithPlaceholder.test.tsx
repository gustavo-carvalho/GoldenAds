import React from 'react'
import renderer from 'react-test-renderer'
import { ImageWithPlaceholder } from '../ImageWithPlaceholder'

describe('ImageWithPlaceholder', () => {
  it('renders correctly', () => {
    const imgUri = 'https://facebook.github.io/react-native/img/header_logo.png'
    const imageWithPlaceholder = renderer
      .create(<ImageWithPlaceholder imgUri={imgUri} />)
      .toJSON()
    expect(imageWithPlaceholder).toMatchSnapshot()
  })
})
