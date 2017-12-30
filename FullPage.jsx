---
avatar: 'https://pbs.twimg.com/profile_images/908489471305195521/COgGX_oK_400x400.jpg'
twitter: username
github: username
instagram: username
dribbble: username
codepen: url
# behance: username
# vimeo: username
# youtube: url
# soundcloud: username
# facebook: url
# pinterest: url
# snapchat: url
# kickstarter: url
# npm: url
# stackoverflow: url
# producthunt: url
# linkedin: url
# etsy: url
# slack: url
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
title: The Page Title
subtitle: The page subtitle
text: >-
  Design is a part of the communication arts, design is something you plan to
  create, it communicates to the viewer or user a visual and emotional message
  to change or guide.
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
     <Text  fontSize={0} center mx='auto'>{props.copyright}</Text>
    </Div>
  </footer>
</PageBG>
