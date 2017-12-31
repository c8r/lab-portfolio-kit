---
avatar: 'https://c8r.imgix.net/2f0fcc1fb83e96acbad86ff2/dean.jpg'
twitter: username
github: username
instagram: username
dribbble: username
codepen: url
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
footerText: >-
  I'm currently available for contracts in Q2 of 2018.  If you're interested in
  collaborating on a project drop me a line.
copyright: '© 2017 You, Inc.'
title: A page title
subtitle: A page subtitle for secondary info
text: >-
  A text description. Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
  non proident
panels:
  - src: 'https://c8r.imgix.net/28ebf6f36947b63447feaa00/26.jpg?w=1244&fit=clip'
    title: Multi-Word Panel Title
    subtitle: Panel Subtitle
    kicker: Featured
    text: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    href: null
    linkText: Click Here
  - src: 'https://c8r.imgix.net/076e21c7efe2740c3912acb1/27.jpg?w=1244&fit=clip'
    title: Multi-Word Panel Title
    subtitle: Panel Subtitle
    kicker: Featured
    text: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.  href: #0  linkText: Click Here
  - src: 'https://mrmrs.github.io/photos/u/063.jpg'
    title: '2,000 Miles to Somewhere'
    subtitle: The geography of vastness
    text: >-
      The US-54 W going through three states with no real discernable curves is
      108 miles (173km) stretch of straightness. This asphalted road links
      Liberal (county seat of Seward County) and Dalhart (Dallam County). It’s a
      straight road running through three states (Texas, Kansas and Oklahoma)
      for 1 h 55 min.
    linkText: Click Here
    href: null
cards:
  - src: 'https://c8r.imgix.net/c91d73af39fc0812cc14e621/15.jpg?w=1244&fit=clip'
    title: Card Title 1
    subtitle: Card Subtitle
    text: 'This is descripiton text about the card, it can be several lines long.'
  - src: 'https://c8r.imgix.net/4edc08e4bc121c4ecadfca68/12.jpg?w=1244&fit=clip'
    title: Card Title 2
    subtitle: Card Subtitle
    text: Short card description.
  - src: 'https://c8r.imgix.net/2466f8f593c33a7fed01944a/2.jpg?w=1244&fit=clip'
    title: This is Card Title Part 3
    subtitle: Card Subtitle
    text: You can edit all of this without touching markup
  - src: 'https://c8r.imgix.net/87be409330dcb961fa548cb6/7.jpg?w=1244&fit=clip'
    title: Card Title the Fourth
    subtitle: Card Subtitle
    text: 'This is descripiton text about the card, it can be several lines long.'
  - src: 'https://c8r.imgix.net/76e6c3da5a710f7576515cfd/3.jpg?w=1244&fit=clip'
    title: Card Title Five!
    subtitle: >-
      Card Subtitle that wraps on to multiple lines so we can see what will
      happen with stacking
    text: 'This is descripiton text about the card, it can be several lines long.'
  - src: 'https://c8r.imgix.net/9828c73fa60db50a76e7146c/5.jpg?w=1244&fit=clip'
    title: Sixth Card Title in Series
    subtitle: Card Subtitle
    text: 'This is descripiton text about the card, it can be several lines long.'
  - src: 'https://c8r.imgix.net/203c5c7dc93008e6d4d5245c/44.jpg?w=1244&fit=clip'
    title: Number 7
    subtitle: Card Subtitle
    text: 'This is descripiton text about the card, it can be several lines long.'
tiles:
  - src: 'https://c8r.imgix.net/4edc08e4bc121c4ecadfca68/12.jpg?w=1244&fit=clip'
    title: Tile Title 2
    subtitle: Tile Subtitle
    text: Short card description.
    kicker: May 2017
  - src: 'https://c8r.imgix.net/2466f8f593c33a7fed01944a/2.jpg?w=1244&fit=clip'
    title: This is a tile title
    subtitle: Tile Subtitle
    text: You can edit all of this without touching markup
    kicker: May 2017
  - src: 'https://c8r.imgix.net/87be409330dcb961fa548cb6/7.jpg?w=1244&fit=clip'
    color: black
    title: Tile title 3
    subtitle: Tile Subtitle
    text: This is descripiton text about the tile.
    kicker: May 2017
  - src: 'https://c8r.imgix.net/9828c73fa60db50a76e7146c/5.jpg?w=1244&fit=clip'
    title: Tile title 3
    subtitle: Tile Subtitle
    text: This is descripiton text about the tile.
    kicker: May 2017
  - src: 'https://mrmrs.github.io/photos/u/017.jpg?w=1244&fit=clip'
    title: Tile title 4
    subtitle: Card Subtitle
    text: This is descripiton text about the tile.
    kicker: May 2017
---
<Box>
  <Container px={3} py={3}>
    <SiteHeader 
      src={props.avatar}
      links={props.links} 
    />
  </Container>
  <HorizontalRule color='black25' />
</Box>
<Box pt={5} pb={5}>
  <Container px={3}>
    <PageTitle children={props.title} />
    <PageSubtitle children={props.subtitle} />
    <Text children={props.text} />
  </Container>
</Box>
<Container pb={5} px={2}>
  <SectionTitle children={'Projects' + props.cards.length} mx={2} />
   {props.cards.length  == 1 && 
    <Flex wrap mx={0}>
      {(props.cards || []).map((card, index) => (
        <Box px={2} mb={4} w={1}>
          <Card 
             src={card.src} 
             title={card.title}
             subtitle={card.subtitle}
             text={card.text}
            />
        </Box>
     ))}
    </Flex>
  }
  {props.cards.length % 3 == 0 && 
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
  }
  {props.cards.length % 3 != 0 && props.cards.length % 10 != 0 && props.cards.length % 2 == 0 && 
    <Flex wrap mx={0}>
      {(props.cards || []).map((card, index) => (
        <Box px={2} mb={4} w={[1,1/2]}>
          <Card 
             src={card.src}
             title={card.title}
             subtitle={card.subtitle}
             text={card.text}
            />
        </Box>
     ))}
    </Flex>
  }
  {props.cards.length % 2 != 0 && props.cards.length % 5 == 0 && props.cards.length % 10 != 0 &&
    <Flex wrap mx={0}>
      {(props.cards || []).map((card, index) => (
        <Box px={2} mb={4} w={index < props.cards.length -2 ? [ 1, 1/3 ] : [ 1, 1/2 ]}>
          <Card 
             src={card.src}
             title={card.title}
             subtitle={card.subtitle}
             text={card.text}
            />
        </Box>
     ))}
    </Flex>
  }
  {props.cards.length % 10 == 0 &&
    <Flex wrap mx={0}>
      {(props.cards || []).map((card, index) => (
        <Box px={2} mb={4} w={index < props.cards.length -4 ? [ 1, 1/3 ] : [ 1, 1/4]}>
          <Card 
             src={card.src}
             title={card.title}
             subtitle={card.subtitle}
             text={card.text}
            />
        </Box>
     ))}
    </Flex>
  }
  {props.cards.length % 2 != 0 && props.cards.length % 5 != 0 && props.cards.length % 7 == 0 && 
    <Flex wrap mx={0}>
      {(props.cards || []).map((card, index) => (
        <Box px={2} mb={4} w={index < props.cards.length -4 ? [ 1, 1/3 ] : [ 1, 1/4 ]}>
          <Card 
             src={card.src}
             title={card.title}
             subtitle={card.subtitle}
             text={card.text}
            />
        </Box>
     ))}
    </Flex>
  }
  {props.cards.length > 10 && props.cards.length % 2 != 0 && props.cards.length %3 !=0 && props.cards.length % 5 != 0 && 
    <Flex wrap mx={0}>
      {(props.cards || []).map((card, index) => (
        <Box px={2} mb={4} w={[1,1/3,1/4 ]}>
          <Card 
             src={card.src}
             title={card.title}
             subtitle={card.subtitle}
             text={card.text}
            />
        </Box>
     ))}
    </Flex>
  }
<SectionTitle children='Work' mx={2} />
{props.tiles.length%2 == 1 &&
  <Flex color='white' wrap mx={0}>
  {(props.tiles || []).map((tile, index) => (
    <Box px={2} mb={4} w={index === props.tiles.length -1 ? 1 : [1, 1/2]}>
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
    {(props.panels || []).map((panel, index) => (
      <Box mb={5}>
        {index % 2 == 0 &&
          <Panel 
             title={panel.title} 
             subtitle={panel.subtitle}
             linkText={panel.linkText}
             text={panel.text}
             image={panel.src} />
        }
        {index % 2 == 1 &&
          <PanelAlt
             title={panel.title} 
             subtitle={panel.subtitle}
             linkText={panel.linkText}
             text={panel.text}
             image={panel.src} />
        }
      </Box>
    ))}
  </Box>
</Container>
<HorizontalRule color='black25' />
<footer>
  <Container pt={5} pb={4}>
    <Text mx='auto' fontSize={1} children={props.footerText} />
    <Flex px={2} pt={4} pb={4} justify='center'>
      {props.facebook && <FacebookIcon mb={2} href={props.facebook} /> }
      {props.twitter && <TwitterIcon mb={2} href={'https://twitter.com/'+props.twitter} /> }
      {props.github && <GitHubIcon mb={2} href={'https://github.com/'+props.github} /> }
      {props.codepen && <CodepenIcon mb={2} href={'https://codepen.io/'+props.codepen} /> }
      {props.stackoverflow && <StackoverflowIcon mb={2} href={props.stackoverflow} /> }
      {props.instagram && <InstagramIcon mb={2} href={'https://instagram.com/'+props.instagram} /> }
      {props.snapchat && <SnapchatIcon mb={2} href={props.snapchat} /> }
      {props.dribbble && <DribbbleIcon mb={2} href={'https://dribbble.com/'+props.dribbble} /> }
      {props.behance && <BehanceIcon mb={2} href={props.behance} /> }
      {props.pinterest && <PinterestIcon mb={2} href={'https://pinterest.com/'+props.pinterest} /> }
      {props.producthunt && <ProducthuntIcon mb={2} href={props.producthunt} /> }
      {props.vimeo && <VimeoIcon mb={2} href={'https://vimeo.com/'+props.vimeo} /> }
      {props.youtube && <YoutubeIcon mb={2} href={props.youtube} /> }
      {props.soundcloud && <SoundcloudIcon mb={2} href={props.youtube} /> }
      {props.kickstarter && <KickstarterIcon mb={2} href={props.kickstarter} /> }
      {props.etsy && <EtsyIcon mb={2} href={props.etsy} /> }
      {props.slack && <SlackIcon mb={2} href={props.slack} /> }
    </Flex>
    <Text fontSize={0} center mx='auto' children={props.copyright} />
  </Container>
</footer>
<HorizontalRule color='black25' />
<footer>
  <Container pt={5} pb={4} px={3}>
    <Flex wrap align='center'>
      <Box w={[1,1/2]}>
        <Text fontSize={1} children={props.footerText} />
        <Text fontSize={0} children={props.copyright} />
      </Box>
      <Flex w={[ 1, 1/2 ]} pt={4} pb={4} pl={[ 0,4 ]} ml={[0,'auto']} mx={-2} wrap>
        {props.facebook && <FacebookIcon mb={2} href={props.facebook} /> }
        {props.twitter && <TwitterIcon mb={2} href={'https://twitter.com/'+props.twitter} /> }
        {props.github && <GitHubIcon mb={2} href={'https://github.com/'+props.github} /> }
        {props.codepen && <CodepenIcon mb={2} href={'https://codepen.io/'+props.codepen} /> }
        {props.stackoverflow && <StackoverflowIcon mb={2} href={props.stackoverflow} /> }
        {props.instagram && <InstagramIcon mb={2} href={'https://instagram.com/'+props.instagram} /> }
        {props.snapchat && <SnapchatIcon mb={2} href={props.snapchat} /> }
        {props.dribbble && <DribbbleIcon mb={2} href={'https://dribbble.com/'+props.dribbble} /> }
        {props.behance && <BehanceIcon mb={2} href={props.behance} /> }
        {props.pinterest && <PinterestIcon mb={2} href={'https://pinterest.com/'+props.pinterest} /> }
        {props.producthunt && <ProducthuntIcon mb={2} href={props.producthunt} /> }
        {props.vimeo && <VimeoIcon mb={2} href={'https://vimeo.com/'+props.vimeo} /> }
        {props.youtube && <YoutubeIcon mb={2} href={props.youtube} /> }
        {props.soundcloud && <SoundcloudIcon mb={2} href={props.youtube} /> }
        {props.kickstarter && <KickstarterIcon mb={2} href={props.kickstarter} /> }
        {props.etsy && <EtsyIcon mb={2} href={props.etsy} /> }
        {props.slack && <SlackIcon mb={2} href={props.slack} /> }
      </Flex>
    </Flex>
  </Container>
</footer>
