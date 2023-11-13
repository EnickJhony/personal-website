import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo
} from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="lg:max-w-5xl m-auto">
      <div className="flex justify-center gap-4 py-4">
        <a
          href="https://www.linkedin.com/in/enickjhony/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo size={32} color="#0A66C2" />
        </a>
        <a
          href="https://github.com/EnickJhony"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size={32} />
        </a>
        <a href="mailto:enick.jhony@gmail.com" target="_blank" rel="noreferrer">
          <Envelope size={32} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5592981342681&amp;text=Hello, more information!"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsappLogo size={32} color="#16a34a" />
        </a>
      </div>
      <div className="text-sm text-slate-500 text-center underline">
        <p>Desenvolvido por EnickJhony</p>
        <p>&copy; 2023</p>
      </div>
    </footer>
  )
}
