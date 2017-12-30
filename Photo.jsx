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
  - text: Writing
    href: '#0'
  - text: Work
    href: '#0'
  - text: Photography
    href: '#0'
  - text: Projects
    href: '#0'
footerText: >-
  I'm currently available for contracts in Q2 of 2018.  If you're interested in
  collaborating on a project drop me a line.
copyright: '© 2017 You, Inc.'
title: Title of the Photo
subtitle: This is the subtitle if you need one
image: 'https://c8r.imgix.net/21daa59ffc6b351e33094929/60a.jpg'
text: >-
  On Titan the molecules that have been raining down like manna from heaven for
  the last 4 billion years might still be there largely unaltered deep-frozen
  awaiting the chemists from Earth.
---
<Container px={3} py={3}>
  <SiteHeader 
    src={props.avatar}
    links={props.links} 
  />
</Container>
<HorizontalRule color='#eee' />
<Container py={5} px={3}>
  <PageTitle children={props.title} />
  <PageSubtitle children={props.subtitle} />
  <Image mt={4} src={props.image} />
  <Text children={props.text} />
</Container>
<HorizontalRule />
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
      </Flex>
    </Flex>
  </Container>
</footer>
