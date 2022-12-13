import ShapeOne from "../../components/shapes/shape-one.component";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const defaultValues = {
  value: 0,
  from: "USD",
  to: "NGN",
};
const CurrencyConverter = () => {
  const [formData, setFormData] = useState(defaultValues),
    [items, setItems] = useState([]),
    [result, setResult] = useState(0),
    { value, from, to } = formData,
    handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    },
    swap = () => {
      setFormData({ ...formData, from: to, to: from });
    };
  const fetchData = async () => {
    const uri = "https://api.exchangerate.host/latest";
    const res = await fetch(uri);
    const data = await res.json();

    const arr = Object.entries(data.rates),
      arrMap = arr.map((a) => {
        return { name: a[0], rate: a[1] };
      });
    setItems(arrMap);
  };

  const getData = async () => {
    const uri = "https://api.exchangerate.host/latest?base=USD";
    const res = await fetch(uri);
    const data = await res.json(),
      arr = Object.entries(data.rates),
      arrMap = arr.map((a) => {
        return { name: a[0], rate: a[1] };
      });
    setItems(arrMap);
  };

  const selected =
    items.length > 0
      ? {
          from: items.filter((item) => item.name === from)[0],
          to: items.filter((item) => item.name === to)[0],
        }
      : null;

  const convert = () => {
    const fromValue = Number(value) * selected.to.rate,
      base = fromValue / selected.from.rate;
    return base.toFixed(2);
  };

  const options = items.map((item) => (
    <option value={item.name}>{item.name}</option>
  ));

  useEffect(() => {
    if (selected != null) {
      const res = convert();
      setResult(res);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, from, to, selected]);
  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      getData();
    }, 5000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (items.length === 0)
    return (
      <div id="app-body">
        <ShapeOne />
        <div
          style={{
            background: "rgba(0,0,0,0.47)",
            backdropFilter: "blur(4px)",
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <center>
            <div className="spinner-border text-primary" role="status"></div>
          </center>
        </div>
      </div>
    );
  return (
    <div id="app-body">
      <ShapeOne />
      <ul
        className="nav nav-tabs capsuled"
        role="tablist"
        style={{ zIndex: 2, marginTop: 27 }}
      >
        <li className="nav-item">
          <Link className="nav-link active" to="/currency/converter">
            Currency
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/currency/converter/crypto">
            Crypto-Currency
          </Link>
        </li>
      </ul>
      <div id="appCapsule" className="crypto-page">
        <div className="section mt-4">
          <div className="card main">
            <div className="card-body">
              <div className="form-group basic p-0">
                <div className="exchange-heading">
                  <label className="group-label" for="fromAmount">
                    From
                  </label>
                  <div className="exchange-wallet-info">
                    {value} : <strong> {from}</strong>
                  </div>
                </div>
                <div className="exchange-group">
                  <div className="input-col">
                    <input
                      type="number"
                      className="form-control form-control-lg pe-0 border-0"
                      id="fromAmount"
                      placeholder="0"
                      name="value"
                      value={value}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="select-col">
                    {items.length === 0 ? (
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      ></div>
                    ) : (
                      <select
                        className="form-select form-select-lg currency"
                        value={from}
                        onChange={handleChange}
                        name="from"
                      >
                        {options}
                      </select>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="exchange-line">
            <div className="exchange-icon" onClick={swap}>
              <ion-icon
                name="swap-vertical-outline"
                role="img"
                className="md hydrated"
                aria-label="swap vertical outline"
              ></ion-icon>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="card main">
            <div className="card-body">
              <div className="form-group basic p-0">
                <div className="exchange-heading">
                  <label className="group-label" for="toAmount">
                    To
                  </label>
                  <div className="exchange-wallet-info">
                    {result} : <strong> {to}</strong>
                  </div>
                </div>
                <div className="exchange-group">
                  <div className="input-col">
                    <input
                      type="number"
                      className="form-control form-control-lg pe-0 border-0"
                      id="toAmount"
                      placeholder="0"
                      value={result}
                      readOnly
                    />
                  </div>
                  <div className="select-col">
                    {items.length === 0 ? (
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      ></div>
                    ) : (
                      <select
                        className="form-select form-select-lg currency"
                        name="to"
                        onChange={handleChange}
                        value={to}
                      >
                        {options}
                      </select>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section mt-2">
          <div className="row fontsize-caption">
            <div className="col">
              <b>Result</b>
            </div>
            <div className="col">
              <b>{new Intl.NumberFormat().format(value)}</b>{" "}
              {selected.from.name}
            </div>
            <div className="col">
              <b>=</b>
            </div>
            <div className="col">
              <b>{new Intl.NumberFormat().format(result)} </b>
              {selected.to.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
