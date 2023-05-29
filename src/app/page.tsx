import BeforeAfter from '@/components/beforeAfter'
import { ButtonLink } from '@/components/button'

import { Container, BContainer, MContainer, SContainer } from '@/components/containers'

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
          '>

            <div className='
              flex
              flex-col
              justify-between
              items-start
              gap-6
            '>

              <H1 
                text='BOTOX Week: <br /> A Técnica do Ponto Motor'
                color='#7F8084'
                bold={700}
                side='left'
              />

              <P 
                text='Aumentamos o potencial de ação da neurotoxina no organismo com menos produto e menos pontuações — e sem precisar cravar agulhas nos músculos da face, o que proporciona ainda mais conforto e segurança nos tratamentos!'
                color='#7F8084'
                side='left'
              />

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
            ' />

          </div>

          <Square 
            columns={3}
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
              text='Dra. Vanessa Pieri'
              color='white'
              side='center'
            />

            <P 
              text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam'
              color='white'
              side='center'
            />

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
            text='Nós aplicamos o BOTOX no ponto motor e paralisamos <span class="text-white">para sempre</span> todas as fibras musculares causadoras de rugas!'
            color='#7F8084'
            bold={700}
            side='center'
          />

          <H5 
            text='Agende uma avaliação:'
            color='#7F8084'
            side='center'
          />

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
              text='Por que a toxina aplicada sobre o nervo apresenta resultados melhores?'
              color='#7F8084'
              side='left'
            />

            <P 
              text='Porque a neurotoxina é uma substância que tem tropismo por tecido nervoso e não age no músculo como a maioria das pessoas acreditam.'
              color='#7F8084'
              side='left'
            />

            <P 
              text='Ela age no nervo cortando a comunicação química que acontece no bulbo sináptico, ocasionando a paralisia das fibras musculares permanentemente e de forma muito mais segura, sem contato com sangue, sem entrar na sua corrente sanguínea.'
              color='#7F8084'
              side='left'
            />

            <P 
              text='Muitas pessoas ainda aplicam BOTOX no músculo, porque ainda não sabem que existe uma tecnologia capaz de localizar o ponto motor e ajuda a acertar o nervo com máxima precisão, antes dele se ramificar e entrar nas fibras musculares.'
              color='#7F8084'
              side='left'
            />

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
              text='Nós unimos ciência e tecnologia para inovar nos tratamentos'
              color='#7F8084'
              side='center'
              bold={700}
            />

            <H5 
              text='Vamos livrar você dos riscos de intoxicação por excesso de pontuações e produto, injetando até 40% menos substância no local certo onde a neurotoxina deve agir!'
              color='#7F8084'
              side='center'
            />

          </div>

          <div className='
            flex
            flex-col
            gap-5
          '>

            <H3 
              text='Sem nenhum desperdício'
              color='#7F8084'
              side='center'
              bold={600}
            />

            <P 
              text='Na Técnica do Ponto Motor, a toxina não entra em contato com o sangue, não se desnatura, e principalmente, não é expelida do seu organismo como é no protocolo padrão. Dessa forma, a substância aumenta o seu potencial de ação paralisando suavemente os microfilamentos musculares que causam as linhas de expressão facial.'
              color='#7F8084'
              side='center'
            />

          </div>

          <div className='
            flex
            flex-col
            gap-5
          '>

            <H3 
              text='Sem risco de efeito vacina'
              color='#7F8084'
              side='center'
              bold={600}
            />

            <P 
              text='Por não entrar na corrente sanguínea você também não corre o risco de sofrer com o efeito vacina e fazer dezenas de rotoques e injetando cada vez mais toxina para se alcançar o resultado desejado.'
              color='#7F8084'
              side='center'
            />

            <P 
              text='O corpo humano é uma máquina inteligente que vem sendo melhorada ao longo de 4 bilhões de anos, e se tem uma coisa que o corpo humano sabe fazer é criar sistemas de defesa contra corpos estranhos.'
              color='#7F8084'
              side='center'
            />

            <P 
              text='Isso acontece com todos os tipos de vírus, bactérias, principalmente, com as toxinas, afinal, é isso que nós injetamos no rosto para congelar o envelhecimento.'
              color='#7F8084'
              side='center'
            />

            <P 
              text='Na Técnica do Ponto Motor você não corre o risco de criar resistência a substância porque a toxina nem chega a ter contato com o seu sangue, portanto o seu organismo nem irá perceber a presença da toxina porque ela está agindo diretamente no nervo, mais especificamente, no neurotransmissor, ou seja, no único local onde a neurotoxina realmente tem ação.'
              color='#7F8084'
              side='center'
            />

          </div>

          <div className='
            flex
            flex-col
            gap-5
          '>

            <H3 
              text='BOTOX Sniper'
              color='#7F8084'
              side='center'
              bold={600}
            />

            <P 
              text='A maioria dos profissionais injetores que seguem sem questionar o protocolo padrão, acabam por administrarem a neurotoxina no músculo, simplesmente, porque não podem encontrar com máxima precisão o local exato para aplicação da substância.'
              color='#7F8084'
              side='center'
            />

            <P 
              text='Elas ficam jogando uma batalha naval tentando acertar as terminações nervosas, enquanto nós, acertamos em cheio como snipers, usando apenas UM PONTO por região!'
              color='#7F8084'
              side='center'
            />

          </div>

        </SContainer>

      </Container>

      <Container className='
        bg-[#262625]
        relative
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
          '>

            <H2 
              text='Essa é a tecnologia que usamos para detectar o ponto motor'
              color='white'
              side='center'
            />

            <H5 
              text='A NEUROPEN é a única tecnologia capaz de detectar com máxima precisão o ponto certo para aplicação da neurotoxina botulínica tipo A”'
              color='#7F8084'
              side='center'
            />

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
              -bottom-[410px]
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

        <MContainer className='
          flex
          flex-col
          gap-20
        '>

          <H2 
            text='Protocolo Padrão <br /> Vs. <br /> A Técnica do Ponto Motor'
            color='#7F8084'
            bold={700}
            side='center'
          />

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
              text='Protocolos'
              color='#7F8084'
              side='center'
              bold={600}
            />

            <H5 
              text='Conheça os protocolos que podem ser realizados pela <br /> Técnica do Ponto Motor'
              color='#7F8084'
              side='center'
              bold={600}
            />
            
          </div>

          <Square 
            columns={4}
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
              text='Faq'
              color='#7F8084'
              uppercase
              side='center'
              bold={700}
            />

            <H5 
              text='Veja abaixo, talvez uma dessas dúvidas também seja a sua!'
              color='#7F8084'
              side='center'
              bold={600}
            />

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