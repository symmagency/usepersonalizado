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
            '<span class="login-txt">Acessar<strong>Minha conta</strong></span>'+
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
        '<span class="login-txt">Acessar<strong>Minha conta</strong></span>'+
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
    
    
    });