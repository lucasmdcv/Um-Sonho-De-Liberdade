import React, { useState } from 'react';
import './App.css';

// Componente de Post do Blog
const BlogPost = ({ title, date, content, image, author }) => (
  <article className="blog-post">
    <div className="post-header">
      <h2>{title}</h2>
      <div className="post-meta">
        <span className="date">{date}</span>
        <span className="author">Por {author}</span>
      </div>
    </div>
    {image && <div className="post-image">{image}</div>}
    <div className="post-content">
      {content}
    </div>
  </article>
);

// Componente de Navegação
const Navigation = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'home', label: 'Início', icon: '🏠' },
    { id: 'about', label: 'Sobre o Filme', icon: '🎬' },
    { id: 'characters', label: 'Personagens', icon: '👥' },
    { id: 'themes', label: 'Temas', icon: '💭' },
    { id: 'quotes', label: 'Citações', icon: '💬' },
    { id: 'reviews', label: 'Resenhas', icon: '⭐' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h1>🎭 Sonho de Liberdade</h1>
        <p>Blog sobre o clássico do cinema</p>
      </div>
      <ul className="nav-menu">
        {sections.map(section => (
          <li key={section.id}>
            <button
              className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="nav-icon">{section.icon}</span>
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Componente principal
function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="home-section">
            <div className="hero">
              <h1>🎬 Sonho de Liberdade</h1>
              <h2>The Shawshank Redemption</h2>
              <p className="hero-subtitle">
                Um dos maiores clássicos do cinema, dirigido por Frank Darabont e baseado na novela de Stephen King
              </p>
              <div className="movie-info">
                <div className="info-item">
                  <strong>Ano:</strong> 1994
                </div>
                <div className="info-item">
                  <strong>Diretor:</strong> Frank Darabont
                </div>
                <div className="info-item">
                  <strong>Elenco:</strong> Tim Robbins, Morgan Freeman
                </div>
                <div className="info-item">
                  <strong>Gênero:</strong> Drama
                </div>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="about-section">
            <BlogPost
              title="Sobre o Filme"
              date="20 de Setembro de 2025"
              author="Blog Sonho de Liberdade"
              content={
                <div>
                  <p>
                    <strong>Sonho de Liberdade</strong> (The Shawshank Redemption) é um filme americano de 1994, 
                    dirigido por Frank Darabont e baseado na novela "Rita Hayworth and Shawshank Redemption" 
                    de Stephen King.
                  </p>
                  <p>
                    O filme conta a história de Andy Dufresne (Tim Robbins), um banqueiro que é condenado à 
                    prisão perpétua por assassinar sua esposa e o amante dela, mesmo alegando inocência. 
                    Na prisão, ele faz amizade com Ellis "Red" Redding (Morgan Freeman), um contrabandista 
                    que se torna seu melhor amigo.
                  </p>
                  <p>
                    Apesar de ter sido um fracasso comercial inicial, o filme se tornou um dos mais 
                    aclamados da história do cinema, frequentemente aparecendo no topo de listas dos 
                    melhores filmes de todos os tempos.
                  </p>
                  <h3>🎯 Curiosidades:</h3>
                  <ul>
                    <li>O filme foi indicado a 7 Oscars, mas não ganhou nenhum</li>
                    <li>Foi eleito o melhor filme de todos os tempos pelo IMDb</li>
                    <li>A prisão Shawshank é baseada na Ohio State Reformatory</li>
                    <li>O filme custou apenas $25 milhões para ser produzido</li>
                  </ul>
                </div>
              }
            />
          </div>
        );

      case 'characters':
        return (
          <div className="characters-section">
            <h2>👥 Personagens Principais</h2>
            <div className="characters-grid">
              <div className="character-card">
                <div className="character-image">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format&q=80" 
                    alt="Andy Dufresne - Personagem do filme Sonho de Liberdade"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="image-placeholder" style={{display: 'none'}}>
                    <span className="placeholder-icon">🎭</span>
                    <p>Andy Dufresne</p>
                  </div>
                </div>
                <h3>Andy Dufresne</h3>
                <p><strong>Ator:</strong> Tim Robbins</p>
                <p>Um banqueiro inocente condenado à prisão perpétua. Sua inteligência e determinação o ajudam a sobreviver e eventualmente escapar da prisão.</p>
              </div>
              <div className="character-card">
                <div className="character-image">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&auto=format&q=80" 
                    alt="Ellis Red Redding - Personagem do filme Sonho de Liberdade"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="image-placeholder" style={{display: 'none'}}>
                    <span className="placeholder-icon">🎭</span>
                    <p>Ellis Red Redding</p>
                  </div>
                </div>
                <h3>Ellis "Red" Redding</h3>
                <p><strong>Ator:</strong> Morgan Freeman</p>
                <p>O narrador da história e melhor amigo de Andy. É o "homem que consegue as coisas" na prisão e se torna o confidente de Andy.</p>
              </div>
              <div className="character-card">
                <div className="character-image">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face&auto=format&q=80" 
                    alt="Warden Norton - Personagem do filme Sonho de Liberdade"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="image-placeholder" style={{display: 'none'}}>
                    <span className="placeholder-icon">🎭</span>
                    <p>Warden Norton</p>
                  </div>
                </div>
                <h3>Warden Norton</h3>
                <p><strong>Ator:</strong> Bob Gunton</p>
                <p>O diretor corrupto da prisão Shawshank que usa os prisioneiros para lavagem de dinheiro e outros crimes.</p>
              </div>
              <div className="character-card">
                <div className="character-image">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face&auto=format&q=80" 
                    alt="Captain Hadley - Personagem do filme Sonho de Liberdade"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="image-placeholder" style={{display: 'none'}}>
                    <span className="placeholder-icon">🎭</span>
                    <p>Captain Hadley</p>
                  </div>
                </div>
                <h3>Captain Hadley</h3>
                <p><strong>Ator:</strong> Clancy Brown</p>
                <p>O guarda-chefe brutal da prisão que eventualmente se torna cúmplice dos esquemas de Andy.</p>
              </div>
            </div>
          </div>
        );

      case 'themes':
        return (
          <div className="themes-section">
            <BlogPost
              title="Temas Centrais"
              date="20 de Setembro de 2025"
              author="Blog Sonho de Liberdade"
              content={
                <div>
                  <h3>🔗 Amizade e Lealdade</h3>
                  <p>
                    A amizade entre Andy e Red é o coração do filme. Mostra como conexões humanas 
                    genuínas podem florescer mesmo nas circunstâncias mais difíceis.
                  </p>
                  
                  <h3>💪 Esperança e Perseverança</h3>
                  <p>
                    "A esperança é uma coisa boa, talvez a melhor das coisas, e as coisas boas 
                    nunca morrem." Esta frase resume um dos temas centrais do filme.
                  </p>
                  
                  <h3>🏛️ Corrupção do Sistema</h3>
                  <p>
                    O filme critica a corrupção no sistema prisional e judicial, mostrando como 
                    a justiça pode falhar e como o poder pode corromper.
                  </p>
                  
                  <h3>🔄 Redenção e Transformação</h3>
                  <p>
                    Ambos os personagens principais passam por transformações profundas, 
                    encontrando redenção através de suas ações e escolhas.
                  </p>
                  
                  <h3>⏰ Tempo e Paciência</h3>
                  <p>
                    O filme explora como o tempo pode ser tanto um aliado quanto um inimigo, 
                    e como a paciência pode ser a chave para a liberdade.
                  </p>
                </div>
              }
            />
          </div>
        );

      case 'quotes':
        return (
          <div className="quotes-section">
            <h2>💬 Citações Memoráveis</h2>
            <div className="quotes-grid">
              <div className="quote-card">
                <blockquote>
                  "A esperança é uma coisa boa, talvez a melhor das coisas, e as coisas boas nunca morrem."
                </blockquote>
                <cite>- Andy Dufresne</cite>
              </div>
              <div className="quote-card">
                <blockquote>
                  "Algumas coisas são melhores deixadas não ditas. Eu gostaria de poder dizer que Andy lutou contra a boa luta, e que os senhores podem descansar. Mas a prisão não é um lugar para acreditar em contos de fadas."
                </blockquote>
                <cite>- Red</cite>
              </div>
              <div className="quote-card">
                <blockquote>
                  "Primeiro você os odeia, depois você se acostuma. Depois de muito tempo, você depende deles. Isso é ser institucionalizado."
                </blockquote>
                <cite>- Red</cite>
              </div>
              <div className="quote-card">
                <blockquote>
                  "Ou você se ocupa de viver, ou se ocupa de morrer."
                </blockquote>
                <cite>- Andy Dufresne</cite>
              </div>
              <div className="quote-card">
                <blockquote>
                  "A música que eles tocaram foi uma dupla de Mozart. O nome era 'As Bodas de Fígaro'. E eu me lembro de pensar como seria maravilhoso se eu pudesse dizer às senhoras como era isso. Mas não posso. Não posso descrever isso. Preciso que vocês a escutem."
                </blockquote>
                <cite>- Red</cite>
              </div>
              <div className="quote-card">
                <blockquote>
                  "Salvação está dentro."
                </blockquote>
                <cite>- Andy Dufresne</cite>
              </div>
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="reviews-section">
            <BlogPost
              title="Resenhas e Críticas"
              date="20 de Setembro de 2025"
              author="Blog Sonho de Liberdade"
              content={
                <div>
                  <h3>⭐ Avaliações</h3>
                  <div className="ratings">
                    <div className="rating-item">
                      <strong>IMDb:</strong> 9.3/10 (1º lugar na lista dos melhores filmes)
                    </div>
                    <div className="rating-item">
                      <strong>Rotten Tomatoes:</strong> 91% de aprovação
                    </div>
                    <div className="rating-item">
                      <strong>Metacritic:</strong> 80/100
                    </div>
                  </div>
                  
                  <h3>📝 Críticas</h3>
                  <div className="review">
                    <h4>Roger Ebert - Chicago Sun-Times</h4>
                    <p>
                      "The Shawshank Redemption é um filme sobre esperança, amizade e redenção. 
                      É uma obra-prima que melhora a cada visualização."
                    </p>
                  </div>
                  
                  <div className="review">
                    <h4>Variety</h4>
                    <p>
                      "Um drama prisional comovente que combina elementos de thriller psicológico 
                      com uma história de amizade duradoura."
                    </p>
                  </div>
                  
                  <div className="review">
                    <h4>The New York Times</h4>
                    <p>
                      "Frank Darabont transforma a novela de Stephen King em um filme poderoso 
                      sobre a capacidade humana de resistir e sobreviver."
                    </p>
                  </div>
                  
                  <h3>🏆 Prêmios e Indicações</h3>
                  <ul>
                    <li>7 indicações ao Oscar (1995)</li>
                    <li>2 indicações ao Globo de Ouro</li>
                    <li>3 indicações ao BAFTA</li>
                    <li>Incluído no National Film Registry (2015)</li>
                  </ul>
                </div>
              }
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderContent()}
      </main>
      <footer className="footer">
        <p>© 2025 Blog Sonho de Liberdade - Feito com ❤️ usando React</p>
        <p>Baseado no filme "The Shawshank Redemption" (1994)</p>
      </footer>
    </div>
  );
}

export default App;
