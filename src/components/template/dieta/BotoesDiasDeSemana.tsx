interface BotoesDiasDeSemanaInterface {
  onClick: (diaDaSemana: string) => void;
}

export default function BotoesDiasDeSemana(props: BotoesDiasDeSemanaInterface) {
  return (
    <span className="justify-center items-center isolate inline-flex rounded-md shadow-sm">
      <button
        type="button"
        onClick={() => props.onClick("segunda")}
        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-10 
    dark:text-gray-200 dark:hover:bg-gray-800 dark:bg-gray-600"
      >
        Seg
      </button>
      <button
        type="button"
        onClick={() => props.onClick("terca")}
        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-10text-gray-600
    dark:text-gray-200 dark:hover:bg-gray-800 dark:bg-gray-600"
      >
        Ter
      </button>
      <button
        type="button"
        onClick={() => props.onClick("quarta")}
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-10text-gray-600
    dark:text-gray-200 dark:hover:bg-gray-800 dark:bg-gray-600"
      >
        Quar
      </button>
      <button
        type="button"
        onClick={() => props.onClick("quinta")}
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-10text-gray-600
    dark:text-gray-200 dark:hover:bg-gray-800 dark:bg-gray-600"
      >
        Qui
      </button>
      <button
        type="button"
        onClick={() => props.onClick("sexta")}
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-10 
    dark:text-gray-200 dark:hover:bg-gray-800 dark:bg-gray-600"
      >
        Sex
      </button>
      <button
        type="button"
        onClick={() => props.onClick("sabado")}
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-10 
    dark:text-gray-200 dark:hover:bg-gray-800 dark:bg-gray-600"
      >
        Sáb
      </button>
      <button
        type="button"
        onClick={() => props.onClick("domingo")}
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-10
    dark:text-gray-200 dark:hover:bg-gray-800 dark:bg-gray-600"
      >
        Dom
      </button>
    </span>
  );
}
