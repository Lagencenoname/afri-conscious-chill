import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "STANDARD",
      price: "10.000F",
      features: [
        "Accès à l'événement",
        "Placement standard",
        "Accès au goûter"
      ],
      cta: "CHOISIR STANDARD",
      highlighted: false
    },
    {
      name: "PREMIUM",
      price: "15.000F",
      features: [
        "Tous les avantages du Pass Simple",
        "Placement amélioré",
        "Accès prioritaire aux activités interactives",
        "Masterclass exclusive sur le montage vidéo",
        "30% de réduction sur le prix des livres exposés"
      ],
      cta: "CHOISIR PREMIUM",
      highlighted: true,
      badge: "Recommandé"
    },
    {
      name: "VIP",
      price: "20.000F",
      features: [
        "Tous les avantages du Pass Premium",
        "-50% sur consultation visuelle & -10% sur l'achat de verres chez Siloé House Optique",
        "-5% sur la location de véhicules chez TheDriver Africa",
        "Accès à la formation \"Go Pro\" de Marion Souza",
        "Accès à l'espace réservé aux intervenants et experts",
        "Un tote bag Fleek personnalisé \"African Conscious Chill\""
      ],
      cta: "CHOISIR VIP",
      highlighted: false
    }
  ];

  return (
    <section id="billets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in-up">
              Choisissez votre Pass
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Trois formules adaptées à vos besoins pour vivre pleinement l'expérience African Conscious Chill
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`${plan.highlighted ? 'pricing-card-featured' : 'pricing-card'} animate-fade-in-up`}
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-black bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                  {plan.badge && (
                    <div className="mb-4">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold inline-flex items-center gap-1 shadow-lg">
                        <Star size={14} />
                        {plan.badge}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      </div>
                      <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${plan.highlighted ? 'cta-primary' : 'cta-secondary'} font-bold text-lg py-6`}
                  onClick={() => window.open('https://wa.me/message/TLW5YHAJ74CTH1', '_blank')}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <p className="text-muted-foreground mb-4">
              Des questions sur les formules ? Contactez-nous directement !
            </p>
            <Button 
              className="cta-primary"
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

export default PricingSection;