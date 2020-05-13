import Link from 'next/link'

function About() {
  return (
    <section id="about" className="contain">
      <img src="profilepic.jpg" width="175" height="175" alt="Ogulcan Eristi" />
      <p>
        I'm <span className="name">Ogulcan Eristi</span>. I'm Jr. Frontend
        Developer and studying Management Information Systems at Akdeniz
        University. I'm in ❤️ with Javascript. Also currently learning React and
        trying to do reactjs projects. My first Reactjs project was to design my
        website with <i>Nextjs</i> and I think I succeeded. ✌️ You can reach my
        projects from github for now. I'll add here as soon as possible.
        <br></br> I{' '}
        <Link href={'//twitter.com/ogulcaanX'} prefetch={false}>
          <a target="_blank"><u>tweet</u></a>
        </Link>{' '}
        about all topics, my projects on{' '}
        <Link href={'//github.com/olcaneristi'} prefetch={false}>
          <a target="_blank"><u>github</u></a>
        </Link>{' '}
        and I writing blog on{' '}
        <Link href={'//medium.com/@olcaneristi'} prefetch={false}>
          <a target="_blank"><u>medium</u></a>
        </Link>
        .{''}
      </p>
    </section>
  )
}

export default About