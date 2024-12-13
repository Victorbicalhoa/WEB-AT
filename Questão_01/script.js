const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2024,
    
    mostrarDetalhes: function() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    },
    
    ligar: function() {
      console.log("O carro está ligado!");
    }
  };

  carro.mostrarDetalhes();

  carro.ligar();
  