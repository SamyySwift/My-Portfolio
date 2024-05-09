import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "KaggleX Mentee",
    description: `
    Engaged in Kaggle competitions to enhance practical problem-solving skills in data science.
    Attended machine learning workshops facilitated by industry experts to stay abreast of cutting-edge developments.
    Successfully conceptualized and implemented a plant disease detection system showcased as a final project.`,
    company: "Kaggle",
    location: "California",
    startDate: "08/2023",
    endDate: "11/2023",
  },
  {
    title: "Machine Learning Engineer Intern",
    description: `
    Developed a custom object detection model using TensorFlow, YOLOv5, and OpenCV to automatically identify and redact sensitive information, such as signatures, names, email addresses, and phone numbers, with a 92% accuracy rate.
    Deployed machine learning models on Kubernetes clusters using Docker containers, achieving improved performance and scalability through efficient resource allocation.`,
    company: "Zimmerman B.V",
    location: "Amsterdam",
    startDate: "09/2022",
    endDate: "01/2023",
  },
  {
    title: "Junior Data Scientist",
    description: `
    Implemented version control and unit testing, resulting in a 40% reduction in bugs and an increase in production code quality by 30% for machine learning projects.
    Utilized advanced querying, visualization, and analytical tools to process complex datasets with up to 1 million rows, reducing data processing time by 50%.`,
    company: "Zummit Africa",
    location: "Lagos",
    startDate: "12/2021",
    endDate: "07/2022",
  },
  {
    title: "Data Science Intern",
    description: `
    Utilized NumPy, Pandas, Matplotlib, and Python to wrangle and analyze large data sets.
    Built a hotel recommender system that recommends hotels to users based on reviews with an accuracy of 95%.`,
    company: "Hamoye AI Labs",
    location: "Lagos",
    startDate: "02/2020",
    endDate: "07/2020",
  },
];
export function Experience() {
  return (
    <>
      <h1 className="text-center pt-10 text-white text-4xl md:text-6xl font-raleway">
        EXPERIENCE
      </h1>
      <div className="p-10 max-w-6xl mx-auto" name="experience">
        <StickyScroll content={content} />
      </div>
    </>
  );
}
