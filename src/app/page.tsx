'use client'

import BeforeAfter from '@/components/beforeAfter'
import { ButtonLink } from '@/components/button'

import { Container, BContainer, MContainer, SContainer, ContainerGradient } from '@/components/containers'

import DropDownFaq from '@/components/dropdown'

import Square from '@/components/square'

import { H1, H2, H3, H5, P } from '@/components/typography'

import TextSecutiry from '@/components/utils/textSecurity'

import Image from 'next/image'

export default function Home() {
  return (

    <main className='
      flex
      flex-col
    '>

      <Container className='
        bg-gradient-to-b from-[#F0F2ED] from-50% to-[#0196FC] to-50%
      '>

        <BContainer className='
          flex
          flex-col
          items-center
          gap-20
        '>

          <div className='
            grid
            grid-cols-2
            gap-5
            md:grid-cols-1
          '>

            <div className='
              flex
              flex-col
              justify-between
              items-start
              gap-6
              md:order-2
              md:items-center
            '>

              <H1 
                $color='#7F8084'
                $bold={700}
                $align='left'
              >
                BOTOX Week: <br /> A Técnica do Ponto Motor
              </H1>

              <P
                $color='#7F8084'
                $align='left'
              >
                Aumentamos o potencial de ação da neurotoxina no organismo com menos produto e menos pontuações — e sem precisar cravar agulhas nos músculos da face, o que proporciona ainda mais conforto e segurança nos tratamentos!
              </P>

              <ButtonLink 
                text='Xô rugas. Quero ficar mais jovem!'
                href='/'
              />

              <TextSecutiry />

            </div>

            <div className='
              bg-black
              rounded-3xl
              aspect-video
              shadow-2xl
              shadow-[#00000071]
              md:order-1
            ' />

          </div>

          <Square 
            type='SquareImage'
            content={[
              {
                image: '',
                title: 'Conforto e segurança',
                desc: 'Nós injetamos com máxima precisão a neurotoxina sobre o nervo (em pápulas) e não no músculo. Dessa forma, não intoxicamos nossos pacientes e conseguimos resultados melhores!'
              },
              {
                image: '',
                title: 'Ação imediata',
                desc: 'Quando aplicada sobre o nervo, a neurotoxina fica concentrada apenas onde ela deve agir, ou seja: no nervo, cortando a comunicação química que acontece no bulbo sináptico!'
              },
              {
                image: '',
                title: 'Resultados a partir de 2 horas',
                desc: 'Na Técnica do Ponto Motor, não há desperdícios, não há intoxicação por excesso de toxina e os primeiros resultados são visíveis a partir de 2 horas após a aplicação!'
              }
            ]}
          />

          <SContainer className='
            flex
            flex-col
            items-center
            gap-5
          '>

            <div className='
              w-40
              h-40
              bg-white
              rounded-full
            ' />

            <H3 
              $color='white'
              $align='center'
            >
              Dra. Vanessa Pieri
            </H3>

            <P 
              $color='white'
              $align='center'
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            </P>

          </SContainer>

        </BContainer>

      </Container>

      <Container className='
        bg-[#262625]
      '>

        <SContainer className='
          flex
          flex-col
          items-center
          gap-5
        '>

          <H2 
            $color='#7F8084'
            $bold={700}
            $align='center'
          >
            Nós aplicamos o BOTOX no ponto motor e paralisamos <span className='text-white'>para sempre</span> todas as fibras musculares causadoras de rugas!
          </H2>

          <H5 
            $color='#7F8084'
            $align='center'
          >
            Agende uma avaliação:
          </H5>

          <ButtonLink 
            text='Quero agendar um horário'
            href='/'
            shadow
          />

          <TextSecutiry />

        </SContainer>

      </Container>

      <Container className='
        bg-[#F0F2ED]
      '>

        <MContainer className='
          flex
          justify-center
          gap-20
          md:flex-col
        '>

          <div className='
            aspect-[4/3]
            rounded-2xl
            w-full
            bg-white
            shadow-2xl
            shadow-[#00000071]
          ' />

          <div className='
            flex
            flex-col
            gap-5
          '>

            <H3 
              $color='#7F8084'
              $align='left'
            >
              Por que a toxina aplicada sobre o nervo apresenta resultados melhores?
            </H3>

            <P 
              $color='#7F8084'
              $align='left'
            >
              Porque a neurotoxina é uma substância que tem tropismo por tecido nervoso e não age no músculo como a maioria das pessoas acreditam.
            </P>

            <P 
              $color='#7F8084'
              $align='left'
            >
              Ela age no nervo cortando a comunicação química que acontece no bulbo sináptico, ocasionando a paralisia das fibras musculares permanentemente e de forma muito mais segura, sem contato com sangue, sem entrar na sua corrente sanguínea.
            </P>

            <P 
              $color='#7F8084'
              $align='left'
            >
              Muitas pessoas ainda aplicam BOTOX no músculo, porque ainda não sabem que existe uma tecnologia capaz de localizar o ponto motor e ajuda a acertar o nervo com máxima precisão, antes dele se ramificar e entrar nas fibras musculares.
            </P>

          </div>

        </MContainer>

      </Container>

      <Container>

        <SContainer className='
          flex
          flex-col
          gap-10
        '>

          <div className='
            flex
            flex-col
            gap-5
          '>

            <H2 
              $color='#7F8084'
              $align='center'
              $bold={700}
            >
              Nós unimos ciência e tecnologia para inovar nos tratamentos
            </H2>

            <H5 
              $color='#7F8084'
              $align='center'
            >
              Vamos livrar você dos riscos de intoxicação por excesso de pontuações e produto, injetando até 40% menos substância no local certo onde a neurotoxina deve agir!
            </H5>

          </div>

          <div className='
            flex
            flex-col
            gap-5
          '>

            <H3 
              $color='#7F8084'
              $align='center'
              $bold={600}
            >
              Sem nenhum desperdício
            </H3>

            <P 
              $color='#7F8084'
              $align='center'
            >
              Na Técnica do Ponto Motor, a toxina não entra em contato com o sangue, não se desnatura, e principalmente, não é expelida do seu organismo como é no protocolo padrão. Dessa forma, a substância aumenta o seu potencial de ação paralisando suavemente os microfilamentos musculares que causam as linhas de expressão facial.
            </P>

          </div>

          <div className='
            flex
            flex-col
            gap-5
          '>

            <H3 
              $color='#7F8084'
              $align='center'
              $bold={600}
            >
              Sem risco de efeito vacina
            </H3>

            <P 
              $color='#7F8084'
              $align='center'
            >
              Por não entrar na corrente sanguínea você também não corre o risco de sofrer com o efeito vacina e fazer dezenas de rotoques e injetando cada vez mais toxina para se alcançar o resultado desejado.
            </P>

            <P 
              $color='#7F8084'
              $align='center'
            >
              O corpo humano é uma máquina inteligente que vem sendo melhorada ao longo de 4 bilhões de anos, e se tem uma coisa que o corpo humano sabe fazer é criar sistemas de defesa contra corpos estranhos.
            </P>

            <P 
              $color='#7F8084'
              $align='center'
            >
              Isso acontece com todos os tipos de vírus, bactérias, principalmente, com as toxinas, afinal, é isso que nós injetamos no rosto para congelar o envelhecimento.
            </P>

            <P 
              $color='#7F8084'
              $align='center'
            >
              Na Técnica do Ponto Motor você não corre o risco de criar resistência a substância porque a toxina nem chega a ter contato com o seu sangue, portanto o seu organismo nem irá perceber a presença da toxina porque ela está agindo diretamente no nervo, mais especificamente, no neurotransmissor, ou seja, no único local onde a neurotoxina realmente tem ação.
            </P>

          </div>

          <div className='
            flex
            flex-col
            gap-5
          '>

            <H3 
              $color='#7F8084'
              $align='center'
              $bold={600}
            >
              BOTOX Sniper
            </H3>

            <P 
              $color='#7F8084'
              $align='center'
            >
              A maioria dos profissionais injetores que seguem sem questionar o protocolo padrão, acabam por administrarem a neurotoxina no músculo, simplesmente, porque não podem encontrar com máxima precisão o local exato para aplicação da substância.
            </P>

            <P 
              $color='#7F8084'
              $align='center'
            >
              Elas ficam jogando uma batalha naval tentando acertar as terminações nervosas, enquanto nós, acertamos em cheio como snipers, usando apenas UM PONTO por região!
            </P>

          </div>

        </SContainer>

      </Container>

      <Container className='
        bg-[#262625]
        overflow-hidden
        min-h-[722px]
      '>

        <SContainer className='
          flex
          flex-col
          gap-12
        '>

          <div className='
            flex
            flex-col
            gap-5
            z-10
          '>

            <H2
              $color='white'
              $align='center'
            >
              Essa é a tecnologia que usamos para detectar o ponto motor
            </H2>

            <H5 
              $color='#7F8084'
              $align='center'
            >
              A NEUROPEN é a única tecnologia capaz de detectar com máxima precisão o ponto certo para aplicação da neurotoxina botulínica tipo A”
            </H5>

          </div>

          <div className='
            absolute
            left-1/2
            -translate-x-1/2
            w-full
            h-[672px]
            max-w-4xl
            bg-gradient-radial
            from-[rgba(105,252,44,0.2)] from-5%
            via-[rgba(105,252,44,0.05)] via-40%
            to-[rgba(105,252,44,0)] to-55%
          ' />

          <Image 
            className='
              absolute
              top-[240px]
              left-1/2
              -translate-x-1/2
            '
            src='/assets/neuropen.png'
            width={80}
            height={820}
            alt='Neuropen'
          />

        </SContainer>

      </Container>

      <Container>

        <ContainerGradient />

        <MContainer className='
          relative
          z-10
          flex
          flex-col
          gap-20
        '>

          <H2
            $color='#7F8084'
            $bold={700}
            $align='center'
          >
            Protocolo Padrão <br /> Vs. <br /> A Técnica do Ponto Motor
          </H2>

          <div className='
            flex
            flex-col
            gap-20
          '>

            <BeforeAfter 
              title='Pontuações'
              left={{
                title: 'Técnica do Ponto Motor',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
              }}
              right={{
                title: 'Protocolo padrão',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
              }}
            />

            <BeforeAfter 
              title='Conforto'
              left={{
                title: 'Técnica do Ponto Motor',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
              }}
              right={{
                title: 'Protocolo padrão',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
              }}
            />

            <BeforeAfter 
              title='Segurança'
              left={{
                title: 'Técnica do Ponto Motor',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
              }}
              right={{
                title: 'Protocolo padrão',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
              }}
            />

            <BeforeAfter 
              title='Dosagem'
              left={{
                title: 'Técnica do Ponto Motor',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
              }}
              right={{
                title: 'Protocolo padrão',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
              }}
            />

            <BeforeAfter 
              title='Resultados'
              left={{
                title: 'Técnica do Ponto Motor',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
              }}
              right={{
                title: 'Protocolo padrão',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
              }}
            />

            <BeforeAfter 
              title='Duração'
              left={{
                title: 'Técnica do Ponto Motor',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
              }}
              right={{
                title: 'Protocolo padrão',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
              }}
            />

            <BeforeAfter 
              title='Preço'
              left={{
                title: 'Técnica do Ponto Motor',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
              }}
              right={{
                title: 'Protocolo padrão',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
              }}
            />

          </div>

        </MContainer>

      </Container>

      <Container>

        <BContainer className='
          flex
          flex-col
          gap-10
        '>

          <div className='
            flex
            flex-col
            gap-5
          '>

            <H2 
              $color='#7F8084'
              $align='center'
              $bold={600}
            >
              Protocolos
            </H2>

            <H5 
              $color='#7F8084'
              $align='center'
              $bold={600}
            >
              Conheça os protocolos que podem ser realizados pela <br /> Técnica do Ponto Motor
            </H5>
            
          </div>

          <Square 
            type='SquareWithoutImage'
            content={[
              {
                hashtag: 'Benefício',
                title: 'Título do benefício',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
              },
              {
                hashtag: 'Benefício',
                title: 'Título do benefício',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
              },
              {
                hashtag: 'Benefício',
                title: 'Título do benefício',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
              },
              {
                hashtag: 'Benefício',
                title: 'Título do benefício',
                desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
              }
            ]}
          />

        </BContainer>

      </Container>

      <Container className='
        bg-[#F0F2ED]
      '>

        <MContainer className='
          flex
          flex-col
          gap-10
        '>
          
          <div className='
            flex
            flex-col
            gap-5
          '>

            <H2 
              $color='#7F8084'
              $uppercase
              $align='center'
              $bold={700}
            >Faq</H2>

            <H5 
              $color='#7F8084'
              $align='center'
              $bold={600}
            >
              Veja abaixo, talvez uma dessas dúvidas também seja a sua!
            </H5>

          </div>

          <DropDownFaq
            list={[
              {
                question: 'Dúvida aqui',
                answer: {
                  title: 'Sim',
                  desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                }
              },
              {
                question: 'Dúvida aqui',
                answer: {
                  title: 'Sim',
                  desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                }
              }
            ]}
          />

        </MContainer>

      </Container>

    </main>

  )
}