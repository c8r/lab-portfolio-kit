---
image: 'https://mrmrs.github.io/photos/u/027.jpg'
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
---
<PageBG half src={props.image} />
<Container px={3} pt={5}>
  <PageTitle children={props.title} />
  <PageSubtitle children={props.subtitle} />
   <Text wide>
    <b>{props.about}</b>
  </Text>
  <Text wide>
    {props.about}
  </Text>
 
 <Flex>
 <Box w={1/2}>
  <Image src='https://mrmrs.github.io/photos/u/041.jpg' />
 </Box>
  <Box w={1/2}>
  <Image src='https://mrmrs.github.io/photos/u/001.jpg' />
 </Box>
 </Flex>
  <SectionTitle mt={7} children='Other Projects' />
  
  <Flex mx={-2}>
{(props.cards || []).map(card => (
  <Box px={2} mb={4}>
    <Card 
     src={card.src}
 
   
   />
  </Box>
))}

</Flex>
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
