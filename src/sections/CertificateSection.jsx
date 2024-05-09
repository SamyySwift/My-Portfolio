import { HoverEffect } from "../components/ui/card-hover-effect";

const CertificateGrid = () => {
  const projects = [
    {
      title: "Generative AI with LLMs",
      description:
        "The course provides foundational knowledge, practical skills, and an understanding of generative AI operations. Participants explore cutting-edge research on Gen AI and its applications in creating business value.",
      link: "https://coursera.org/share/c06a92ee0e3196772e13ed2f6c4c73f6",
      platform: "DeepLearning.AI",
    },
    {
      title: "Generative AI Fundamentals",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://www.cloudskillsboost.google/public_profiles/c318db42-49ad-4795-ada4-bbccf15b5a08/badges/4786326",
      platform: "Google Cloud",
    },
    {
      title: "GC Big Data & ML Fundamentals",
      description:
        "This course provides an introduction to Google Cloud's AI and ML offerings, covering the entire data-to-AI lifecycle. It delves into AI foundations, development, and solutions, exploring various technologies, products, and tools.",
      link: "https://www.cloudskillsboost.google/public_profiles/c318db42-49ad-4795-ada4-bbccf15b5a08/badges/4090050",
      platform: "Google Cloud",
    },
    {
      title: "Machine Learning Specialization",
      description:
        "This course covers the fundamentals of ML and AI using Google Cloud technologies. Participants will learn to build ML models using NumPy, scikit-learn, and TensorFlow, focusing on supervised and unsupervised learning techniques.",
      link: "https://coursera.org/share/ba4414530bebf042e850f50e44fc1dbf",
      platform: "DeepLearning.AI",
    },
    {
      title: "Complete NodeJs Developer",
      description:
        "This project based course introduces participants to all of the modern toolchain of a Node JS developer, to building scalable, efficient and performant backend or fullstack applications.",
      link: "https://www.udemy.com/certificate/UC-1bd4aa0f-e3a5-40bc-ad2f-6dec602b730a/",
      platform: "Udemy",
    },

    {
      title: "Neural Networks and Deep Learning",
      description:
        "This course covers how to build, train, and apply fully connected deep neural networks; implement efficient neural networks; identify key parameters in a neural network’s architecture; and apply deep learning to your own applications.",
      link: "https://coursera.org/share/1dc3f2e693fb707a98324e175f41fe24",
      platform: "DeepLearning.AI",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
};

export default CertificateGrid;
