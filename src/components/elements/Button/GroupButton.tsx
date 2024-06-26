export default function ButtonGroup({ b1, b2 }: any) {
    return (
        <div
            className="btn-group d-flex w-25 mx-auto fs-6 justify-content-center mb-5"
            role="group"
            aria-label="Basic radio toggle button group"
        >
            <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                readOnly
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">
                {b1}
            </label>

            <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
                readOnly
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio2">
                {b2}
            </label>
        </div>
    );
}
