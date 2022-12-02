type ErrorProps = {
  message: string;
  onReload: () => void;
};

function ErrorScreen({message, onReload}: ErrorProps): JSX.Element {

  return (
    <>
      <p className="error__text">{`Не удалось загрузить ${message}`}</p>
      <div>
        <button
          onClick={() => {onReload();}}
          className="replay replay--error"
          type="button"
        >
      Попробовать ещё раз
        </button>
      </div>
      <div>

      </div>
    </>
  );
}

export default ErrorScreen;
