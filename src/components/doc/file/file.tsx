import { Separator } from '@/components/ui/separator'
import Search from '@/components/search/search'
import { useParams } from 'react-router-dom'
import data from '@/data/doc.json'

export default function File() {
  const { file } = useParams()

  if (data.name !== file) {
    return <h1 className="text-2xl">File not found</h1>
  }

  return (
    <div className='w-full overflow-x-hidden'>
      <header className='w-full border-b'>
        <div className='mx-auto flex h-16 max-w-7xl items-center gap-2 p-4 border-x'>
          <div className="flex aspect-square size-10 items-center justify-center">
            <img src="/logo.png" alt="Project Logo" />
          </div>
          <div className='ml-auto'>
            <Search />
          </div>
        </div>
      </header>

      <div className='mx-auto flex min-h-screen w-full max-w-7xl flex-col border-x'>
        <main className='flex w-full flex-1 flex-col gap-6 p-4'>
          <div className=''>
            <div className='flex flex-col gap-3'>
              <h1 className='text-3xl font-semibold tracking-tight text-foreground'>
                {data.name}
              </h1>
            </div>
          </div>

          <article className='flex flex-1 flex-col gap-4'>
            <div className=''>
              <h2 className='text-2xl font-semibold mb-4'>
                Documentation
              </h2>
              <Separator />

              <div className='flex flex-col gap-8'>
                <section className='py-4'>
                  <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold tracking-tight text-foreground'>
                      Overview
                    </h2>
                    <p className='max-w-3xl text-base'>
                      {data.description || 'No description provided.'}
                    </p>
                  </div>
                </section>

                {/* Variables Section */}
                <section>
                  <h2 className='text-xl font-semibold tracking-tight text-foreground'>
                    Variables
                  </h2>
                  <div className='grid gap-4 mt-4'>
                    {data.variables.map((variable) => (
                      <div
                        key={variable.name}
                        className='flex flex-col gap-1 min-w-0'
                      >
                        <div className='rounded-md border bg-background bg-gray-50'>
                          <div className='border-b px-2 py-1 text-xs text-right'>
                            <a href="#" className='right-0 text-blue-500 hover:underline px-2'>
                              View Source
                            </a>
                          </div>
                          <pre className='max-w-full overflow-x-auto px-4 py-3 text-sm leading-6 text-foreground'>
                            <code>
                              DEFINE VARIABLE{" "}
                              <span className='italic'>{variable.name}</span>{" "}
                              AS {variable.type}
                            </code>
                          </pre>
                        </div>

                        {variable.description ? (
                          <p className='pt-2'>{variable.description}</p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Procedures Section */}
                <section>
                  <h2 className='text-xl font-semibold tracking-tight text-foreground'>
                    Procedures
                  </h2>
                  <div className='grid gap-12 mt-4'>
                    {data.procedures.map((procedure) => (
                      <div
                        key={procedure.name}
                        className='flex flex-col gap-1 min-w-0'
                      >
                        <h3 className='text-base font-semibold text-foreground'>
                          proc{" "}
                          <a href="#" className='text-blue-500 hover:underline'>
                            {procedure.name}
                          </a>
                        </h3>

                        <div className='rounded-md border bg-background bg-gray-50'>
                          <pre className='max-w-full overflow-x-auto px-4 py-3 text-sm leading-6 text-foreground'>
                            <code>
                              PROCEDURE{" "}
                              <span className='italic'>{procedure.name}</span>{" "}
                              (
                              {procedure.parameters.map((param, index) => (
                                <span key={`${procedure.name}-${param.name}-${index}`}>
                                  {index > 0 ? ", " : ""}
                                  {param.mode}{" "}
                                  <span className='italic'>{param.name}</span>{" "}
                                  {param.type}
                                </span>
                              ))}
                              )
                            </code>
                          </pre>
                        </div>

                        {procedure.description ? (
                          <p className='pt-2'>{procedure.description}</p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Functions Section */}
                <section>
                  <h2 className='text-xl font-semibold tracking-tight text-foreground'>
                    Functions
                  </h2>
                  <div className='grid gap-12 mt-4'>
                    {data.functions.map((fn) => (
                      <div
                        key={fn.name}
                        className='flex flex-col gap-1 min-w-0'
                      >
                        <h3 className='text-base font-semibold text-foreground'>
                          func{" "}
                          <a href="#" className='text-blue-500 hover:underline'>
                            {fn.name}
                          </a>
                        </h3>

                        <div className='rounded-md border bg-background bg-gray-50'>
                          <pre className='max-w-full overflow-x-auto px-4 py-3 text-sm leading-6 text-foreground'>
                            <code>
                              FUNCTION{" "}
                              <span className='italic'>{fn.name}</span>{" "}
                              (
                              {fn.parameters.map((param, index) => (
                                <span key={`${fn.name}-${param.name}-${index}`}>
                                  {index > 0 ? ", " : ""}
                                  {param.mode}{" "}
                                  <span className='italic'>{param.name}</span>{" "}
                                  {param.type}
                                </span>
                              ))}
                              ) RETURNS {fn.returns}
                            </code>
                          </pre>
                        </div>

                        {fn.description ? (
                          <p className='pt-2'>{fn.description}</p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </article>
        </main>
      </div>

      <footer className='w-full border-t'>
        <div className='mx-auto h-16 max-w-7xl border-x'></div>
      </footer>
    </div>
  )
}
