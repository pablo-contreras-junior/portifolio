(function() {
      const overlay = document.getElementById('fullscreen-blocker');
      // Defina aqui a largura e altura mínimas aceitáveis (em pixels)
      const MIN_WIDTH  = 1350;
      const MIN_HEIGHT = 400;

      function checkWindowSize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        
       
        const tooSmall = (w < MIN_WIDTH || h < MIN_HEIGHT);
         if (w > 500){
            overlay.classList.toggle('show', tooSmall);
        }
      }

      // Checa ao carregar e a cada redimensionamento
      window.addEventListener('load',  checkWindowSize);
      window.addEventListener('resize', checkWindowSize);
    })();