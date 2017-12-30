---
avatar: 'https://c8r.imgix.net/87760e0718677237f07e486c/timothy.jpg'
twitter: username
github: username
instagram: username
dribbble: username
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
image: 'https://c8r.imgix.net/25f037c4bc2e87dc9b6b7252/68a.jpg '
kicker: 404
title: 'Sorry, we can''t find that page'
subtitle: A 404 error has occured
text: >-
  The page might have been moved or deleted. Hopefully one of these links will
  help.
---
<Container px={3} py={3}>
  <SiteHeader 
    src={props.avatar}
    links={props.links} 
  />
</Container>
<HorizontalRule color='#eee' />
<PageBG half image={props.image} />
<Container py={5} px={3}>
  <PageTitle children={props.title} />
  <PageSubtitle children={props.subtitle} />
  <Text children={props.text} />
  {(props.links || []).map((item, index) => (
    <NavLink ml={0} mr={4} children={item.text} />
  ))}
</Container>
<HorizontalRule color='#eee' />
<footer>
  <Container pt={5} pb={4} px={3}>
    <Flex wrap align='center'>
      <Box w={[1,1/2]}>
        <Text fontSize={1} children={props.footerText} />
        <Text fontSize={0} children={props.copyright} />
      </Box>
      <Flex pt={4} pb={4} ml={[0,'auto']}>
        {props.twitter && <TwitterIcon href={'https://twitter.com/'+props.twitter} /> }
        {props.github && <GitHubIcon href={'https://github.com/'+props.github} /> }
        {props.facebook && <FacebookIcon href={'https://facebook.com/'+props.facebook} /> }
        {props.instagram && <InstagramIcon href={'https://instagram.com/'+props.instagram} /> }
        {props.dribbble && <DribbbleIcon href={'https://dribbble.com/'+props.dribbble} /> }
        {props.pinterest && <PinterestIcon href={'https://pinterest.com/'+props.pinterest} /> }
        {props.soundcloud && <SoundcloudIcon href={'https://soundcloud.com/'+props.soundcloud}  /> }
        {props.vimeo && <VimeoIcon href={'https://vimeo.com/'+props.vimeo} /> }
        {props.codepen && <CodepenIcon href={'https://codepen.io/'+props.codepen} /> }
        {props.youtube && <YoutubeIcon href={props.youtube} /> }
      </Flex>
    </Flex>
  </Container>
</footer>
