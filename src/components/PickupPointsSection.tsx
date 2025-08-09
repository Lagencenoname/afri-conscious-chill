import { MapPin, Phone, User } from "lucide-react";

const PickupPointsSection = () => {
  const pickupPoints = [
    {
      id: 1,
      contact: "OGBO Aziz",
      location: "EIGB Cotonou",
      phone: "+229 01 96 016 786",
      person: "Avril Ola"
    },
    {
      id: 2,
      contact: "Mendel GBEKOU",
      location: "Tankpè zone Calavi centre",
      phone: "+229 01 56 978 932",
      person: "Mendel GBEKOU"
    },
    {
      id: 3,
      contact: "GOUTON Fifamè Morelle",
      location: "Porto Novo",
      phone: "+229 01 45 583 428",
      person: "Fifamè Gouton"
    },
    {
      id: 4,
      contact: "Siège Siloe house Optique",
      location: "Campus Abomey-Calavi",
      phone: "+229 01 60 395 720",
      person: ""
    },
    {
      id: 5,
      contact: "Siège HILS COMPANY",
      location: "GODOMEY TOGOUDO",
      phone: "+229 01 68 525 972",
      person: ""
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in-up">
              Points de Retrait Officiels des Pass
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Récupérez votre pass African Conscious Chill dans l'un de nos points de retrait officiels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pickupPoints.map((point, index) => (
              <div 
                key={point.id}
                className="partner-card animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-orange-600 rounded-full">
                    <span className="text-white font-bold">{point.id}</span>
                  </div>
                  <h3 className="font-bold text-foreground">{point.contact}</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} className="text-primary" />
                    <span className="text-sm">{point.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone size={16} className="text-primary" />
                    <span className="text-sm font-mono">{point.phone}</span>
                  </div>
                  
                  {point.person && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User size={16} className="text-primary" />
                      <span className="text-sm">{point.person}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <p className="text-muted-foreground mb-4">
              Vous pouvez aussi commander votre pass en ligne et le récupérer sur place le jour J
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupPointsSection;
