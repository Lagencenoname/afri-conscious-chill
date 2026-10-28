import { useEffect, useRef, useState } from "react";
import { ArrowRight, Info, Upload, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import BusinessListingCard from "./BusinessListingCard";

const MAX_DESCRIPTION = 220;
const MAX_OFFER = 140;

type Props = {
  /** Action du bouton « Participer à ACC Business » (défilement vers les tarifs). */
  onParticipate: () => void;
};

/**
 * Simulateur de fiche : tout reste dans le navigateur.
 * Le visuel est lu en local (URL `blob:`), rien n'est envoyé ni enregistré.
 */
const BusinessSimulator = ({ onParticipate }: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [offer, setOffer] = useState("");
  const [visualUrl, setVisualUrl] = useState<string>();
  const [fileError, setFileError] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);

  // Libère l'URL locale de l'ancien visuel.
  useEffect(() => () => {
    if (visualUrl) URL.revokeObjectURL(visualUrl);
  }, [visualUrl]);

  const onFile = (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setFileError("Choisissez une image (JPG, PNG ou WebP).");
      return;
    }
    setFileError("");
    setVisualUrl(URL.createObjectURL(file));
  };

  const clearVisual = () => {
    setVisualUrl(undefined);
    if (fileInput.current) fileInput.current.value = "";
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Champs */}
      <form className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 sm:p-7 space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="sim-name">Nom de l'entreprise</Label>
          <Input
            id="sim-name"
            value={name}
            maxLength={60}
            onChange={(e) => setName(e.target.value)}
            placeholder="Le nom affiché sur votre fiche"
            className="h-12 text-base"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sim-description">Description courte de votre activité</Label>
          <Textarea
            id="sim-description"
            value={description}
            maxLength={MAX_DESCRIPTION}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ce que vous faites, pour qui, où vous trouver…"
            rows={3}
            className="text-base resize-none"
          />
          <p className="text-xs text-muted-foreground text-right">
            {description.length}/{MAX_DESCRIPTION}
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sim-offer">Offre ou produit à mettre en avant</Label>
          <Textarea
            id="sim-offer"
            value={offer}
            maxLength={MAX_OFFER}
            onChange={(e) => setOffer(e.target.value)}
            placeholder="Ex. : une promotion, un nouveau produit, un service phare…"
            rows={2}
            className="text-base resize-none"
          />
          <p className="text-xs text-muted-foreground text-right">
            {offer.length}/{MAX_OFFER}
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sim-visual">Visuel publicitaire</Label>
          <input
            ref={fileInput}
            id="sim-visual"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => onFile(e.target.files?.[0])}
          />
          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor="sim-visual" className="inline-flex items-center gap-2 h-12 px-5 rounded-xl border border-[hsl(var(--border))] font-semibold cursor-pointer whitespace-nowrap transition-colors hover:border-foreground/40 focus-within:ring-2 focus-within:ring-ring">
              <Upload size={18} /> {visualUrl ? "Changer d'image" : "Importer une image"}
            </label>
            {visualUrl && (
              <button
                type="button"
                onClick={clearVisual}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                <X size={16} /> Retirer
              </button>
            )}
          </div>
          {fileError ? (
            <p className="text-sm text-destructive">{fileError}</p>
          ) : (
            <p className="text-xs text-muted-foreground">
              L'image reste sur votre téléphone : elle n'est envoyée nulle part.
            </p>
          )}
        </div>
      </form>

      {/* Aperçu */}
      <div className="lg:sticky lg:top-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3 text-center lg:text-left">
          Aperçu de votre fiche
        </p>
        <div className="max-w-sm mx-auto lg:mx-0" aria-live="polite">
          <BusinessListingCard preview listing={{ name, description, offer, visualUrl }} />
        </div>
        <p className="flex gap-2 text-sm text-muted-foreground mt-4 max-w-sm mx-auto lg:mx-0">
          <Info size={18} className="flex-shrink-0 mt-0.5 text-[hsl(var(--primary-ink))]" />
          Ceci est une simulation. Votre fiche définitive sera préparée à partir des informations
          transmises après paiement.
        </p>
        <div className="max-w-sm mx-auto lg:mx-0 mt-6">
          <button type="button" onClick={onParticipate} className="cta-solid w-full">
            Participer à ACC Business <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSimulator;
