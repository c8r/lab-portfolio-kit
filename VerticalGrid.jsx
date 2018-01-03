---
avatar: 'https://c8r.imgix.net/2f0fcc1fb83e96acbad86ff2/dean.jpg'
twitter: username
github: username
instagram: username
dribbble: username
codepen: url
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
cards:
  - src: 'https://c8r.imgix.net/1ca6cfd88c7f8604f97fe52f/28.jpg?w=720&fit=clip'
  - src: 'https://c8r.imgix.net/356d05385e69997331253487/29.jpg?w=720&fit=clip'
  - src: 'https://c8r.imgix.net/0c51ababccfefd05c14827de/30.jpg?w=720&fit=clip'
  - src: 'https://c8r.imgix.net/88519cde3698506f6f10ce34/31.jpg?w=720&fit=clip'
  - src: 'https://c8r.imgix.net/2038e525b3d66825c826aafc/32.jpg?w=720&fit=clip'
  - src: 'https://c8r.imgix.net/75797f801db96f8797caa8b2/33.jpg?w=720&fit=clip'
  - src: 'https://c8r.imgix.net/bed2c1324f4748020a76a545/34.jpg?w=720&fit=clip'
  - src: 'https://c8r.imgix.net/1501a9e181eda57497300742/35.jpg?w=720&fit=clip'
  - src: 'https://c8r.imgix.net/e3c742a388091c7e3b3806fc/36.jpg?w=720&fit=clip'
  - src: 'https://c8r.imgix.net/0588cbf345f8020349d0da52/37.jpg?w=720&fit=clip'
  - src: 'https://c8r.imgix.net/64189ed683715bddda4a32f1/38.jpg?w=720&fit=clip'
  - src: 'https://c8r.imgix.net/d1b73c79bbd93fbc0bda09e4/39.jpg?w=720&fit=clip'
  - src: 'https://c8r.imgix.net/0393a0b00d15f14dbd13a347/40.jpg?w=720&fit=clip'
  - src: 'https://c8r.imgix.net/0a6a7981262526c566ca137f/41.jpg?w=720&fit=clip'
  - src: 'https://c8r.imgix.net/e5b389e680cafc83d5f4f383/42.jpg?w=720&fit=clip'
---
<Container px={3} py={3}>
  <SiteHeader 
    src={props.avatar}
    links={props.links} 
  />
</Container>
<HorizontalRule color='black25' />
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
