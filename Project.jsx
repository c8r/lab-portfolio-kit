---
image: 'https://c8r.imgix.net/2038e525b3d66825c826aafc/32.jpg'
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
    link: null
  - src: 'https://c8r.imgix.net/2466f8f593c33a7fed01944a/2.jpg'
    title: This is a card title
    subtitle: Card Subtitle
    text: You can edit all of this without touching markup
    link: null
  - src: 'https://c8r.imgix.net/87be409330dcb961fa548cb6/7.jpg'
    title: Card title 3
    subtitle: Card Subtitle
    text: 'This is descripiton text about the card, it can be several lines long.'
    link: null
  - src: 'https://c8r.imgix.net/9828c73fa60db50a76e7146c/5.jpg'
    title: Card title 3
    subtitle: Card Subtitle
    text: 'This is descripiton text about the card, it can be several lines long.'
    link: null
  - src: 'https://c8r.imgix.net/76e6c3da5a710f7576515cfd/3.jpg'
    title: Card Title 2
    subtitle: >-
      Card Subtitle that wraps on to multiple lines so we can see what will
      happen with stacking
    text: 'This is descripiton text about the card, it can be several lines long.'
    link: null
  - src: 'https://c8r.imgix.net/c91d73af39fc0812cc14e621/15.jpg'
    title: Card Title 1
    subtitle: Card Subtitle
    text: 'This is descripiton text about the card, it can be several lines long.'
    link: null
---
<Box>
<Container px={3} py={3}>
<SiteHeader 
src={props.avatar}
links={props.links} 
/>
</Container>
<HorizontalRule color='#eee' />
</Box>
<PageBG half image={props.image} />

<Container px={3} pt={5}>
  <PageTitle  children={props.title} />
  <PageSubtitle children={props.subtitle} />
   <Text widen fontSize={4}>
    {props.about}
  </Text>
  <Text wide mb={5}>
    {props.about}
  </Text>
 <SectionTitle children='Product Shots' />
 <Flex wrap mx={-2}>
 <Box w={1/3} px={2}>
  <Image mb={3} src='https://c8r.imgix.net/0588cbf345f8020349d0da52/37.jpg' />
  <Meta>
    Description for the product image. 
  </Meta>
 </Box>
  <Box w={1/3} px={2}>
  <Image src='https://c8r.imgix.net/e5b389e680cafc83d5f4f383/42.jpg' />
   <Meta>
    Description for the product image. 
  </Meta>
 </Box>
   <Box w={1/3} px={2}>
  <Image src='https://c8r.imgix.net/1ca6cfd88c7f8604f97fe52f/28.jpg' />
   <Meta>
    Description for the product image. 
  </Meta>
 </Box>
 <Box w={1} mt={3} px={2}>
 <Image src='https://c8r.imgix.net/88519cde3698506f6f10ce34/31.jpg' />
   <Meta>
    Description for the product image. 
  </Meta>
 </Box>
 </Flex>
  <Text wide mb={5}>
    {props.about}
  </Text>
  <SectionTitle mt={6} mb={3} children='Other Projects' />
  
  <Flex nowrap mx={-2} mb={4}>
{(props.cards || []).map(card => (
  <Box px={2} mb={3} w={[1]}>
    <Tile src={card.src}
          href={card.link}
   
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
