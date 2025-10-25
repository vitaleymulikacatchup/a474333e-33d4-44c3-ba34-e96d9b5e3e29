"use client";

import { Award, Brush, Crown, Gem, HelpCircle, MapPin, Palette, Scroll, Star } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Kolkata Museum"
          button={{
            text: "Visit Us",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Discover Kolkata's Rich Cultural Heritage"
          description="Explore centuries of art, history, and culture at one of India's most prestigious museums. From ancient artifacts to contemporary exhibitions."
          tag="Cultural Heritage"
          imageSrc="https://images.pexels.com/photos/2846216/pexels-photo-2846216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Kolkata Museum heritage building"
          imagePosition="right"
          buttons={[
            {
              text: "Plan Your Visit",
              href: "contact"
            },
            {
              text: "Explore Collections",
              href: "feature"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Museum Collections & Exhibits"
          description="Discover our diverse collection spanning thousands of years of history, art, and culture"
          tag="Exhibitions"
          tagIcon={Palette}
          features={[
            {
              title: "Ancient Artifacts",
              description: "Explore rare archaeological finds from the Indus Valley civilization and ancient Bengal",
              icon: Gem
            },
            {
              title: "Art Gallery",
              description: "Admire masterpieces by renowned Bengali artists and contemporary exhibitions",
              icon: Brush
            },
            {
              title: "Historical Manuscripts",
              description: "View rare manuscripts, old maps, and historical documents dating back centuries",
              icon: Scroll
            },
            {
              title: "Cultural Exhibits",
              description: "Experience the rich traditions, festivals, and cultural heritage of Bengal",
              icon: Crown
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Visitors Say"
          description="Hear from people who have experienced our museum"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Dr. Priya Sharma",
              role: "Art Historian",
              testimonial: "An incredible collection that beautifully preserves Bengal's rich cultural heritage. Every visit reveals something new and fascinating.",
              imageSrc: "https://images.pexels.com/photos/2350303/pexels-photo-2350303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Dr. Priya Sharma"
            },
            {
              id: "2",
              name: "Rajesh Kumar",
              role: "History Enthusiast",
              testimonial: "The ancient artifacts section is absolutely mesmerizing. The museum does an excellent job of presenting history in an engaging way.",
              imageSrc: "https://images.pexels.com/photos/30236422/pexels-photo-30236422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rajesh Kumar"
            },
            {
              id: "3",
              name: "Sarah Johnson",
              role: "International Tourist",
              testimonial: "A must-visit destination in Kolkata! The staff is knowledgeable and the exhibits are world-class. Highly recommended.",
              imageSrc: "https://images.pexels.com/photos/4067754/pexels-photo-4067754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "4",
              name: "The Gupta Family",
              role: "Museum Visitors",
              testimonial: "Perfect for a family outing. The kids loved the interactive displays and we all learned so much about our cultural heritage.",
              imageSrc: "https://images.pexels.com/photos/26898334/pexels-photo-26898334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "The Gupta Family"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Recognized & Supported By"
          description="Proudly affiliated with leading cultural and heritage organizations"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/15483696/pexels-photo-15483696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1181538/pexels-photo-1181538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4428293/pexels-photo-4428293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4428292/pexels-photo-4428292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/15483696/pexels-photo-15483696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2559025/pexels-photo-2559025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4428293/pexels-photo-4428293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about visiting our museum"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What are the museum opening hours?",
              content: "We are open Tuesday to Sunday from 10:00 AM to 5:00 PM. Closed on Mondays and public holidays."
            },
            {
              id: "2",
              title: "How much is the entry fee?",
              content: "Entry fee is ₹20 for adults, ₹10 for students with valid ID, and free for children under 5 years."
            },
            {
              id: "3",
              title: "Are guided tours available?",
              content: "Yes, we offer guided tours in Bengali, Hindi, and English. Tours are available at 11 AM, 1 PM, and 3 PM daily."
            },
            {
              id: "4",
              title: "Can I take photographs inside?",
              content: "Photography is allowed in most areas for personal use. Flash photography and tripods are not permitted. Some special exhibits may have restrictions."
            },
            {
              id: "5",
              title: "Is the museum accessible for wheelchairs?",
              content: "Yes, our museum is fully accessible with ramps, elevators, and wheelchair-accessible restrooms available."
            },
            {
              id: "6",
              title: "Do you have a gift shop?",
              content: "Yes, we have a museum shop with books, replicas of artifacts, postcards, and other cultural items."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          tagIcon={MapPin}
          title="Plan Your Museum Visit"
          description="Stay updated with our latest exhibitions, events, and special programs. Subscribe to our newsletter for exclusive access."
          imageSrc="https://images.pexels.com/photos/34365824/pexels-photo-34365824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Museum entrance hall"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates about exhibitions and events. You can unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Kolkata Museum"
          columns={[
            {
              items: [
                {
                  label: "Collections",
                  href: "feature"
                },
                {
                  label: "Exhibitions",
                  href: "feature"
                },
                {
                  label: "Visitor Info",
                  href: "faq"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Support Us",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}