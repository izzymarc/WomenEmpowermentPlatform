import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Programs() {
  const programs = [
    {
      title: "GBV Prevention & Support",
      image: "https://images.unsplash.com/photo-1593526613712-7b4b9a707330",
      description: "Comprehensive programs to prevent and respond to gender-based violence, including counseling services and safe spaces.",
      activities: [
        "24/7 Support Hotline",
        "Counseling Services",
        "Legal Aid Support",
        "Safe House Network"
      ]
    },
    {
      title: "Economic Empowerment",
      image: "https://images.unsplash.com/photo-1664382953518-4a664ab8a8c9",
      description: "Initiatives focused on providing women with the skills and resources needed for financial independence.",
      activities: [
        "Business Skills Training",
        "Vocational Programs",
        "Microfinance Support",
        "Entrepreneurship Mentoring"
      ]
    },
    {
      title: "Education & Awareness",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca",
      description: "Educational programs aimed at raising awareness about women's rights and gender equality.",
      activities: [
        "Community Workshops",
        "School Outreach",
        "Digital Literacy",
        "Leadership Training"
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Programs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Through our diverse range of programs, we work to create lasting positive
            change in the lives of women and their communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    {program.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        <span className="text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Impact Metrics */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Program Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Women Supported" },
              { number: "100+", label: "Communities Reached" },
              { number: "1000+", label: "Training Sessions" },
              { number: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-primary/5 rounded-lg"
              >
                <h3 className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
