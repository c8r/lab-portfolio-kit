---
avatar: 'https://pbs.twimg.com/profile_images/874897135464046594/-umEBV_C_400x400.jpg'
title: The Page Title
subtitle: The page subtitle
about: >-
  Design is a part of the communication arts, design is something you plan to
  create, it communicates to the viewer or user a visual and emotional message
  to change or guide through an emotional connection with a product or service
  enhancing their experience of the product or brand
twitter: mrmrs_
github: mrmrs
instagram: mrmrs_
dribbble: mrmrs
links:
  - text: Link 1
    href: '#0'
  - text: Link 2
    href: '#0'
  - text: Link 3
    href: '#0'
  - text: Link 4
    href: '#0'
  - text: Link 5
    href: '#0'
cards:
  - src: 'https://c8r.imgix.net/4edc08e4bc121c4ecadfca68/12.jpg'
    title: Card Title 2
    subtitle: Card Subtitle
    text: Short card description.
  - src: 'https://c8r.imgix.net/2466f8f593c33a7fed01944a/2.jpg'
    title: This is a card title
    subtitle: Card Subtitle
    text: You can edit all of this without touching markup
  - src: 'https://c8r.imgix.net/87be409330dcb961fa548cb6/7.jpg'
    title: Card title 3
    subtitle: Card Subtitle
    text: 'This is descripiton text about the card, it can be several lines long.'
  - src: 'https://c8r.imgix.net/9828c73fa60db50a76e7146c/5.jpg'
    title: Card title 3
    subtitle: Card Subtitle
    text: 'This is descripiton text about the card, it can be several lines long.'
  - src: 'https://c8r.imgix.net/76e6c3da5a710f7576515cfd/3.jpg'
    title: Card Title 2
    subtitle: >-
      Card Subtitle that wraps on to multiple lines so we can see what will
      happen with stacking
    text: 'This is descripiton text about the card, it can be several lines long.'
  - src: 'https://c8r.imgix.net/c91d73af39fc0812cc14e621/15.jpg'
    title: Card Title 1
    subtitle: Card Subtitle
    text: 'This is descripiton text about the card, it can be several lines long.'
tiles:
  - src: 'https://c8r.imgix.net/4edc08e4bc121c4ecadfca68/12.jpg'
    title: Tile Title 2
    subtitle: Card Subtitle
    text: Short card description.
    kicker: May 2017
  - src: 'https://c8r.imgix.net/2466f8f593c33a7fed01944a/2.jpg'
    title: This is a tile title
    subtitle: Card Subtitle
    text: You can edit all of this without touching markup
    kicker: May 2017
  - src: 'https://c8r.imgix.net/87be409330dcb961fa548cb6/7.jpg'
    color: black
    title: Tile title 3
    subtitle: Tile Subtitle
    text: This is descripiton text about the tile.
    kicker: May 2017
  - src: 'https://c8r.imgix.net/9828c73fa60db50a76e7146c/5.jpg'
    title: Card title 3
    subtitle: Card Subtitle
    text: This is descripiton text about the tile.
    kicker: May 2017
  - src: 'https://mrmrs.github.io/photos/u/017.jpg'
    title: Card title 4
    subtitle: Card Subtitle
    text: This is descripiton text about the tile.
    kicker: May 2017
---

<Box>
<Container px={3} py={3}>
<SiteHeader 
src='https://pbs.twimg.com/profile_images/874897135464046594/-umEBV_C_400x400.jpg'
links={props.links} 
/>
</Container>
<HorizontalRule color='#eee' />
</Box>
<Box pt={5} pb={5}>
 <Container px={3}>
  <PageTitle>
    {props.title}
  </PageTitle>
  <PageSubtitle >
    {props.subtitle}
  </PageSubtitle>
  <Text>
   {props.about}
  </Text>
  </Container>
</Box>
<Container pb={5} px={2}>
<SectionTitle children='Projects' mx={2} />
<Flex wrap mx={0}>
{(props.cards || []).map((card, index) => (
  <Box px={2} mb={4} w={[1,1/3]}>
    <Card 
     src={card.src}
     title={card.title}
     subtitle={card.subtitle}
     text={card.text}
   />
  </Box>
))}

</Flex>
<SectionTitle children='Work' mx={2} />

{props.tiles.length%2 == 1 &&
<Flex color='white' wrap mx={0}>
{(props.tiles || []).map((tile, index) => (
  <Box px={2} mb={4}e w={index === props.tiles.length -1 ? 1 : [1, 1/2]}>
    <Tile 
     color={tile.color}
     src={tile.src}
     title={tile.title}
     subtitle={tile.subtitle}
     kicker={tile.kicker}
     text={tile.text}
   />
  </Box>
))}
</Flex>
}

{props.tiles.length%2 == 0 &&
<Flex color='white' wrap mx={0}>
{(props.tiles || []).map((tile, index) => (
  <Box px={2} mb={4} w={[1, 1/2]}>
    <Tile 
     color={tile.color}
     src={tile.src}
     title={tile.title}
     subtitle={tile.subtitle}
     kicker={tile.kicker}
     text={tile.text}
   />
  </Box>
))}
</Flex>
}
<Box px={2} mb={5}>
<SectionTitle children='Case studies' mb={4} />
<Panel title="Panel Title" subtitle="Panel subtitle" 
  linkText='Click here'
text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
image=' https://c8r.imgix.net/28ebf6f36947b63447feaa00/26.jpg'/>
<PanelSwitch mt={3} title="Digital v. Analog" 
subtitle="An exploration" 
  linkText='Click here'
text="Shot noise, produced by spontaneous fluctuations in detected photocurrents, degrades darker areas of electronic images with random variations of pixel color and brightness. Film grain becomes obvious in areas of even and delicate tone. "
image=' https://c8r.imgix.net/076e21c7efe2740c3912acb1/27.jpg'/>
</Box>

</Container>
<footer style={{borderTop: '1px solid #bbb' }}>
<Container pt={5} pb={4}>
<Text mx='auto' fontSize={1}>
  I'm currently available for contracts in Q2 of 2018. If you're interested in collaborating on a project <b style={{fontWeight: 600 }}>drop me a line</b>.
</Text>
<Flex px={2} pt={4} pb={4} justify='center'>
  {props.twitter &&
    <TwitterIconLink href={'https://twitter.com/'+props.twitter} />
  }
  {props.github &&
    <GitHubIconLink href={'https://github.com/'+props.github} />
  }
  {props.facebook &&
    <FacebookIconLink />
  }
  {props.instagram &&
    <InstagramIconLink href={'https://instagram.com/'+props.instagram} />
  }
   {props.dribbble &&
    <DribbbleIconLink href={'https://dribbble.com/'+props.dribbble} />
  }
  {props.pinterest &&
    <PinterestIconLink />
  }
  {props.soundcloud &&
    <SoundcloudIconLink />
  }
  {props.vimeo &&
    <VimeoIconLink />
  }
  {props.codepen && 
    <CodepenIconLink />
  }
  {props.youtube && 
    <YoutubeIconLink />
  }
</Flex>

<Text fontSize={0} center mx='auto'>© 2017 You, Inc.</Text>
</Container>
</footer>
<footer style={{borderTop: '1px solid #bbb' }}>
<Container pt={5} pb={4} px={3}>
<Flex align='center'>
  <Box w={1/2}>
    <Text fontSize={1}>
      I'm currently available for contracts in Q2 of 2018. If you're interested
      in collaborating on a project drop me a line.
    </Text>
    <Text fontSize={0}>© 2017 You, Inc.</Text>
  </Box>
  <Flex pt={4} pb={4} justify='center' ml='auto'>
    {props.twitter && <TwitterIconLink href={'https://twitter.com/'+props.twitter} /> }
    {props.github && <GitHubIconLink href={'https://github.com/'+props.github} /> }
    {props.facebook && <FacebookIconLink /> }
    {props.instagram && <InstagramIconLink href={'https://instagram.com/'+props.instagram} /> }
    {props.dribbble && <DribbbleIconLink href={'https://dribbble.com/'+props.dribbble} /> }
    {props.pinterest && <PinterestIconLink /> }
    {props.soundcloud && <SoundcloudIconLink /> }
    {props.vimeo && <VimeoIconLink /> }
    {props.codepen && <CodepenIconLink /> }
    {props.youtube && <YoutubeIconLink /> }
  </Flex>
</Flex>

</Container>
</footer>
