import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export default function MentorshipPrograms() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Mentorship Programs</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Career Development</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="leadership">
            <AccordionTrigger>Leadership Training</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">6-month program covering:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Strategic decision making</li>
                <li>Team management techniques</li>
                <li>Public speaking workshops</li>
              </ul>
              <Button className="mt-4">Apply Now</Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-medium mb-2">Coding Bootcamp</h3>
            <p className="text-muted-foreground mb-4">
              12-week intensive program in web development
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-medium mb-2">Data Science</h3>
            <p className="text-muted-foreground mb-4">
              Machine learning fundamentals with Python
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-background rounded-lg shadow-sm border">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/images/founder-portrait.jpg" 
                alt="Amina" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <blockquote className="italic text-lg">
                  "The mentorship program helped me transition into tech leadership"
                </blockquote>
                <p className="mt-2 font-medium">Amina Danjuma, Software Engineer</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-background rounded-lg shadow-sm border">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/images/founder.jpg" 
                alt="Zainab" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <blockquote className="italic text-lg">
                  "The technical training gave me confidence to lead major projects"
                </blockquote>
                <p className="mt-2 font-medium">Zainab Adebayo, Senior Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Program Instructors</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <img
              src="https://picsum.photos/id/237/300/300"
              alt="Leadership Instructor - Fatima Nwosu"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-medium">Fatima Nwosu</h3>
            <p className="text-muted-foreground">CTO at TechForward</p>
          </div>
          <div className="text-center">
            <img
              src="https://picsum.photos/id/1027/300/300"
              alt="Technical Instructor - Chidinma Okoro"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-medium">Chidinma Okoro</h3>
            <p className="text-muted-foreground">Lead Data Scientist</p>
          </div>
          <div className="text-center">
            <img
              src="https://picsum.photos/id/490/300/300"
              alt="Career Coach - Ngozi Eze"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-medium">Ngozi Eze</h3>
            <p className="text-muted-foreground">Career Development Expert</p>
          </div>
        </div>
      </section>
    </div>
  )
}
