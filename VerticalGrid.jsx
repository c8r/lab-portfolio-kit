---
avatar: 'https://pbs.twimg.com/profile_images/908489471305195521/COgGX_oK_400x400.jpg'
twitter: username
github: username
instagram: username
dribbble: username
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
cards:
  - src: 'https://c8r.imgix.net/1ca6cfd88c7f8604f97fe52f/28.jpg'
  - src: 'https://c8r.imgix.net/356d05385e69997331253487/29.jpg'
  - src: 'https://c8r.imgix.net/0c51ababccfefd05c14827de/30.jpg'
  - src: 'https://c8r.imgix.net/88519cde3698506f6f10ce34/31.jpg'
  - src: 'https://c8r.imgix.net/2038e525b3d66825c826aafc/32.jpg'
  - src: 'https://c8r.imgix.net/75797f801db96f8797caa8b2/33.jpg'
  - src: 'https://c8r.imgix.net/bed2c1324f4748020a76a545/34.jpg'
  - src: 'https://c8r.imgix.net/1501a9e181eda57497300742/35.jpg'
  - src: 'https://c8r.imgix.net/e3c742a388091c7e3b3806fc/36.jpg'
  - src: 'https://c8r.imgix.net/0588cbf345f8020349d0da52/37.jpg'
  - src: 'https://c8r.imgix.net/64189ed683715bddda4a32f1/38.jpg'
  - src: 'https://c8r.imgix.net/d1b73c79bbd93fbc0bda09e4/39.jpg'
  - src: 'https://c8r.imgix.net/0393a0b00d15f14dbd13a347/40.jpg'
  - src: 'https://c8r.imgix.net/0a6a7981262526c566ca137f/41.jpg'
  - src: 'https://c8r.imgix.net/e5b389e680cafc83d5f4f383/42.jpg'
---
<Container px={3} py={3}>
  <SiteHeader 
    src={props.avatar}
    links={props.links} 
  />
</Container>
<HorizontalRule color='#eee' />
<Container>
  <Flex px={2} mt={3}>
    <Box w={1/3} px={2}>
      {(props.cards || []).map((card, index) => (
        <Box>
          {index % 3 == 2 && 
            <Card src={card.src} /> 
          }
        </Box>
      ))}
    </Box>
    <Box w={1/3} px={2}>
      {(props.cards || []).map((card, index) => (
        <Box>
          {index % 3 == 1 &&
            <Card src={card.src} />
          }
        </Box>
      ))}
    </Box>
    <Box w={1/3} px={2}>
      {(props.cards || []).map((card, index) => (
        <Box>
          {index % 3 == 0 &&
            <Card src={card.src} />
          }
        </Box>
      ))}
    </Box>
  </Flex>
</Container>
<footer style={{borderTop: '1px solid #bbb' }}>
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
