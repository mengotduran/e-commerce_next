import Link from "next/link";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "../home/home.module.scss";
import ElasticCarousel from "../../../Elatic/elastic";
import Partners from "../../../Elatic/partners";

export const HomePage = ({ data }) => (
  <div className="home_body">
    <>
      <section>
        <div>
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div class="carousel-inner">
              <div
                class="carousel-item active"
                style={{ position: "relative" }}
              >
                <img
                  src="images/img 5.jpg"
                  // class="d-block w-100"
                  className={styles.carousel_img}
                  alt="..."
                  style={{
                    height: "500px",
                    objectFit: "cover",
                    objectPosition: "15% 10%",
                  }}
                />
                <div class="carousel-caption">
                  <div className={styles.carousel_text}>
                    <p>
                      EXPERIENCE THE ONE, HOLISTIC MEDICINE DIFFERENT AND
                      EFFECTIVE THERAPEUTIC APPROACH FOR GLOBAL HEALTH: BODY,
                      SOUL AND SPIRIT
                    </p>
                    <div className={styles.btn_div}>
                      <button>Book an Appointment</button>
                      <button>Visit Our Shop</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" style={{ position: "relative" }}>
                <img
                  src="images/img 3.jpg"
                  // class="d-block w-100"
                  className={styles.carousel_img}
                  alt="..."
                  style={{
                    height: "500px",
                    objectFit: "cover",
                    objectPosition: "15% 10%",
                  }}
                />
                <div class="carousel-caption normal" id="normal">
                  <div className={styles.carousel_text}>
                    <div className={styles.quote_div}>
                      <FaQuoteLeft className={styles.carousel_quote} />
                      <p>
                        EXPERIENCE THE ONE, <span>HOLISTIC MEDICINE</span>{" "}
                        DIFFERENT AND
                        <span> EFFECTIVE THERAPEUTIC</span> APPROACH FOR GLOBAL
                        HEALTH: BODY, SOUL AND SPIRIT
                      </p>
                    </div>
                    <div className={styles.btn_div}>
                      <button>Book an Appointment</button>
                      <button>Visit Our Shop</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section className={styles.general}>
        <div className={styles.philosophy}>
          <div className={styles.philImg}>
            <Image
              src="/images/img 11.jpg"
              width={600}
              height={400}
              alt="philosophy"
              className={styles.philosophy_image}
            />
          </div>
          <div className={styles.philosophy_text}>
            <div className={styles.general_text}>
              <h2>philosophy</h2>
              <div className={styles.general_div}></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Vitae auctor ut malesuada
              aenean odio neque ullamcorper. Tellus tincidunt elementum nisl
              aliquet odio felis cursus sed arcu. Orci diam id ipsum donec
              fermentum a auctor maecenas. Volutpat eu nulla enim volutpat enim
              bibendum pellentesque tellus faucibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Vitae auctor ut malesuada
              aenean odio neque ullamcorper. Tellus tincidunt elementum nisl
              aliquet odio felis cursus sed arcu. Orci diam id ipsum donec
              fermentum a auctor maecenas. Volutpat eu nulla enim volutpat enim
              bibendum pellentesque tellus faucibus.
            </p>
            <button>Button</button>
          </div>
        </div>
      </section>

      <section className={styles.general}>
        <div className={styles.therapy}>
          <div className={styles.general_text}>
            <h2>Our Innovative Therapies</h2>
            <div className={styles.general_div}></div>
          </div>
          <div className={styles.therapy_cart}>
            {data?.map((ev) => (
              // { id, description, url } = ev,
              <div className={styles.TC}>
                <Image
                  src={ev.url}
                  width={350}
                  height={250}
                  className={styles.therapy_img}
                  key={ev.id}
                />
                <div className={styles.therapy_text}>
                  <p key={ev.id}>{ev.description}</p>
                  <button key={ev.id}>Button</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.general}>
        <div className={styles.charge}>
          <div className={styles.general_text}>
            <h2>Our Innovative Therapies</h2>
            <div className={styles.general_div}></div>
          </div>
          <div className={styles.charge_text}>
            <div className={styles.charge_texts}>
              <ul>
                <li>STROKE AND ITS COMPLICATIONS</li>
                <li>ALZHEIMER AND ITS COMPLICATIONS</li>
                <li>PARKINSON IN THIRD-AGE PEOPLE</li>
                <li>ACUTE OR CHRONIC SCIATICA</li>
                <li>CHRONIC CERVICALGIAò</li>
                <li>CHRONIC LOW BACK PAIN</li>
                <li>CHRONIC GONATHROSIS</li>
                <li>VARIOUS HEART DISEASES</li>
                <li>HERNIATED DISC</li>
              </ul>
            </div>
            <div className={styles.charge_texts}>
              <ul className={styles.ul}>
                <li>CHRONIC MIGRAINES</li>
                <li>CHRONIC HEADACHES</li>
                <li>RHEUMATIC ARTHRITISò</li>
                <li>DEPRESSIONS</li>
                <li>FACIAL PARALYSIS</li>
                <li>CHRONIC CONSTIPATION</li>
                <li>PROSTATE HYPERTROPHY</li>
                <li>MALE AND FEMALE STERILITY</li>
                <li>CHRONIC INSOMNIA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.arrivals}>
          <div className={styles.arrivals_text}>
            <h2>new arrivals</h2>
            <h3 className={styles.arrivals_discount}>
              <span>50%</span>
              <span>Discount</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Scelerisque volutpat nibh
              lorem commodo sit. Mattis condimentum ipsum ut non. Donec in
              pretium magna commodo vulputate posuere. Imperdiet arcu dictum
              proin risus quis libero nascetur ullamcorper. Gravida magna nunc
              eu sed enim dolor.
            </p>
            <button>voir plus</button>
          </div>
          <div className={styles.arrivals_img}>
            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <Image
                    src="/images/img 13.jpg"
                    className={styles.arrival_img}
                    width={700}
                    height={500}
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <Image
                    src="/images/img 5.jpg"
                    width={700}
                    height={500}
                    className={styles.arrival_img}
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <Image
                    src="/images/img 14.jpg"
                    width={700}
                    height={500}
                    className={styles.arrival_img}
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.general}>
        <div className={styles.terminology}>
          <div className={styles.general_text}>
            <h2>TÉMOIGNAGES</h2>
            <div className={styles.general_div}></div>
          </div>
          <div>
            <ElasticCarousel />
          </div>
        </div>
      </section>

      <section>
        <Partners />
      </section>

      <section>
        <div
          className={styles.display_section}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('images/img 2.jpg')",
            height: "300px",
            objectFit: "cover",
            objectPosition: "15% 50%",
          }}
        >
          <div className={styles.display_text}>
            <div>
              <h2>22</h2>
              <p>CIH Medical Center</p>
            </div>
            <div>
              <h2>30</h2>
              <p>Jason Bourne</p>
            </div>
            <div>
              <h2>20</h2>
              <p>John Doe</p>
            </div>
          </div>
        </div>
      </section>
    </>
  </div>
);
