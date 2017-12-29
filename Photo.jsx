---
avatar: 'https://pbs.twimg.com/profile_images/908489471305195521/COgGX_oK_400x400.jpg'
twitter: mrmrs_
github: mrmrs
instagram: mrmrs_
dribbble: mrmrs
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
copyright: © 2017 You, Inc.
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
<Container py={5}>
  <PageTitle children={props.title} />
  <PageSubtitle children={props.subtitle} />
  <Image mt={4} src={props.image} />
  <Text children={props.text} />
</Container>
<HorizontalRule />
<footer>
  <Container pt={5} pb={4} px={3}>
    <Flex align='center'>
      <Box w={1/2}>
        <Text fontSize={1} children={props.footerText} />
        <Text fontSize={0} children={props.copyright} />
      </Box>
      <Flex pt={4} pb={4} justify='center' ml='auto'>
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
