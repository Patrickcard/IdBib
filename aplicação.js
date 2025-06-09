const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let bgImage = null;
    let mainImage = null;
    let barcodeImage = null;
    let texto = '';

    let elementos = {
      texto: { x: 50, y: 50, width: 0, height: 0 },
      mainImage: { x: 500, y: 100, width: 300, height: 300 },
      barcode: { x: 60, y: 200, width: 1100, height: 1200 }
    };

    let elementoSelecionado = null;
    let offsetX, offsetY;

    document.getElementById('textInput').addEventListener('input', (e) => {
      texto = e.target.value;
      desenharTudo();
    });

    document.getElementById('bgInput').addEventListener('change', (e) => {
      carregarImagem(e.target.files[0], (img) => {
        bgImage = img;
        desenharTudo();
      });
    });

    document.getElementById('mainImgInput').addEventListener('change', (e) => {
      carregarImagem(e.target.files[0], (img) => {
        mainImage = img;
        desenharTudo();
      });
    });

    document.getElementById('pdfInput').addEventListener('change', async (e) => {
      const file = e.target.files[0];
      const fileReader = new FileReader();

      fileReader.onload = async function() {
        const typedarray = new Uint8Array(this.result);
        const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 2 });
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = viewport.width;
        tempCanvas.height = viewport.height;

        await page.render({ canvasContext: tempCtx, viewport }).promise;
        const img = new Image();
        img.src = tempCanvas.toDataURL();
        img.onload = () => {
          barcodeImage = img;
          desenharTudo();
        };
      };
      fileReader.readAsArrayBuffer(file);
    });

    function carregarImagem(file, callback) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.onload = () => callback(img);
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    function desenharTudo() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (barcodeImage) ctx.drawImage(barcodeImage, elementos.barcode.x, elementos.barcode.y, elementos.barcode.width, elementos.barcode.height);
      if (mainImage) ctx.drawImage(mainImage, elementos.mainImage.x, elementos.mainImage.y, elementos.mainImage.width, elementos.mainImage.height);
      if (bgImage) ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
      
      
      ctx.font = '30px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText(texto, elementos.texto.x, elementos.texto.y);
      const textMetrics = ctx.measureText(texto);
      elementos.texto.width = textMetrics.width;
      elementos.texto.height = 30;
    }

    canvas.addEventListener('mousedown', (e) => {
      const x = e.offsetX;
      const y = e.offsetY;

      for (let key in elementos) {
        const el = elementos[key];
        if (x >= el.x && x <= el.x + el.width && y >= el.y - el.height && y <= el.y) {
          elementoSelecionado = key;
          offsetX = x - el.x;
          offsetY = y - el.y;
          return;
        }
      }
    });

    canvas.addEventListener('mousemove', (e) => {
      if (elementoSelecionado) {
        const x = e.offsetX;
        const y = e.offsetY;
        elementos[elementoSelecionado].x = x - offsetX;
        elementos[elementoSelecionado].y = y - offsetY;
        desenharTudo();
      }
    });

    canvas.addEventListener('mouseup', () => {
      elementoSelecionado = null;
    });

    function gerarImagemFinal() {
      const link = document.getElementById('downloadLink');
      link.href = canvas.toDataURL('image/jpeg');
      link.style.display = 'inline-block';
      link.textContent = 'Baixar Imagem';
    }