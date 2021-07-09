<br />
<h1 align="center">
  <img alt="Firebase configuração" src="https://github.com/EddyPBR/letmeask/blob/main/.github/assets/discord-logo.png" width="240px" /> 
  <br />
  <br />
  Guia Discord API
</h1>
<br />

Para executarmos o projeto devemos configurar o Discord API para setarmos algumas configurações,
mas o processo é bem simples, fácil e rápido de ser configurado, esse guia é para lhe ajudar a 
configurar o projeto, então vamos lá? :)

<br />

## Passo-a-passo

Assumindo que você tenha feito o login no discord siga o passo-a-passo logo abaixo:

- Acesse [discord-for-developers]("https://discord.com/developers/applications");
- Agora clique em "New Application", abrirá uma box, informe o nome `GamePlay`;
- Você será redirecionado para uma nova página, insira as informações Name, Description e coloque a logo do projeto (pode ser encontrado no proprio projeto);
- No menu lateral esquerdo clique em `OAuth2`;
- No campo `Redirects` informe a seguinte URL: `https://auth.expo.io/gameplay`;
- No campo `OAuth2 URL Generator` confirme a URL informada;
- No campo de `scopes` selecione as seguintes opções: identity, email, connections, guilds;
- Salve as informações;

<img src="https://github.com/EddyPBR/gameplay/blob/main/.github/assets/gameplay-configuracao-dotenv.png" alt="Discord API configuração" width="720" />

- No ultimo campo copie a URL gerada pelo discord;
- E agora vamos preencher o arquivo `.env`, abra o mesmo e siga os passos seguintes;

```
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```

- Agora vamos resgatar as informações como mostrado no gif abaixo;
- Na opção `Response Type` sempre será `token` (como mostrado no gif);
- Na opção CDN informe o seguinte: `https://cdn.discordapp.com`;

<br />

## Continuando

O projeto esta quase que totalmente pronto para ser executado, siga o resto do passo-a-passo e espero que goste :)

att,
@EddyPBR