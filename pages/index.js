import { Button } from '../src/components/common/Button';
import Card from '../src/components/common/Card';
import { Footer } from '../src/components/common/Footer';
import Header from '../src/components/common/Header';
import { Box } from '../src/components/foundation/layout/Box';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Text } from '../src/components/foundation/Text';

export default function Home() {
  ({ theme }) => console.log(theme);
  return (
    <>
      <Header />
      <Box
        id="home"
        minHeight="90vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ backgroundColor: '#23263A' }}
      >
        <Grid.Container>
          <Grid.Row>
            <Grid.Col
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              value={{ xs: 12, md: 6 }}
              marginBottom={{
                xs: '42px',
                sm: 'initial',
              }}
            >
              <Text
                tag="p"
                variation="smallTitle"
                style={{ color: '#e5e5e5' }}
                marginTop={{
                  xs: '42px',
                  md: '0px',
                }}
              >
                Olá!
              </Text>
              <Text tag="p" variation="bigTitle" marginTop="14px">
                Eu sou o <span>Vinícius Figueiroa</span>.
                <br />
                Desenvolvedor Front-end.
              </Text>
              <hr />
              <Button
                href="https://linkedin.com/in/vinicius-ss-figueiroa"
                target="_blank"
              >
                <img
                  style={{ display: 'block', margin: 'auto', maxWidth: '100%' }}
                  src="./images/linkedin.svg"
                />
                LinkedIn
              </Button>
            </Grid.Col>
            <Grid.Col
              value={{ xs: 12, md: 5 }}
              marginTop={{
                xs: '42px',
                sm: 'initial',
              }}
            >
              <img
                style={{ display: 'block', margin: 'auto', maxWidth: '100%' }}
                src="./images/eu.png"
                alt="Imagem de Vinícius Figueiroa"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Box>
      <Box
        id="about-me"
        style={{ backgroundColor: '#2B2E44' }}
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Grid.Container>
          <Grid.Row>
            <Grid.Col
              display="flex"
              value={{ xs: 12, md: 6 }}
              marginTop={{
                xs: '42px',
                md: 'initial',
              }}
              marginBottom={{
                xs: '42px',
                md: 'initial',
              }}
            >
              <img
                style={{ display: 'block', margin: 'auto', maxWidth: '100%' }}
                src="./images/illustration01.svg"
                alt="Ilustração de um garoto sentado ao lado de um notebook"
              />
            </Grid.Col>
            <Grid.Col
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              value={{ xs: 12, md: 5 }}
            >
              <Text
                tag="p"
                variation="title"
                marginTop={{ xs: '42px', sm: 'initial' }}
              >
                Um pouco sobre mim...
              </Text>
              <Text
                tag="p"
                variation="paragraph"
                style={{ color: '#e5e5e5' }}
                marginTop="42px"
                marginBottom="42px"
              >
                Sou um programador dedicado e me esforço para trazer as melhores
                soluções! Atualmente estou cursando desenvolvimento de sistemas
                pelo SENAI Informática e me especializando em Front-End com o
                Bootcamp de Front-End Avançado da Alura!
              </Text>
              <Button
                alignSelf="flex-end"
                ghost
                href="./curriculo.pdf"
                download
              >
                <img
                  src="./images/download.svg"
                  alt="Ícone de uma seta apontada para baixo"
                />
                Baixar currículo
              </Button>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Box>
      <Box
        id="projects"
        minHeight="90vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ backgroundColor: '#23263A' }}
      >
        <Grid.Container>
          <Grid.Row flexDirection="column">
            <Grid.Col value={{ xs: 12, md: 12 }} marginTop="42px">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
                gap="42px"
              >
                <Text tag="p" variation="title">
                  Projetos recentes
                </Text>
                <Button href="https://github.com/vinixiii" target="_blank">
                  <img src="./images/github.svg" alt="Logotipo do GitHub" />
                  GitHub
                </Button>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={{
                  xs: 'center',
                  lg: 'space-between',
                }}
                flexWrap="wrap"
              >
                <Card
                  image="./images/instalura.png"
                  title="Instalura"
                  repositoryLink="https://github.com/vinixiii/instalura"
                  siteLink="https://instalura-vinixiii.vercel.app"
                >
                  Aplicação web clone do Instagram que foi desenvolvida com o
                  objetivo de aplicar os conceitos da JAMStack utilizando
                  Next.js e styled-components
                </Card>
                <Card
                  image="./images/alurakut.png"
                  title="Alurakut"
                  repositoryLink="https://github.com/vinixiii/alurakut"
                  siteLink="https://alurakut-vinixiii.vercel.app"
                >
                  Aplicação web clone Orkut, é possível fazer login com o
                  GitHub, ver seus amigos e participar de comunidades!
                </Card>
                <Card
                  image="./images/pomoup.png"
                  title="Pomo.up"
                  repositoryLink="https://github.com/vinixiii/pomo.up"
                  siteLink="https://pomo-up.vercel.app"
                >
                  Aplicação web que combina a técnica de Pomodoro, que aumenta o
                  foco e a produtividade, com exercícios físicos para o corpo e
                  para os olhos
                </Card>
              </Box>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Box>
      <Box
        id="contact"
        style={{ backgroundColor: '#2B2E44' }}
        minHeight="90vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Grid.Container>
          <Grid.Row flexWrap="wrap">
            <Grid.Col
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
              value={{ xs: 12, md: 5 }}
            >
              <Text
                tag="p"
                variation="title"
                marginTop={{ xs: '42px', sm: 'initial' }}
              >
                Fique à vontade para entrar em contato comigo!
              </Text>
              <Button marginTop="42px" ghost>
                <img
                  src="./images/email.svg"
                  alt="Ícone de uma seta apontada para baixo"
                />
                Clique aqui
              </Button>
            </Grid.Col>
            <Grid.Col
              display="flex"
              value={{ xs: 12, md: 6 }}
              marginTop={{
                xs: '42px',
                md: 'initial',
              }}
              marginBottom={{
                xs: '42px',
                md: 'initial',
              }}
            >
              <img
                style={{ display: 'block', margin: 'auto', maxWidth: '100%' }}
                src="./images/illustration02.svg"
                alt="Ilustração de um garoto em pé olhando para um página de internet"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Box>
      <Footer />
    </>
  );
}
