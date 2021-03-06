import React from 'react'
import LinkCollapsible from '../../Sidebar/LinkCollapsible'
import { shallow } from 'enzyme'

const defaultProps = {
  children: [{ icon: 'Cube', title: 'Child 1' }],
  handler: jest.fn(),
  icon: 'Cube',
  selected: 'Selected',
  setSelected: jest.fn(),
  size: 'expanded',
  title: 'Title'
}

describe('<LinkCollapsible />', () => {
  afterEach(() => {
    defaultProps.handler.mockClear()
    defaultProps.setSelected.mockClear()
  })

  test('Should render the <LinkCollapsible /> component as a non-selected Link with sidebar expanded.', () => {
    const component = shallow(<LinkCollapsible {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should render the <LinkCollapsible /> component as a non-selected Link with sidebar collapsed.', () => {
    const component = shallow(
      <LinkCollapsible {...defaultProps} size="collapsed" />
    )
    expect(component).toMatchSnapshot()
  })

  test('Should render the <LinkCollapsible /> component as a selected Link with sidebar expanded.', () => {
    const component = shallow(
      <LinkCollapsible {...defaultProps} selected="Title" />
    )
    expect(component).toMatchSnapshot()
  })

  test('Should render the <LinkCollapsible /> component as a selected Link with sidebar collapsed.', () => {
    const component = shallow(
      <LinkCollapsible {...defaultProps} selected="Title" size="collapsed" />
    )
    expect(component).toMatchSnapshot()
  })

  test('Should call the link handler if the link is clicked.', () => {
    const component = shallow(<LinkCollapsible {...defaultProps} />)
    expect(defaultProps.handler).toHaveBeenCalledTimes(0)
    component.find('WithTheme(Button)').simulate('click')
    expect(component).toMatchSnapshot()
    expect(defaultProps.handler).toHaveBeenCalledTimes(1)
  })
})
