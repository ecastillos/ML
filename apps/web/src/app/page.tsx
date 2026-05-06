const featuredProducts = [
  { id: '1', title: 'Laptop ultraligera 14 pulgadas', price: 18499, location: 'Veracruz' },
  { id: '2', title: 'Audífonos inalámbricos con cancelación', price: 1299, location: 'CDMX' },
  { id: '3', title: 'Taladro inalámbrico profesional', price: 2499, location: 'Monterrey' }
];

const categories = ['Tecnología', 'Herramientas', 'Hogar', 'Moda', 'Autos', 'Construcción'];

export default function HomePage() {
  return (
    <main>
      <header className="bg-yellow-300 px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center">
          <div className="text-2xl font-black tracking-tight">ML</div>
          <form className="flex flex-1 rounded bg-white shadow-sm">
            <input
              className="w-full rounded-l px-4 py-3 outline-none"
              placeholder="Buscar productos, marcas y más..."
              aria-label="Buscar productos"
            />
            <button className="rounded-r bg-neutral-100 px-5 font-semibold" type="submit">
              Buscar
            </button>
          </form>
          <nav className="flex gap-4 text-sm font-medium">
            <a href="/seller">Vender</a>
            <a href="/cart">Carrito</a>
            <a href="/account">Cuenta</a>
          </nav>
        </div>
      </header>

      <section className="bg-blue-600 px-6 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide">Marketplace propio</p>
          <h1 className="max-w-2xl text-4xl font-black md:text-5xl">
            Compra, vende y administra productos desde una plataforma moderna.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-blue-50">
            Base inicial para catálogo, vendedores, usuarios, pagos, órdenes y administración.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="mb-4 text-xl font-bold">Categorías</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
          {categories.map((category) => (
            <a className="rounded bg-white p-4 text-center font-semibold shadow-sm" href={`/search?category=${category}`} key={category}>
              {category}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="mb-4 text-xl font-bold">Productos destacados</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <article className="overflow-hidden rounded bg-white shadow-sm" key={product.id}>
              <div className="flex h-48 items-center justify-center bg-neutral-200 text-neutral-500">Imagen del producto</div>
              <div className="p-4">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="mt-2 text-2xl font-light">${product.price.toLocaleString('es-MX')}</p>
                <p className="mt-2 text-sm text-neutral-500">{product.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
