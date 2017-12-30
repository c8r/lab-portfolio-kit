# Lab Portfolio Kit

## What is this?

A UI kit for building portfolios with [Lab](https://compositor.io/lab) and [Iso](https://compositor.io/iso). Contains components and templates that you can customize and extend. It's configuration based, so you can fill in your own content and make design tweaks without writing any code. For those that want to dive deeper, you still have granular control over the markup and styles. Will also hopefully serve as a set of useful patterns for using Lab and Iso together to design UI.

![UI kit for Lab](https://c8r.imgix.net/213bc9b8c0b2ad6c821feeaf/lab-portfolio-kit.png?w=1920&fit=clip)

### Includes Templates for 

- Full Page Profile 
- 404 page
- About page
- Project / Case Study
- Home page
- Photo page
- Image Gallery

## Installation

First clone the repo into a new project

##### HTTPS
```
git clone https://github.com/c8r/lab-portfolio-kit.git your-project
```

##### SSH
```
git clone git@github.com:c8r/lab-portfolio-kit.git your-project
```

Open Lab and go to File > Open project...
![Open a project in Lab](https://c8r.imgix.net/962c933490eb36b875da5000/open.png)

### Configuration

#### Site Header
Accepts a uri for an image and an array of links
```
avatar: 
links: 
  - href: 
    text: 
    title: 
  - href: 
    text: 
    title: 
```

#### Page
Each page has a title, subtitle, and text that can be inserted with front matter
```
title: 
subtitle: 
text: 
```

#### Footer
The footer has a block of text, a copyright blurb, and a list of social links
```
footerText: 
copyright: 
dribbble: 
youtube: 
vimeo: 
github: 
twitter: 
facebook: 
```

Panels, Cards, and Tiles are made up: Title, Subtitle, Kicker, Text, and an Href. Panels also display a link text. Examples of their usage can be found in Index.jsx.

#### Panels

```
panels: 
  - title: 
    subtitle: 
    kicker: 
    text: 
    src: 
    href: 
    linkText: 
```

#### Cards

```
cards: 
  - title: 
    subtitle: 
    kicker: 
    text: 
    src: 
    href: 
```

#### Tiles

```
tiles: 
  - title: 
    subtitle: 
    kicker: 
    text: 
    src: 
    href: 
```

