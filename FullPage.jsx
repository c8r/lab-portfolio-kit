---
avatar: 'https://pbs.twimg.com/profile_images/908489471305195521/COgGX_oK_400x400.jpg'
title: The Page Title
subtitle: The page subtitle
text: >-
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
copyright: '© 2017 You, Inc.'
---
<PageBG image='https://mrmrs.github.io/photos/u/050.jpg' p={5}>
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
      <Text  mx='auto' children={props.text} />
    </Center > 
  </Flex>
  <footer style={{ position: 'absolute', bottom: 0 , right: 0, left: 0}}>
    <Div pb={4}>     
      <Flex pt={4} pb={2} justify='center' ml='auto'>
        {props.twitter && <TwitterIcon href={'https://twitter.com/'+props.twitter} /> }
        {props.github && <GitHubIcon href={'https://github.com/'+props.github} /> }
        {props.facebook && <FacebookIcon /> }
        {props.instagram && <InstagramIcon  href={'https://instagram.com/'+props.instagram} /> }
        {props.dribbble && <DribbbleIcon href={'https://dribbble.com/'+props.dribbble} /> }
        {props.pinterest && <PinterestIcon  /> }
        {props.soundcloud && <SoundcloudIcon  /> }
        {props.vimeo && <VimeoIcon /> }
        {props.codepen && <CodepenIcon  /> }
        {props.youtube && <YoutubeIcon  /> }
      </Flex>
     <Text  fontSize={0} center mx='auto'>{props.copyright}</Text>
    </Div>
  </footer>
</PageBG>
