import Header from '../src/components/common/Header';
import { Box } from '../src/components/foundation/layout/Box';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Text } from '../src/components/foundation/Text';

export default function Home() {
  ({ theme }) => console.log(theme);
  return (
    <>
      <Header />
      <Box style={{ height: '90vh' }}>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
            >
              <Text tag="p" variation="smallTitle" style={{ color: '#e5e5e5' }}>
                Olá!
              </Text>
              <Text tag="p" variation="title" marginTop="14px">
                Eu sou o Vinícius Figueiroa.
                <br />
                Desenvolvedor Front-end.
              </Text>
              <hr />
            </Grid.Col>
            <Grid.Col>
              <img src="./images/eu.png" />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>

        {/* <section style={{ backgroundColor: 'lightcoral' }}>
          <h2>First Page</h2>
        </section>
        <section style={{ backgroundColor: 'lightblue' }}>
          <h2>Secpnd Page</h2>
        </section>
        <section style={{ backgroundColor: 'violet' }}>
          <h2>Third Page</h2>
        </section>
        <section style={{ backgroundColor: 'lightgreen' }}>
          <h2>Fourth Page</h2>
        </section> */}
      </Box>
    </>
  );
}
