<template>
  <div class="footer-bar centralize">
    <div class="container spacing-container">
      <div class="centralize-between">
        <div class="footer-area full-height">
          <div class="full-height">
            <p class="title">Encontre uma loja nike</p>
            <p class="title">Cadastre-se para perceber novidades</p>
            <p class="title">Mapa do site</p>
          </div>
        </div>
        <div class="footer-area">
          <div class="full-height">
            <p class="title">Ajuda</p>
            <p>Dúvidas Gerais</p>
            <p>Encontre seu Tamanho</p>
            <p>Entregas</p>
            <p>Pedidos</p>
            <p>Trocas e Devoluções</p>
            <p>Editar Consentimento</p>
            <p>Preferências de Cookie</p>
            <p>Pagamentos</p>
            <p>Produtos</p>
            <p>Corporativo</p>
            <p>Fale Conosco</p>
          </div>
        </div>
        <div class="footer-area">
          <div class="full-height">
            <p class="title">Sobre a nike</p>
            <p>Feito pra Jogar</p>
            <p>Sustentabilidade</p>
          </div>
        </div>
        <div class="footer-area">
          <div class="full-height">
            <p class="title">Redes sociais</p>
            <p class="title">Formas de pagamento</p>
          </div>
        </div>
      </div>
      <hr class="line">
      <div class="centralize-between">
        <div class="copyright-area">
          <p class="copyright-area-left">
            Brasil
          </p>
           <p class="copyright-area-left">
            Política de Privacidade
          </p>
           <p class="copyright-area-left">
            Termos de Uso
          </p>
        </div>
        <div class="copyright-area">
          <p class="copyright-area-right">
            © 2021 Nike. Todos os direitos reservados. Fisia Comércio de Produtos Esportivos Ltda - CNPJ: 59.546.515/0016-10<br/>
            Rua José Semião Rodrigues Agostinho, 1370 - Galpão Unidade 17 - Nível 0, 1 e 2 - CEP 06833-300 - Embu das Artes/SP.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    // msg: String
  },
  data(){

  },
  method:{

  },
  computed: {

  }
}
</script>

<style scoped>
  .footer-bar {
    height: auto;
    width: 100%;
    background-color: #111;
  }
  .spacing-container {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .footer-area {
    padding-top: 25px;
    padding-bottom: 25px;
    width: 25%;
    display: flex;
    align-items: start;
    justify-content: center;
  }
  .copyright-area {
    padding: 0 20px;
    width: 50%;
    display: flex;
    align-items: start;
    justify-content: left;
  }
  .line {
    border: 0; 
    border-top: 1px solid #7e7e7e;
  }
  p {
    text-align: left;
    font-size: 0.7em;
    color: #7e7e7e;
  }
  p:hover {
    color: white;
    cursor: pointer;
  }
  p.copyright-area-right {
    text-align: right;
    font-size: 0.7em;
    color: #7e7e7e;
    width: 100%;
  }
  p.copyright-area-left {
    text-align: left;
    font-size: 0.7em;
    color: #7e7e7e;
    width: auto;
    padding-right: 20px;
  }
  .title {
    text-align: left;
    font-size: 0.9em;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
  }
  .title:hover {
    color: #7e7e7e;
    cursor: pointer;
  }
</style>
