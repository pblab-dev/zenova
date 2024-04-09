import { useEffect, useState } from "react";
import ModalAlert from "../components/ModalAlert";

function Card(props) {
  const { key, labelNetwork } = props;
  const [enabled, setEnabled] = useState(false);

  const { id, title, description, line1, line2, line3, line4, price } =
    props.store.value.products.find((e) => e.id == props.id);

  return (
    <div
      style={{ maxWidth: 300 }}
      class={`relative m-2 flex max-w-xs flex-col rounded-xl  border border-[white] bg-white p-6 text-center text-gray-900 text-white shadow-xl xl:p-8`}
    >
      {enabled && (
        <ModalAlert
          setEnabled={setEnabled}
          labelNetwork={labelNetwork}
          data={props.store.value.products.find((e) => e.id == props.id)}
        />
      )}
      <h3 class="mb-4 text-2xl font-semibold text-gray-900">{title}</h3>
      <p class="font-light text-gray-400 text-gray-900 sm:text-lg">
        {description}
      </p>
      <div class="my-8 flex items-baseline justify-center">
        {price != 1.1 && (
          <span class="mr-2 text-4xl font-extrabold text-gray-900">
            R$ {price.toFixed(2)}
          </span>
        )}
        {/* <span class="text-gray-900 text-gray-900 text-gray-400">/month</span> */}
      </div>
      {price != 1.1 && (
        <ul role="list" class="mb-8 space-y-4 text-left text-gray-900">
          <li class="flex items-center space-x-3">
            {line1.indexOf("+") > -1 ? (
              <svg
                class="h-5 w-5 flex-shrink-0 text-green-400 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                class="h-5 w-5 flex-shrink-0 text-green-400 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                id="Close"
              >
                <path
                  d="M38 12.83 35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"
                  fill="#d85b53"
                  class="color000000 svgShape"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            )}
            <span>{line1.replace("-", "").replace("+", "")}</span>
          </li>
          <li class="flex items-center space-x-3">
            {line2.indexOf("+") > -1 ? (
              <svg
                class="h-5 w-5 flex-shrink-0 text-green-400 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                class="h-5 w-5 flex-shrink-0 text-green-400 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                id="Close"
              >
                <path
                  d="M38 12.83 35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"
                  fill="#d85b53"
                  class="color000000 svgShape"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            )}
            <span>{line2.replace("-", "").replace("+", "")}</span>
          </li>
          <li class="flex items-center space-x-3">
            {line3.indexOf("+") > -1 ? (
              <svg
                class="h-5 w-5 flex-shrink-0 text-green-400 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                class="h-5 w-5 flex-shrink-0 text-green-400 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                id="Close"
              >
                <path
                  d="M38 12.83 35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"
                  fill="#d85b53"
                  class="color000000 svgShape"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            )}
            <span>{line3.replace("-", "").replace("+", "")}</span>
          </li>
          <li class="flex items-center space-x-3">
            {line4.indexOf("+") > -1 ? (
              <svg
                class="h-5 w-5 flex-shrink-0 text-green-400 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                class="h-5 w-5 flex-shrink-0 text-green-400 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                id="Close"
              >
                <path
                  d="M38 12.83 35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"
                  fill="#d85b53"
                  class="color000000 svgShape"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            )}
            <span>{line4.replace("-", "").replace("+", "")}</span>
          </li>
        </ul>
      )}
      {price != 1.1 ? (
        <div class="flex items-center justify-center">
          <button
            class="rounded bg-[_#14de00_] px-10 py-4 font-bold text-xl text-white hover:bg-[_#b003b5_]"
            onClick={() => setEnabled(true)}
          >
            COMPRAR
          </button>
        </div>
      ) : (
        <div class="flex items-center justify-center">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=554891840425&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
            class="rounded bg-[_#14de00_] px-4 py-2 font-bold text-white hover:bg-[_#b003b5_]"
          >
            Falar com Especialista
          </a>
        </div>
      )}
    </div>
  );
}

export default Card;
