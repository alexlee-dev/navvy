<p align="center">
  <a href="" rel="noopener">
 <img width=256px height=256px src="https://github.com/alexlee-dev/navvy/raw/master/navvy.png" alt="Navvy logo"></a>
</p>

<h3 align="center">Navvy</h3>

<div align="center">

[![NPM Version][npm-image]][npm-url] [![NPM Total Downloads][npm-downloads]][npm-url] [![npm bundle size (minified + gzip)][size-image]][npm-url] [![Coverage Status](https://coveralls.io/repos/github/alexlee-dev/navvy/badge.svg?branch=master)](https://coveralls.io/github/alexlee-dev/navvy?branch=master) [![Build Status](https://travis-ci.org/alexlee-dev/navvy.svg?branch=master)](https://travis-ci.org/alexlee-dev/navvy.svg?branch=master)

</div>

---

<p align="center"> A React Navbar/Sidebar combo component.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Installing](#installing)
- [Usage](#usage)
- [Built Using](#built_using)
- [Todo](#todo)
- [Author](#author)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name="about"></a>

Navvy serves as a simple to use navbar/sidebar combo component. A fully featured navbar/sidebar is a common aspect of many dashboards and other websites; Navvy makes it easy to implement one on your own.

## 📦 Installing <a name="installing"></a>

### NPM

```sh
npm install navvy
```

### Yarn

```sh
yarn add navvy
```

## 🎈 Usage <a name="usage"></a>

```js
import React from 'react'
import Navvy from 'navvy'

const App = () => {
  return (
    <Navvy
      logo="D A S H B O A R D"
      sections={[
        {
          heading: 'Navigation',
          links: [
            {
              collapsible: true,
              children: [
                {
                  icon: 'Cube',
                  title: 'Child 1'
                },
                {
                  icon: 'Cubes',
                  title: 'Child 2'
                }
              ],
              icon: 'Dashboard',
              title: 'Dashboard'
            },
            {
              icon: 'Template',
              title: 'Page layouts',
              handler: () => console.log('LOL')
            },
            { icon: 'Sidebar', title: 'Navigation' },
            { icon: 'Apps', title: 'Widget' }
          ]
        },
        {
          heading: 'UI Element',
          links: [
            { icon: 'Add', title: 'Basic' },
            { icon: 'Action', title: 'Advanced' },
            { icon: 'Ad', title: 'Extra' },
            { icon: 'ThreeD', title: 'Animations' },
            { icon: 'Cubes', title: 'Icons' }
          ]
        },
        {
          heading: 'Forms',
          links: [
            { icon: 'Document', title: 'Form' },
            { icon: 'FormAdd', title: 'Form Picker' },
            { icon: 'FormCheckmark', title: 'Form Select' },
            { icon: 'FormFolder', title: 'Form Masking' },
            { icon: 'Magic', title: 'Form Wizard' }
          ]
        }
      ]}
    >
      {Inner Content}
    </Navvy>
  )
}

export default App
```

## ⛏️ Built Using <a name="built_using"></a>

- [Grommet](https://v2.grommet.io/) - UI Framework
- [React](https://reactjs.org/) - UI Framework
- [react-custom-scrollbars](https://malte-wessel.com/react-custom-scrollbars/) - Sidebar Scrolling

## ✏️ TODO <a name="todo">

- [x] Basic Skeleton.
- [x] Ability to collapse/expand sidebar.
- [x] Ability to make fullscreen.
- [x] Ability to render collapsible links.
- [x] Ability to render custom Logos.
- [ ] Dark/Light Modes.
- [ ] Ability to hook into Notifications.
- [ ] Ability to hook into Settings.

## ✍️ Author <a name="author"></a>

- [Alex Lee](https://github.com/alexlee-dev) - Developer

## 🎉 Acknowledgements <a name="acknowledgement"></a>

- Icon made by [Nikita Golubev](https://www.flaticon.com/authors/nikita-golubev) from [www.flaticon.com](https://www.flaticon.com/) and is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/).

[npm-image]: https://img.shields.io/npm/v/navvy.svg
[npm-downloads]: https://img.shields.io/npm/dt/navvy.svg
[npm-url]: https://www.npmjs.com/package/navvy
[size-image]: https://img.shields.io/bundlephobia/minzip/navvy.svg
[navvy-icon]: https://github.com/alexlee-dev/navvy/raw/master/navvy.png
