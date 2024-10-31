<template>
    <div class="book-detail-container" v-if="book">
      <div class="book-image">
        <img :src="book.image" :alt="book.title" />
      </div>
      <div class="book-info">
        <h1>{{ book.title }}</h1>
        <p class="author">Autor: {{ book.author }}</p>
        <p class="price">Preço: R$ {{ book.price ? book.price.toFixed(2) : 'N/A' }}</p>
  
        <div class="ratings">
          <h2>Avaliações:</h2>
          <p>{{ book.rating }} ★</p>
          <p>{{ book.reviewCount }} avaliações</p>
        </div>
  
        <div class="button-container">
          <button @click="addToCart(book)">Adicionar ao Carrinho</button> <!-- Botão para adicionar ao carrinho -->
          <button @click="addToWishlist" class="add-to-wishlist">Adicionar à Lista de Desejos</button>
          <button @click="shareBook" class="share-button">Compartilhar</button>
        </div>
  
        <div class="user-review">
          <h2>Deixe sua avaliação:</h2>
          <textarea v-model="userReview" placeholder="Escreva sua avaliação aqui..."></textarea>
          <button @click="submitReview" class="submit-review">Enviar Avaliação</button>
        </div>
  
        <div class="comments">
          <h2>Comentários:</h2>
          <ul>
            <li v-for="comment in comments" :key="comment.id">{{ comment.text }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookDetail',
    data() {
      return {
        books: [
          {
            id: 1,
            title: 'O Alquimista',
            author: 'Paulo Coelho',
            price: 29.90,
            rating: 4.7,
            reviewCount: 124,
            image: '../images/o_alquimista.jpg', // Imagem do Alquimista
          },
          {
            id: 2,
            title: '1984',
            author: 'George Orwell',
            price: 39.90,
            rating: 4.8,
            reviewCount: 200,
            image: '../images/1984.jpg', // Imagem de 1984
          },
          {
          id: 3,
          title: 'Dom Casmurro',
          author: 'Machado de Assis',
          price: 35.00,
          rating: 4.5,
          reviewCount: 150,
          image: '../images/dom_casmurro.jpg', // Imagem de Dom Casmurro
        },

        {
          id: 4,
          title: 'A Moreninha',
          author: 'Joaquim Manuel de Macedo',
          price: 25.00,
          rating: 4.2,
          reviewCount: 80,
          image: '../images/a_moreninha.jpg', // Imagem de A Moreninha
        },

        {
          id: 5,
          title: 'O Pequeno Príncipe',
          author: 'Antoine de Saint-Exupéry',
          price: 30.00,
          rating: 4.9,
          reviewCount: 300,
          image: '../images/o_pequeno_principe.jpg', // Imagem de O Pequeno Príncipe
        },

        {
          id: 6,
          title: 'Cem Anos de Solidão',
          author: 'Gabriel García Márquez',
          price: 40.00,
          rating: 4.8,
          reviewCount: 250,
          image: '../images/cem_anos_de_solidao.jpg', // Imagem de Cem Anos de Solidão
        },

        {
          id: 7,
          title: 'A Revolução dos Bichos',
          author: 'George Orwell',
          price: 32.00,
          rating: 4.6,
          reviewCount: 180,
          image: '../images/a_revolucao_dos_bichos.jpg', // Imagem de A Revolução dos Bichos
        },

        {
          id: 8,
          title: 'O Senhor dos Anéis',
          author: 'J.R.R. Tolkien',
          price: 59.90,
          rating: 4.9,
          reviewCount: 500,
          image: '../images/o_senhor_dos_aneis.jpg', // Imagem de O Senhor dos Anéis
        },

        {
          id: 9,
          title: 'Fahrenheit 451',
          author: 'Ray Bradbury',
          price: 34.90,
          rating: 4.7,
          reviewCount: 320,
          image: '../images/fahrenheit_451.jpg', // Imagem de Fahrenheit 451
        },

        {
          id: 10,
          title: 'A Menina que Roubava Livros',
          author: 'Markus Zusak',
          price: 45.00,
          rating: 4.8,
          reviewCount: 400,
          image: '../images/a_menina_que_roubava_livros.jpg', // Imagem de A Menina que Roubava Livros
        },

        {
          id: 11,
          title: 'O Sol é para Todos',
          author: 'Harper Lee',
          price: 42.00,
          rating: 4.9,
          reviewCount: 450,
          image: '../images/o_sol_e_para_todos.jpg', // Imagem do livro "O Sol é para Todos"
        },

        {
          id: 12,
          title: 'Orgulho e Preconceito',
          author: 'Jane Austen',
          price: 35.00,
          rating: 4.8,
          reviewCount: 600,
          image: '../images/orgulho_e_preconceito.jpg', // Imagem do livro "Orgulho e Preconceito"
        },

        {
          id: 13,
          title: 'O Hobbit',
          author: 'J.R.R. Tolkien',
          price: 45.00,
          rating: 4.9,
          reviewCount: 750,
          image: '../images/o_hobbit.jpg', // Imagem do livro "O Hobbit"
        },

        {
          id: 14,
          title: 'O Conto da Aia',
          author: 'Margaret Atwood',
          price: 59.90,
          rating: 4.6,
          reviewCount: 500,
          image: '../images/o_conto_da_aia.jpg', // Imagem do livro "O Conto da Aia"
        },

        {
          id: 15,
          title: 'A Sombra do Vento',
          author: 'Carlos Ruiz Zafón',
          price: 49.90,
          rating: 4.7,
          reviewCount: 750,
          image: '../images/a_sombra_do_vento.jpg', // Imagem do livro "A Sombra do Vento"
        },

        {
          id: 16,
          title: 'Os Miseráveis',
          author: 'Victor Hugo',
          price: 59.90,
          rating: 4.9,
          reviewCount: 1250,
          image: '../images/os_miseraveis.jpg', // Imagem do livro "Os Miseráveis"
        },

        {
          id: 17,
          title: 'O Lobo da Estepe',
          author: 'Hermann Hesse',
          price: 49.90,
          rating: 4.6,
          reviewCount: 880,
          image: '../images/o_lobo_da_estepe.jpg', // Imagem do livro "O Lobo da Estepe"
        },

        {
          id: 18,
          title: 'Crime e Castigo',
          author: 'Fiódor Dostoyevsky',
          price: 59.90,
          rating: 4.8,
          reviewCount: 1500,
          image: '../images/crime_e_castigo.jpg', // Imagem do livro "Crime e Castigo"
        },

        {
          id: 19,
          title: 'A Insustentável Leveza do Ser',
          author: 'Milan Kundera',
          price: 45.90,
          rating: 4.5,
          reviewCount: 1100,
          image: '../images/a_insustentavel_leveza_do_ser.jpg', // Imagem do livro "A Insustentável Leveza do Ser"
        },

        {
          id: 20,
          title: 'O Código da Vinci',
          author: 'Dan Brown',
          price: 49.90,
          rating: 4.6,
          reviewCount: 1500,
          image: '../images/o_codigo_da_vinci.jpg', // Imagem do livro "O Código da Vinci"
        },
          
        ],
        book: null, // Inicialmente null
        userReview: '',
        comments: [],
        nextCommentId: 1,
      };
    },
    mounted() {
      const bookId = this.$route.params.id; // Obtém o ID do livro da rota
      this.book = this.books.find(b => b.id === Number(bookId)) || null; // Define o livro com base no ID, ou null se não encontrado
    },
    methods: {
      addToCart(book) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(book);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${book.title} adicionado ao carrinho!`);
      },
      addToWishlist() {
        if (this.book) {
          console.log(`${this.book.title} foi adicionado à lista de desejos!`);
          alert(`${this.book.title} foi adicionado à lista de desejos!`);
        }
      },
      shareBook() {
        if (this.book) {
          const shareUrl = `https://www.example.com/book/${this.book.id}`;
          navigator.clipboard.writeText(shareUrl)
            .then(() => {
              alert('Link do livro copiado para a área de transferência!');
            });
        }
      },
      submitReview() {
        if (this.userReview.trim() !== '') {
          this.comments.push({ id: this.nextCommentId++, text: this.userReview });
          this.userReview = '';
          alert('Avaliação enviada com sucesso!');
        } else {
          alert('Por favor, escreva uma avaliação.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .book-detail-container {
    display: flex;
    justify-content: space-around;
    padding: 30px;
    max-width: 900px;
    margin: 20px auto;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  .book-image img {
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .book-info {
    max-width: 500px;
    margin-left: 20px;
  }
  
  h1 {
    font-size: 1.8em;
    color: #333;
    margin-bottom: 10px;
  }
  
  .author {
    font-size: 1.1em;
    color: #555;
  }
  
  .price {
    font-size: 1.4em;
    color: #d9534f;
    margin: 10px 0;
  }
  
  .ratings {
    margin: 20px 0;
  }
  
  .button-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .add-to-cart,
  .add-to-wishlist,
  .share-button,
  .submit-review {
    background-color: #4285f4;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .add-to-cart:hover,
  .add-to-wishlist:hover,
  .share-button:hover,
  .submit-review:hover {
    background-color: #357ae8;
    transform: scale(1.05);
  }
  
  .user-review {
    margin-top: 20px;
  }
  
  .user-review textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    resize: none;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }
  
  .comments {
    margin-top: 20px;
  }
  
  .comments ul {
    list-style: none;
    padding: 0;
  }
  
  .comments li {
    background-color: #e9ecef;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  