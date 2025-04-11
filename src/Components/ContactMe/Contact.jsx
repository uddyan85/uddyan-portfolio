import React from "react";
import logo from '../../assets/Images/us.svg'
import Reveal from "../Footer/Reveal";
import Swal from 'sweetalert2'



const Contact = () => {

  // Web3Forms:
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "547be37c-1e05-48f7-ae9d-b37373feeb67");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      Swal.fire({
        title: "Success!",
        text: `✔️ Message has been sent successfully. Thank you!`,
        width: 400,
        padding: "2em",
        color: "#9810fa",
        imageUrl: `${logo}`,
        imageWidth: 100,
        imageHeight: 80,
        imageAlt: "logo",
      });
    }
  }
// Web3Forms End:

  return (
    <>
      <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>

        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-10  mx-auto">
              I am a Frontend Developer and an enthusiastic learner in Data Structures & Algorithms (DSA) and Software Development, pursuing a degree in Computer Science Engineering at Shri Shankaracharya Technical Campus, Bhilai.
              <br />
              <br />
              With a strong passion for web development, I possess a diverse skill set that includes JavaScript, Java, React, Angular, Express.js, and Node.js. I am deeply motivated to build impactful, user-focused applications and to solve real-world problems through technology, innovation, and efficient coding practices.
              <br />
              <br />
              Open to networking, collaborations, and opportunities in tech, and beyond. Let’s connect and build something incredible together!
              </p>
            </div>

            <div className="flex mt-10 items-center gap-9">

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  2<span>+</span>
                  <p className="text-xs md:text-base">
                    {" "}
                    <span>Projects</span>{" "}
                  </p>
                </h3>
              </div>


              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  1<span>+</span>
                  <p className="text-xs md:text-base">
                    {" "}
                    <span>years of Experience</span>{" "}
                  </p>
                </h3>
              </div>


            </div>
          </div>
          <form 
           onSubmit={onSubmit}
          className="max-w-6xl p-5 md:p-12"
          >
            <p className="text-7xl font-semibold text-white">
              Let's <span>Connect!</span> 
            </p>

              <input type="text" id="name" placeholder=">> Enter Your Name <<" name="name" required
              className="mb-2 w-full rounded-md border text-gray-50 border-purple-600 py-2 pl-2 pr-4" />

 
              <input type="email" id="email" placeholder=">> Enter Email Id <<" name="email" required
              className="mb-2 w-full rounded-md border text-gray-50 border-purple-600 py-2 pl-2 pr-4" />


              <textarea type="textarea" id="textarea" placeholder=" Your Message . . ." name="message"  cols="30" rows="4" required
              className="mb-2 w-full rounded-md border text-white border-purple-600 py-2 pl-2 pr-4" />

           <button 
           type="submit"
           className="w-full py-3 rounded-md text-white font-semibold text-xl bg-primary-color cursor-pointer hover:bg-purple-400 transition duration-300"
           >
            Send Message
           </button>

          </form>
        </div>
        </Reveal>
      </div>
    </>
  );
};

export default Contact;
