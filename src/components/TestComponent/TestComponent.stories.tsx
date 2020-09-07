import * as React from 'react'
import { TestComponent } from './TestComponent'
import { storiesOf } from '@storybook/react';

export default { title: 'TestComponent' }

storiesOf('TestComponent', module)
  .add('Hello, World!', () => <TestComponent greeting="Hello" subject="World" />)
  .add('Whatsup, Tartan!', () => <TestComponent greeting="Watsup" subject="Tartan" />)
  