import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      {/* navbar section */}
      <section>
        <div className="flex justify-center py-[5rem] text-4xl">
          <h1 className="tracking-wide ">About Dish Discovery</h1>
        </div>
        <div className="flex gap-4 justify-center items-center flex-wrap max-w-[45rem] mx-auto text-[#663056]  underline decoration-[#edb654] underline-offset-4 font-medium">
          <a href="#who-we-are">
            <h3>WHO WE ARE</h3>
          </a>

          <a href="#history">
            <h3>OUR HISTORY</h3>
          </a>

          <a href="#community">
            <h3>DISH DISCOVERY COMMUNITY</h3>
          </a>

          <a href="#diversity">
            <h3>DIVERSITY & INCLUSION</h3>
          </a>

          <a href="#guidelines">
            <h3>COMMUNTIY GUIDELINES</h3>
          </a>

          <a href="#reviews">
            <h3>PRODUCT REVIEWS</h3>
          </a>

          <a href="#questions">
            <h3>FAQs</h3>
          </a>

          <a href="#contact">
            <h3>CONTACT US</h3>
          </a>

          <a href="#work">
            <h3>WORK WITH US</h3>
          </a>

          <a href="#write">
            <h3>WRITE FOR US</h3>
          </a>
        </div>
      </section>
      {/* end of navbar section */}

      <section className="max-w-[35rem] mx-auto pt-[3rem]">
        {/* who we are div */}
        <div>
          <div className="py-7 flex justify-center tracking-wide">
            <h2
              id="who-we-are"
              className="text-3xl text-[#663056] underline decoration-[#edb654] underline-offset-4 scroll-mt-[25rem]"
            >
              Who We Are
            </h2>
          </div>

          <div>
            <div className="pb-7 tracking-wide">
              <h3>
                Dish Discovery is here to help you cook delicious meals with
                less stress and more joy. We offer recipes and cooking advice
                for home cooks, by home cooks. Helping create “kitchen wins” is
                what we are all about.
              </h3>
            </div>
            <div className="pb-7">
              <h3>
                Dish Discovery was founded in 2020 by Akeh Whitney as a home
                cooking blog to record her favorite family recipes. Today, Dish
                Discovery has grown into a trusted resource for home cooks with
                more than 3,000 tested recipes, guides, and meal plans, drawing
                over 15 million readers each month from around the world. We are
                supported by a diverse group of recipe developers, food writers,
                recipe and product testers, photographers, and other creative
                professionals.
              </h3>
            </div>

            <div>
              <h3>
                Most importantly, Dish Discovery connects home cooks with their
                greatest sources of inspiration — other home cooks. We're the
                world's leading digital food brand, and that inspires us to do
                everything possible to keep our community connected.
                Sixty-million home cooks deserve no less.
              </h3>
            </div>
          </div>
        </div>
        {/* end of who we are div */}

        {/* history div */}
        <div>
          <div className="py-7 flex justify-center tracking-wide">
            <h2
              id="history"
              className="text-3xl text-[#663056] underline decoration-[#edb654] underline-offset-4 scroll-mt-[25rem]"
            >
              Our History
            </h2>
          </div>

          <div>
            <div className="pb-7 tracking-wide">
              <h3>
                Founded in 2020, Dish Discovery changed the food world by
                providing the tools to share recipes and cooking tips, while
                celebrating the expertise of home cooks online. Since then, Dish
                Discovery has become the world's largest community-driven food
                brand, providing trusted resources to more than 60 million home
                cooks each month.
              </h3>
            </div>
            <div className="pb-7">
              <h3>
                Every day, cooks from around the world publish recipes and
                inspire one another through recipe photos, ratings, reviews, and
                videos. The combination of the Dish Discovery community with our
                team of editorial and kitchen professionals provides authority
                found nowhere else on the internet and has turned the brand into
                an indispensable resource for cooks of all skill levels.
              </h3>
            </div>
            <div className="pb-7">
              <h3>
                You can connect with us and our 11M followers on social media,
                too. On TikTok, learn how you should store avocados or find out
                if air fryer coconut shrimp lives up to the hype. On Facebook,
                Pinterest, and X, browse easy weeknight meals and scour reviews
                of the world's best air fryers. Find photo-worthy dinner
                inspiration on Instagram. And on YouTube, cook along with Chef
                John, who serves up creative, new recipes weekly — alongside a
                few good laughs thanks to his well-timed puns.
              </h3>
            </div>
            <div>
              <h3>
                If you own an Amazon Alexa or Google Assistant device, you'll
                find our recipes easily discoverable via Voice search.
              </h3>
            </div>
          </div>
        </div>

        {/* end of history div */}

        {/* community div begins */}
        <div>
          <div className="py-7 flex justify-center tracking-wide">
            <h2
              id="community"
              className="text-3xl text-[#663056] underline decoration-[#edb654] underline-offset-4 scroll-mt-[25rem]"
            >
              Dish Discovery Community
            </h2>
          </div>

          <div className="tracking-wide">
            <h3>
              The heart of Dish Discover is our community of home cooks who
              share their beloved family recipes, create new recipes, and
              photograph, rate, and review each other's recipes. Each week, more
              than 15 million registered members add more than 2,000 recipe
              ratings, 800 new recipe photos, and almost 200 new recipes to the
              site. And every minute of every day, 27 people are saving recipes
              they love or want to try later.
            </h3>
          </div>
        </div>

        {/* community div ends */}

        {/* diversity div begins */}

        <div>
          <div className="py-7 flex justify-center tracking-wide">
            <h2
              id="diversity"
              className="text-3xl text-[#663056] underline decoration-[#edb654] underline-offset-4 scroll-mt-[25rem]"
            >
              Diversity & Inclusion
            </h2>
          </div>

          <div className="tracking-wide">
            <div className="pb-7">
              <h3>
                We are committed to the goal of having contributors, featured
                cooks, featured recipes, and stories reflect the diversity of
                the Dish Discovery community in our digital properties and in
                the magazine and know that we still have much work to do.
              </h3>
            </div>

            <div className="pb-7">
              <h3>
                We are working to highlight more of the stories and traditions
                of our diverse audience. In 2024, we are reviewing and editing
                content representing 20 percent of our traffic, with the goal of
                removing any bias in language and instances of cultural
                appropriation, including language around race, gender, sexual
                orientation, and glamorized colonialism.
              </h3>
            </div>

            <div>
              <h3>
                We are also focused on recruiting more diverse voices and
                diverse contributors to our staff, our freelance pool, and our
                Dish Discovery Allstars brand ambassador program. And we are
                working to ensure that our video and voice programming features
                the same diversity as our audience.
              </h3>
            </div>
          </div>
        </div>

        {/* diversity div ends */}

        {/* guidelines div begins */}

        <div>
          <div className="py-7 flex justify-center tracking-wide">
            <h2
              id="guidelines"
              className="text-3xl text-[#663056] underline decoration-[#edb654] underline-offset-4 scroll-mt-[25rem]"
            >
              Community Guidelines
            </h2>
          </div>

          <div className="tracking-wide">
            <h3>
              We moderate every review and photograph added to a recipe. When
              leaving reviews, we ask that you remember that a fellow Dish
              discovery community member has shared their recipe with you.
              Constructive feedback is always welcome, but rude, mean,
              disrespectful, or spammy comments are not welcome and will not be
              approved.
            </h3>
          </div>
        </div>

        {/* guidelines div ends */}

        {/* product reviews div begins */}

        <div>
          <div className="py-7 flex justify-center tracking-wide">
            <h2
              id="reviews"
              className="text-3xl text-[#663056] underline decoration-[#edb654] underline-offset-4 scroll-mt-[25rem]"
            >
              Product Reviews
            </h2>
          </div>

          <div className="tracking-wide">
            <h3>
              Our product reviews are independent and based on research and
              product testing. If you visit links within our content, we may
              receive commissions from your purchases, but we never receive any
              compensation or consideration for the content of our
              recommendations.
            </h3>
          </div>
        </div>

        {/* product reviews div ends */}

        {/* faq div begins */}
        <div>
          <div className="py-7 flex justify-center tracking-wide">
            <h2
              id="questions"
              className="text-3xl text-[#663056] underline decoration-[#edb654] underline-offset-4 scroll-mt-[25rem] "
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="tracking-wide">
            <h3>
              The answers to some of our most commonly asked questions, like
              "How do I print a recipe?" and "Where is my comment" can be found
              here. For all other questions please contact us at the email
              addresses below.
            </h3>
          </div>
        </div>
        {/* faq div ends */}
        {/* contact us div begins */}
        <div>
          <div className="py-7 flex justify-center tracking-wide">
            <h2
              id="contact"
              className="text-3xl text-[#663056] underline decoration-[#edb654] underline-offset-4 scroll-mt-[25rem]"
            >
              Contact Us
            </h2>
          </div>

          <div className="tracking-wide">
            <h3>
              Have something you’d like to let us know? Whether you have a
              comment on a recipe or an idea to share, we would love to hear
              from you: contact@dishdiscovery.com. For press inquiries, email us
              at contact@dishdiscovery.com. For valid work opportunities with
              our site, please see below.
            </h3>
          </div>
        </div>

        {/* contact us div ends */}

        {/* work with us div begins */}
        <div>
          <div className="py-7 flex justify-center tracking-wide">
            <h2
              id="work"
              className="text-3xl text-[#663056] underline decoration-[#edb654] underline-offset-4 scroll-mt-[25rem]"
            >
              Work With Us
            </h2>
          </div>

          <div className="tracking-wide">
            <h3>
              Join our team of top-notch editors, designers, marketers, and
              others as we continue to make a difference every day in the lives
              of Dish Dish Discovery readers.
            </h3>
          </div>
          <h3>View job openings</h3>
        </div>

        {/* work with us div ends */}

        {/* write for us div begins */}
        <div>
          <div className="py-7 flex justify-center tracking-wide">
            <h2
              id="write"
              className="text-3xl text-[#663056] underline decoration-[#edb654] underline-offset-4 scroll-mt-[25rem]"
            >
              Write For Us
            </h2>
          </div>

          <div className="tracking-wide">
            <h3>
              Allrecipes is always on the lookout for talented new writers,
              recipe developers, equipment reviewers, and photographers who love
              cooking to join our team of contributors. We're currently
              accepting pitches for recipes, news and trending articles, and
              features (especially personal essays and food histories). Please
              submit pitches or inquire about potential assignments by sharing a
              short bio and your relevant experience in our....
            </h3>
          </div>
        </div>
        {/* write for us div ends */}
      </section>
      <Footer />
    </div>
  );
};

export default About;
