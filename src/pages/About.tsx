import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-4xl font-bold text-center mb-12">About Our Founder</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/images/founder.jpg"
                  alt="Amina E. Danjuma"
                  className="rounded-lg shadow-xl w-full object-cover hover:scale-[1.02] transition-transform duration-300"
                />
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Amina E. Danjuma</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Amina E. Danjuma is a distinguished advocate for women's rights and empowerment,
                    with over 15 years of dedicated experience in social development and community transformation
                    across Nigeria and beyond.
                  </p>
                  <p>
                    Her vision for the Amina Danjuma Foundation emerged from a deep-rooted commitment
                    to addressing gender-based violence and creating sustainable opportunities for women
                    to thrive in their communities.
                  </p>
                  <p>
                    Through innovative programs and strategic partnerships, she continues to lead initiatives
                    that have positively impacted thousands of women's lives, focusing on education,
                    economic empowerment, and social justice.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-8 rounded-lg hover:bg-primary/10 transition-colors duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower women through education, support, and advocacy, while
                working to eliminate gender-based violence in our communities.
                We strive to create lasting change through sustainable programs
                and partnerships that uplift women and strengthen societies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-8 rounded-lg hover:bg-primary/10 transition-colors duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where every woman has the opportunity to reach her full potential
                in a safe and supportive environment. We envision communities where
                gender equality is the norm, and women are empowered to lead and inspire
                future generations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Empowerment",
                description: "We believe in enabling women to take control of their lives and futures through education, resources, and support."
              },
              {
                title: "Integrity",
                description: "We maintain the highest standards of transparency, accountability, and ethical conduct in all our actions and partnerships."
              },
              {
                title: "Community",
                description: "We foster strong relationships and sustainable support networks within communities to create lasting positive change."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}