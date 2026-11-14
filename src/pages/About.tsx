import profilePhoto from '../assets/profile.jpg'

export default function About() {
  return (
    <section className="page about">
      <div className="about-layout">
        <div className="about-text">
          <h1 className="about-name">Alex Stern</h1>
          <p>
            I'm a software engineer at Regions Bank and a recent graduate of the University of Chicago where I studied Mathematics and Computer Science.
          </p>
        </div>
        <img className="avatar" src={profilePhoto} alt="Alex Stern" width={210} height={280} />
      </div>
    </section>
  )
}
