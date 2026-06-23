import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Users, Camera, CheckCircle2 } from "lucide-react";
import accLogo from "@/assets/logo-africanconsciouschill.png";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Footer from "@/components/Footer";
import {
  SALUBRITE_DATE_LABEL,
  WHATSAPP_GROUP_PUBLIC,
  WHATSAPP_GROUP_MEDIA,
  WHATSAPP_BOOKING_URL,
} from "@/lib/constants";

interface FormData {
  fullName: string;
  city: string;
  heardAbout: string;
}

const Salubrite = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({ fullName: "", city: "", heardAbout: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.city.trim()) return;
    // Persistance locale simple (le backend pourra être branché ultérieurement)
    try {
      const all = JSON.parse(localStorage.getItem("acc-salubrite") || "[]");
      all.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem("acc-salubrite", JSON.stringify(all));
    } catch {
      /* no-op */
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-night flex flex-col">
      {/* En-tête simple */}
      <header className="container py-5">
        <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <ArrowLeft size={18} /> Retour à l'accueil
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <img src={accLogo} alt="African Conscious Chill" className="h-14 w-auto mx-auto mb-5" />
            <span className="eyebrow !text-[hsl(var(--gold))] justify-center">Action citoyenne · {SALUBRITE_DATE_LABEL}</span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
              {submitted ? "Inscription confirmée 🎉" : "Campagne de Salubrité"}
            </h1>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-3xl p-7 sm:p-8 shadow-[var(--shadow-floating)] space-y-5">
              <p className="text-muted-foreground text-sm">
                Remplissez ce formulaire pour participer à la campagne de salubrité de l'African
                Conscious Chill.
              </p>

              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1.5">
                  Nom et prénom <span className="text-[hsl(var(--red-accent))]">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full rounded-xl border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="Ex. Aïcha Doe"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-foreground mb-1.5">
                  Ville <span className="text-[hsl(var(--red-accent))]">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full rounded-xl border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="Ex. Cotonou"
                />
              </div>

              <div>
                <label htmlFor="heardAbout" className="block text-sm font-medium text-foreground mb-1.5">
                  Avez-vous entendu parler de l'ACC ? Si oui, comment ?
                </label>
                <textarea
                  id="heardAbout"
                  rows={3}
                  value={form.heardAbout}
                  onChange={(e) => setForm({ ...form, heardAbout: e.target.value })}
                  className="w-full rounded-xl border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none"
                  placeholder="Réseaux sociaux, un ami, une édition précédente..."
                />
              </div>

              <button type="submit" className="cta-primary w-full">
                Valider mon inscription <ArrowRight size={18} />
              </button>
            </form>
          ) : (
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-3xl p-7 sm:p-8 shadow-[var(--shadow-floating)]">
              <div className="flex items-center gap-3 mb-5 text-[hsl(var(--orange-primary))]">
                <CheckCircle2 size={28} />
                <p className="text-foreground font-medium">
                  Merci {form.fullName.split(" ")[0]} ! Rejoignez maintenant nos canaux WhatsApp.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={WHATSAPP_GROUP_PUBLIC}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full rounded-xl border border-border p-4 hover:border-[#25D366] hover:bg-[#25D366]/5 transition group"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#25D366]/10 text-[#25D366]">
                    <Users size={20} />
                  </span>
                  <span className="flex-1 text-left">
                    <span className="block font-semibold text-foreground">Groupe public des participants</span>
                    <span className="block text-sm text-muted-foreground">Toute la communauté ACC</span>
                  </span>
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                </a>

                <a
                  href={WHATSAPP_GROUP_MEDIA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full rounded-xl border border-border p-4 hover:border-[#25D366] hover:bg-[#25D366]/5 transition"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#25D366]/10 text-[#25D366]">
                    <Camera size={20} />
                  </span>
                  <span className="flex-1 text-left">
                    <span className="block font-semibold text-foreground">Groupe Média</span>
                    <span className="block text-sm text-muted-foreground">Photographes, vidéastes, créateurs de contenus</span>
                  </span>
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                </a>

                <a
                  href={WHATSAPP_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full rounded-xl border border-border p-4 hover:border-[#25D366] hover:bg-[#25D366]/5 transition"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#25D366]/10 text-[#25D366]">
                    <WhatsAppIcon className="w-5 h-5" />
                  </span>
                  <span className="flex-1 text-left">
                    <span className="block font-semibold text-foreground">Contact Booking / Partenariat</span>
                    <span className="block text-sm text-muted-foreground">Échange privé direct</span>
                  </span>
                  <ArrowRight size={18} className="text-muted-foreground" />
                </a>
              </div>

              <Link to="/" className="block text-center text-sm text-muted-foreground hover:text-foreground transition mt-6">
                Retour à l'accueil
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Salubrite;
