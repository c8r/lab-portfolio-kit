---
avatar: 'https://c8r.imgix.net/87760e0718677237f07e486c/timothy.jpg'
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
<HorizontalRule color='black25' />
<PageBG half image={props.image} />
<Container py={5} px={3}>
  <PageTitle children={props.title} />
  <PageSubtitle children={props.subtitle} />
  <Text children={props.text} />
  {(props.links || []).map((item, index) => (
    <NavLink ml={0} mr={4} children={item.text} />
  ))}
</Container>
<HorizontalRule color='black25' />
<footer>
  <Container pt={5} pb={4} px={3}>
    <Flex wrap align='center'>
      <Box w={[ 1, 1/2 ]}>
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
