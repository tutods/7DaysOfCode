import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section
        className="relative flex w-full flex-col items-center justify-center"
        aria-label="Hero Section relative"
      >
        <div className="absolute right-0 top-0 -z-10 h-[600px] w-[900px] bg-[url(/media/blob.svg)] bg-cover bg-center bg-no-repeat" />

        <div className="container flex items-center">
          <section className="w-full max-w-xl">
            <h2 className="mb-3 font-body text-xl font-normal text-zinc-900/50">
              Sua casa com as
            </h2>
            <h1 className="mb-6 text-7xl font-bold">melhores plantas</h1>

            <p className="mb-9 w-full max-w-lg">
              Encontre aqui uma vasta seleção de plantas para decorar a sua casa
              e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
              e-mail e assine nossa newsletter para saber das novidades da
              marca.
            </p>

            <form className="flex h-16 items-center gap-0 bg-white pl-4 shadow-newsletter transition-all ease-in-out focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary">
              <svg
                className="mr-4 h-6 w-6 text-zinc-900/50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                type="email"
                className="h-full w-full flex-1 border-0 bg-transparent outline-none placeholder:text-zinc-900/20 focus:shadow-none focus:ring-0"
                placeholder="Insira seu e-mail"
              />
              <button
                className="h-full bg-primary px-6 text-zinc-50 shadow-button transition-all ease-in-out hover:text-zinc-900 hover:opacity-70"
                type="submit"
              >
                Assinar newsletter
              </button>
            </form>
          </section>

          <Image
            src="/media/hero.webp"
            alt="Hero Image"
            className="-ml-20"
            width={787}
            height={1183}
          />
        </div>

        <div className="-mt-20 grid w-full max-w-[995px] grid-cols-[1fr_0.65fr] gap-8 overflow-hidden rounded-md bg-white pr-8 shadow-card">
          <section className="min-h-[100px] bg-[url(/media/leafs.webp)] bg-cover bg-center bg-no-repeat" />
          <section className="py-12">
            <h3 className="mb-3 font-body text-xl text-zinc-900/50">
              Como conseguir
            </h3>
            <h2 className="mb-8 text-5xl">minha planta</h2>

            <ul className="list-none space-y-8">
              <li className='flex items-center gap-4 text-xl before:block before:h-12 before:w-12 before:rounded-full before:bg-primary before:content-[""]'>
                Escolha suas plantas
              </li>
              <li className='flex items-center gap-4 text-xl before:block before:h-12 before:w-12 before:rounded-full before:bg-primary before:content-[""]'>
                Faça seu pedido
              </li>
              <li className='flex items-center gap-4 text-xl before:block before:h-12 before:w-12 before:rounded-full before:bg-primary before:content-[""]'>
                Aguarde na sua casa
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section className="flex w-full items-center justify-center py-11">
        <div className="container">
          <h3 className="mb-3 text-center font-body text-xl text-zinc-900/50">
            Conheça nossas
          </h3>
          <h2 className="text-center text-7xl">ofertas</h2>

          <section className="mt-2 grid w-full max-w-screen-xl grid-cols-3 gap-8">
            <article className="grid grid-cols-[1fr_0.75fr] items-center overflow-hidden rounded-lg bg-white shadow-product">
              <figure className="relative h-full min-h-[200px]">
                <Image
                  alt="Ajuga reptans"
                  src="/media/products/product-1.webp"
                  fill
                />
              </figure>

              <div className='py-2'>
                <h3 className="mb-2 text-3xl font-bold">Ajuga reptans</h3>
                <p className="mb-6">R$ 20.00</p>

                <button className="place-self-end flex appearance-none items-center gap-4 text-primary">
                  Comprar{" "}
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4.9494H15"
                      stroke="#FFCB47"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 1L15 4.94931L8 8.89862"
                      stroke="#FFCB47"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}
