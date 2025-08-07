import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in-up">
            Découvrez African Conscious Chill
          </h2>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/e56WmQ_stTc?si=C9yagUgWGQIX1xvR"
                title="African Conscious Chill - Présentation"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Plongez dans l'univers unique d'African Conscious Chill, où créativité, entrepreneuriat et culture africaine se rencontrent pour créer des synergies exceptionnelles.
          </p>

          <Button 
            className="cta-primary animate-fade-in-up" 
            style={{ animationDelay: '0.6s' }}
            onClick={() => window.open('https://wa.me/message/TLW5YHAJ74CTH1', '_blank')}
          >
            REJOIGNEZ-NOUS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;