---
title: Page Title
subtitle: Page Subtitle
twitter: mrmrs_
github: mrmrs
instagram: mrmrs_
dribbble: mrmrs
cards:
  - src: 'https://c8r.imgix.net/2466f8f593c33a7fed01944a/2.jpg'
    title: Card Title 1
    subtitle: Card Subtitle
    text: 'This is descripiton text about the card, it can be several lines long.'
  - src: 'https://c8r.imgix.net/4edc08e4bc121c4ecadfca68/12.jpg'
    title: Card Title 2
    subtitle: Card Subtitle
    text: 'This is descripiton text about the card, it can be several lines long.'
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
---

<Box pt={5} pb={5}>
  <PageTitle center>
    {props.title}
  </PageTitle>
  <PageSubtitle center>
    {props.subtitle}
  </PageSubtitle>
  <Text center mx='auto'>
    This is some regular about text for the site. A short description of a few different things.
  </Text>
</Box>
<Container pb={5} px={2}>
<SectionTitle children='Projects' mx={2} />
<Flex wrap mx={0}>
{(props.cards || []).map(card => (
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
<Container pt={5} pb={4}>
<Flex align='center'>
<Box w={1/2}>
<Text fontSize={1}>
  I'm currently available for contracts in Q2 of 2018. If you're interested in collaborating on a project <b style={{fontWeight: 600 }}>drop me a line</b>.
</Text>
<Text fontSize={0}>© 2017 You, Inc.</Text>
</Box>
<Flex px={2} pt={4} pb={4} justify='center' ml='auto'>
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
</Flex>

</Container>
</footer>
