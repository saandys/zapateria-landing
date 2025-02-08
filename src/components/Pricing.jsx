import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = [
  "Seamless integration",
  "Real-time data visualization",
  "Advanced predictive analytics",
  "Collaborative environment",
  "Responsive customer support",
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="block-subtitle">Tarifas</span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
              Calidad y precisión al mejor precio.
              </h2>
              <p className="mb-6 text-secondaryText">
              Consulta nuestras tarifas y descubre un servicio de reparación profesional con materiales de alta calidad, garantizando el mejor resultado para tu calzado.
              </p>
              
            </div>
            <div className="flex justify-center -mx-4 items-center mt-20">
              <div class="max-w-98 overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th scope="col" class="px-6 py-3">
                                  Arreglo
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Precio
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr class="bg-gray-800 border-b dark:bg-black-800 dark:border-gray-700 border-gray-200">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Tapas Aguja
                              </th>
                              <td class="px-6 py-4">
                                  4€
                              </td>
                          </tr>
                          <tr class="bg-gray-800 border-b dark:bg-black-800 dark:border-gray-700 border-gray-200">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Tapas cuadradas
                              </th>
                              <td class="px-6 py-4">
                                  mín. 4€
                              </td>
                          </tr>
                          <tr class="bg-gray-800 border-b dark:bg-black-800 dark:border-gray-700 border-gray-200">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Arreglo de bolsos
                              </th>
                              <td class="px-6 py-4">
                                mín. 6€
                              </td>
                          </tr>
                          <tr class="bg-gray-800 border-b dark:bg-black-800 dark:border-gray-700 border-gray-200">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Tintar
                              </th>
                              <td class="px-6 py-4">
                                  8€
                              </td>
                          </tr>
                          <tr class="bg-gray-800 border-b dark:bg-black-800 dark:border-gray-700 border-gray-200">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Pegar
                              </th>
                              <td class="px-6 py-4">
                                  mín. 5€
                              </td>
                          </tr>
                          <tr class="bg-gray-800 border-b dark:bg-black-800 dark:border-gray-700 border-gray-200">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Botones pantalón
                              </th>
                              <td class="px-6 py-4">
                                  2€
                              </td>
                          </tr>
                          <tr class="bg-gray-800 border-b dark:bg-black-800 dark:border-gray-700 border-gray-200">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Poner alzas
                              </th>
                              <td class="px-6 py-4">
                                  mín. 8€
                              </td>
                          </tr>
                          <tr class="bg-gray-800 border-b dark:bg-black-800 dark:border-gray-700 border-gray-200">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Horma
                              </th>
                              <td class="px-6 py-4">
                                  4€
                              </td>
                          </tr>
                          <tr class="bg-gray-800 border-b dark:bg-black-800 dark:border-gray-700 border-gray-200">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Media suelas mujer
                              </th>
                              <td class="px-6 py-4">
                                  8€
                              </td>
                          </tr>
                          <tr class="bg-gray-800 border-b dark:bg-black-800 dark:border-gray-700 border-gray-200">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Media suelas caballero
                              </th>
                              <td class="px-6 py-4">
                                  10€
                              </td>
                          </tr>
                          <tr class="bg-gray-800 dark:bg-black-800 dark:border-gray-700 border-gray-200">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Correa caballero
                              </th>
                              <td class="px-6 py-4">
                                  20€
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
