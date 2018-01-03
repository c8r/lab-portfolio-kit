---
image: 'https://c8r.imgix.net/2038e525b3d66825c826aafc/32.jpg?w=1920&fit=clip'
avatar: 'https://c8r.imgix.net/2f0fcc1fb83e96acbad86ff2/dean.jpg'
twitter: username
github: username
instagram: username
dribbble: username
codepen: url
title: The Page Title
subtitle: The page subtitle
text: >-
  Design is a part of the communication arts, design is something you plan to
  create, it communicates to the viewer or user a visual and emotional message
  to change or guide through an emotional connection with a product or service
  enhancing their experience of the product or brand
secondaryText: >-
  Design is a part of the communication arts, design is something you plan to
  create, it communicates to the viewer or user a visual and emotional message
  to change or guide through an emotional connection with a product or service
  enhancing their experience of the product or brand
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
cards:
  - src: 'https://c8r.imgix.net/4edc08e4bc121c4ecadfca68/12.jpg?w=720&fit=clip'
    title: Card Title 2
    subtitle: Card Subtitle
    text: Short card description.
    link: null
  - src: 'https://c8r.imgix.net/2466f8f593c33a7fed01944a/2.jpg?w=720&fit=clip'
    title: This is a card title
    subtitle: Card Subtitle
    text: You can edit all of this without touching markup
    link: null
  - src: 'https://c8r.imgix.net/87be409330dcb961fa548cb6/7.jpg?w=720&fit=clip'
    title: Card title 3
    subtitle: Card Subtitle
    text: 'This is descripiton text about the card, it can be several lines long.'
    link: null
  - src: 'https://c8r.imgix.net/9828c73fa60db50a76e7146c/5.jpg?w=720&fit=clip'
    title: Card title 3
    subtitle: Card Subtitle
    text: 'This is descripiton text about the card, it can be several lines long.'
    link: null
  - src: 'https://c8r.imgix.net/76e6c3da5a710f7576515cfd/3.jpg?w=720&fit=clip'
    title: Card Title 2
    subtitle: >-
      Card Subtitle that wraps on to multiple lines so we can see what will
      happen with stacking
    text: 'This is descripiton text about the card, it can be several lines long.'
    link: null
  - src: 'https://c8r.imgix.net/c91d73af39fc0812cc14e621/15.jpg?w=720&fit=clip'
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
<HorizontalRule color='black25' />
</Box>
<PageBG half image={props.image} />

<Container px={3} pt={5}>
  <PageTitle  children={props.title} />
  <PageSubtitle children={props.subtitle} />
  <Text wide fontSize={4} children={props.text} />
  <Text wide children={props.secondaryText} />
  <SectionTitle children='Product Shots' />
  <Flex wrap mx={-2}>
    <Box w={1/3} px={2}>
      <Image mb={3} src='https://c8r.imgix.net/0588cbf345f8020349d0da52/37.jpg?w=1920&fit=clip' />
      <Meta>Description for the product image.</Meta>
   </Box>
    <Box w={1/3} px={2}>
    <Image src='https://c8r.imgix.net/e5b389e680cafc83d5f4f383/42.jpg?w=1920&fit=clip' />
     <Meta>Description for the product image.</Meta>
   </Box>
     <Box w={1/3} px={2}>
    <Image src='https://c8r.imgix.net/1ca6cfd88c7f8604f97fe52f/28.jpg?w=1920&fit=clip' />
     <Meta>Description for the product image.</Meta>
   </Box>
   <Box w={1} mt={3} px={2}>
   <Image src='https://c8r.imgix.net/88519cde3698506f6f10ce34/31.jpg?w=1920&fit=clip' />
   <Meta>Description for the product image.</Meta>
   </Box>
 </Flex>
  <Text wide mb={5}>
    {props.secondaryText}
  </Text>
  <SectionTitle mt={6} mb={3} children='Other Projects' />
  <Flex nowrap mx={-2} mb={4}>
    {(props.cards || []).map(item => (
      <Box px={2} mb={3} w={[1]}>
        <Tile src={item.src} href={item.link} />
      </Box>
    ))}
  </Flex>
</Container>
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
        {props.linkedin && <LinkedinIcon mb={2} href={props.linkedin} /> }
      </Flex>
    </Flex>
  </Container>
</footer>
