$(document).ready(function(){


    var tam = $(window).width();
    
    if (tam >= 768 ){
    
      $('#cabecalho').after('<div id="menuCat"><div class="conteiner"><div class="row-fluid"></div></div></div>');
      $('#menuCat .row-fluid').append($('#cabecalho .menu.superior'));
    
      $('.pagina-inicial .mini-banner').prepend(`<div id="miniBannerFullw" class="conteiner"></div>`);
      $('.pagina-inicial .mini-banner .modulo.span4').appendTo($('#miniBannerFullw'));
      
      $('.pagina-inicial #listagemProdutos > ul:nth-child(2)').after($('.banner.tarja'));
    
      if($('#cabecalho.logo-centro').length) {
    
        $('#cabecalho.logo-centro>.conteiner>.row-fluid>.conteudo-topo:first-child').prepend(
            '<div class="cat">'+
                '<span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
            '</div>'
        );
    
        $('.cat').on('click', function(){
            $('#menuCat').toggleClass('active');
            $('.category').toggleClass('active');
        });
    
        $('#cabecalho.logo-centro .row-fluid .conteudo-topo:last-child .inferior .span12').prepend(
            '<div class="login-top">'+
            '<ul class="drop-login">'+
              '<div class="append-login">'+
                '<li><a href="../conta/pedido/listar">Meus Pedidos</a></li>'+
                '<li><a href="../conta/index">Minha Conta</a></li>'+
                '<li class="fundo-principal"><a href="../conta/login">Entre ou Cadastre-se</a></li>'+
              '</div>'+
            '</ul>'+
          '</div>'+
          '<div class="wishlist">'+
                '<a href="../conta/favorito/listar">'+
                    'Favoritos'+
                '</a>'+
            '</div>'
        );
    
        $('#cabecalho.logo-centro .row-fluid .conteudo-topo:last-child .inferior .span12').prepend(
            '<div class="atd-top">'+
            '<span class="atd-txt">Precisa de ajuda?<strong>Fale conosco</strong><span>'+
            '<ul class="drop-atd">'+
              '<li class="acompanhe-pedido fundo-principal"><a href="http://www2.correios.com.br/sistemas/rastreamento/" target="_blank"><i class="fa fa-truck"></i>Acompanhe seu pedido</a></li>'+
            '</ul>'+
            '</div>'
        );
    
        $('.carrinho>a>i').addClass('cor-principal');
        $('.atd-top ul.drop-atd').prepend($('.barra-inicial .canais-contato.span9>ul>li'));
        $('#cabecalho.logo-centro .row-fluid .conteudo-topo').addClass('span4').removeClass('span3');
        $('#cabecalho.logo-centro .row-fluid > .span6').addClass('span4').removeClass('span6');
        $('#cabecalho.logo-centro .row-fluid .conteudo-topo:first-child .inferior .span12 .busca').appendTo($('.drop-search'));
    
      } else {
    
      $('.conteudo-topo').before(
          '<div class="cat">'+
              '<span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
          '</div>'
      );
    
      $('.cat').on('click', function(){
          $('#menuCat').toggleClass('active');
          $('.category').toggleClass('active');
      });
    
      $('.conteudo-topo .inferior .span8.busca-mobile').after(
        '<div class="login-top">'+
        '<ul class="drop-login">'+
          '<div class="append-login">'+
            '<li><a href="../conta/pedido/listar">Meus Pedidos</a></li>'+
            '<li><a href="../conta/index">Minha Conta</a></li>'+
            '<li class="fundo-principal"><a href="../conta/login">Entre ou Cadastre-se</a></li>'+
          '</div>'+
        '</ul>'+
      '</div>'+
      '<div class="wishlist">'+
            '<a href="../conta/favorito/listar">'+
                'Favoritos'+
            '</a>'+
        '</div>'
      );
    
      $('.conteudo-topo .inferior .span8.busca-mobile').after(
        '<div class="atd-top">'+
        '<span class="atd-txt">Precisa de ajuda?<strong>Fale conosco</strong><span>'+
        '<ul class="drop-atd">'+
          '<li class="acompanhe-pedido fundo-principal"><a href="http://www2.correios.com.br/sistemas/rastreamento/" target="_blank"><i class="fa fa-truck"></i>Acompanhe seu pedido</a></li>'+
        '</ul>'+
        '</div>'
      );
    
      $('.carrinho>a>i').addClass('cor-principal');
      $('.atd-top ul.drop-atd').prepend($('.barra-inicial .canais-contato.span9>ul>li'));
    
      }
    
      if( $('.drop-atd .tel-whatsapp>span').length ){
          $('.drop-atd .tel-whatsapp>span').each(function () {
              var $this = $(this).text();
              var $result = $(this).text().replace("Whatsapp:", "");
              $(this).text($result);
          });
      }
    
      if( $('.drop-atd li:nth-child(2)>span').length ){
          $('.drop-atd li:nth-child(2)>span').each(function () {
              var $this = $(this).text();
              var $result = $(this).text().replace("Telefone:", "");
              $(this).text($result);
          });
      }
    
      if( $('.drop-atd .tel-skype>a').length ){
          $('.drop-atd .tel-skype>a').each(function () {
              var $this = $(this).text();
              var $result = $(this).text().replace("Skype:", "");
              $(this).text($result);
          });
      }
    
      $('.banner .newsletter .titulo').addClass('cor-principal').removeClass('cor-secundaria');
    
      if($('.marcas').length) {
    
        $('#rodape').before(
          '<div id="marcas">'+
          '<div class="conteiner">'+
            '<div class="row-fluid">'+
            '<div class="titulo-categoria borda-principal cor-principal">'+
              '<strong>Navegue por marcas</strong>'+
            '</div>'+
            '</div>'+
          '</div>'+
        '</div>');
    
        $('#marcas .row-fluid').append($('.marcas'));
    
      } else {
    
      }
    
      $('body').append('<a href="#" onclick="topFunction()" class="back-top borda-principal"><i class="fa fa-chevron-up"></i><span>subir</span></a>');
    
      window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            $(".back-top").addClass('show');
        } else {
            $(".back-top").removeClass('show');
        }
    }
    
    function topFunction() {
        $('body').animate({scrollTop: '0'}, 200);
    }
    
    $('.carrinho>a span').html('Carrinho');
    
    $('.pagina-categoria .secao-banners').before($('.breadcrumbs'));
    $('.pagina-categoria .breadcrumbs').append($('.conteudo h1'));
    
    if ($('.conteudo-topo .superior .span8 .btn-group:first-child').is(':visible')) {
        $('.login-txt').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child'));
        //Recorta o primeiro nome do usuário logado no menu desktop
        let usenameText = $('.login-top .btn-group .dropdown-toggle').text();
        let index = $('.login-top .btn-group .dropdown-toggle').text().indexOf(',');
        let firstname = usenameText.substring(index + 2).split(' ').slice(0, -1)[0];
        if(firstname.length > 10 ) {
           firstname = firstname.substring(0, 10) + ' ...';
        }
        document.querySelector('.login-top .btn-group .dropdown-toggle').textContent = `Olá, ${firstname}`;
        $('.login-top ul.dropdown-menu').css("left", "-67px");
    }
    
    if ($('.conteudo-topo .superior .span8 .btn-group:first-child').is(':visible')) {
        $('.login-top ul.drop-login').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child .dropdown-menu'));
       
        
    }
    
    if ($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child').is(':visible')) {
      //  $('.login-top .login-txt').html('<i class="fa fa-user cor-principal"></i>Olá!');
       
      
    }
    
    if ($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child').is(':visible')) {
        $('.login-top ul.drop-login').replaceWith($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child .dropdown-menu'));
    }
    
    //Header fixo
    $(window).scroll(function(){
        if ($(window).scrollTop() > 150){
            $('#cabecalho').addClass('scroll');
            $('#menuCat').addClass('scroll');
        } else {
            $('#cabecalho').removeClass('scroll');
            $('#menuCat').removeClass('scroll');
        }
    });
    
    }
    
    //inputs login
    $('.cadastro-logar .form-horizontal .controls #id_email').attr("placeholder", "E-mail");
    $('.cadastro-logar .form-horizontal .controls #id_senha').attr("placeholder", "Senha");
    $('.cadastro-logar>.span6:nth-child(2) #id_email').attr("placeholder", "Digite o email que deseja cadastrar:");
  
    $('.produto .comprar').before($('.produto-compartilhar .lista-favoritos'));
  
    $('.parcelas-produto .accordion .accordion-group:first-child .accordion-body').removeClass('in');
    
    
    $('#rodape > div:last-child .row-fluid > div:last-child a').before('<a href="https://www.tihgo.com.br/" class="tihgo-agencia" target="_blank"><img src="https://cdn.awsli.com.br/1994/1994497/arquivos/tihgo-logo.png" alt="Tihgo Agência"></a>');
    $('#rodape > div:last-child .row-fluid > div:first-child').removeClass('span9 span6 atendimento').addClass('assinatura').attr('style', '');
    $('#rodape > div:last-child .row-fluid > div:last-child').attr('style', '').addClass('assinatura-rodape');
   
  
    if( $('.listagem-linha .listagem-item .bandeiras-produto .bandeira-promocao').length ){
        $('.listagem-linha .listagem-item .bandeiras-produto .bandeira-promocao').each(function () {
            var $this = $(this).text();
            var $result = $(this).text().replace("% Desconto", "");
            $(this).text($result);
        });
    }
    
    if (tam <= 767 ){
    
    $('#cabecalho .conteiner .logo').before(
      '<div class="cat cor-principal">'+
          '<span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
      '</div>'
    );
    
    
    $('#cabecalho .menu.superior .nivel-um').prepend(
      '<div class="cab-nav">'+
        '<a class="close-nav-full"></a>'+
        '<div class="close-nav">'+
            '<span class="category cor-principal"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
        '</div>'+
        '<div class="acc-nav">'+
        '</div>'+
      '</div>'
    );
    if ($('.btn-group').length){
    $('.menu.superior .nivel-um .cab-nav').prepend('<li class="logado-sair"><a href="/conta/logout"><i class="signin-icon"></i><span>Sair</span></a></li>');
    }
    if ($('#cabecalho .atalhos-mobile .icon-signout').is(':visible')) {
        //$('#cabecalho .atalhos-mobile .icon-signout').appendTo($('#cabecalho .acc-nav'));
    }
    
    $('.menu.superior .nivel-um .cab-nav .acc-nav').append($('#cabecalho a.icon-user'));
    $('#cabecalho .cab-nav a').addClass('cor-principal');
    
    $('.cat').click(
      function() {
          $('.menu.superior .nivel-um').toggleClass('active');
      }
    );
    
    $('#cabecalho .close-nav').click(
      function() {
          $('.menu.superior .nivel-um').toggleClass('active');
      }
    );
    
    $('.menu.superior .nivel-um .cab-nav .close-nav-full').click(
      function() {
          $('.menu.superior .nivel-um').toggleClass('active');
      }
    );
    
    $('.produto .conteiner-imagem').before($('.produto .span6> .principal .info-principal-produto'));
    $('.atalhos-mobile li.fundo-principal').addClass('cor-principal borda-principal');
    $('.atalhos-mobile li.fundo-principal a').addClass('cor-principal');
    $('#cabecalho .conteiner .logo').after($('.atalhos-mobile li.fundo-principal'));
  
    $('#cabecalho>.conteiner>.row-fluid>.span3 > .fundo-principal').before(
        `<div class="wishlist">
          <a href="../conta/favorito/listar">
              Favoritos
          </a>
        </div>
        <div class="login-top">
          <a href="../conta/index">
              Login
          </a>
        </div>`
    );
  
    $('#cabecalho>.conteiner>.row-fluid>.span6 > .fundo-principal').before(
        `<div class="wishlist">
          <a href="../conta/favorito/listar">
              Favoritos
          </a>
        </div>
        <div class="login-top">
          <a href="../conta/index">
              Login
          </a>
        </div>`
    );
  
    $('#cabecalho>.conteiner>.row-fluid>.span3 > .fundo-principal').append($('.conteudo-topo .inferior .span4.hidden-phone .carrinho>a strong'));
    
    }
      
     setTimeout(function(){
         let isLogged = ($('.btn-group .menu-user-name').text() !== "")? true : false;
        
        if(isLogged == true){
             $('.login-conta a').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child'));
              $('.login-top ul.drop-login').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child .dropdown-menu'));
             $('.login-top .login-txt').html('Olá!');
             $('.login-top ul.drop-login').replaceWith($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child .dropdown-menu'));
       
       
        }
        
        
        if(isLogged == true){
            var nomeUsuario = $('span.menu-user-name').text();
            $('.menu.superior .nivel-um').prepend('<li class="logado-sair"><a href="/conta/logout"><i class="signin-icon"></i><span>Sair</span></a></li>');
          $('.menu.superior .nivel-um').prepend('<li class="logado"><a href="/conta/index"><i class="fa-solid fa-user"></i><span>Olá, ' + nomeUsuario + '</span></a></li>');
          
          $('li.signin-menu-superior, li.signup-menu-superior').css('display','none');
          
        $('.login-txt').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child'));
        //Recorta o primeiro nome do usuário logado no menu desktop
        let usenameText = $('.login-top .btn-group .dropdown-toggle').text();
        let index = $('.login-top .btn-group .dropdown-toggle').text().indexOf(',');
        let firstname = usenameText.substring(index + 2).split(' ').slice(0, -1)[0];
        if(firstname.length > 10 ) {
           firstname = firstname.substring(0, 10) + ' ...';
        }
        document.querySelector('.login-top .btn-group .dropdown-toggle').textContent = `Olá, ${firstname}`;
        $('.login-top ul.dropdown-menu').css("left", "-67px");
        
    }
    
    },500)
    


    // Tarja responsiva

    $('.secao-banners').after(`
        <div class="tarja-responsiva">
            <div class="conteiner">
                <ul class="tarja-carrossel">
                    
                </ul>
            </div>
        </div>`);
        
      var iconeTarjaUm = "https://cdn.awsli.com.br/2089/2089002/arquivos/tarja-truck.svg" //link da imagem do ícone 
      var tituloTarjaUm = "Frete grátis R$ 199 SP " //Escreva o titulo 
      var textoTarjaUm = "e R$ 599 demais regiões " //Escreva o texto 
        
        var iconeTarjaDois = "https://cdn.awsli.com.br/2089/2089002/arquivos/tarja-cartao.svg" //link da imagem do ícone
        var tituloTarjaDois = "Parcele em até" //Escreva o titulo
        var textoTarjaDois = "4x sem juros no cartão" //Escreva o texto
        
        var iconeTarjaTres = "https://cdn.awsli.com.br/2089/2089002/arquivos/tarja-qr.svg" //link da imagem do ícone
        var tituloTarjaTres = "Ganhe 5% de desconto" //Escreva o titulo
        var textoTarjaTres = "pagando com PIX" //Escreva o texto
        
        var iconeTarjaQuatro = "https://cdn.awsli.com.br/2089/2089002/arquivos/tarja-cadeado.svg" //link da imagem do ícone
        var tituloTarjaQuatro = "Compra 100% segura" //Escreva o titulo
        var textoTarjaQuatro = "com criptografia SSL" //Escreva o texto
        
        $('.tarja-carrossel').append('<li><img src="'+ iconeTarjaUm +'"/><span><strong class="titulo-tarja">'+ tituloTarjaUm +'</strong><span class="texto-tarja">'+ textoTarjaUm +'</span></span></li>');
        $('.tarja-carrossel').append('<li><img src="'+ iconeTarjaDois +'"/><span><strong class="titulo-tarja">'+ tituloTarjaDois +'</strong><span class="texto-tarja">'+ textoTarjaDois +'</span></span></li>');
        $('.tarja-carrossel').append('<li><img src="'+ iconeTarjaTres +'"/><span><strong class="titulo-tarja">'+ tituloTarjaTres +'</strong><span class="texto-tarja">'+ textoTarjaTres +'</span></span></li>');
        $('.tarja-carrossel').append('<li><img src="'+ iconeTarjaQuatro +'"/><span><strong class="titulo-tarja">'+ tituloTarjaQuatro +'</strong><span class="texto-tarja">'+ textoTarjaQuatro +'</span></span></li>');
    
      var tam = $(window).width();
      
      if (tam <= 768 ){
    
        $('.tarja-carrossel').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          autoplay: true,
          adaptiveHeight: true
        });
        
    }
    
    $(document).ready(function(){
    
        // LISTAGEM
       $('.listagem .imagem-produto img').each(function () {
           var $img = $(this);
           var src = $img.attr('src');
           if (!src) return;
   
           var newSrc = src.replace('/300x300/', '/512x512/');
           if (newSrc !== src) {
               $img.attr('src', newSrc);
   
               var dataSrc = $img.attr('data-src');
               if (dataSrc) {
                   $img.attr('data-src', dataSrc.replace('/300x300/', '/512x512/'));
               }
           }
       });
      
      $(function () {
   
       /* =========================
        🎬 VIDEOS EDITÁVEIS (VIMEO)
     ==========================*/
       const videosShorts = [
           '1171022613',
           '1171022599',
           '1171022586',
           '1171094486',
           '1171094379',
           '1171022586'
       ];
   
       /* =========================
        🧱 MONTA HTML DINÂMICO
     ==========================*/
   
       let slides = '';
   
       videosShorts.forEach((id) => {
           slides += `
         <div class="depoimento-item">
           <div class="video-wrapper">
             <iframe
               src="https://player.vimeo.com/video/${id}?autopause=0&muted=0&title=0&byline=0&portrait=0&amp;loop=1"
               frameborder="0"
               allow="autoplay; fullscreen; picture-in-picture"
               allowfullscreen>
             </iframe>
           </div>
         </div>
       `;
       });
   
       const htmlSlider = `
       <section class="depoimentos-video">
         <div class="container">
           <h2>Use personalizado em vídeo</h2>
           <p>Conheça nossos produtos.</p>
   
           <div class="slider-depoimentos">
             ${slides}
           </div>
         </div>
       </section>
     `;
   
       /* =========================
        📍 INSERE NO DOM
     ==========================*/
   
       $('.pagina-inicial .vitrine-24188048+ul').after(htmlSlider);
   
       /* =========================
        🎯 INICIA SLICK
     ==========================*/
   
       $('.slider-depoimentos').slick({
           slidesToShow: 5,
           slidesToScroll: 1,
           arrows: true,
           dots: false,
           infinite: true,
           adaptiveHeight: false,
           draggable: true,
           responsive: [
               {
                   breakpoint: 768,
                   settings: { slidesToShow: 2 },
               },
           ],
       });
   
       /* =========================
        🧠 PAUSA VÍDEOS AO TROCAR
     ==========================*/
   
       $('.slider-depoimentos').on('beforeChange', function () {
           $('.slider-depoimentos iframe').each(function () {
               this.contentWindow.postMessage('{"method":"pause"}', '*');
           });
       });
   
   });
       
   });



function initSlickSolitarios() {

    if ($('.slick-solitarios').length && !$('.slick-solitarios').hasClass('slick-initialized')) {
  
      $('.slick-solitarios').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        draggable: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3 }
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 2 }
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 1 }
          }
        ]
      });
  
    }
  
  }
  
  $(document).ready(function(){
  
    const observer = new MutationObserver(function(){
      initSlickSolitarios();
    });
  
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  
  });

  const CONFIG = {
    titulo: "Primeira Compra",
    desconto: "10% OFF",
    cupom: "USE10"
  };

  const htmlCupom = `
    <div class="cupom-widget">
      
      <div class="cupom-botao">CUPOM</div>

      <div class="cupom-box">
        <p class="cupom-titulo">${CONFIG.titulo}</p>
        <p class="cupom-desconto">${CONFIG.desconto}</p>
        <p class="cupom-label">Cupom</p>
        <p class="cupom-codigo">${CONFIG.cupom}</p>
      </div>

    </div>
  `;

  $("body").append(htmlCupom);

  // Toggle abrir/fechar
  $(".cupom-botao").on("click", function () {
    $(".cupom-widget").toggleClass("ativo");
  });

  // GUIA DE MEDIDAS DESCRICAO

  $(document).ready(function () {

    const htmlGuia = `
    <div class="guia-medidas">
  
      <h2 class="titulo-guia">Como descobrir o tamanho</h2>
  
      <div class="grid-guia">
  
        <!-- MÉTODO 1 -->
        <div class="box-metodo">
          <div class="header-metodo">
            <h3>Medição pelo diâmetro interno</h3>
          </div>
  
          <p class="descricao">
            Utilize um anel que já sirva confortavelmente no dedo desejado.
          </p>
  
          <div class="imagem">
            <img src="https://cdn.awsli.com.br/2959/2959406/arquivos/1.png" alt="Medição pelo diâmetro">
          </div>
  
          <div class="instrucao">
            <strong>Como medir:</strong>
            <p>
              Posicione uma régua sobre o anel e meça a distância de uma borda interna até a outra.
              É importante medir apenas a parte interna, sem considerar a espessura do aro.
            </p>
            <p>
              Com essa medida em milímetros, consulte a tabela de tamanhos para encontrar a numeração mais próxima.
            </p>
          </div>
        </div>
  
        <!-- MÉTODO 2 -->
        <div class="box-metodo">
          <div class="header-metodo">
            <h3>Medição pela circunferência do dedo</h3>
          </div>
  
          <p class="descricao">
            Você pode usar uma fita métrica ou até mesmo uma tira de papel.
          </p>
  
          <div class="imagem">
            <img src="https://cdn.awsli.com.br/2959/2959406/arquivos/0.png" alt="Medição pelo dedo">
          </div>
  
          <div class="instrucao">
            <strong>Como medir:</strong>
            <p>
              Envolva a fita ou o papel ao redor do dedo onde o anel será usado. Marque o ponto onde as extremidades se encontram.
            </p>
            <p>
              Em seguida, estique o material sobre uma régua e anote o comprimento obtido. Utilize essa medida para identificar o tamanho correspondente na tabela.
            </p>
            <p>
              <strong>Dica importante:</strong> se a junta do dedo for mais larga que a base, considere essa parte na medição para garantir um encaixe confortável.
            </p>
          </div>
        </div>
  
      </div>
  
      <!-- DICA FINAL -->
      <div class="dica">
        💡 Para maior precisão, recomendamos testar os dois métodos. Se os resultados forem semelhantes, você encontrou o tamanho ideal. Em caso de dúvida, nosso atendimento pode te ajudar!
      </div>
  
    </div>
    `;
  
    $(".pagina-produto #descricao").after(htmlGuia);
  
  });

  $('#rodape .institucional .row-fluid > .span9').prepend($('.sobre-loja-rodape'));
    $('.logo').clone().prependTo($('.sobre-loja-rodape'));
    $('#rodape .institucional .row-fluid > .span9 > .row-fluid').prepend(`

    <div class="span4 contato_rodape">
        <div class="whatsrp">
            <strong>Fale conosco no WhatsApp</strong>
            <span><i class="fa fa-whatsapp"></i>(11) 91033-0406</span>
        </div>
        <div class="mailrp">
            <strong>Fale conosco no E-mail</strong>
            <span><i class="fa fa-envelope"></i>sac@usepersonalizado.com.br</span>
        </div>
        <div class="horariorp">
            <strong>Horário de atendimento</strong>
            <span><i class="fa fa-clock-o"></i>Segunda a sexta: 9 às 18h <br>
                Sábado: 10 às 12 h</span>
        </div>
        <div class="enderecorp">
            <strong>Endereço</strong>
            <span><i class="fa fa-map-marker"></i>Rua Rangel Pestana, 201, Centro, Jundiaí, São Paulo - CEP: 13201-000</span>
        </div>
    </div>

    `);

    $(document).ready(function () {
      const html = `
        <section class="secao-use-personalizado">
          <div class="container-use-personalizado">
            
            <div class="use-personalizado-texto">
              <h2>
                <span class="destaque"></span>
                Use Personalizado 💍
              </h2>
              
              <p>
                Na Use Personalizado, cada detalhe é pensado para representar o seu momento. Mais do que joias, criamos símbolos de amor, compromisso e conexão.
              </p>
    
              <p>
                Somos especializados em alianças de namoro, noivado e joias personalizadas, com opções em prata 950, ouro e modelos exclusivos que combinam estilo, qualidade e significado.
              </p>
    
              <p>
                Aqui você encontra desde peças clássicas até designs modernos e personalizados, perfeitos para marcar histórias únicas com quem você ama.
              </p>
            </div>
    
            <div class="use-personalizado-banner">
              <img src="https://cdn.awsli.com.br/2959/2959406/arquivos/image-banner-about.png" alt="Use Personalizado">
            </div>
    
          </div>
        </section>
      `;
    
      $('.pagina-inicial #barraNewsletter').before(html);
    });

    // Verifica se está na página de categoria OU na página de busca antes de executar
    if ($('.pagina-categoria').length > 0 || $('.pagina-busca').length > 0) {
    // Altera o atributo data-produtos-linha para 3
    $('#listagemProdutos').attr('data-produtos-linha', '3');
    
    // Reorganiza os produtos em grupos de 3 por linha
    var produtos = $('.listagem-item').parent('li');
    var totalProdutos = produtos.length;
    
    // Remove todas as linhas existentes
    $('.listagem-linha').remove();
    
    // Cria novas linhas com 3 produtos cada
    for (var i = 0; i < totalProdutos; i += 3) {
        var novaLinha = $('<li class="listagem-linha"></li>');
        var novoUl = $('<ul></ul>');
        
        // Adiciona até 3 produtos na linha atual
        for (var j = 0; j < 3 && (i + j) < totalProdutos; j++) {
            var produto = produtos.eq(i + j);
            produto.removeClass('span3').addClass('span4');
            novoUl.append(produto);
        }
        
        novaLinha.append(novoUl);
        $('#listagemProdutos > ul').append(novaLinha);
    }
}

$(window).on('load', function () {
  const brindes = [];

  // 1. Coleta nomes dos solitários dos bundles
  $('.tabela-carrinho tbody tr').each(function () {
    const $tr = $(this);

    const liBrinde = $tr.find('li span:contains("Anel Solitário")');

    if (liBrinde.length) {
      const nome = liBrinde.find('strong').text().trim().toLowerCase();

      if (nome) {
        brindes.push(nome);
      }
    }
  });

  // 2. Marca produtos individuais (não bundle) por correspondência parcial
  $('.tabela-carrinho tbody tr').each(function () {
    const $tr = $(this);

    const isBundle = $tr.find('li span:contains("Anel Solitário")').length > 0;
    if (isBundle) return;

    const nomeProduto = $tr.find('.produto-info a').text().trim().toLowerCase();

    brindes.forEach(function (brinde) {
      if (nomeProduto.includes(brinde) || brinde.includes(nomeProduto)) {
        $tr.addClass('produto-brinde');
      }
    });
  });
});

$(window).on('load', function () {
  $('.tabela-carrinho tbody tr').each(function () {
    const $tr = $(this);

    if ($tr.hasClass('produto-brinde')) return;

    const $excluir = $tr.find('.excluir');

    if ($excluir.length && !$excluir.children().length) {
      const produtoId = $tr.data('produto-id');

      if (produtoId) {
        const link = `/carrinho/produto/${produtoId}/remover`;

        $excluir.html(`<a href="${link}"><i class="fa fa-trash"></i></a>`);
      }
    }
  });
});

$(window).on('load', function () {
  const alvoId = 399631427;

  const $trs = $('.tabela-carrinho tbody tr');

  // conta apenas TRs que possuem data-produto-id
  const $trsComProduto = $trs.filter(function () {
    return $(this).data('produto-id');
  });

  const $produtoAlvo = $trsComProduto.filter(function () {
    return $(this).data('produto-id') == alvoId;
  });

  // se só existir 1 TR com data-produto-id e for o alvo → remove
  if ($trsComProduto.length === 1 && $produtoAlvo.length) {
    const link = `https://gabriela-fernanda.lojaintegrada.com.br/carrinho/produto/${alvoId}/remover`;
    window.location.href = link;
  }
});


  const htmlReviews = `
    <section class="reviews">
      <h2>Quem já comprou, recomenda!</h2>
      <p>Depoimentos reais de clientes sobre a Use Personalizado.</p>

      <div class="reviews-track">

        <div class="review-card">
          <img src="https://i.pravatar.cc/80?img=11">
          <div class="stars">★★★★★</div>
          <p>Produto lindo, acabamento muito bem feito e chegou rápido. Vale muito a pena.</p>
          <span>Fabio Souza</span>
        </div>

        <div class="review-card">
          <img src="https://i.pravatar.cc/80?img=12">
          <div class="stars">★★★★★</div>
          <p>As alianças vieram exatamente como pedi. Personalização perfeita.</p>
          <span>Lucas Ferreira</span>
        </div>

        <div class="review-card">
          <img src="https://i.pravatar.cc/80?img=13">
          <div class="stars">★★★★★</div>
          <p>Qualidade impecável, superou minhas expectativas em todos os detalhes.</p>
          <span>José Mendes</span>
        </div>

        <div class="review-card">
          <img src="https://i.pravatar.cc/80?img=5">
          <div class="stars">★★★★★</div>
          <p>Excelente custo-benefício. Material de qualidade e ótimo atendimento.</p>
          <span>Ana Clara Gomes</span>
        </div>

        <div class="review-card">
          <img src="https://i.pravatar.cc/80?img=15">
          <div class="stars">★★★★★</div>
          <p>Entrega rápida e produto perfeito. Recomendo sem dúvidas.</p>
          <span>Julio Alves</span>
        </div>

      </div>
    </section>
  `;

  $('.pagina-inicial #corpo').after(htmlReviews);

  // CAIXINHAS DE BRINDE

  $(window).on('load', function () {

  const produtos = [
    {
      id: 399631453,
      nome: 'Caixinha de Veludo Flor Vermelha',
      preco: 'R$ 49,00',
      img: 'https://cdn.awsli.com.br/300x300/2959/2959406/produto/399631453/caixinha-de-veludo-flor-vermelha-16b1341d-ykxj6hndq6.jpeg'
    },
    {
      id: 399631451,
      nome: 'Caixinha de Veludo Preta',
      preco: 'R$ 15,99',
      img: 'https://cdn.awsli.com.br/300x300/2959/2959406/produto/399631451/caixinha-de-veludo-preta-0426b14a-qjkedp64g4.jpeg'
    },
    {
      id: 399631450,
      nome: 'Caixinha de Veludo Vermelha',
      preco: 'R$ 15,99',
      img: 'https://cdn.awsli.com.br/300x300/2959/2959406/produto/399631450/caixinha-de-veludo-vermelha-d5824012-tpp3jffqd2.jpeg'
    }
  ];

  function renderProdutos() {
    let html = `<div class="upsell-produtos" style="margin-top:30px;">
      <h3>Combina com sua compra <span style="display: block; font-size: 14px; font-weight: 500;">Outros clientes também levaram</span></h3>
      <div class="append-upsell-produtos" style="display:flex;gap:20px;">`;

    produtos.forEach(prod => {
      const existeNoCarrinho = $(`.tabela-carrinho tr[data-produto-id="${prod.id}"]`).length > 0;

      if (!existeNoCarrinho) {
        const link = `https://gabriela-fernanda.lojaintegrada.com.br/carrinho/produto/${prod.id}/adicionar`;

        html += `
          <div class="product" style="border:1px solid #eee;padding:15px;width:200px;text-align:center;">
          	<div class="add-too-img">
            	<img src="${prod.img}" style="width:100%;height:auto;">
            </div>
            <p>${prod.nome}</p>
            <strong>${prod.preco}</strong>
            <br><br>
            <a href="${link}" style="background:#000;color:#fff;padding:8px 12px;display:inline-block;">Adicionar</a>
          </div>
        `;
      }
    });

    html += `</div></div>`;

    $('.upsell-produtos').remove();
    $('.tabela-carrinho').after(html);
    $('.append-upsell-produtos').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: false,
      adaptiveHeight: false,
      draggable: true,
      responsive: [
          {
              breakpoint: 768,
              settings: { slidesToShow: 1 },
          },
      ],
  });
  }

  renderProdutos();
});
 
});