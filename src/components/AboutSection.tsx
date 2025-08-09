import { Palette, Rocket, Network } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Palette,
      title: "CRÉATEURS",
      description: "Artistes, designers, créateurs de contenu unis dans l'innovation créative"
    },
    {
      icon: Rocket,
      title: "ENTREPRENEURS",
      description: "Visionnaires et bâtisseurs qui transforment les idées en réalité"
    },
    {
      icon: Network,
      title: "MARQUES",
      description: "Entreprises engagées dans la valorisation de la créativité africaine"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in-up">
              Un Mouvement, Une Vision, Une Communauté
            </h2>
            
              {/* Event Poster */}
            <div className="flex justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <img 
                src="/lovable-uploads/0ee46383-762a-4901-af5b-b47d984780ff.png" 
                alt="African Conscious Chill - Affiche événement 31 août 2025" 
                className="max-w-full h-auto rounded-lg shadow-2xl max-w-2xl"
              />
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                African Conscious Chill, loin d'être un simple événement, est un <strong>mouvement</strong>, une <strong>vision</strong>, une <strong>communauté</strong> de créateurs, d'entrepreneurs et de marques qui croient au pouvoir de la collaboration.
              </p>
              
              <p className="text-lg text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Le 31 août, on se donne rendez-vous pour échanger sur les enjeux du digital et construire ensemble de véritables ponts entre les entreprises et les créateurs visuels.
              </p>
            </div>
            
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.title}
                  className="activity-card text-center animate-fade-in-up"
                  style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-orange-600 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
