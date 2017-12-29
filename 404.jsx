---
avatar: 'https://c8r.imgix.net/87760e0718677237f07e486c/timothy.jpg'
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
image: 'https://c8r.imgix.net/25f037c4bc2e87dc9b6b7252/68a.jpg '
title: 404
subtitle: 'Sorry, we can''t find that page'
---
<Container px={3} py={3}>
  <SiteHeader 
    src={props.avatar}
    links={props.links} 
  />
</Container>
<HorizontalRule color='#eee' />
<PageBG half image={props.image} />
<Container py={5}>
  
  <PageTitle children={props.title} />
  <PageSubtitle children={props.subtitle} />
 
    <Text children={props.text} />
</Container>
<HorizontalRule color='#eee' />
<footer>
  <Container pt={5} pb={4} px={3}>
    <Flex align='center'>
      <Box w={1/2}>
        <Text fontSize={1}>
          I'm currently available for contracts in Q2 of 2018. If you're
          interested in collaborating on a project drop me a line.
        </Text>
        <Text fontSize={0}>© 2017 You, Inc.</Text>
      </Box>
      <Flex pt={4} pb={4} justify='center' ml='auto'>
        {props.twitter && <TwitterIcon href={'https://twitter.com/'+props.twitter} /> }
        {props.github && <GitHubIcon href={'https://github.com/'+props.github} /> }
        {props.facebook && <FacebookIcon /> }
        {props.instagram && <InstagramIcon href={'https://instagram.com/'+props.instagram} /> }
        {props.dribbble && <DribbbleIcon href={'https://dribbble.com/'+props.dribbble} /> }
        {props.pinterest && <PinterestIcon /> }
        {props.soundcloud && <SoundcloudIcon /> }
        {props.vimeo && <VimeoIcon /> }
        {props.codepen && <CodepenIcon /> }
        {props.youtube && <YoutubeIcon /> }
      </Flex>
    </Flex>
  </Container>
</footer>
