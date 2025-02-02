import { MoveRight } from "lucide-react"

const About = () => {
  const links = [
    { href:"#", label: "About" },
    { href:"#", label: "Terms" },
    { href:"#", label: "Privacy" },
    { href:"#", label: "Help" },
    { href:"#", label: "Teams" },
    { href:"#", label: "Press" }
  ]

  return (
    <div className="bg-black h-full">
      <nav className="p-4 border-b border-white">
        <a href="#" className="text-white text-3xl text-bold">Medium</a>
      </nav>

      <section className="content mt-6 mx-4">
        <div className="md:w-[680px]">
          <br />
          <br />
          <br />
          <h2 className="text-7xl text-white ">Everyone has a story to tell</h2>
          <br />
          <br />

          <p className="text-white text-lg">
            Medium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the world—without having to build a mailing list or a following first. 
            The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right readers for whatever you have to say.
          </p>
          <br />
          <br />

          <div className="bg-gray-500 mt-4">
            <span className="text-white text-2xl">Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.</span>
          </div>
          <br />
          <br />

          <p className="text-white text-lg">We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. 
            In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.
          </p>
          <br />
          <br />

          <p className="text-white text-lg">
            Over 100 million people connect and share their wisdom on Medium every month. They’re software developers, amateur novelists, product designers, CEOs, and anyone burning with a story they need to get out into the world. 
            They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.
          </p>
          <br />


          <p className="text-white text-lg">
            Instead of selling ads or selling your data, we’re supported by a growing community of over a million Medium members who believe in our mission. If you’re new here, start reading. 
            Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then write your story.
          </p>
          <br />
          <br />

        </div>
      </section>

      <section className="mt-4">
        <hr className="text-white"/>
        <div className="text-white">
          <div className="flex items-center justify-between border-b py-16 md:py-26 hover:text-black hover:bg-gray-300 transition duration-700">
            <span className="text-4xl md:text-6xl px-4">
              Start reading
            </span>
            <MoveRight className="pr-4" size={50}/>
          </div>
          <div className="flex items-center justify-between border-b py-16 md:py-26 hover:text-black hover:bg-gray-300 transition duration-700">
            <span className="text-4xl md:text-6xl px-4">
              Start writing
            </span>
            <MoveRight className="pr-4" size={50}/>
          </div>
          <div className="flex items-center justify-between border-b py-16 md:py-26 hover:text-black hover:bg-gray-300 transition duration-700">
            <span className="text-4xl md:text-6xl px-4">
              Become a member
            </span>
            <MoveRight className="pr-4" size={50}/>
          </div>
        </div>
      </section>

      <footer className="bg-white text-black py-10 px-4">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between">
          <a href="#" className="cursor-pointer text-lg font-semibold">Medium</a>
          <ul className="flex space-x-2">
            { links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default About