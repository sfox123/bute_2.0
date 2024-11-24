"use client";

import React from "react";
import ContactForm from "@components/ContactForm";
import Link from "next/link";

function ContactPageContent() {
  return (
    <>
      {/* About Section */}
      <section>
        <div className="container mil-p-120-60">
          <div className="mil-background-grid mil-softened" />

          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="mil-mb-90">
                <h2 className="mil-upper mil-up mil-mb-30">Info Contact</h2>
                <p className="mil-up mil-mb-40">
                  We value open communication and are committed to delivering
                  exceptional service for all your construction needs.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mil-relative">
              <div className="mil-contact-sidebar">
                <img
                  src="img/photo/2.jpg"
                  alt="img"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "0 -60px",
                  }}
                  className="mil-mb-30"
                />

                <div className="mil-sidebar-info">
                  <h6 className="mil-upper mil-up mil-mb-30">Address</h6>
                  <ul className="mil-list mil-dark mil-up mil-mb-30">
                    <li>
                      77, Vancouver Road, Edgware, Middlesex, HA8 5DG , UK
                    </li>
                  </ul>
                  <h6 className="mil-upper mil-up mil-mb-30">E-mail</h6>
                  <ul className="mil-list mil-dark mil-up mil-mb-30">
                    <li>info@buteconstruction.co.uk</li>
                  </ul>
                  <h6 className="mil-upper mil-up mil-mb-30">Phone</h6>
                  <ul className="mil-list mil-dark mil-up">
                    <li>+44 7809 106913</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Map Section */}
      <div className="mil-map-frame mil-up">
        <div className="mil-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.0462035323467!2d-0.2761111231164299!3d51.60404200363842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487616add86aec77%3A0x3b86caff77ec2b97!2s77%20Vancouver%20Rd%2C%20Edgware%20HA8%205DG%2C%20UK!5e0!3m2!1sen!2slk!4v1732431427324!5m2!1sen!2slk" width="600" height="450" style={{"border":0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      {/* Map Section End */}

      {/* Contact Section */}
      <section className="mil-relative">
        <div className="container mil-p-120-30">
          <div className="mil-background-grid mil-softened" />
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="mil-mb-90">
                <h2 className="mil-upper mil-up mil-mb-30">
                  We’d love to talk
                </h2>
                <p className="mil-up mil-mb-30">
                  Have a question? Our team is here to help. Reach out to us
                  we’ll respond promptly. Let’s build something
                  extraordinary together!
                </p>
                <div className="mil-divider-lg mil-up mil-mb-30" />
              </div>
            </div>
            <div className="col-lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
}

export default ContactPageContent;
