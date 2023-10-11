export default function App() {
  return (
    <main>
      <header className="bg-gray-300 flex p-4">
        <span className="">
          Oi, sou {'<'}EnickJhony{'/>'} !
        </span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/enickjhony"
        >
          <img
            className="logo"
            src="https://github.com/enickjhony.png"
            alt="Foto do Enick"
          />
        </a>
      </header>
      <div className="subtitle">
        <h2>Meus projetos</h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="cardInfo">
            <h3>ToDo App</h3>
            <p>App para cadastrar e listar tarefas</p>
            <a
              href="https://todo-enickjhony.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Acesse aqui
            </a>
          </div>
        </div>
        <div className="card">
          <div className="cardInfo">
            <h3>Coffee Delivery</h3>
            <p>App que simula uma cafeteria online</p>
            <a
              href="https://coffee-delivery-enickjhony.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Acesse aqui
            </a>
          </div>
        </div>
        <div className="card">
          <div className="cardInfo">
            <h3>Doctor Care</h3>
            <p>App que simula uma landing page de um consultorio.</p>
            <a
              href="https://enickjhony.github.io/NWL-Origin-2022//"
              target="_blank"
              rel="noreferrer"
            >
              Acesse aqui
            </a>
          </div>
        </div>
        <div className="card">
          <div className="cardInfo">
            <h3>Portfolio Ansel</h3>
            <p>App que simula um Portifólio</p>
            <a
              href="https://enickjhony.github.io/portfolio-ansel/"
              target="_blank"
              rel="noreferrer"
            >
              Acesse aqui
            </a>
          </div>
        </div>
      </div>
      <div className="qrCode">
        <a
          href="br.qr-code-generator.com/"
          border="0"
          // style="cursor:default"
          rel="nofollow"
        >
          <img src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fenick.dev.br%2F&chs=180x180&choe=UTF-8&chld=L|2" />
        </a>
      </div>
    </main>
  )
}
