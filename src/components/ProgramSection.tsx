import { MessageCircle, Mic, Wrench, Camera, Award, Music } from "lucide-react";

const ProgramSection = () => {
  const activities = [
    {
      icon: MessageCircle,
      title: "PANELS DE DISCUSSION",
      description: "Échanges enrichissants sur les enjeux actuels du digital et de la créativité en Afrique"
    },
    {
      icon: Mic,
      title: "TALK & KEYNOTE INSPIRANT",
      description: "Conférences motivantes par des experts et leaders d'opinion reconnus"
    },
    {
      icon: Wrench,
      title: "ATELIER PRATIQUE",
      description: "Sessions hands-on pour développer vos compétences et apprendre de nouvelles techniques"
    },
    {
      icon: Camera,
      title: "EXPOSITION PHOTOS",
      description: "Découverte d'œuvres visuelles exceptionnelles d'artistes africains émergents"
    },
    {
      icon: Award,
      title: "DISTINCTION",
      description: "Reconnaissance des talents et contributions remarquables à l'écosystème créatif"
    },
    {
      icon: Music,
      title: "ANIMATION DJ & AMBIANCE CLUBBING",
      description: "Moments de détente et de networking dans une atmosphère festive et conviviale"
    }
  ];

  return (
    <section id="programme" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in-up">
              Programme & Activités
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Une journée riche en échanges, apprentissages et networking pour tous les passionnés de créativité et d'entrepreneuriat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div 
                  key={activity.title}
                  className="activity-card group hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary to-orange-600 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4">{activity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;