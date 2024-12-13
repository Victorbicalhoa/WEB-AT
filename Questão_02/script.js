function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  
    this.mostrarDetalhes = function() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    };

    this.ligar = function() {
      console.log("Carro ligado!");
    };
  }
  
  const carro1 = new Carro('Toyota', 'Corolla', 2024);
  const carro2 = new Carro('Honda', 'Civic', 2024);
  const carro3 = new Carro('Ford', 'Fiesta', 2024);
  
  carro1.mostrarDetalhes();
  carro2.mostrarDetalhes();
  carro3.mostrarDetalhes();
  
  carro1.ligar();
  carro2.ligar();
  carro3.ligar();
  