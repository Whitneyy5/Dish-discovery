import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import jrice from "../assets/jrice.jpg";

const JollofRice = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <section className="flex gap-4 justify-center relative items-center bg-[#663056] flex-wrap max-w-[50rem] mx-auto ">
        <div>
          <div className="flex justify-center">
            <img
              src={jrice}
              className="h-[20rem] w-full object-cover "
              alt=""
            />
          </div>
          <div className=" text-4xl tracking-wide items-center justify-center flex font-semibold pt-[5%] text-white">
            <h1>Nigerian Jollof Rice</h1>
          </div>

          <div className=" border border-white w-[40rem] mt-[3rem] "></div>
          <div className="flex gap-3  items-center justify-center mt-[1rem]">
            <IoIosStar className="decoration-[#edb654] text-[#edb654] size-7" />
            <IoIosStar className="decoration-[#edb654] text-[#edb654] size-7" />
            <IoIosStar className="decoration-[#edb654] text-[#edb654] size-7" />
            <IoIosStar className="decoration-[#edb654] text-[#edb654] size-7" />
            <IoIosStarHalf className="decoration-[#edb654] text-[#edb654] size-7" />
          </div>
          <div className="pt-4">
            <h4 className=" italic font-thin text-xs text-white items-center flex justify-center ">
              4.6 from 1887 reviews
            </h4>
          </div>
          <div className="flex justify-center text-white py-5 gap-4">
            <h2>TOTAL TIME: 45 minutes</h2>
            <h2> YIELD: 6 SERVINGS </h2>
          </div>
          <div className=" bg-[white] mx-auto   justify-evenly ">
            <div className="items-center  flex justify-center">
              <button className=" justify-center flex text-[#663056]">
                <h3>PIN RECIPE</h3>
              </button>
            </div>
            <div className=" pt-4 w-[35rem]">
              <h2>
                These are THE BEST soft chocolate chip cookies! No chilling
                required. Just ultra thick, soft, classic chocolate chip
                cookies!
              </h2>
            </div>
            <div className=" border border-[gray] w-[40rem] mt-[3rem] mb-5 mr-5 "></div>
            <h1 className="pl-12 mt-11 font-bold text-lg">INGREDIENTS</h1>

            <h1 className="pl-12 mt-11 font-semibold text-xl">Chicken</h1>

            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 peer"
                    // onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 peer-checked:line-through`}>
                    2 pounds chicken drumsticks
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 peer"
                    // onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 peer-checked:line-through`}>
                    ½ large onion, diced
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className=" group flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="peer form-checkbox h-5 w-5 text-gray-600"
                    // onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 peer-checked:line-through`}>
                    1 (2 inch) piece fresh ginger root, peeled and thinly sliced
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="peer form-checkbox h-5 w-5 text-gray-600 peer"
                    // onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 peer-checked:line-through`}>
                    2 cubes chicken bouillon, crushed
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className=" peer flex form-checkbox h-5 w-5 text-gray-600"
                    // onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 peer-checked:line-through`}>
                    2 cloves garlic, diced
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className=" peer form-checkbox h-5 w-5 text-gray-600"
                    // onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 peer-checked:line-through`}>
                    1 tablespoon curry powder, or more to taste
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="peer form-checkbox h-5 w-5 text-gray-600"
                    // onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 peer-checked:line-through`}>
                    1 teaspoon herbes de Provence
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className=" peer form-checkbox h-5 w-5 text-gray-600"
                    // onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 peer-checked:line-through`}>
                    1 pinch cayenne pepper
                  </span>
                </div>
              </span>
            </div>
            <h1 className="pl-12 mt-11 font-semibold text-xl">Rice</h1>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 flex peer"
                    // onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 peer-checked:line-through`}>
                    3 tablespoons vegetable oil
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 peer"
                    // onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 peer-checked:line-through`}>
                    ½ large onion, diced
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 flex peer"
                    // onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 peer-checked:line-through`}>
                    1 (14 ounce) can tomato sauce
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 peer"
                    // onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 peer-checked:line-through`}>
                    1 (14 ounce) can coconut milk
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 peer"
                    // onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 peer-checked:line-through`}>
                    1 teaspoon herbes de Provence
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 peer"
                    // onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 peer-checked:line-through`}>
                    1 teaspoon salt, or to taste
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                    ½ teaspoon ground black pepper, or to taste
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                    3 cups parboiled rice (such as Uncle Ben's®)
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                    1 (10 ounce) package frozen mixed vegetables (carrots, corn,
                    peas)
                  </span>
                </div>
              </span>
            </div>
            <h1 className=" pl-12 mt-11 font-semibold text-xl">Plantains:</h1>
            <div className="flex items-center pt-[3%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                    4 ripe plantains, peeled and cut diagonally into 1/2-inch
                    slices
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center pt-[3%] pb-[4%]">
              <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                <div className="flex items-center pt-[3%]">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    onChange={handleCheckboxChange}
                  />
                  <span className={`ml-2 ${isChecked ? "line-through" : ""}`}>
                    ½ cup canola oil for frying
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default JollofRice;
