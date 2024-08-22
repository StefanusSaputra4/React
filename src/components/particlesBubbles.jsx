import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponentBubbles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    particles: {
      number: {
        value: 100, // Coba kurangi jumlah partikel
      },
      size: {
        value: 5, // Sesuaikan ukuran agar lebih terlihat
      },
      move: {
        enable: true,
        speed: 3, // Tambah kecepatan untuk memastikan mereka bergerak
      },
    },
  };

  return <Particles id="particles" options={options} />;
};

export default ParticlesComponentBubbles;
