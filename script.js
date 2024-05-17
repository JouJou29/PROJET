document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;

    const content = {
        fr: {
            title: 'Les Chiens',
            paragraphs: [
                "Les chiens, ces merveilleux compagnons à quatre pattes, ont depuis des millénaires partagé nos vies, nos foyers et nos cœurs. Le lien qui nous unit à ces animaux exceptionnels est unique en son genre, mêlant fidélité, amour inconditionnel et complicité.",
                "D'une grande diversité de races, de tailles, de couleurs et de caractères, les chiens sont présents dans toutes les cultures à travers le monde. Du petit Chihuahua au grand Dogue Allemand, en passant par le loyal Berger Allemand ou le joueur Labrador Retriever, chacun apporte sa propre personnalité, mais tous partagent une qualité commune : leur dévotion envers l'homme.",
                "Au sein de nos familles, les chiens occupent une place à part entière. Compagnons de jeu pour les enfants, partenaires de promenades pour les adultes, et souvent réconfort pour les moments difficiles, ils sont là à chaque étape de notre vie. Leur présence réconfortante et leur capacité à lire nos émotions font d'eux des confidents silencieux, toujours prêts à nous écouter.",
                "Mais les chiens sont bien plus que de simples animaux de compagnie. Leur intelligence et leur capacité à apprendre en font des partenaires de travail indispensables dans de nombreux domaines. Qu'il s'agisse de chiens de recherche et de sauvetage, de chiens guides d'aveugles, de chiens de police ou encore de chiens de thérapie, leur dévouement et leur sens du devoir sont exemplaires.",
                "Au-delà de leur utilité pratique, les chiens nous enseignent également des leçons précieuses sur la vie. Leur capacité à vivre pleinement le moment présent, leur courage et leur détermination sont autant de qualités que nous pouvons admirer et essayer d'imiter.",
                "Enfin, prendre soin de nos amis à quatre pattes, c'est aussi œuvrer pour le bien-être animal. Comme le disait Gandhi, \"La grandeur d'une nation et ses progrès moraux peuvent être jugés par la manière dont ses animaux sont traités.\" En prenant soin de nos compagnons canins, nous nous élevons nous-mêmes et nous contribuons à bâtir un monde meilleur pour tous les êtres vivants.",
                "En somme, les chiens sont bien plus que de simples animaux de compagnie, ce sont des membres à part entière de nos familles, des partenaires de travail indispensables et des sources inépuisables d'amour et d'inspiration."
            ],
            paragraphs2: [
                "Les chiens, nos compagnons de vie :",
                "Des travailleurs dévoués :",
                "Une source d'inspiration :",
                "La protection des animaux :"
            ]
        },
        en: {
            title: 'Dogs',
            paragraphs: [
                "Dogs, those wonderful four-legged companions, have shared our lives, our homes, and our hearts for millennia. The bond that unites us with these exceptional animals is unique, blending loyalty, unconditional love, and companionship.",
                "With a great diversity of breeds, sizes, colors, and temperaments, dogs are present in all cultures around the world. From the tiny Chihuahua to the large Great Dane, passing by the loyal German Shepherd or the playful Labrador Retriever, each brings its own personality, but all share a common quality: their devotion to humans.",
                "Within our families, dogs hold a special place. Playmates for children, walking partners for adults, and often a source of comfort during difficult times, they are there at every stage of our lives. Their comforting presence and ability to read our emotions make them silent confidants, always ready to listen.",
                "But dogs are much more than just pets. Their intelligence and ability to learn make them indispensable work partners in many fields. Whether they are search and rescue dogs, guide dogs for the blind, police dogs, or therapy dogs, their dedication and sense of duty are exemplary.",
                "Beyond their practical utility, dogs also teach us valuable lessons about life. Their ability to fully live in the present moment, their courage, and their determination are qualities that we can admire and try to emulate.",
                "Finally, taking care of our four-legged friends also means working for animal welfare. As Gandhi said, \"The greatness of a nation and its moral progress can be judged by the way its animals are treated.\" By taking care of our canine companions, we elevate ourselves and contribute to building a better world for all living beings.",
                "In sum, dogs are much more than just pets; they are full-fledged members of our families, indispensable work partners, and inexhaustible sources of love and inspiration."
            ],
            paragraphs2: [
                "Dogs, Our Life Companions:",
                "Dedicated Workers:",
                "A Source of Inspiration:",
                "Animal Protection:"
            ]
        }
    };

    document.querySelector('h1').innerText = content[selectedLanguage].title;
    const paragraphs = document.querySelectorAll('#content p');
    paragraphs.forEach((p, index) => {
        p.innerText = content[selectedLanguage].paragraphs[index];
    });
    const paragraphs2 = document.querySelectorAll('#content h2');
    paragraphs2.forEach((p, index) => {
        p.innerText = content[selectedLanguage].paragraphs2[index];
    });
});
