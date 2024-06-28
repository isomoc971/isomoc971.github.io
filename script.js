$(document).ready(function() {
    // Função para enviar checklist
    $('#submitChecklist').click(function() {
      const limpeza = $('#limpeza').is(':checked');
      const nivelAgua = $('#nivelagua').is(':checked');
      const pressao = $('#pressao').is(':checked');
      const funcionamento = $('#funcionamento').is(':checked');
      const seguranca = $('#seguranca').is(':checked');
      const bomba = $('#bomba').is(':checked');
  
      if (limpeza && nivelAgua && pressao && funcionamento && seguranca && bomba) {
        alert('Checklist completo! Pode prosseguir.');
      } else {
        alert('Por favor, complete todo o checklist antes de enviar.');
      }
    });
  
    // Função para mostrar/ocultar respostas das perguntas
    $('.pergunta').click(function() {
      var $resposta = $(this).next('.resposta');
      var $imagem = $(this).find('img');
  
      $resposta.slideToggle();
      $imagem.toggleClass('rotated');
    });
  
    // Função para trocar a imagem no iframe
    $('.buttons button').click(function() {
      var image = $(this).data('image');
      var $iframe = $('#imageFrame');
  
      $iframe.attr('src', image).show();
  
      $iframe.on('load', function() {
        var iframeDoc = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
        var $img = $(iframeDoc).find('img');
        if ($img.length) {
          $img.css({
            'max-width': '100%',
            'max-height': '100%',
            'width': 'auto',
            'height': 'auto',
            'margin': 'auto',
            'position': 'absolute',
            'top': '0',
            'left': '0',
            'right': '0',
            'bottom': '0'
          });
        }
      });
    });
  });
  