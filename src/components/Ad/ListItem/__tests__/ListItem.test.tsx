import renderer from 'react-test-renderer'
import React from 'react'

import AdListItem from '../ListItem'
import R from 'src/res'

it('render correctly', () => {
  const adListItem = renderer
    .create(
      <AdListItem
        imgSource={R.images.placeholder}
        date="30 november"
        title="awesome test"
      />
    )
    .toJSON()

  expect(adListItem).toMatchSnapshot()
})
