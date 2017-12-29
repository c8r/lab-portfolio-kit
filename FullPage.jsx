---
avatar: 'https://pbs.twimg.com/profile_images/908489471305195521/COgGX_oK_400x400.jpg'
title: The Page Title
subtitle: The page subtitle
about: >-
  Design is a part of the communication arts, design is something you plan to
  create, it communicates to the viewer or user a visual and emotional message
  to change or guide.
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
copyright: '© 2017 You, Inc.'
---
<PageBG image='https://mrmrs.github.io/photos/u/054.jpg' p={5}>
  <Flex justify='center'>
  {(props.links || []).map(link => (
    <NavLink mx={3} href={link.href} >{link.text}</NavLink>
  ))}
  </Flex>
<Flex align='center' justify='center' style={{height: '100%' }}>
<Center>
<Avatar size='96px' mx='auto'  src={props.avatar} />
  <PageTitle  children={props.title} />
  <PageSubtitle  children={props.subtitle} />
  <Text  mx='auto' children={props.about} />
 </Center > 
 </Flex>
  <footer style={{ position: 'absolute', bottom: 0 , right: 0, left: 0}}>
  <Div pb={4}>     

  <Flex pt={4} pb={2} justify='center' ml='auto'>
    {props.twitter && <TwitterIconLink href={'https://twitter.com/'+props.twitter} /> }
    {props.github && <GitHubIconLink href={'https://github.com/'+props.github} /> }
    {props.facebook && <FacebookIconLink /> }
    {props.instagram && <InstagramIconLink  href={'https://instagram.com/'+props.instagram} /> }
    {props.dribbble && <DribbbleIconLink href={'https://dribbble.com/'+props.dribbble} /> }
    {props.pinterest && <PinterestIconLink  /> }
    {props.soundcloud && <SoundcloudIconLink  /> }
    {props.vimeo && <VimeoIconLink /> }
    {props.codepen && <CodepenIconLink  /> }
    {props.youtube && <YoutubeIconLink  /> }
  </Flex>
  <Text  fontSize={0} center mx='auto'>{props.copyright}</Text>
  </Div>
  </footer>
</PageBG>
