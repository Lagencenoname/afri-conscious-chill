import { ExternalLink, Facebook, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const PartnersSection = () => {
  const mainPartners = [
    {
      name: "Le Pavillon du Lac",
      category: "Hôte de l'événement",
      description: "Salle de fête et de conférences, jardin et espace de jeun disponibles pour tout type d'événement",
      social: "https://www.facebook.com/lepavillondulacbenin",
      featured: true
    },
    {
      name: "Darimage",
      category: "Photographie",
      description: "Studio de photographie spécialisé en noir et blanc",
      social: "https://www.facebook.com/Darimage"
    },
    {
      name: "African Delight",
      category: "Agroalimentaire",
      description: "Spécialiste en produits agroalimentaires",
      social: "https://www.facebook.com/lydiedsm.rich"
    },
    {
      name: "Art Survie Lab",
      category: "Industrie Creative",
      description: "Industrie Creative et Culturelle",
      social: "https://www.facebook.com/artsurvielabofficiel"
    },
    {
      name: "TheDriver Africa",
      category: "Transport",
      description: "Location de véhicules et gestion de flotte automobile",
      social: "https://www.facebook.com/thedriverafrica"
    },
    {
      name: "Siloé House Optique",
      category: "Optique",
      description: "Consultation visuel et vente de lunettes",
      social: "https://www.facebook.com/keursiloeoptique"
    }
  ];

  const detailedPartners = [
    {
      name: "Creative Minds Africa - CMA",
      description: "Agence de communication - Accompagner les marques et les entrepreneurs dans la construction d'une présence forte et durable sur les réseaux sociaux, en Afrique et au-delà",
      role: "Communication stratégique - Mise en place de la plateforme",
      website: "https://kloo.me/cma-empire",
      social: "https://www.facebook.com/cma.empire"
    },
    {
      name: "L'Introverti",
      description: "Graphiste designer et Créateur de contenus vidéo spécialisé dans le corporate et l'événementiel",
      role: "Création de contenus vidéo",
      social: "http://www.facebook.com/anthelme.tohoun"
    },
    {
      name: "Naya Produits",
      description: "Production et commercialisation de farines naturelles pour bouillie riches en nutriments",
      role: "Proposer des goûter et des farines",
      website: "https://kloo.me/Naya-Produits"
    },
    {
      name: "Le CM du Coin",
      description: "Accompagnement des entreprises dans l'optimisation de leur communication",
      role: "Apport stratégique sur les volets marketing & communication",
      website: "https://mendcontact.netlify.app/",
      social: "https://kloo.me/mon-facebook"
    },
    {
      name: "BSM Groupe",
      description: "Agence de communication et de marketing digital 360°",
      role: "Communication sur l'événement, intervention keynote",
      social: "https://www.facebook.com/bsmgroupe/"
    },
    {
      name: "VIKING PROTECTEUR SÉCURITÉ",
      description: "Société de Sécurité Privé nous sommes spécialisés dans la Protection Rapproché Gardiennage Protection de Témoin Chauffeur de Sécurité Sécurité Événementiel...",
      role: "Chargée de Sécurité de l'événement",
      website: "mailto:vikingprotecteu@gmail.com"
    },
    {
      name: "Hounto 🍄",
      description: "Mets faits à base du champignon comestible 🍄 et jus de fruits natures et cocktails",
      role: "Exposante",
      social: "https://www.facebook.com/share/1EVV5ngPQs/"
    },
    {
      name: "E-DÉCOR SERVICES",
      description: "Spécialisés dans la Décoration évènementielle et Mise en place. Travaille pour la beauté des espaces et lieux de fête. Formation et accompagnement des aspirants décorateurs.",
      role: "Mettre les lieux en couleurs",
      social: "https://www.facebook.com/eurin.trakpaou.5"
    },
    {
      name: "Mp Brioche",
      description: "Entreprise béninoise engagée dans la promotion du bien-être, de l'environnement et du goût à travers une gamme de produits boulangers et pâtissiers écoresponsables, faits maison et inspirés du terroir béninois.",
      role: "Expérience gustative authentique, dégustations, promotion d'une consommation responsable",
      social: "https://www.facebook.com/share/1Ae7rBU7FR/?mibextid=wwXIfr"
    }
  ];

  const allPartners = [
    "3A Groupe", "MG Concept", "Rodhstyle", "YÊ", "Fkeek", "Djandjou Digital",
    "Brandcom", "Around Africa", "Nyona", "Voxhub Studio", "Wilson Show",
    "Club des CMs", "Réseau Pub", "Life Surprise", "La Primeur Communication",
    "MCZEN Production", "Nike Impact", "AV Visuel", "Vimag Trading Center",
    "Travelers", "Zachic", "Yellow Team", "Lyly Délice",
    "The Go Pro", "Concilia", "Satik", "Carina Juice et Cocktail", "BB Express"
  ];

  return (
    <section id="partenaires" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in-up">
              Nos Partenaires
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Ensemble, nous construisons un écosystème créatif et entrepreneurial fort en Afrique
            </p>
          </div>

          {/* Main Partners */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
             Ils nous assistent
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPartners.map((partner, index) => (
                <div 
                  key={partner.name}
                  className={`${partner.featured ? 'partner-card border-2 border-primary' : 'partner-card'} animate-fade-in-up hover-scale transform transition-all duration-500`}
                  style={{ 
                    animationDelay: `${0.6 + index * 0.1}s`,
                    transform: `translateY(${Math.sin(index * 0.5) * 10}px)` 
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-foreground">{partner.name}</h4>
                    {partner.featured && (
                      <span className="bg-gradient-to-r from-primary to-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                        HÔTE
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-primary font-medium mb-2">{partner.category}</p>
                  <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                  {partner.social && (
                    <a 
                      href={partner.social} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-orange-600 transition-colors text-sm"
                    >
                      <Facebook size={16} />
                      Voir la page
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Partners */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 animate-fade-in-up">
              Eux aussi 
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {detailedPartners.map((partner, index) => (
                <div 
                  key={partner.name}
                  className="bg-gray-50 rounded-lg p-6 animate-fade-in-up hover-scale transform transition-all duration-500 hover:shadow-lg"
                  style={{ 
                    animationDelay: `${index * 0.15}s`,
                    transform: `translateY(${Math.cos(index * 0.3) * 8}px)` 
                  }}
                >
                  <h4 className="font-bold text-foreground mb-2">{partner.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{partner.description}</p>
                  <p className="text-sm font-medium text-primary mb-4">Rôle: {partner.role}</p>
                  <div className="flex gap-4">
                    {partner.website && (
                      <a 
                        href={partner.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-orange-600 transition-colors text-sm"
                      >
                        <Globe size={16} />
                        Site web
                      </a>
                    )}
                    {partner.social && (
                      <a 
                        href={partner.social} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-orange-600 transition-colors text-sm"
                      >
                        <Facebook size={16} />
                        Facebook
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Partners Grid */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 animate-fade-in-up">
              Sans oublier
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {allPartners.map((partner, index) => (
                <div 
                  key={partner}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-all duration-300 animate-fade-in-up hover-scale transform"
                  style={{ 
                    animationDelay: `${index * 0.03}s`,
                    transform: `translateY(${Math.sin(index * 0.2) * 5}px)` 
                  }}
                >
                  <span className="text-sm font-medium text-muted-foreground">{partner}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Contact Button */}
          <div className="text-center mt-16 animate-fade-in-up">
            <p className="text-muted-foreground mb-4">
              Une question sur nos partenaires ? Contactez-nous !
            </p>
            <Button 
              className="cta-primary hover-scale"
              onClick={() => window.open('https://wa.me/message/TLW5YHAJ74CTH1', '_blank')}
            >
              Contacter via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
