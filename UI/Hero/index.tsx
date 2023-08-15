import AreaButton from '@/components/AreaButton'
import CtaButton from '@/components/CtaButton'
import React from 'react'

export default function Hero() {
  return (
    <div className="container mx-auto">
        <div className="content flex justify-between">
          <div className="left flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-cyan-950">
              Projetos, Pesquisas, Artigos
            </h2>
            <ul>
              <li>
                <span className="text-cyan-950 font-bold">Patrocínio:</span>
                <p>Torne-se o estímulo para a inovação tecnológica</p>
              </li>
              <li>
                <span className="text-cyan-950 font-bold">Parceria:</span>
                <p>Seja co-criador da nova geração de soluções tecnológicas</p>
              </li>
              <li>
                <span className="text-cyan-950 font-bold">Propostas:</span>
                <p>Dê início à revolução com suas contribuições e ideias.</p>
              </li>
            </ul>
            <CtaButton />
          </div>
          <div className="right flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-cyan-950">Tecnologias</h2>
            <ul className="flex flex-col gap-4">
              <li>
                <AreaButton text="Meio Ambiente" />
              </li>
              <li>
                <AreaButton text="Robotica" />
              </li>
              <li>
                <AreaButton text="Software" />
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}
