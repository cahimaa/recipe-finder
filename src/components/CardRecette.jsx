import { Link } from 'react-router-dom';

export default function CardRecette({ recette }) {
  return (
    <div className="max-w-sm bg-[#242424] border border-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <Link to={`/recette/${recette.idMeal}`}>
        <img
          className="w-full h-48 object-cover"
          src={recette.image}
          alt={recette.titre}
        />
      </Link>
      <div className="p-5 flex flex-col items-center text-white">
        <Link to={`/recette/${recette.idMeal}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center">
            {recette.titre}
          </h5>
        </Link>
        <p className="mb-4 text-gray-300 text-center">
          {recette.description}
        </p>
        <Link
          to={`/recette/${recette.idMeal}`}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#242424] bg-yellow-600 rounded-full hover:bg-yellow-500 transition-colors"
        >
          Lire plus
          <svg
            className="w-4 h-4 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
